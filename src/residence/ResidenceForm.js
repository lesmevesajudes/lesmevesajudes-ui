//@flow
import {Grid, Hidden, MenuItem} from "@material-ui/core";
import {Map} from "immutable";
import React from "react";
import {Trans, withTranslation} from "react-i18next";
import {connect} from "react-redux";
import Sticky from "react-stickynode";
import {formValueSelector, reduxForm} from "redux-form";
import {AppForm, AppFormContainer, AppFormTitle} from '../components/AppForms';
import DescriptionText from "../components/Common/DescriptionText";
import {MoneyQuestion} from "../components/FormComponents/MoneyQuestion";
import MultipleAnswerQuestion from "../components/FormComponents/MultipleAnswerQuestion";
import {Question} from "../components/FormComponents/Question";
import {YesNoQuestion} from "../components/FormComponents/YesNoQuestion";
import type {Person, PersonID} from "../persons/PersonTypes";
import {required} from "../shared/formValidators";
import {focusFirstQuestionWithName, namefirstFieldWithError} from '../shared/reduxFormTools';
import {currentFocussedFieldSelector, esFill} from "../shared/selectorUtils";
import {renderTextField} from '../components/FormComponents/MaterialUIFields';
import {addResidenceData} from "./ResidenceActions";
import type {ResidenceData} from "./ResidenceTypes";

const seemsPostalCode = value =>
    value && (isNaN(Number(value)) || value.length !== 5)
        ? <Trans>Els codis postals han de tenir un màxim de 5 xifres</Trans>
        : undefined;

const onlyNumbers = value =>
    value.replace(/[^\d]/, "");

type Props = {
  addRent: Function,
  currentField: string,
  esLlogater: boolean,
  esPropietari: boolean,
  existeixDeutePagamentLloguer: boolean,
  existeixDeutePagamentHipoteca: boolean,
  existeixHipoteca: boolean,
  haEstatDesnonat: boolean,
  haRebutNotificacio: boolean,
  haSeleccionatAlgunaRelacioAmbLHabitatge: boolean,
  helpTopic: string,
  initialValues: ?ResidenceData,
  nombreDePersonesQueConviuen: number,
  noTeHabitatgeFix: boolean,
  personesQuePodenTenirContracte: Map<PersonID, Person>,
  properContracteDeLloguer: boolean,
  state: any,
  t: Function,
  teAlgunaPropietat: boolean,
  teHabitatgeHabitual: boolean,
  titularContracteLloguer: Person,
  titularContracteHipoteca: Person
};

