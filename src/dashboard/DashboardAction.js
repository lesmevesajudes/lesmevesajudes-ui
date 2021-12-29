import axios from 'axios/index';
import {DASHBOARD_COUNT_EDITED, DASHBOARD_URL, SIMULATION_STORE_AUTH_TOKEN, SIMULATION_STORE_URL} from '../config';
import {
  RESET_DASHBOARD_SIMULATIONS,
  SHOW_DASHBOARD_AIDS,
  SHOW_DASHBOARD_CHARTS,
  SHOW_DASHBOARD_EDITED_COUNT,
  SHOW_DASHBOARD_SIMULATIONS,
} from './DashboardReducer';
import {FilterType} from './DashboardTypes';
import {
  any,
  complement,
  compose,
  concat,
  countBy,
  equals,
  filter,
  flatten,
  forEach,
  has,
  head,
  identity,
  isNil,
  keys,
  length,
  map,
  merge,
  not,
  path,
  pick,
  pickAll,
  pickBy,
  pluck,
  prop,
  reduce,
  values,
} from 'ramda';
import {format} from 'date-fns';
import {getBenefitIds, getBenefits} from "../shared/benefits";
import i18n from '../i18n';
import {endOfMonthISOEncoded, parseISOEncoded, startOfMonthISOEncoded} from '../shared/dateUtils';

export const RETRIEVE_DASHBOARD_ERROR = 'RETRIEVE_DASHBOARD_ERROR';
export const TIMED_OUT_DASHBOARD = 'TIMED_OUT_DASHBOARD';

const esMenor = persona => prop('edat')(persona) < 18; //TODO is this the condition for an adult person?
const noEsMenor = persona => prop('edat')(persona) > 18;

const compareAge = age => {
  if (age < 18) {
    return 'menors'
  } else if (age > 65) {
    return 'jubilats'
  } else {
    return 'adults'
  }
}
const countPersons = compose(length, values, path(['simulation', 'persons']))
const isOriginal = result => isNil(prop('id_parent', result));
const isRecalculated = result => not(isOriginal(result))
const getMonthNumber = result => format(result, 'yy/MM')

const collectAidData = (results: List, filteredBy: FilterType) => {
  const ajudesPersones = compose(
    countBy(forEach(v => v)),
    filter(v => not(isNil(v))),
    flatten,
    map(prop('ajudes')),
    flatten,
    map(prop('persones')))(results)

  const ajudesHabitatge = compose(
    countBy(forEach(v => v)),
    filter(v => v != null),
    flatten,
    map(path(['habitatge', 'ajudes'])))(results)
  return merge(ajudesPersones, ajudesHabitatge)
}

const collectSexData = (results: List, filter: FilterType) => compose(
  countBy(identity),
  flatten,
  map(pluck('sexe')),
  map(r => values(r.persones))
)(results)


const yesNoCount = (attributeName, data) => compose(
  countBy(i => i ? 'yes' : 'no'),
  flatten,
  map(pluck(attributeName)),
  map(r => values(r.persones)))(data)

//solo hay que tener en cuenta las personas menores
const collectSchoolData = (results: List, resultFilter: FilterType) => compose(
  countBy(i => i ? 'yes' : 'no'),
  flatten,
  map(pluck('escolaritzacio')),
  filter(esMenor),
  flatten,
  map(r => values(r.persones)))(results)

const collectViolenceData = (results: List, resultFilter: FilterType) => yesNoCount('violencia', results)
const collectDisabledData = (results: List, resultFilter: FilterType) => yesNoCount('discapacitat', results)

const collectLaboralData = (results: List, resultFilter: FilterType) => compose(
  countBy(identity),
  pluck('situacio_laboral'),
  filter(prop('situacio_laboral')),
  filter(noEsMenor),
  flatten,
  map(r => values(r.persones)),
)(results)

const collectAgeData = (results: List, resultFilter: FilterType) => compose(
  countBy(compareAge),
  pluck('edat'),
  flatten,
  map(r => values(r.persones)))(results)

const collectHousingData = (results: List, resultFilter: FilterType) => compose(
  countBy(forEach(v => v)),
  map(prop('relacio_habitatge')),
  filter(has('relacio_habitatge')),
  map(prop('habitatge')),
  filter(has('habitatge')))(results)

const collectPositiveNegativeData = (results: List, resultFilter: FilterType) => compose(
  countBy(prop('globalStatus')),
)(results)

