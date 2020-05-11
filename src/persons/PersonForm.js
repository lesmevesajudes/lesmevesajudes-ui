//@flow
import {Button, Grid, Hidden, MenuItem, Typography} from '@material-ui/core';
import Icon from '@material-ui/core/Icon/Icon';
import React, {Fragment} from 'react';
import {Trans, withNamespaces} from 'react-i18next';
import {connect} from 'react-redux';
import Sticky from 'react-stickynode';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import {AppForm, AppFormContainer, AppFormTitle} from '../components/AppForms';
import DescriptionText from '../components/Common/DescriptionText';
import FormSubTitle from '../components/FormComponents/FormSubTitle';
import {MoneyQuestion} from '../components/FormComponents/MoneyQuestion';
import MultipleAnswerQuestion from '../components/FormComponents/MultipleAnswerQuestion';
import {PercentageQuestion} from '../components/FormComponents/PercentageQuestion';
import {Question} from '../components/FormComponents/Question';
import {TimePeriodQuestion} from '../components/FormComponents/TimePeriodQuestion';
import {YesNoQuestion} from '../components/FormComponents/YesNoQuestion';
import {
  anysEmpadronatInferiorAEdat,
  empadronamentABarcelonaInferiorAEmpadronamentACatalunya,
  menorDe120,
  required
} from '../shared/formValidators';
import {focusFirstQuestionWithName, namefirstFieldWithError} from '../shared/reduxFormTools';
import type {Person, PersonRole} from './PersonTypes';

export type PersonFormInitialValues = Person | { is_the_person_in_front_of_the_computer: boolean };

