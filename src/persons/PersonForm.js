//@flow
import {Button, Grid, Hidden, MenuItem, Typography} from "@material-ui/core";
import React, {Fragment} from "react";
import {Trans} from "react-i18next";
import {connect} from "react-redux";
import Sticky from "react-stickynode";
import {Field, formValueSelector, reduxForm} from "redux-form";
import {TextField} from "redux-form-material-ui";
import {AppForm, AppFormContainer, AppFormTitle} from '../components/AppForms';
import DescriptionText from "../components/Common/DescriptionText";
import {
  anysEmpadronatInferiorAEdat,
  empadronamentABarcelonaInferiorAEmpadronamentACatalunya,
  menorDe120,
  pncInclosAIngressosBruts,
  required
} from "../shared/formValidators";
import {focusFirstQuestionWithName, namefirstFieldWithError} from '../shared/reduxFormTools';
import FormSubTitle from "./components/FormSubTitle";
import {MoneyQuestion} from "./components/MoneyQuestion";
import MultipleAnswerQuestion from "./components/MultipleAnswerQuestion";
import {MunicipiEmpadronament} from "./components/MunicipiEmpadronament";
import {PercentageQuestion} from "./components/PercentageQuestion";
import {Question} from "./components/Question";
import {RelacioParentiu} from "./components/RelacioParentiu";
import {SituacioLaboral} from "./components/SituacioLaboral";
import {TimePeriodQuestion} from "./components/TimePeriodQuestion";
import {TipusDocumentIdentitat} from "./components/TipusDocumentIdentitat";
import {YesNoQuestion} from "./components/YesNoQuestion";
import type {Person, PersonRole} from "./PersonTypes";

export type PersonFormInitialValues = Person | { is_the_person_in_front_of_the_computer: boolean };

type Props = {
  cobraAlgunTipusDePensioNoContributiva: Boolean,
  edat: number,
  esAturat: Boolean,
  esDona: Boolean,
  esFamiliarOUsuari: Boolean,
  esFill: Boolean,
  esFillastre: Boolean,
  esHome: Boolean,
  handleSubmit: Function,
  haTreballatALEstranger6Mesos: Boolean,
  helpTopic: string,
  inscritComADemandantDocupacio: Boolean,
  isTheUserInFrontOfTheComputer: Boolean,
  membreDeFamiliaReagrupada: Boolean,
  municipiEmpadronament: string,
  onCancel: Function,
  potTreballar: Boolean,
  portaDosAnysOMesEmpadronatACatalunya: Boolean,
  rol: PersonRole,
  teAlgunGrauDeDiscapacitatReconegut: Boolean,
  tipusDocumentIdentitat: Boolean,
  treballaPerCompteDAltriParcial: Boolean,
  updating: Boolean
};

const formName = 'PersonForm';

