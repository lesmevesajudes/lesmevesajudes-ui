//@flow
import React from 'react';
import {connect} from 'react-redux';
import {addResidenceData} from './ResidenceActions';
import type {ResidenceData} from './ResidenceTypes';
import type {Person, PersonID} from '../persons/PersonTypes';
import {Map} from 'immutable';
import {formValueSelector, reduxForm} from 'redux-form';
import {Grid, MenuItem} from '@material-ui/core';
import {Trans} from 'react-i18next';
import DescriptionText from '../components/Common/DescriptionText';
import {currentFocussedFieldSelector, esFill} from '../shared/selectorUtils';
import MultipleAnswerQuestion from '../persons/components/MultipleAnswerQuestion';
import {Question} from '../persons/components/Question';
import {YesNoQuestion} from '../persons/components/YesNoQuestion';
import {TextField} from 'redux-form-material-ui';
import {MoneyQuestion} from '../persons/components/MoneyQuestion';
import Typography from '@material-ui/core/Typography';
import Sticky from 'react-stickynode';
import {IconFont} from '../components/IconFont/IconFont';

const seemsPostalCode = value =>
    value && (isNaN(Number(value)) || value.length !== 5)
        ? <Trans>Els codis postals han de tenir un màxim de 5 xifres</Trans>
        : undefined;

const onlyNumbers = value =>
    value.replace(/[^\d]/, '');

type Props = {
  addRent: Function,
  currentField: string,
  esLlogater: boolean,
  esPropietari: boolean,
  existeixDeutePagamentLloguer: boolean,
  existeixDeutePagamentHipoteca: boolean,
  existeixHipoteca: boolean,
  haEstatDesnonat: boolean,
  haParticipatEnUnProcesDeMediacio: boolean,
  haSeleccionatAlgunaRelacioAmbLHabitatge: boolean,
  initialValues: ?ResidenceData,
  personesQuePodenTenirContracte: Map<PersonID, Person>,
  state: any,
  teAlgunaPropietat: boolean,
  teHabitatgeHabitual: boolean,
  titularContracteLloguer: Person,
  titularContracteHipoteca: Person
};