type Props = {
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
  const buildTranslationContext = (items: Array<string>) => ({context: items.join('_')});
  const personDecider = () => isTheUserInFrontOfTheComputer ? 'second' : 'third';
  const sexDecider = () => esDona ? 'feminine' : 'masculine';
  const personTranslationContext = buildTranslationContext([personDecider()]);
  const personAndSexTranslationContext = buildTranslationContext([personDecider(), sexDecider()]);
  const sexTranslationContext = buildTranslationContext([sexDecider()]);
  const i18nKey = (keyname: string, context: Object) => ({i18nKey: [keyname, context.context].join('_')});

  return (
      <AppFormContainer>
        <AppFormTitle iconName='persona'>
          <Trans {...i18nKey('titol', personTranslationContext)}>Informació sobre tu</Trans>
        </AppFormTitle>
        <AppForm>
          <form onSubmit={handleSubmit}>
            <Field component='input' name='id' type='hidden'/>
            <Field component='input' name='is_the_user_in_front_of_the_computer' type='hidden'/>
            <Grid container direction='row' justify='space-around' alignItems='stretch' spacing={16}>
              <Grid item xs={11} md={6}>
                <Grid container direction='column' alignItems='stretch' spacing={16}>
                  <FormSubTitle>
                    <Trans i18nKey='informacio_personal'>Informació personal</Trans>
                  </FormSubTitle>
                  <Question name='nom' component={TextField} validate={[required]} autoFocus>
                    <Trans {...i18nKey('nom', personTranslationContext)}>
                      Identifica’t amb un nom
                    </Trans>
                  </Question>

                  <MultipleAnswerQuestion label={<Trans i18nKey='sexe'>Sexe</Trans>} name='sexe' validate={[required]}>
                    <MenuItem value='dona'>
                      <Trans i18nKey='femeni'>Femení</Trans>
                    </MenuItem>
                    <MenuItem value='home'>
                      <Trans i18nKey='masculi'>Masculí</Trans>
                    </MenuItem>
                  </MultipleAnswerQuestion>

                  {!isTheUserInFrontOfTheComputer && (esHome || esDona) &&
                  <MultipleAnswerQuestion name='relacio_parentiu'
                                          label={
                                            <Trans {...i18nKey('relacio_parentiu', sexTranslationContext)}>
                                              Aquesta persona és el/la seu/va?
                                            </Trans>}
                                          validate={[required]}>
                    <MenuItem value='parella'>
                      <Trans i18nKey='parella'>Cònjuge / parella</Trans>
                    </MenuItem>
                    <MenuItem value='fill'>
                      <Trans {...i18nKey('fill', sexTranslationContext)}>Fill/a</Trans>
                    </MenuItem>
                    <MenuItem value='fillastre'>
                      <Trans {...i18nKey('fillastre', sexTranslationContext)}>Fillastre/a (o fill/a de la parella
                        actual)</Trans>
                    </MenuItem>
                    <MenuItem value='net'>
                      <Trans {...i18nKey('net', sexTranslationContext)}>Nét/a</Trans>
                    </MenuItem>
                    <MenuItem value='infant_acollit'>
                      <Trans i18nKey='infant_acollit'>Infant en acolliment</Trans><Icon>info</Icon>
                    </MenuItem>
                    <MenuItem value='pare'>
                      <Trans {...i18nKey('pare', sexTranslationContext)}>Pare o mare</Trans>
                    </MenuItem>
                    <MenuItem value='avi'>
                      <Trans {...i18nKey('avi', sexTranslationContext)}>Avi / Àvia</Trans>
                    </MenuItem>
                    <MenuItem value='sogre'>
                      <Trans {...i18nKey('sogre', sexTranslationContext)}>Sogre/a</Trans>
                    </MenuItem>
                    <MenuItem value='germa'>
                      <Trans {...i18nKey('germa', sexTranslationContext)}>Germà/germana</Trans>
                    </MenuItem>
                    <MenuItem value='cunyat'>
                      <Trans {...i18nKey('cunyat', sexTranslationContext)}>Cunyat/da</Trans>
                    </MenuItem>
                    <MenuItem value='gendre'>
                      <Trans {...i18nKey('gendre', sexTranslationContext)}>Gendre/Nora/Parella del meu fill/a</Trans>
                    </MenuItem>
                    <MenuItem value='altres'>
                      <Trans i18nKey='altres_familiars'>Altres familiars</Trans>
                    </MenuItem>
                    <MenuItem value='cap'>
                      <Trans i18nKey='cap_relacio_parentiu'>Sense relació de parentiu</Trans>
                    </MenuItem>
                  </MultipleAnswerQuestion>
                  }


                  <TimePeriodQuestion name='edat' validate={[menorDe120, required]}>
                    <Trans {...i18nKey('edat', personTranslationContext)}>
                      Quina és la seva edat?
                    </Trans>
                  </TimePeriodQuestion>

                  {esFamiliarOUsuari &&
                  <Fragment>
                    <Typography gutterBottom/>
                    <FormSubTitle>
                      <Trans i18nKey='informacio_sobre_el_padro'>
                        Informació sobre el padró
                      </Trans>
                    </FormSubTitle>

                    <MultipleAnswerQuestion
                        label={<Trans i18nKey='tipus_document_identitat'>Tipus de document d'identitat</Trans>}
                        name='tipus_document_identitat'
                        validate={[required]}>
                      <MenuItem value='DNI'>
                        <Trans i18nKey='dni'>DNI</Trans>
                      </MenuItem>
                      <MenuItem value='NIE'>
                        <Trans i18nKey='nie'>NIE</Trans>
                      </MenuItem>
                      <MenuItem value='passaport'>
                        <Trans i18nKey='passaport'>Passaport</Trans>
                      </MenuItem>
                      <MenuItem value='sense_documents'>
                        <Trans i18nKey='sense_documents'>Sense documents</Trans>
                      </MenuItem>
                      <MenuItem value='altres'>
                        <Trans i18nKey='altres_documents_identitat'>Altres</Trans>
                      </MenuItem>
                    </MultipleAnswerQuestion>

                    <YesNoQuestion name='porta_dos_anys_o_mes_empadronat_a_catalunya' validate={[required]}>
                      <Trans {...i18nKey('porta_dos_anys_o_mes_empadronat_a_catalunya', personAndSexTranslationContext)}>
                        Fa dos anys o més que està empadronat/ada a Catalunya?
                      </Trans>
                    </YesNoQuestion>
                  </Fragment>}

                  {esFamiliarOUsuari && esDona && tipusDocumentIdentitat === 'passaport' && portaDosAnysOMesEmpadronatACatalunya &&
                  <YesNoQuestion name='membre_de_familia_reagrupada' validate={[required]}>
                    <Trans {...i18nKey('membre_de_familia_reagrupada', personTranslationContext)}>
                      És membre d'una família reagrupada?
                    </Trans>
                  </YesNoQuestion>}

                  {esFamiliarOUsuari && membreDeFamiliaReagrupada &&
                  <YesNoQuestion name='es_una_persona_divorciada' validate={[required]}>
                    <Trans {...i18nKey('es_una_persona_divorciada', personAndSexTranslationContext)}>
                      És una persona divorciada legalment?
                    </Trans>
                  </YesNoQuestion>}

                  {esFamiliarOUsuari &&
                  <MultipleAnswerQuestion
                      label={
                        <Trans {...i18nKey('municipi_empadronament', personAndSexTranslationContext)}>
                          En quin municipi està empadronat/ada actualment?
                        </Trans>}
                      name='municipi_empadronament'
                      validate={[required]}
                  >
                    <MenuItem value='barcelona'>
                      <Trans i18nKey='barcelona'>Barcelona</Trans>
                    </MenuItem>
                    <MenuItem value='altres'>
                      <Trans i18nKey='altres_municipis_catalans'>Altres municipis catalans</Trans>
                    </MenuItem>
                    <MenuItem value='no_empadronat_a_cat'>
                      <Trans i18nKey='no_empadronat_a_cat'>No estic empadronat a Catalunya</Trans>
                    </MenuItem>
                  </MultipleAnswerQuestion>
                  }

                  {municipiEmpadronament === 'barcelona' &&
                  <TimePeriodQuestion name='anys_empadronat_a_barcelona'
                                      validate={[
                                        anysEmpadronatInferiorAEdat,
                                        menorDe120,
                                        empadronamentABarcelonaInferiorAEmpadronamentACatalunya,
                                        required
                                      ]}>
                    <Trans {...i18nKey('anys_empadronat_a_barcelona', personAndSexTranslationContext)}>
                      Quants anys fa que està empadronat/ada a Barcelona?
                    </Trans>
                  </TimePeriodQuestion>}

                  {esFamiliarOUsuari && potTreballar &&
                  <Fragment>
                    <FormSubTitle><Trans i18nKey='situacio_laboral_title'>Situació laboral</Trans></FormSubTitle>

                    <MultipleAnswerQuestion
                        label={<Trans {...i18nKey('situacio_laboral', personTranslationContext)}>Indiqui la seva
                          situació
                          laboral:</Trans>}
                        name='situacio_laboral'
                        validate={[required]}>
                      <MenuItem value='treball_compte_propi'>
                        <Trans i18nKey='treball_compte_propi'>
                          Treballa per compte propi
                        </Trans>
                      </MenuItem>
                      <MenuItem value='treball_compte_daltri_jornada_complerta'>
                        <Trans i18nKey='treball_per_compte_daltri'>
                          Treball per compte d'altri jornada complerta
                        </Trans>
                      </MenuItem>
                      <MenuItem value='treball_compte_daltri_jornada_parcial'>
                        <Trans i18nKey='altri_jornada_parcial'>
                          Treball per compte d'altri jornada parcial
                        </Trans>
                      </MenuItem>
                      <MenuItem value='aturat'>
                        <Trans {...i18nKey('aturat', sexTranslationContext)}>
                          Aturat
                        </Trans>
                      </MenuItem>
                      <MenuItem value='tasques_de_la_llar'>
                        <Trans i18nKey='tasques_de_llar'>
                          Tasques de la llar
                        </Trans>
                      </MenuItem>
                      <MenuItem value='estudiant'>
                        <Trans i18nKey='estudiant'>
                          Estudiant o pràctiques sense remunerar
                        </Trans>
                      </MenuItem>
                      <MenuItem value='jubilat'>
                        <Trans {...i18nKey('jubilat', sexTranslationContext)}>
                          Jubilat/ada o prejubilat/ada
                        </Trans>
                      </MenuItem>
                      <MenuItem value='altres'>
                        <Trans i18nKey='altres_situacions'>Altres situacions</Trans>
                      </MenuItem>
                    </MultipleAnswerQuestion>
                    {esFamiliarOUsuari && esAturat &&
                    <Fragment>
                      <YesNoQuestion name='inscrit_com_a_demandant_docupacio' validate={[required]}>
                        <Trans {...i18nKey('inscrit_com_a_demandant_docupacio', personAndSexTranslationContext)}>
                          Està inscrit/a com a demandant d’ocupació?
                        </Trans>
                      </YesNoQuestion>

                      {inscritComADemandantDocupacio &&
                      <YesNoQuestion name='inscrit_com_a_demandant_docupacio_mes_de_12_mesos' validate={[required]}>
                        <Trans {...i18nKey('inscrit_com_a_demandant_docupacio_mes_de_12_mesos', personAndSexTranslationContext)}>
                          Ha estat inscrit/a de forma continuada com a demandant d'ocupació més de 12 mesos?
                        </Trans>
                      </YesNoQuestion>}

                      {esAturat && !inscritComADemandantDocupacio &&
                      <YesNoQuestion name='en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina'
                                     validate={[required]}>
                        <Trans {...i18nKey('en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina', personTranslationContext)}>
                          Ha deixat la feina de forma voluntària en els darrers 12 mesos?</Trans>
                      </YesNoQuestion>}
                    </Fragment>}

                    {esFamiliarOUsuari
                    && (tipusDocumentIdentitat === 'DNI' || tipusDocumentIdentitat === 'NIE')
                    && (esAturat || treballaPerCompteDAltriParcial) &&
                    <YesNoQuestion name='ha_treballat_a_l_estranger_6_mesos' validate={[required]}>
                      <Trans {...i18nKey('ha_treballat_a_l_estranger_6_mesos', personTranslationContext)}>
                        Ha treballat a l’estranger un mínim de 6 mesos?
                      </Trans>
                    </YesNoQuestion>}

                    {haTreballatALEstranger6Mesos &&
                    <YesNoQuestion name='ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos'
                                   validate={[required]}>
                      <Trans {...i18nKey('ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos', personTranslationContext)}>
                        Ha tornat d’aquest període de treball en els darrers 12 mesos?
                      </Trans>
                    </YesNoQuestion>}
                  </Fragment>}
                  {potTreballar &&
                  <Fragment>
                    <FormSubTitle>
                      <Trans i18nKey='ingressos_title'>
                        Ingressos
                      </Trans>
                    </FormSubTitle>
                    <MoneyQuestion name='ingressos_bruts' validate={[required]}>
                      <Trans {...i18nKey('ingressos_bruts', personTranslationContext)}>
                        Indiqui els seus ingressos anuals de l’any passat
                      </Trans>
                    </MoneyQuestion>
                    <MoneyQuestion name='ingressos_bruts_ultims_sis_mesos' validate={[required]}>
                      <Trans {...i18nKey('ingressos_bruts_ultims_sis_mesos', personTranslationContext)}>
                        Indiqui la suma dels seus ingressos dels últims sis mesos
                      </Trans>
                    </MoneyQuestion>

                    {esFamiliarOUsuari && inscritComADemandantDocupacio &&
                    <YesNoQuestion name='gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio'
                                   validate={[required]}>
                      <Trans {...i18nKey('gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio', personTranslationContext)}>
                        Gaudeix actualment d’una prestació contributiva o subsidi per desocupació?
                      </Trans>
                    </YesNoQuestion>}

                    {esFamiliarOUsuari && esAturat &&
                    <YesNoQuestion name='percep_prestacions_incompatibles_amb_la_feina' validate={[required]}>
                      <Trans {...i18nKey('percep_prestacions_incompatibles_amb_la_feina', personTranslationContext)}>
                        Percep alguna ajuda i/o prestació econòmica de la seguretat social que no li permeti treballar?
                      </Trans>
                    </YesNoQuestion>}
                  </Fragment>}
                  {esFamiliarOUsuari &&
                  <Fragment>
                    <FormSubTitle>Situació personal</FormSubTitle>
                    <YesNoQuestion name='te_algun_grau_de_discapacitat_reconegut' validate={[required]}>
                      <Trans {...i18nKey('te_algun_grau_de_discapacitat_reconegut', personTranslationContext)}>
                        Té algun grau de discapacitat reconegut?
                      </Trans>
                    </YesNoQuestion>

                    {teAlgunGrauDeDiscapacitatReconegut &&
                    <PercentageQuestion name='grau_discapacitat' validate={[required]}>
                      <Trans i18nKey='grau_discapacitat'>
                        Indiqui quin és el grau de discapacitat, expressat en percentatge
                      </Trans>
                    </PercentageQuestion>}

                    {potTreballar && esDona &&
                    <YesNoQuestion name='victima_violencia_de_genere' validate={[required]}>
                      <Trans {...i18nKey('victima_violencia_de_genere', personTranslationContext)}>
                        És víctima violència de gènere o domèstica?
                      </Trans>
                    </YesNoQuestion>}
                    {potTreballar && esHome &&
                    <YesNoQuestion name='victima_violencia_domestica' validate={[required]}>
                      <Trans {...i18nKey('victima_violencia_domestica', personTranslationContext)}>
                        És víctima violència domèstica?
                      </Trans>
                    </YesNoQuestion>}

                    {(edat > 2 && edat <= 16) &&
                    <YesNoQuestion name='es_escolaritzat_entre_P3_i_4rt_ESO' validate={[required]}>
                      <Trans {...i18nKey('es_escolaritzat_entre_P3_i_4rt_ESO', sexTranslationContext)}>
                        És escolaritzat/ada entre P3 i 4rt ESO a la ciutat de Barcelona?
                      </Trans>
                    </YesNoQuestion>}

                    {(edat > 18 && edat < 23) && !(esFill || esFillastre) &&
                    <YesNoQuestion name='es_orfe_dels_dos_progenitors' validate={[required]}>
                      <Trans {...i18nKey('es_orfe_dels_dos_progenitors', sexTranslationContext)}>És orfe/na dels dos
                        progenitors?</Trans>
                    </YesNoQuestion>}

                    <YesNoQuestion name='beneficiari_de_prestacio_residencial' validate={[required]}>
                      <Trans {...i18nKey('beneficiari_de_prestacio_residencial', personAndSexTranslationContext)}>
                        És beneficiari/aria d’una prestació pública o privada de servei residencial permanent?
                      </Trans>
                    </YesNoQuestion>

                    {edat > 64 &&
                    <YesNoQuestion name='sentirse_sol' validate={[required]}>
                      <Trans {...i18nKey('sentirse_sol', personAndSexTranslationContext)}>
                        Et sents sol/a?
                      </Trans>
                    </YesNoQuestion>}

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
                    <Trans i18nKey='cancelar'>Cancelar</Trans>
                  </Button>
                </Grid>}

                <Grid item>
                  <Button variant='contained' color='primary' type='submit' name='ButtonValidar'>
                    <Trans i18nKey='validar'>Validar</Trans>
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
	  console.log(error);
	  focusFirstQuestionWithName(namefirstFieldWithError(error));
  }
})(PersonForm);