const collectByPersons = (result: List) => compose(
    countBy(countPersons),
  )(result)

const collectSimulationsByMonth = (results: List) => compose(
  countBy(getMonthNumber),
  pluck('created_at'),
  filter(isOriginal),
  filter(has('created_at')),
)(results)

const collectRecalculatedSimulationsByMonth = (results: List) => compose(
  countBy(getMonthNumber),
  pluck('created_at'),
  filter(isRecalculated),
  filter(has('created_at')),
)(results)


const transformAid = ({ID, name, from, to, type, ...rest}) => ({
  codi: ID,
  descripcio: name,
  data_inici: from,
  data_fi: to,
  tipus: i18n.t(type),
  ambit: null,
  active: isNil(to) || to > new Date(),
  ...rest,
});

export const retrieveAids = () => dispatch => {
  const aids = getBenefits();
  return dispatch({
    type: SHOW_DASHBOARD_AIDS,
    aids: map(transformAid, aids),
  });
}

const computeHasAids = (type, results) => {
  const ids = getBenefitIds(type);
  const recipients = prop(type === 'personal' ? 'persones' : 'unitats_de_convivencia', results);
  return compose(
    any(complement(equals(0))),
    map(compose(head, values)),
    reduce(concat, []),
    map(values),
    values,
    map(pick(ids)),
  )(recipients);
}

const computeGlobalStatus = (result) => {
  const hasBenefits = not(isNil(result)) && (computeHasAids('personal', result) || computeHasAids('housing', result));
  return hasBenefits ? 'Positiu' : 'Negatiu';
}

// ---- begin parser.js

const getDateMark = compose(
  head,
  keys,
  prop('edat'),
  head,
  values,
  prop('persones'),
);

const getResumPersones = (result, dateMark, ajudesCodes) => {
  return compose(map(p => getResumPersona(p,dateMark, ajudesCodes)),
    values, prop('persones'))(result)
}

const getResumPersona = (persona, dateMark, ajudesCodes) => {
  const resumPersona = {};
  persona = pluck(dateMark, persona)
  const ajudes = compose(keys,
    pickBy(value => value > 0),
    pickAll(ajudesCodes))(persona);
  resumPersona.ajudes = ajudes;
  resumPersona.sexe = persona.sexe;
  resumPersona.edat = parseInt(persona.edat);
  resumPersona.discapacitat = persona.grau_discapacitat ? true : false;
  resumPersona.violencia = persona.victima_violencia_de_genere || persona.victima_violencia_domestica ? true : false;
  resumPersona.escolaritzacio = persona.es_escolaritzat_entre_P3_i_4rt_ESO ? true : false;
  resumPersona.situacio_laboral = persona.situacio_laboral;
  return resumPersona;
}

const getResumHabitatge = (result, simulation, dateMark, ajudesCodes) => {
  const resumHabitatge = {};
  const ajudes = compose(
    keys,
    pickBy(value => value > 0),
    pluck(dateMark),
    pickAll(ajudesCodes),
    head,
    values)(result.unitats_de_convivencia);
  resumHabitatge.ajudes = ajudes;
  if (simulation.residence) {
    resumHabitatge.relacio_habitatge = simulation.residence.relacio_habitatge;
  }
  return resumHabitatge;
}

// ---- end parser.js

const parseResults = ({ created_at, id, id_parent, simulation: stringSimulation, result: stringResult }) => {
  const result = equals('null', stringResult) ? {} : JSON.parse(stringResult);
  const simulation = equals('null', stringSimulation) ? {} : JSON.parse(stringSimulation);
  const data = getDateMark(result);
  const persones = getResumPersones(result, data, getBenefitIds('personal'));
  const habitatge = getResumHabitatge(result, simulation, data, getBenefitIds('housing'));
  return ({
    created_at: parseISOEncoded(created_at),
    id,
    id_parent: equals('null', id_parent) ? null : id_parent,
    simulation,
    result,
    globalStatus: computeGlobalStatus(result),
    data,
    persones,
    habitatge,
  });
}