const ResidenceForm = (props: Props) => {
  const {
    currentField,
    esLlogater,
    esPropietari,
    existeixDeutePagamentHipoteca,
    existeixDeutePagamentLloguer,
    existeixHipoteca,
    haSeleccionatAlgunaRelacioAmbLHabitatge,
    teAlgunaPropietat,
    teHabitatgeHabitual,
    titularContracteLloguer,
    titularContracteHipoteca
  } = props;
  return (
      <Grid container className='bg-container'>
        <Grid item xs={12} sm={12} className="titleContainer">
          <Typography variant='headline' className="titlePage">
            <IconFont icon="domicili" sizeSphere={48} fontSize={32} />
            <span className="titleText"><Trans>Afegeixi informació del seu domicili habitual</Trans></span>
          </Typography>
        </Grid>
        <Grid item xs={12} className='bg-form-exterior bg-form'>
          <form name='ResidenceForm'>
            <Grid container direction='row' justify='space-around' alignItems='stretch' spacing={16}>
              <Grid item sm={6}>
                <Grid container direction='column' alignItems='stretch' spacing={16}>
                  <MultipleAnswerQuestion name='relacio_habitatge'
                                          label={<Trans>Quina és la seva situació respecte a l’habitatge</Trans>}>
                    <MenuItem value='llogater' data-test='llogater'><Trans>Visc de lloguer</Trans></MenuItem>
                    <MenuItem value='propietari'><Trans>Visc en un habitatge de propietat sense
                      hipoteca</Trans></MenuItem>
                    <MenuItem value='propietari_hipoteca'><Trans>Visc en un habitatge de propietat amb
                      hipoteca</Trans></MenuItem>
                    <MenuItem value='no_en_te'><Trans>No tinc un habitatge fixe</Trans></MenuItem>
                    <MenuItem value='cessio'><Trans>Cessió d'ús</Trans></MenuItem>
                    <MenuItem value='altres'><Trans>Altres</Trans></MenuItem>
                  </MultipleAnswerQuestion>
                  {teHabitatgeHabitual &&
                  <Question required name='codi_postal_habitatge' placeholder='08000' normalize={onlyNumbers}
                            component={TextField} validate={seemsPostalCode}>
                    <Trans>Codi postal on es troba l'habitatge</Trans>
                  </Question>}

                  {esLlogater &&
                  <MultipleAnswerQuestion name='titular_contracte_de_lloguer_id'
                                          label={<Trans>Persona titular del contracte de lloguer</Trans>}>
                    {props.personesQuePodenTenirContracte.valueSeq().map((persona) => (
                        <MenuItem key={persona.id} value={persona.id}>{persona.nom}</MenuItem>
                    ))}
                    <MenuItem key='no-conviu' value='no-conviu'>
                      <Trans>Una persona que no viu a l'habitatge</Trans>
                    </MenuItem>
                  </MultipleAnswerQuestion>}

                  {existeixHipoteca &&
                  <MultipleAnswerQuestion name='titular_hipoteca_id'
                                          label={<Trans>Persona titular de la hipoteca:</Trans>}>
                    {props.personesQuePodenTenirContracte.valueSeq().map((persona) => (
                        <MenuItem key={persona.id} value={persona.id}>{persona.nom}</MenuItem>
                    ))}
                    <MenuItem key='no-conviu' value='no-conviu'>
                      <Trans>Una persona que no viu a l'habitatge</Trans>
                    </MenuItem>
                  </MultipleAnswerQuestion>}

                  {esLlogater && typeof titularContracteLloguer !== 'undefined' && titularContracteLloguer !== 'no-conviu' &&
                  <MultipleAnswerQuestion name='titular_contracte_lloguer_temps_empadronat'
                                          label={<Trans>Quant temps fa que {titularContracteLloguer.nom} està empadronat
                                            en aquest habitatge?</Trans>}>
                    <MenuItem value='no_empadronat'><Trans>No està empadronat</Trans></MenuItem>
                    <MenuItem value='menys_nou_mesos'><Trans>Menys de 9 mesos</Trans></MenuItem>
                    <MenuItem value='nou_mesos_o_mes' data-test='llogater'><Trans>9 mesos o més</Trans></MenuItem>
                  </MultipleAnswerQuestion>}

                  {existeixHipoteca && typeof titularContracteHipoteca !== 'undefined' && titularContracteHipoteca !== 'no-conviu' &&
                  <MultipleAnswerQuestion name='titular_hipoteca_temps_empadronat'
                                          label={<Trans>Quant temps fa que {titularContracteHipoteca.nom} està
                                            empadronat
                                            en aquest habitatge?</Trans>}>
                    <MenuItem value='no_empadronat'><Trans>No està empadronat</Trans></MenuItem>
                    <MenuItem value='menys_nou_mesos'><Trans>Menys de 9 mesos</Trans></MenuItem>
                    <MenuItem value='nou_mesos_o_mes' data-test='llogater'><Trans>9 mesos o més</Trans></MenuItem>
                  </MultipleAnswerQuestion>}

                  {esLlogater &&
                  <MoneyQuestion name='import_del_lloguer'>
                    <Trans>Quina és la quota mensual d’aquest lloguer?</Trans>
                  </MoneyQuestion>}

                  {existeixHipoteca &&
                  <MoneyQuestion name='import_de_la_hipoteca'>
                    <Trans>Quina és la quota mensual de la seva hipoteca?</Trans>
                  </MoneyQuestion>}

                  {esLlogater &&
                  <YesNoQuestion name='existeix_deute_en_el_pagament_del_lloguer'>
                    <Trans>Existeix un deute en el pagament del lloguer</Trans>
                  </YesNoQuestion>}

                  {existeixDeutePagamentLloguer &&
                  <YesNoQuestion name='ha_pagat_almenys_3_quotes_del_lloguer'>
                    <Trans>Ha pagat almenys 3 quotes de lloguer?</Trans>
                  </YesNoQuestion>}

                  {existeixDeutePagamentLloguer &&
                  <MultipleAnswerQuestion name='des_de_quan_teniu_deutes_de_lloguer'
                                          label={<Trans>Des de quan teniu deutes de pagament de lloguer?</Trans>}>
                    <MenuItem value='mes_dun_any'><Trans>Més d'un any</Trans></MenuItem>
                    <MenuItem value='menys_dun_any'><Trans>Menys d'un any</Trans></MenuItem>
                  </MultipleAnswerQuestion>}

                  {esLlogater &&
                  <YesNoQuestion name='relacio_de_parentiu_amb_el_propietari'>
                    <Trans>Algun membre de la família té relació de parentiu amb el propietari de l'habitatge</Trans>
                  </YesNoQuestion>}

                  {existeixHipoteca &&
                  <YesNoQuestion name='existeix_deute_en_el_pagament_de_la_hipoteca'>
                    <Trans>Existeix un deute en el pagament de la hipoteca</Trans>
                  </YesNoQuestion>}

                  {existeixDeutePagamentHipoteca &&
                  <YesNoQuestion name='ha_pagat_12_mesos_daquesta_hipoteca'>
                    <Trans>Ha pagat com a mínim 12 quotes d’aquesta hipoteca?</Trans>
                  </YesNoQuestion>}

                  {existeixDeutePagamentHipoteca &&
                  <YesNoQuestion name='fa_mes_de_12_mesos_que_existeix_el_deute_de_hipoteca'>
                    <Trans>Fa més de 12 mesos que no paga les quotes de la hipoteca?</Trans>
                  </YesNoQuestion>}

                  {teHabitatgeHabitual &&
                  <YesNoQuestion name='tinc_alguna_propietat_a_part_habitatge_habitual'>
                    <Trans>Alguna persona que conviu amb vostè té alguna propietat a part de l'habitatge
                      habitual</Trans>
                  </YesNoQuestion>}

                  {teAlgunaPropietat &&
                  <YesNoQuestion name='tinc_alguna_propietat_a_part_habitatge_habitual_i_disposo_dusdefruit'>
                    <Trans>Disposa de l’usdefruit d’aquesta propietat?</Trans>
                  </YesNoQuestion>}

                  {haSeleccionatAlgunaRelacioAmbLHabitatge && !esPropietari &&
                  <YesNoQuestion name='ha_perdut_lhabitatge_en_els_ultims_2_anys'>
                    <Trans>Ha perdut el seu habitatge habitual degut a una execució hipotecària o desnonament en els
                      ultims 2 anys?</Trans>
                  </YesNoQuestion>}

                  {esLlogater &&
                  <YesNoQuestion name='es_ocupant_dun_habitatge_gestionat_per_lagencia_de_lhabitatge'>
                    <Trans>És ocupant d’un habitatge gestionat per l’Agència de l’Habitatge de Catalunya o de l’Institut
                      Municipal d’Habitatge? </Trans>
                  </YesNoQuestion>}

                  {esLlogater &&
                  <YesNoQuestion name='ha_rebut_oferta_per_accedir_a_habitatge_i_lha_rebutjada'>
                    <Trans>Ha rebut mai una oferta per accedir a un habitatge de parc públic de lloguer i no l’ha
                      acceptat?</Trans>
                  </YesNoQuestion>}

                  {esLlogater &&
                  <YesNoQuestion name='ha_participat_en_un_proces_de_mediacio'>
                    <Trans>Ha participat en un procés de mediació del servei de mediació de laXarxa d’Oficines
                      d’Habitatge
                      de Barcelona</Trans>
                  </YesNoQuestion>}

                </Grid>
              </Grid>
              <Grid item sm={5}>
                <Sticky enabled={true} top={10} bottomBoundary='#stop'>
                  <DescriptionText currentField={currentField}/>
                </Sticky>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>

  );
};