const ResidenceForm = (props: Props) => {
  const {
    esLlogater,
    esPropietari,
    existeixDeutePagamentHipoteca,
    existeixDeutePagamentLloguer,
    existeixHipoteca,
    haEstatDesnonat,
    haRebutNotificacio,
    haSeleccionatAlgunaRelacioAmbLHabitatge,
    helpTopic,
    nombreDePersonesQueConviuen,
    noTeHabitatgeFix,
    properContracteDeLloguer,
    t,
    teAlgunaPropietat,
    teHabitatgeHabitual,
    titularContracteLloguer,
    titularContracteHipoteca
  } = props;

  const formName = 'ResidenceForm';
  const buildTranslationContext = (items: Array<string>) => ({context: items.join('_')});
  const sexDecider = (person: Person) => person.sexe === 'dona' ? 'feminine' : 'masculine';
  const numberOfPersonsDecider = (numberOfPersons: number) => numberOfPersons === 1 ? 'one' : 'multiple';
  const sexTranslationContext = (person: Person) => buildTranslationContext([sexDecider(person)]);
  const numberOfPersonsTranslationContext = (numberOfPersons: number) => buildTranslationContext([numberOfPersonsDecider(numberOfPersons)]);
  const i18nKey = (keyname: string, context: Object) => [keyname, context.context].join('_');
  const i18nKeyObject = (keyname: string, context: Object) => ({i18nKey: i18nKey(keyname, context)});
  return (
      <AppFormContainer>
        <AppFormTitle iconName='domicili'>
          <Trans i18nKey='informacio_domicili_habitual'>Afegeixi informació del seu domicili habitual</Trans>
        </AppFormTitle>
        <AppForm>
          <form name= {formName}>
            <Grid container direction='row' justify='space-around' alignItems='stretch' spacing={2}>
              <Grid item xs={11} md={6}>
                <Grid container direction='column' alignItems='stretch' spacing={1}>
                  <MultipleAnswerQuestion
                    formname={formName}
                    name='relacio_habitatge'
                    validate={[required]}
                    label='situacio_respecte_habitatge'
                  >
                    <MenuItem value='llogater'><Trans i18nKey='visc_de_lloguer'>Visc de lloguer</Trans></MenuItem>
                    <MenuItem value='propietari'>
                      <Trans i18nKey='habitatge_en_propietat'>
                        Visc en un habitatge de propietat sense hipoteca
                      </Trans>
                    </MenuItem>
                    <MenuItem value='propietari_hipoteca'>
                      <Trans i18nKey='propietari_hipoteca'>
                        Visc en un habitatge de propietat amb hipoteca
                      </Trans>
                    </MenuItem>
                    <MenuItem value='no_en_te'>
                      <Trans i18nKey='no_te_habitatge_fix'>
                        No tinc un habitatge fix
                      </Trans>
                    </MenuItem>
                    <MenuItem value='cessio'>
                      <Trans i18nKey='habitatge_en_cessio_dus'>
                        Visc en un habitatge en cessió d'ús
                      </Trans>
                    </MenuItem>
                    <MenuItem value='altres'><Trans i18nKey='altres'>Altres</Trans></MenuItem>
                  </MultipleAnswerQuestion>

                  {esLlogater &&
                  <YesNoQuestion
                    formname={formName}
                    name ='existeix_deute_en_el_pagament_del_lloguer'
                    validate={[required]}
                    label='existeix_deute_en_el_pagament_del_lloguer'
                  />}

                  {esLlogater && existeixDeutePagamentLloguer &&
                  <YesNoQuestion
                    formname={formName}
                    name ='ha_rebut_una_notificacio_de_desnonament'
                    validate={[required]}
                    label='ha_rebut_una_notificacio_de_desnonament'
                  />}

                  {esLlogater && existeixDeutePagamentLloguer && typeof haRebutNotificacio !== "undefined" &&
                  <MoneyQuestion
                    formname={formName}
                    name ='import_deute_en_el_pagament_del_lloguer'
                    validate={[required]}>
                    {haRebutNotificacio &&
                    <Trans i18nKey='import_deute_en_el_pagament_del_lloguer'>
                      Indiqui l'import del deute en el pagament del lloguer:
                    </Trans>}
                    {!haRebutNotificacio &&
                    <Trans i18nKey='import_deute_en_el_pagament_del_lloguer_12_mesos'>
                      Indiqui l'import del deute acumulat en el pagament del lloguer en els darrers 12 mesos:
                    </Trans>}
                  </MoneyQuestion>}

                  {esLlogater && existeixDeutePagamentLloguer &&
                    <YesNoQuestion
                      formname={formName}
                      name ='ates_pel_servei_de_mediacio_de_barcelona'
                      validate={[required]}
                      label='ates_pel_servei_de_mediacio_de_barcelona'
                    />}

                  {existeixHipoteca &&
                  <YesNoQuestion
                    formname={formName}
                    name ='existeix_deute_en_el_pagament_de_la_hipoteca'
                    validate={[required]}
                    label='existeix_deute_en_el_pagament_de_la_hipoteca'
                  />}

                  {existeixHipoteca && existeixDeutePagamentHipoteca &&
                  <MoneyQuestion
                    formname={formName}
                    name ='import_deute_en_el_pagament_hipoteca'
                    validate={[required]}
                    label='import_deute_en_el_pagament_hipoteca'
                  />}

                  {haSeleccionatAlgunaRelacioAmbLHabitatge && !esPropietari &&
                  <YesNoQuestion
                    formname={formName}
                    name ='ha_perdut_lhabitatge_en_els_ultims_2_anys'
                    validate={[required]}
                    label='ha_perdut_lhabitatge_en_els_ultims_2_anys'
                  />}

                  {noTeHabitatgeFix && haEstatDesnonat &&
                  <YesNoQuestion
                    formname={formName}
                    name ='proper_contracte_de_lloguer'
                    validate={[required]}
                    label='proper_contracte_de_lloguer'
                  />}

                  {(teHabitatgeHabitual || properContracteDeLloguer) &&
                  <Question
                    formname={formName}
                    name='codi_postal_habitatge'
                    component={renderTextField}
                    placeholder='08000'
                    normalize={onlyNumbers}
                    validate={[seemsPostalCode, required]}
                    label='codi_postal_habitatge'
                  />}

                  {(esLlogater || properContracteDeLloguer) &&
                  <MoneyQuestion
                    formname={formName}
                    name ='import_del_lloguer'
                    validate={[required]}
                    label='import_del_lloguer'
                  />}

                  {existeixHipoteca &&
                  <MoneyQuestion
                    formname={formName}
                    name ='import_de_la_hipoteca'
                    validate={[required]}
                    label='import_de_la_hipoteca'
                  />}

                  {(esLlogater || properContracteDeLloguer) &&
                  <MultipleAnswerQuestion
                    formname={formName}
                    name='titular_contracte_de_lloguer_id'
                    validate={[required]}
                    label='titular_contracte_de_lloguer'
                  >
                    {props.personesQuePodenTenirContracte.valueSeq().map((persona) => (
                        <MenuItem key={persona.id} value={persona.id}>{persona.nom} ({persona.edat} <Trans
                            i18nKey='anys'>anys</Trans>)</MenuItem>
                    ))}
                    <MenuItem key='no-conviu' value='no-conviu'>
                      <Trans i18nKey='no_conviu'>Una persona que no viu a l'habitatge</Trans>
                    </MenuItem>
                  </MultipleAnswerQuestion>}

                  {existeixHipoteca && existeixDeutePagamentHipoteca &&
                  <MultipleAnswerQuestion
                    formname={formName}
                    name='titular_hipoteca_id'
                    validate={[required]}
                    label='titular_hipoteca'
                  >

                    {props.personesQuePodenTenirContracte.valueSeq().map((persona) => (
                        <MenuItem key={persona.id} value={persona.id}>{persona.nom}</MenuItem>
                    ))}
                    <MenuItem key='no-conviu' value='no-conviu'>
                      <Trans i18nKey='no_conviu'>Una persona que no viu a l'habitatge</Trans>
                    </MenuItem>
                  </MultipleAnswerQuestion>}

                  {esLlogater
                  && typeof titularContracteLloguer !== "undefined"
                  && titularContracteLloguer !== "no-conviu" &&
                  <MultipleAnswerQuestion
                    formname={formName}
                    name='titular_contracte_lloguer_temps_empadronat'
                    validate={[required]}
                    label={t(i18nKey('titular_contracte_lloguer_temps_empadronat', sexTranslationContext(titularContracteLloguer)), {titularContracteLloguer})}
                  >
                    <MenuItem value='no_empadronat'>
                      <Trans {...i18nKeyObject('no_empadronat', sexTranslationContext(titularContracteLloguer))}>
                        No està empadronat/ada
                      </Trans>
                    </MenuItem>
                    <MenuItem value='menys_nou_mesos'><Trans i18nKey='menys_nou_mesos'>Menys de 9
                      mesos</Trans></MenuItem>
                    <MenuItem value='nou_mesos_o_mes'><Trans i18nKey='nou_mesos_o_mes'>9 mesos o més</Trans></MenuItem>
                  </MultipleAnswerQuestion>}

                  {existeixHipoteca
                  && existeixDeutePagamentHipoteca
                  && typeof titularContracteHipoteca !== "undefined"
                  && titularContracteHipoteca !== "no-conviu" &&
                  <MultipleAnswerQuestion
                    formname={formName}
                    name='titular_hipoteca_temps_empadronat'
                    label={t(i18nKey('titular_hipoteca_temps_empadronat', sexTranslationContext(titularContracteHipoteca)), {titularContracteHipoteca})}
                    validate={[required]}
                  >
                    <MenuItem value='no_empadronat'>
                      <Trans {...i18nKeyObject('no_empadronat', sexTranslationContext(titularContracteHipoteca))}>
                        No està empadronat/ada
                      </Trans>
                    </MenuItem>
                    <MenuItem value='menys_nou_mesos'>
                      <Trans i18nKey='menys_nou_mesos'>
                        Menys de 9 mesos
                      </Trans>
                    </MenuItem>
                    <MenuItem value='nou_mesos_o_mes'>
                      <Trans i18nKey='nou_mesos_o_mes'>
                        9 mesos o més
                      </Trans>
                    </MenuItem>
                  </MultipleAnswerQuestion>}

                  {esLlogater &&
                  <YesNoQuestion
                    formname={formName}
                    name ='ha_pagat_almenys_3_quotes_del_lloguer'
                    validate={[required]}
                    label='ha_pagat_almenys_3_quotes_del_lloguer'
                  />}

                  {esLlogater && existeixDeutePagamentLloguer &&
                  <YesNoQuestion
                    formname={formName}
                    name ='relacio_de_parentiu_amb_el_propietari'
                    validate={[required]}>
                    <Trans {...i18nKeyObject('relacio_de_parentiu_amb_el_propietari',
                        numberOfPersonsTranslationContext(nombreDePersonesQueConviuen))}>
                      Té relació de parentiu amb el propietari de l'habitatge
                    </Trans>
                  </YesNoQuestion>}

                  {existeixDeutePagamentHipoteca &&
                  <YesNoQuestion
                    formname={formName}
                    name ='ha_pagat_12_mesos_daquesta_hipoteca'
                    validate={[required]}
                    label='ha_pagat_12_mesos_daquesta_hipoteca'
                  />}

                  {(teHabitatgeHabitual || properContracteDeLloguer) &&
                  <YesNoQuestion
                    formname={formName}
                    name ='tinc_alguna_propietat_a_part_habitatge_habitual'
                    validate={[required]}
                    >
                    <Trans {...i18nKeyObject('tinc_alguna_propietat_a_part_habitatge_habitual',
                        numberOfPersonsTranslationContext(nombreDePersonesQueConviuen))}>
                      Té alguna propietat a part de l'habitatge habitual?
                    </Trans>
                  </YesNoQuestion>}

                  {teAlgunaPropietat &&
                  <YesNoQuestion
                    formname={formName}
                    name ='tinc_alguna_propietat_a_part_habitatge_habitual_i_disposo_dusdefruit'
                    validate={[required]}>
                    <Trans
                        {...i18nKeyObject('tinc_alguna_propietat_a_part_habitatge_habitual_i_disposo_dusdefruit',
                            numberOfPersonsTranslationContext(nombreDePersonesQueConviuen))}
                    >
                      Disposeu de l’usdefruit d’aquesta propietat?
                    </Trans>

                  </YesNoQuestion>}

                  {((esLlogater && existeixDeutePagamentLloguer) || properContracteDeLloguer) &&
                  <YesNoQuestion
                    formname={formName}
                    name ='es_ocupant_dun_habitatge_gestionat_per_lagencia_de_lhabitatge'
                    validate={[required]}
                    label='es_ocupant_dun_habitatge_gestionat_per_lagencia_de_lhabitatge'
                  />}

                  {esLlogater && existeixDeutePagamentLloguer &&
                  <YesNoQuestion
                    formname={formName}
                    name ='ha_rebut_oferta_per_accedir_a_habitatge_i_lha_rebutjada'
                    validate={[required]}>
                    <Trans {...i18nKeyObject('ha_rebut_oferta_per_accedir_a_habitatge_i_lha_rebutjada',
                        numberOfPersonsTranslationContext(nombreDePersonesQueConviuen))}>
                      Ha rebut mai una oferta per accedir a un habitatge de parc públic de lloguer i no l’ha acceptat?
                    </Trans>
                  </YesNoQuestion>}

                </Grid>
              </Grid>
              <Grid item xs={5}>
                <Sticky enabled top={10} bottomBoundary='#stop'>
                  <Hidden smDown>
                    <DescriptionText currentField={helpTopic}/>
                  </Hidden>
                </Sticky>
              </Grid>
            </Grid>
          </form>
        </AppForm>
      </AppFormContainer>
  );
};