const selector = formValueSelector(formName);

PersonForm = withNamespaces('translations')(connect(state => {
  const edat = selector(state, 'edat');
  const esAturat = selector(state, 'situacio_laboral') === 'aturat';
  const esDona = selector(state, 'sexe') === 'dona';
  const esHome = selector(state, 'sexe') === 'home';
  const esFamiliarOUsuari = (typeof selector(state, 'relacio_parentiu') !== 'undefined' && selector(state, 'relacio_parentiu') !== 'cap') || selector(state, 'is_the_person_in_front_of_the_computer') === true;
  const esFill = selector(state, 'relacio_parentiu') === 'fill';
  const esFillastre = selector(state, 'relacio_parentiu') === 'fillastre';
  const haTreballatALEstranger6Mesos = selector(state, 'ha_treballat_a_l_estranger_6_mesos');
  const inscritComADemandantDocupacio = selector(state, 'inscrit_com_a_demandant_docupacio');
  const isTheUserInFrontOfTheComputer = selector(state, 'is_the_person_in_front_of_the_computer');
  const membreDeFamiliaReagrupada = selector(state, 'membre_de_familia_reagrupada');
  const municipiEmpadronament = selector(state, 'municipi_empadronament');
  const sentirseSol = selector(state, 'sentirse_sol');
  const potTreballar = selector(state, 'edat') >= 16;
  const portaDosAnysOMesEmpadronatACatalunya = selector(state, 'porta_dos_anys_o_mes_empadronat_a_catalunya');
  const rol = selector(state, 'rol');
  const teAlgunGrauDeDiscapacitatReconegut = selector(state, 'te_algun_grau_de_discapacitat_reconegut');
  const tipusDocumentIdentitat = selector(state, 'tipus_document_identitat');
  const treballaPerCompteDAltriParcial = selector(state, 'situacio_laboral') === 'treball_compte_daltri_jornada_parcial';
  const helpTopic = state.helpSystem.currentHelpTopic;

  return {
    edat,
    esAturat,
    esDona,
    esFamiliarOUsuari,
    esFill,
    esFillastre,
    esHome,
    haTreballatALEstranger6Mesos,
    helpTopic,
    inscritComADemandantDocupacio,
    isTheUserInFrontOfTheComputer,
    membreDeFamiliaReagrupada,
    municipiEmpadronament,
    sentirseSol,
    potTreballar,
    portaDosAnysOMesEmpadronatACatalunya,
    rol,
    teAlgunGrauDeDiscapacitatReconegut,
    tipusDocumentIdentitat,
    treballaPerCompteDAltriParcial
  };
})(PersonForm));

export default PersonForm;