const selector = formValueSelector('ResidenceForm');

function mapStateToProps(state) {
  const esLlogater = selector(state, 'relacio_habitatge') === 'llogater';
  const esPropietari = (selector(state, 'relacio_habitatge') === 'propietari'
      || selector(state, 'relacio_habitatge') === 'propietari_hipoteca');
  const existeixHipoteca = selector(state, 'relacio_habitatge') === 'propietari_hipoteca';
  const esCessio = selector(state, 'relacio_habitatge') === 'cessio';
  const haSeleccionatAlgunaRelacioAmbLHabitatge = selector(state, 'relacio_habitatge') != null;
  const titularContracteLloguer = state.persons.get(selector(state, 'titular_contracte_de_lloguer_id'));
  const titularContracteHipoteca = state.persons.get(selector(state, 'titular_hipoteca_id'));

  return {
    currentField: currentFocussedFieldSelector('ResidenceForm')(state),
    esLlogater: esLlogater,
    esPropietari: esPropietari,
    existeixDeutePagamentLloguer: selector(state, 'existeix_deute_en_el_pagament_del_lloguer'),
    existeixDeutePagamentHipoteca: selector(state, 'existeix_deute_en_el_pagament_de_la_hipoteca'),
    existeixHipoteca: existeixHipoteca,
    haEstatDesnonat: selector(state, 'ha_perdut_lhabitatge_en_els_ultims_2_anys'),
    haParticipatEnUnProcesDeMediacio: selector(state, 'ha_participat_en_un_proces_de_mediacio'),
    haSeleccionatAlgunaRelacioAmbLHabitatge: haSeleccionatAlgunaRelacioAmbLHabitatge,
    initialValues: state.residence,
    personesQuePodenTenirContracte: state.persons.filter((persona) => !esFill(persona)),
    teAlgunaPropietat: selector(state, 'tinc_alguna_propietat_a_part_habitatge_habitual'),
    teHabitatgeHabitual: esLlogater || esPropietari || esCessio,
    titularContracteLloguer: titularContracteLloguer,
    titularContracteHipoteca: titularContracteHipoteca
  };
}

export default connect(mapStateToProps)(reduxForm(
    {
      form: 'ResidenceForm',
      onChange: (values, dispatch) => {
        dispatch(addResidenceData(values));
      }
    })(ResidenceForm));