const selector = formValueSelector("ResidenceForm");

function mapStateToProps(state) {
  const esLlogater = selector(state, "relacio_habitatge") === "llogater";
  const esPropietari = (selector(state, "relacio_habitatge") === "propietari"
      || selector(state, "relacio_habitatge") === "propietari_hipoteca");
  const existeixHipoteca = selector(state, "relacio_habitatge") === "propietari_hipoteca";
  const esCessio = selector(state, "relacio_habitatge") === "cessio";
  const haRebutNotificacio = selector(state, "ha_rebut_una_notificacio_de_desnonament");
  const haSeleccionatAlgunaRelacioAmbLHabitatge = selector(state, "relacio_habitatge") != null;
  const noTeHabitatgeFix = selector(state, "relacio_habitatge") === "no_en_te";
  const properContracteDeLloguer = selector(state, "proper_contracte_de_lloguer");
  const titularContracteLloguer = state.persons.get(selector(state, "titular_contracte_de_lloguer_id"));
  const titularContracteHipoteca = state.persons.get(selector(state, "titular_hipoteca_id"));
  const helpTopic = state.helpSystem.currentHelpTopic;

  return {
    currentField: currentFocussedFieldSelector("ResidenceForm")(state),
    esLlogater: esLlogater,
    esPropietari: esPropietari,
    existeixDeutePagamentLloguer: selector(state, "existeix_deute_en_el_pagament_del_lloguer"),
    existeixDeutePagamentHipoteca: selector(state, "existeix_deute_en_el_pagament_de_la_hipoteca"),
    existeixHipoteca: existeixHipoteca,
    haEstatDesnonat: selector(state, "ha_perdut_lhabitatge_en_els_ultims_2_anys"),
    haRebutNotificacio: haRebutNotificacio,
    haSeleccionatAlgunaRelacioAmbLHabitatge: haSeleccionatAlgunaRelacioAmbLHabitatge,
    helpTopic,
    initialValues: state.residence,
    nombreDePersonesQueConviuen: state.persons.count(),
    noTeHabitatgeFix: noTeHabitatgeFix,
    personesQuePodenTenirContracte: state.persons.filter((persona) => !esFill(persona)),
    properContracteDeLloguer: properContracteDeLloguer,
    teAlgunaPropietat: selector(state, "tinc_alguna_propietat_a_part_habitatge_habitual"),
    teHabitatgeHabitual: esLlogater || esPropietari || esCessio,
    titularContracteLloguer: titularContracteLloguer,
    titularContracteHipoteca: titularContracteHipoteca
  };
}

export default withTranslation("translations")(connect(mapStateToProps)(reduxForm(
    {
//      form: "ResidenceForm",
      onChange: (values, dispatch) => {
        dispatch(addResidenceData(values));
      },
      onSubmitFail: (error) => {
        focusFirstQuestionWithName(namefirstFieldWithError(error));
      },
    })(ResidenceForm)));

// export component form (not connected to the store) for printing
export const PrintResidenceForm = withTranslation("translations")(reduxForm()(ResidenceForm));