let PersonForm = (props: Props) => {
  const {
    cobraAlgunTipusDePensioNoContributiva,
    edat,
    esAturat,
    esDona,
    esFamiliarOUsuari,
    esFill,
    esFillastre,
    esHome,
    handleSubmit,
    helpTopic,
    haTreballatALEstranger6Mesos,
    inscritComADemandantDocupacio,
    isTheUserInFrontOfTheComputer,
    membreDeFamiliaReagrupada,
    municipiEmpadronament,
    potTreballar,
    portaDosAnysOMesEmpadronatACatalunya,
    teAlgunGrauDeDiscapacitatReconegut,
    tipusDocumentIdentitat,
    treballaPerCompteDAltriParcial,
    updating
  } = props;

  return (
      <AppFormContainer>
        <AppFormTitle iconName='persona'>
          {isTheUserInFrontOfTheComputer
              ? <Trans>Informació sobre vostè</Trans>
              : <Trans>Informació sobre aquesta persona que conviu amb vostè</Trans>
          }
        </AppFormTitle>
        <AppForm>
          <form onSubmit={handleSubmit}>
            <Field component='input' name='id' type='hidden'/>
            <Field component='input' name='is_the_user_in_front_of_the_computer' type='hidden'/>
            <Grid container direction='row' justify='space-around' alignItems='stretch' spacing={16}>
              <Grid item xs={11} sm={6}>
                <Grid container direction='column' alignItems='stretch' spacing={16}>
                  <FormSubTitle><Trans>Informació personal</Trans></FormSubTitle>
                  <Question name='nom' placeholder='Nom' component={TextField} validate={[required]} autoFocus>
                    {isTheUserInFrontOfTheComputer ? <Trans>Identifiqui's amb un nom</Trans> :
                        <Trans>Identifiqui aquesta persona amb un nom</Trans>}
                  </Question>

                  {!isTheUserInFrontOfTheComputer && <RelacioParentiu/>}

                  {esFamiliarOUsuari &&
                  <Fragment>
                    <TimePeriodQuestion name='edat' validate={[menorDe120, required]}>
                      <Trans>Quina és la seva edat?</Trans>
                    </TimePeriodQuestion>

                    <MultipleAnswerQuestion label={<Trans>Sexe</Trans>} name='sexe' validate={[required]}>
                      <MenuItem value='dona'>
                        <Trans>Femení</Trans>
                      </MenuItem>
                      <MenuItem value='home'>
                        <Trans>Masculí</Trans>
                      </MenuItem>
                    </MultipleAnswerQuestion>

                    <Typography gutterBottom/>
                    <FormSubTitle>Informació sobre el padró</FormSubTitle>

                    <TipusDocumentIdentitat/>

                    <YesNoQuestion name='porta_dos_anys_o_mes_empadronat_a_catalunya' validate={[required]}>
                      <Trans>Fa dos anys o més que està empadronat/ada a Catalunya?</Trans>
                    </YesNoQuestion>
                  </Fragment>}

                  {esFamiliarOUsuari && esDona && tipusDocumentIdentitat === "passaport" && portaDosAnysOMesEmpadronatACatalunya &&
                  <YesNoQuestion name='membre_de_familia_reagrupada' validate={[required]}>
                    <Trans>És membre d'una família reagrupada?</Trans>
                  </YesNoQuestion>}

                  {esFamiliarOUsuari && membreDeFamiliaReagrupada &&
                  <YesNoQuestion name='es_una_persona_divorciada' validate={[required]}>
                    <Trans>És una persona divorciada legalment?</Trans>
                  </YesNoQuestion>}

                  {esFamiliarOUsuari && <MunicipiEmpadronament/>}

                  {municipiEmpadronament === "barcelona" &&
                  <TimePeriodQuestion name='anys_empadronat_a_barcelona'
                                      validate={[
                                        anysEmpadronatInferiorAEdat,
                                        menorDe120,
                                        empadronamentABarcelonaInferiorAEmpadronamentACatalunya,
                                        required
                                      ]}>
                    <Trans>Quants anys fa que està empadronat/ada a Barcelona?</Trans>
                  </TimePeriodQuestion>}

                  {esFamiliarOUsuari && potTreballar &&
                  <Fragment>
                    <FormSubTitle><Trans>Situació laboral</Trans></FormSubTitle>

                    <SituacioLaboral/>
                    {esFamiliarOUsuari && esAturat &&
                    <Fragment>
                      <YesNoQuestion name='inscrit_com_a_demandant_docupacio' validate={[required]}>
                        <Trans>Està inscrit/a com a demandant d’ocupació?</Trans>
                      </YesNoQuestion>

                      {inscritComADemandantDocupacio &&
                      <YesNoQuestion name='inscrit_com_a_demandant_docupacio_mes_de_12_mesos' validate={[required]}>
                        <Trans>Ha estat inscrit/a de forma continuada com a demandant d'ocupació més de 12
                          mesos?</Trans>
                      </YesNoQuestion>}

                      {esAturat &&
                      <YesNoQuestion name='en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina'
                                     validate={[required]}>
                        <Trans>Ha deixat la feina de forma voluntària en els darrers 12 mesos?</Trans>
                      </YesNoQuestion>}
                    </Fragment>}

                    {esFamiliarOUsuari
                    && (tipusDocumentIdentitat === "DNI" || tipusDocumentIdentitat === "NIE")
                    && (esAturat || treballaPerCompteDAltriParcial) &&
                    <YesNoQuestion name='ha_treballat_a_l_estranger_6_mesos' validate={[required]}>
                      <Trans>Ha treballat a l’estranger un mínim de 6 mesos?</Trans>
                    </YesNoQuestion>}

                    {haTreballatALEstranger6Mesos &&
                    <YesNoQuestion name='ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos'
                                   validate={[required]}>
                      <Trans>Ha tornat d’aquest període de treball en els darrers 12 mesos?</Trans>
                    </YesNoQuestion>}
                  </Fragment>}
                  {potTreballar &&
                  <Fragment>
                    <FormSubTitle>Ingressos</FormSubTitle>
                    <MoneyQuestion name='ingressos_bruts' validate={[required]}>
                      {isTheUserInFrontOfTheComputer
                          ? <Trans>Indiqui els seus ingressos anuals de l’any passat</Trans>
                          : <Trans>Indiqui els ingressos anuals de l’any passat d'aquesta persona</Trans>
                      }
                    </MoneyQuestion>
                    <MoneyQuestion name='ingressos_bruts_ultims_sis_mesos' validate={[required]}>
                      {isTheUserInFrontOfTheComputer
                          ? <Trans>Indiqui la suma dels seus ingressos dels últims sis mesos</Trans>
                          : <Trans>Indiqui la suma dels ingressos dels últims sis mesos d'aquesta persona</Trans>
                      }
                    </MoneyQuestion>
                    {esFamiliarOUsuari &&
                    <YesNoQuestion name='cobra_algun_tipus_de_pensio_no_contributiva' validate={[required]}>
                      <Trans>Cobra algun tipus de pensió no contributiva?</Trans>
                    </YesNoQuestion>}

                    {esFamiliarOUsuari && cobraAlgunTipusDePensioNoContributiva &&
                    <Fragment>
                      <MoneyQuestion name='ingressos_per_pnc' validate={[pncInclosAIngressosBruts, required]}>
                        <Trans>
                          Indiqui la suma dels imports anuals que percep en concepte de pensions no contributives
                        </Trans>
                      </MoneyQuestion>
                    </Fragment>}

                    {esFamiliarOUsuari && inscritComADemandantDocupacio &&
                    <YesNoQuestion name='gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio'
                                   validate={[required]}>
                      <Trans>Gaudeix actualment d’una prestació contributiva o subsidi per desocupació?</Trans>
                    </YesNoQuestion>}

                    {esFamiliarOUsuari && esAturat &&
                    <YesNoQuestion name='percep_prestacions_incompatibles_amb_la_feina' validate={[required]}>
                      <Trans>
                        Percep alguna ajuda i/o prestació econòmica de la seguretat social que no li permeti
                        treballar?
                      </Trans>
                    </YesNoQuestion>}
                  </Fragment>}
                  {esFamiliarOUsuari &&
                  <Fragment>
                    <FormSubTitle>Situació personal</FormSubTitle>
                    <YesNoQuestion name='te_algun_grau_de_discapacitat_reconegut' validate={[required]}>
                      <Trans>Té algun grau de discapacitat reconegut?</Trans>
                    </YesNoQuestion>

                    {teAlgunGrauDeDiscapacitatReconegut &&
                    <PercentageQuestion name='grau_discapacitat' validate={[required]}>
                      <Trans>Indiqui quin és el grau de discapacitat, expressat en percentatge</Trans>
                    </PercentageQuestion>}

                    {potTreballar && esDona &&
                    <YesNoQuestion name='victima_violencia_de_genere' validate={[required]}>
                      <Trans>És víctima violència de gènere o domèstica?</Trans>
                    </YesNoQuestion>}
                    {potTreballar && esHome &&
                    <YesNoQuestion name='victima_violencia_domestica' validate={[required]}>
                      <Trans>És víctima violència domèstica?</Trans>
                    </YesNoQuestion>}

                    {(edat > 2 && edat <= 16) &&
                    <YesNoQuestion name='es_escolaritzat_entre_P3_i_4rt_ESO' validate={[required]}>
                      <Trans>És escolaritzat/ada entre P3 i 4rt ESO a la ciutat de Barcelona?</Trans>
                    </YesNoQuestion>}

                    {(edat > 18 && edat < 23) && !(esFill || esFillastre) &&
                    <YesNoQuestion name='es_orfe_dels_dos_progenitors' validate={[required]}>
                      <Trans>És orfe/na dels dos progenitors?</Trans>
                    </YesNoQuestion>}

                    <YesNoQuestion name='beneficiari_de_prestacio_residencial' validate={[required]}>
                      <Trans>És beneficiari/aria d’una prestació pública o privada de servei residencial
                        permanent?</Trans>
                    </YesNoQuestion>
                  </Fragment>}
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
            <Grid item id='stop'>
              <Grid container direction='row' spacing={16} justify='space-around'>
                {(isTheUserInFrontOfTheComputer !== true || updating === true) &&
                <Grid item>
                  <Button variant='contained' color='secondary' onClick={props.onCancel}>
                    <Trans>Cancelar</Trans>
                  </Button>
                </Grid>}

                <Grid item>
                  <Button variant='contained' color='primary' type='submit' name='ButtonValidar'>
                    <Trans>Validar</Trans>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </AppForm>
      </AppFormContainer>
  );
};