export const retrieveResults = (fromDate: Date, untilDate: Date) => async dispatch => {
  dispatch({
    type: RESET_DASHBOARD_SIMULATIONS,
  });
  axios.get(SIMULATION_STORE_URL + '/?from_date=' + startOfMonthISOEncoded(fromDate) + '&until_date=' + endOfMonthISOEncoded(untilDate), {headers: {'Authentication-Token': SIMULATION_STORE_AUTH_TOKEN}}).then(response => {
    if (response.status === 210) {
      return dispatch({
        type: RETRIEVE_DASHBOARD_ERROR,
        payload: TIMED_OUT_DASHBOARD,
      });
    }
    const results = map(parseResults, response.data);
    const positiveNegativeData = collectPositiveNegativeData(results);
    const totalSimulationsByMonthData = collectSimulationsByMonth(results);
    const recalculatedSimulationsByMonthData = collectRecalculatedSimulationsByMonth(results);
    const simulationsByPersonsData = collectByPersons(results);

    dispatch({
      type: SHOW_DASHBOARD_SIMULATIONS,
      results: results.dashboards,
      positiveNegativeData: positiveNegativeData,
      totalSimulationsByMonthData: totalSimulationsByMonthData,
      recalculatedSimulationsByMonthData: recalculatedSimulationsByMonthData,
      simulationsByPersonsData: simulationsByPersonsData
    });

    const collectedSexData = collectSexData(results);
    const collectedSchoolData = collectSchoolData(results);
    const collectedViolenceData = collectViolenceData(results);
    const collectedDisabledData = collectDisabledData(results);
    const collectedAidData = collectAidData(results);
    const collectedLaboralData = collectLaboralData(results);
    const collectedAgeData = collectAgeData(results);
    const collectedHousingData = collectHousingData(results);

    dispatch({
      type: SHOW_DASHBOARD_CHARTS,
      sexData: collectedSexData,
      schoolData: collectedSchoolData,
      violenceData: collectedViolenceData,
      disabledData: collectedDisabledData,
      aidData: collectedAidData,
      laboralData: collectedLaboralData,
      ageData: collectedAgeData,
      housingData: collectedHousingData,
    });

  }).catch(error => {
    console.log('error retrieve results', error);
    // console.log(JSON.stringify(error, null, 2));
    //dispatch({
    //  type: RETRIEVE_SIMULATION_ERROR,
    //  payload: RETRIEVE_SIMULATION_ERROR,
    //});
  });
}

export const retrieveDashboardProfilesData = () => async dispatch => {
  axios.get(DASHBOARD_URL, {headers: {'Authentication-Token': SIMULATION_STORE_AUTH_TOKEN}}).then(response => {
    if (response.status === 210) {
      return dispatch({
        type: RETRIEVE_DASHBOARD_ERROR,
        payload: TIMED_OUT_DASHBOARD,
      });
    }


    var collectedSexData = collectSexData(response.data.dashboards);
    var collectedSchoolData = collectSchoolData(response.data.dashboards);
    var collectedViolenceData = collectViolenceData(response.data.dashboards);
    var collectedDisabledData = collectDisabledData(response.data.dashboards);
    var collectedAidData = collectAidData(response.data.dashboards);
    var collectedLaboralData = collectLaboralData(response.data.dashboards);
    var collectedAgeData = collectAgeData(response.data.dashboards);
    var collectedHousingData = collectHousingData(response.data.dashboards);

    return dispatch({
      type: SHOW_DASHBOARD_CHARTS,
      results: response.data.dashboards,
      sexData: collectedSexData,
      schoolData: collectedSchoolData,
      violenceData: collectedViolenceData,
      disabledData: collectedDisabledData,
      aidData: collectedAidData,
      laboralData: collectedLaboralData,
      ageData: collectedAgeData,
      housingData: collectedHousingData,
    });

  }).catch(error => {
    console.log(JSON.stringify(error, null, 2));
    //dispatch({
    //  type: RETRIEVE_SIMULATION_ERROR,
    //  payload: RETRIEVE_SIMULATION_ERROR,
    //});
  });
}

export const countEdited = () => async dispatch => {
  axios.get(DASHBOARD_COUNT_EDITED, {headers: {'Authentication-Token': SIMULATION_STORE_AUTH_TOKEN}})
    .then(response => {
      if (response.status === 210) {
        return dispatch({
          type: RETRIEVE_DASHBOARD_ERROR,
          payload: TIMED_OUT_DASHBOARD
        });
      }
      return dispatch({
        type: SHOW_DASHBOARD_EDITED_COUNT,
        editedCount: response.data.count
      })
    }).catch(error => {
    console.log(JSON.stringify(error, null, 2));
    //dispatch({
    //  type: RETRIEVE_SIMULATION_ERROR,
    //  payload: RETRIEVE_SIMULATION_ERROR,
    //});
  });
}
