//@flow
import type {Person, PersonID, PersonsState} from '../persons/PersonTypes';
import type {FamilyData} from '../family/FamilyDataTypes';
import type {ResidenceData} from '../residence/ResidenceTypes';
import OpenFiscaAPIClient from '../shared/OpenFiscaAPIClient';
import {esInfantAcollit} from '../shared/selectorUtils';
import {detectaFamilies} from "../family/detectaFamilies";
import {serialize} from "../persons/PersonsReducer";
import * as uuid from "uuid";

export const FETCH_SIMULATION = 'fetch_simulation';

type SimulationData = {
  persons: PersonsState,
  residence: ResidenceData,
  family: FamilyData
};

const currentMonth = value => ({'2017-01': value});
const lastYear = value => ({'2016': value});
const isEmptyMap = (anObject: Object) => Object.keys(anObject).length === 0 && anObject.constructor === Object;

const seleccionaElsAltresMembresDeLaUnitatDeConvivenciaQueNoSiguinDeLaFamilia =
    (familyMembers: Array<PersonID>, persones: Array<Person>) => {
      const personesIDs = persones.map((persona: Person) => persona.id);
      return personesIDs.filter((personaID: PersonID) => familyMembers.indexOf(personaID) === -1)
    };
const buildOpenFiscaFamiliesFromCustodies = (custodies, simulationData) => {
  const detectedFamilies = detectaFamilies(custodies, simulationData.persons);
  return Object.keys(detectedFamilies).reduce((result, familiaID) => {
    const carnetMonoparental = typeof(simulationData.family.disposa_de_carnet_familia_monoparental) !== 'undefined' ?
        typeof(simulationData.family.disposa_de_carnet_familia_monoparental[familiaID]) !== 'undefined' ?
            simulationData.family.disposa_de_carnet_familia_monoparental[familiaID]
                ? 'general' : 'nop'
            : 'nop'
        : 'nop';
    result[familiaID] = {
      adults: detectedFamilies[familiaID].sustentadors,
      menors: detectedFamilies[familiaID].menors,
      altres_persones: seleccionaElsAltresMembresDeLaUnitatDeConvivenciaQueNoSiguinDeLaFamilia(
          [...detectedFamilies[familiaID].sustentadors, ...detectedFamilies[familiaID].menors],
          serialize(simulationData.persons)),
      es_usuari_serveis_socials: currentMonth(simulationData.family.usuari_serveis_socials[familiaID]),
      tipus_familia_monoparental: currentMonth(carnetMonoparental),
      tipus_custodia: currentMonth(detectedFamilies[familiaID].tipus_custodia)
    };
    return result;
  }, {});
};

const createAFamilyWithAllPersons = (simulationData) => {
  const id = uuid();
  let result = {};
  console.log("pasa");
  result[id] = {
    altres_persones: seleccionaElsAltresMembresDeLaUnitatDeConvivenciaQueNoSiguinDeLaFamilia([], serialize(simulationData.persons))
  };
  return result;
};

export const buildRequest = (simulationData: SimulationData) => {
  const personalData = simulationData.persons.reduce(
      (acc, person: Person) => {
        acc[person.id] = {
          anys_empadronat_a_barcelona: currentMonth(person.anys_empadronat_a_barcelona),
          beneficiari_de_prestacio_residencial: currentMonth(person.beneficiari_de_prestacio_residencial),
          edat: currentMonth(person.edat),
          en_acolliment: currentMonth(esInfantAcollit(person)),
          en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: currentMonth(
              person.en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina
          ),
          es_escolaritzat_entre_P3_i_4rt_ESO: currentMonth(person.es_escolaritzat_entre_P3_i_4rt_ESO),
          es_orfe_dels_dos_progenitors: currentMonth(person.es_orfe_dels_dos_progenitors),
          es_divorciada_de_familia_reagrupada: currentMonth(person.es_una_persona_divorciada && person.membre_de_familia_reagrupada),
          grau_discapacitat: currentMonth(person.grau_discapacitat),
          ha_esgotat_prestacio_de_desocupacio: currentMonth(!person.gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio),
          ha_treballat_a_l_estranger_6_mesos: currentMonth(person.ha_treballat_a_l_estranger_6_mesos),
          ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos: currentMonth(
              person.ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos
          ),
          ingressos_bruts: lastYear(person.ingressos_bruts),
          ingressos_per_pnc: lastYear(person.ingressos_per_pnc),
          inscrit_com_a_demandant_docupacio: currentMonth(person.inscrit_com_a_demandant_docupacio),
          inscrit_com_a_demandant_docupacio_mes_de_12_mesos: currentMonth(person.inscrit_com_a_demandant_docupacio_mes_de_12_mesos),
          municipi_empadronament: currentMonth(person.municipi_empadronament),
          percep_prestacions_incompatibles_amb_la_feina: currentMonth(person.percep_prestacions_incompatibles_amb_la_feina),
          porta_dos_anys_o_mes_empadronat_a_catalunya: currentMonth(person.porta_dos_anys_o_mes_empadronat_a_catalunya),
          sexe: currentMonth(person.sexe),
          situacio_laboral: currentMonth(person.situacio_laboral),
          tipus_document_identitat: currentMonth(person.tipus_document_identitat),
          victima_violencia_de_genere: currentMonth(person.victima_violencia_de_genere),
          victima_violencia_domestica: currentMonth(person.victima_violencia_domestica),
          AE_230_mensual: currentMonth(null),
          AE_230_01_mensual: currentMonth(null),
          EG_233_mensual: currentMonth(null),
          GE_051_00_mensual: currentMonth(null),
          GE_051_01_mensual: currentMonth(null),
          GE_051_02_mensual: currentMonth(null),
          GE_051_03_mensual: currentMonth(null),
          GG_270_mensual: currentMonth(null)
        };
        return acc;
      },
      {}
  );

  if (typeof simulationData.residence.titular_contracte_de_lloguer_id === 'string' && typeof personalData[simulationData.residence.titular_contracte_de_lloguer_id] === 'object') {
    personalData[simulationData.residence.titular_contracte_de_lloguer_id].titular_contracte_de_lloguer = currentMonth(true);
  }

  const families = isEmptyMap(simulationData.family.custodies)
      ? createAFamilyWithAllPersons(simulationData)
      : buildOpenFiscaFamiliesFromCustodies(simulationData.family.custodies, simulationData);

  return {
    families: families,
    persones: {...personalData}
  };
};

export function fetchSimulation(simulationData: SimulationData) {
  let requestBody = buildRequest(simulationData);
  console.log('Request: ', requestBody);
  let client = new OpenFiscaAPIClient();
  return {
    type: FETCH_SIMULATION,
    payload: client.makeSimulation(requestBody)
  };
}