PersonForm = reduxForm({
  form: formName,
  onSubmitFail: (error) => {
    focusFirstQuestionWithName(namefirstFieldWithError(error))
  },
})(PersonForm);

const selector = formValueSelector(formName);

PersonForm = connect(state => {
  const cobraAlgunTipusDePensioNoContributiva = selector(state, "cobra_algun_tipus_de_pensio_no_contributiva");
  const edat = selector(state, "edat");
  const esAturat = selector(state, "situacio_laboral") === "aturat";
  const esDona = selector(state, "sexe") === "dona";
  const esHome = selector(state, "sexe") === "home";
  const esFamiliarOUsuari = (typeof selector(state, "relacio_parentiu") !== "undefined" && selector(state, "relacio_parentiu") !== "cap") || selector(state, "is_the_person_in_front_of_the_computer") === true;
  const esFill = selector(state, "relacio_parentiu") === "fill";
  const esFillastre = selector(state, "relacio_parentiu") === "fillastre";
  const haTreballatALEstranger6Mesos = selector(state, "ha_treballat_a_l_estranger_6_mesos");
  const inscritComADemandantDocupacio = selector(state, "inscrit_com_a_demandant_docupacio");
  const isTheUserInFrontOfTheComputer = selector(state, "is_the_person_in_front_of_the_computer");
  const membreDeFamiliaReagrupada = selector(state, "membre_de_familia_reagrupada");
  const municipiEmpadronament = selector(state, "municipi_empadronament");
  const potTreballar = selector(state, "edat") >= 16;
  const portaDosAnysOMesEmpadronatACatalunya = selector(state, "porta_dos_anys_o_mes_empadronat_a_catalunya");
  const rol = selector(state, "rol");
  const teAlgunGrauDeDiscapacitatReconegut = selector(state, "te_algun_grau_de_discapacitat_reconegut");
  const tipusDocumentIdentitat = selector(state, "tipus_document_identitat");
  const treballaPerCompteDAltriParcial = selector(state, "situacio_laboral") === "treball_compte_daltri_jornada_parcial";
  const helpTopic = state.helpSystem.currentHelpTopic;

  return {
    cobraAlgunTipusDePensioNoContributiva,
    helpTopic,
    edat,
    esAturat,
    esDona,
    esFamiliarOUsuari,
    esFill,
    esFillastre,
    esHome,
    haTreballatALEstranger6Mesos,
    inscritComADemandantDocupacio,
    isTheUserInFrontOfTheComputer,
    membreDeFamiliaReagrupada,
    municipiEmpadronament,
    potTreballar,
    portaDosAnysOMesEmpadronatACatalunya,
    rol,
    teAlgunGrauDeDiscapacitatReconegut,
    tipusDocumentIdentitat,
    treballaPerCompteDAltriParcial
  };
})(PersonForm);

export default PersonForm;
