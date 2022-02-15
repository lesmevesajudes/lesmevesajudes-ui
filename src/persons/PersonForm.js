//@flow
import {Button, Grid, Hidden, MenuItem, Typography} from '@material-ui/core';
import Icon from '@material-ui/core/Icon/Icon';
import React, {Fragment} from 'react';
import {Trans, withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import Sticky from 'react-stickynode';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import {renderTextField} from '../components/FormComponents/MaterialUIFields';
import {AppForm, AppFormContainer, AppFormTitle} from '../components/AppForms';
import DescriptionText from '../components/Common/DescriptionText';
import FormSubTitle from '../components/FormComponents/FormSubTitle';
import {MoneyQuestion} from '../components/FormComponents/MoneyQuestion';
import MultipleAnswerQuestion from '../components/FormComponents/MultipleAnswerQuestion';
import {PercentageQuestion} from '../components/FormComponents/PercentageQuestion';
import {Question} from '../components/FormComponents/Question';
import {TimePeriodQuestion} from '../components/FormComponents/TimePeriodQuestion';
import {YesNoQuestion} from '../components/FormComponents/YesNoQuestion';
import classNames from "classnames";
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
  teAlgunGrauDeDependenciaReconegut: Boolean,
  tipusDocumentIdentitat: Boolean,
  treballaPerCompteDAltriParcial: Boolean,
  updating: Boolean,
  tePrestacioContributivaOSubsidi: Boolean,
  vida_independent: number,
};

const formName = 'PersonForm';

let PersonFormComponent = (props: Props) => {
  let {
	form,
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
    teAlgunGrauDeDependenciaReconegut,
    tipusDocumentIdentitat,
    treballaPerCompteDAltriParcial,
    tePrestacioContributivaOSubsidi,
    vidaIndependent,
    updating,
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
            <Grid container direction='row' justify='space-around' alignItems='stretch' spacing={2}>
              <Grid item xs={11} md={6}>
                <Grid container direction='column' alignItems='stretch' spacing={2}>
                  <FormSubTitle>
                    <Trans i18nKey='informacio_personal'>Informació personal</Trans>
                  </FormSubTitle>
                  <Question
                    formname={formName}
                    name='nom'
                    component={renderTextField}
                    validate={[required]}
                    autoFocus
                    label={i18nKey('nom', personTranslationContext)}
                  />

                  <MultipleAnswerQuestion
                    formname={formName}
                    label={{'i18nKey':'sexe'}}
                    name='sexe'
                    validate={[required]}>
                    <MenuItem value='dona'>
                      <Trans i18nKey='femeni'>Femení</Trans>
                    </MenuItem>
                    <MenuItem value='home'>
                      <Trans i18nKey='masculi'>Masculí</Trans>
                    </MenuItem>
                  </MultipleAnswerQuestion>

                  {!isTheUserInFrontOfTheComputer && (esHome || esDona) &&
                  <MultipleAnswerQuestion
                    formname={formName}
                    name='relacio_parentiu'
                    label={i18nKey('relacio_parentiu', sexTranslationContext)}
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


                  <TimePeriodQuestion
                    formname={formName}
                    name ='edat'
                    validate={[menorDe120, required]}
                    label={i18nKey('edat', personTranslationContext)}
                   />

                  {esFamiliarOUsuari &&
                  <Fragment>
                    <Typography gutterBottom/>
                    <FormSubTitle>
                      <Trans i18nKey='informacio_sobre_el_padro'>
                        Informació sobre el padró
                      </Trans>
                    </FormSubTitle>

                    <MultipleAnswerQuestion
                        formname={formName}
                        name='tipus_document_identitat'
                        label='tipus_document_identitat'
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

                    <YesNoQuestion
                      formname={formName}
                      name='porta_dos_anys_o_mes_empadronat_a_catalunya'
                      validate={[required]}
                      label={i18nKey('porta_dos_anys_o_mes_empadronat_a_catalunya', personAndSexTranslationContext)}
                    />
                  </Fragment>}

                  {esFamiliarOUsuari && esDona && tipusDocumentIdentitat === 'passaport' && portaDosAnysOMesEmpadronatACatalunya &&
                  <YesNoQuestion
                    formname={formName}
                    name='membre_de_familia_reagrupada'
                    validate={[required]}
                    label={i18nKey('membre_de_familia_reagrupada', personTranslationContext)}
                   />}

                  {esFamiliarOUsuari && membreDeFamiliaReagrupada &&
                  <YesNoQuestion
                    formname={formName}
                    name ='es_una_persona_divorciada'
                    validate={[required]}
                    label={i18nKey('es_una_persona_divorciada', personAndSexTranslationContext)}
                   />}

                  {esFamiliarOUsuari &&
                  <MultipleAnswerQuestion
                    formname={formName}
                    name='municipi_empadronament'
                    label={i18nKey('municipi_empadronament', personAndSexTranslationContext)}
                    validate={[required]}
                  >
                    <MenuItem value='barcelona'>
                      <Trans i18nKey='barcelona'>Barcelona</Trans>
                    </MenuItem>
                    <MenuItem value='municipis_atm'>
                      <Trans i18nKey='municipis_atm'>Altres municipis del sistema tarifari integrat de l'ATM</Trans>
                    </MenuItem>
                    <MenuItem value='altres'>
                      <Trans i18nKey='altres_municipis_catalans'>Altres municipis catalans</Trans>
                    </MenuItem>
                    <MenuItem value='empadronat_a_esp'>
                      <Trans i18nKey='empadronat_a_esp'>Altres municipis de l'estat espanyol</Trans>
                    </MenuItem>
                    <MenuItem value='no_empadronat_a_esp'>
                      <Trans i18nKey='no_empadronat_a_esp'>No estic empadronat a l'estat espanyol</Trans>
                    </MenuItem>
                  </MultipleAnswerQuestion>
                  }

                  {municipiEmpadronament === 'barcelona' &&
                  <TimePeriodQuestion
                    formname={formName}
                    name ='anys_empadronat_a_barcelona'
                    validate={[
                      anysEmpadronatInferiorAEdat,
                      menorDe120,
                      empadronamentABarcelonaInferiorAEmpadronamentACatalunya,
                      required
                    ]}
                    label={i18nKey('anys_empadronat_a_barcelona', personAndSexTranslationContext)}
                   />}

                  {esFamiliarOUsuari && potTreballar &&
                  <Fragment>
                    <FormSubTitle><Trans i18nKey='situacio_laboral_title'>Situació laboral</Trans></FormSubTitle>

                    <MultipleAnswerQuestion
                        formname={formName}
                        name='situacio_laboral'
                        label={i18nKey('situacio_laboral', personTranslationContext)}
                        validate={[required]}>
                      <MenuItem value='treball_compte_propi'>
                        <Trans i18nKey='treball_compte_propi'>
                          Treballa per compte propi
                        </Trans>
                      </MenuItem>
                      <MenuItem value='treball_compte_daltri_jornada_complerta'>
                        <Trans i18nKey='treball_per_compte_daltri'>
                          Contracte de treball a jornada completa
                        </Trans>
                      </MenuItem>
                      <MenuItem value='treball_compte_daltri_jornada_parcial'>
                        <Trans i18nKey='altri_jornada_parcial'>
                          Contracte de treball a jornada parcial
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

                    {potTreballar &&
                    <YesNoQuestion
                      formname={formName}
                      name ='es_troba_en_erto'
                      validate={[required]}
                      label={i18nKey('es_troba_en_erto', personTranslationContext)}
                     />}

                    {esFamiliarOUsuari && esAturat &&
                    <Fragment>
                      <YesNoQuestion
                        formname={formName}
                        name ='inscrit_com_a_demandant_docupacio'
                        validate={[required]}
                        label={i18nKey('inscrit_com_a_demandant_docupacio',personAndSexTranslationContext)}
                      />

                      {inscritComADemandantDocupacio &&
                      <YesNoQuestion
                        formname={formName}
                        name ='inscrit_com_a_demandant_docupacio_mes_de_12_mesos'
                        validate={[required]}
                        label={i18nKey('inscrit_com_a_demandant_docupacio_mes_de_12_mesos',personAndSexTranslationContext)}
                       />}

                      {esAturat && !inscritComADemandantDocupacio &&
                      <YesNoQuestion
                        formname={formName}
                        name ='en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina'
                        validate={[required]}
                        label={i18nKey('en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina',personTranslationContext)}
                       />}
                    </Fragment>}

                    {esFamiliarOUsuari
                    && (tipusDocumentIdentitat === 'DNI' || tipusDocumentIdentitat === 'NIE')
                    && (esAturat || treballaPerCompteDAltriParcial) &&
                    <YesNoQuestion
                      formname={formName}
                      name ='ha_treballat_a_l_estranger_6_mesos'
                      validate={[required]}
                      label={i18nKey('ha_treballat_a_l_estranger_6_mesos', personTranslationContext)}
                     />}

                    {haTreballatALEstranger6Mesos &&
                    <YesNoQuestion
                      formname={formName}
                      name ='ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos'
                      validate={[required]}
                      label={i18nKey('ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos', personTranslationContext)}
                     />}
                  </Fragment>}
                  {potTreballar &&
                  <Fragment>
                    <FormSubTitle>
                      <Trans i18nKey='ingressos_title'>
                        Ingressos
                      </Trans>
                    </FormSubTitle>

                    <MoneyQuestion
                      formname={formName}
                      name ='ingressos_bruts'
                      validate={[required]}
                      label={i18nKey('ingressos_bruts',personTranslationContext)}
                     />

                    <MoneyQuestion
                      formname={formName}
                      name ='ingressos_bruts_ultims_sis_mesos'
                      validate={[required]}
                      label={i18nKey('ingressos_bruts_ultims_sis_mesos', personTranslationContext)}
                     />

                    {esFamiliarOUsuari && inscritComADemandantDocupacio &&
                    <YesNoQuestion
                      formname={formName}
                      name ='gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio'
                      validate={[required]}
                      label={i18nKey('gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio', personTranslationContext)}
                     />}
                     {tePrestacioContributivaOSubsidi &&
                     <YesNoQuestion
                       formname={formName}
                       name ='percep_prestacio_menys_de_950'
                       validate={[required]}
                       label={i18nKey('percep_prestacio_menys_de_950', personTranslationContext)}
                      />}

                    {esFamiliarOUsuari && esAturat &&
                    <YesNoQuestion
                      formname={formName}
                      name ='percep_prestacions_incompatibles_amb_la_feina'
                      validate={[required]}
                      label={i18nKey('percep_prestacions_incompatibles_amb_la_feina', personTranslationContext)}
                     />}

                    {(municipiEmpadronament === 'barcelona' || municipiEmpadronament === 'municipis_atm') && !tePrestacioContributivaOSubsidi &&
                    <YesNoQuestion
                      formname={formName}
                      name ='percep_ajut_serveis_socials_municipals'
                      validate={[required]}
                      label={i18nKey('percep_ajut_serveis_socials_municipals', personTranslationContext)}
                    />}

                    {edat > 17 &&
                      <MoneyQuestion
                        formname={formName}
                        name ='valor_de_patrimoni'
                        validate={[required]}
                        label='valor_de_patrimoni'
                       />}

                  </Fragment>}

                  {esFamiliarOUsuari &&
                  <Fragment>
                    <FormSubTitle>Situació personal</FormSubTitle>

                    {edat > 17 && edat < 23 &&
                    <YesNoQuestion
                      formname={formName}
                      name ='prove_de_centre_tutelat'
                      validate={[required]}
                      label='prove_de_centre_tutelat'
                     />}

                     {edat > 17 &&
                     <MultipleAnswerQuestion
                       formname={formName}
                       name ='vida_independent'
                       validate={[required]}
                       label='vida_independent'
                      >
                      <MenuItem value='1'>
                        <Trans i18nKey='vida_independent_1'>Sí, des de fa més d’un any</Trans>
                      </MenuItem>
                      <MenuItem value='2'>
                        <Trans i18nKey='vida_independent_2'>Sí, des de fa més de dos anys</Trans>
                      </MenuItem>
                      <MenuItem value='0'>
                        <Trans i18nKey='vida_independent_no'>No</Trans>
                      </MenuItem>
                    </MultipleAnswerQuestion>}

                    {edat < 30 && vidaIndependent > 0 &&
                    <YesNoQuestion
                      formname={formName}
                      name ='alta_ss_12_mesos'
                      validate={[required]}
                      label='alta_ss_12_mesos'
                     />}

                    <YesNoQuestion
                      formname={formName}
                      name ='te_algun_grau_de_discapacitat_reconegut'
                      validate={[required]}
                      label={i18nKey('te_algun_grau_de_discapacitat_reconegut', personTranslationContext)}
                     />

                    {teAlgunGrauDeDiscapacitatReconegut &&
                    <PercentageQuestion
                      formname={formName}
                      name='grau_discapacitat'
                      validate={[required]}
                      label='grau_discapacitat'
                    />}

                    <YesNoQuestion
                      formname={formName}
                      name ='te_algun_grau_de_dependencia_reconegut'
                      validate={[required]}
                      label={i18nKey('te_algun_grau_de_dependencia_reconegut', personTranslationContext)}
                    />
                    {teAlgunGrauDeDependenciaReconegut &&
                    <MultipleAnswerQuestion
                        formname={formName}
                        name='grau_dependencia'
                        label='grau_dependencia'
                        validate={[required]}>
                      <MenuItem value={1}>
                        <Trans i18nKey='dependencia_grau_1'>
                          Grau I (Dependència moderada)
                        </Trans>
                      </MenuItem>
                      <MenuItem value={2}>
                        <Trans i18nKey='dependencia_grau_2'>
                          Grau II (Dependència severa)
                        </Trans>
                      </MenuItem>
                      <MenuItem value={3}>
                        <Trans i18nKey='dependencia_grau_3'>
                          Grau III (Gran dependència)
                        </Trans>
                      </MenuItem>
                    </MultipleAnswerQuestion>
                    }

                    {potTreballar && esDona &&
                    <YesNoQuestion
                      formname={formName}
                      name ='victima_violencia_de_genere'
                      validate={[required]}
                      label={i18nKey('victima_violencia_de_genere', personTranslationContext)}
                     />}

                    {potTreballar && esHome &&
                    <YesNoQuestion
                      formname={formName}
                      name ='victima_violencia_domestica'
                      validate={[required]}
                      label={i18nKey('victima_violencia_domestica', personTranslationContext)}
                     />}

                    {(edat > 2 && edat <= 16) &&
                    <YesNoQuestion
                      formname={formName}
                      name='es_escolaritzat_entre_P3_i_4rt_ESO'
                      validate={[required]}
                      label={i18nKey('es_escolaritzat_entre_P3_i_4rt_ESO', sexTranslationContext)}
                     />}

                    {(edat > 18 && edat < 23) && !(esFill || esFillastre) &&
                    <YesNoQuestion
                      formname={formName}
                      name ='es_orfe_dels_dos_progenitors'
                      validate={[required]}
                      label={i18nKey('es_orfe_dels_dos_progenitors', sexTranslationContext)}
                     />}

                    <YesNoQuestion
                      formname={formName}
                      name ='beneficiari_de_prestacio_residencial'
                      validate={[required]}
                      label={i18nKey('beneficiari_de_prestacio_residencial', personAndSexTranslationContext)}
                     />

                    {edat > 64 &&
                    <YesNoQuestion
                      formname={formName}
                      name='sentirse_sol'
                      validate={[required]}
                      label={i18nKey('sentirse_sol', personAndSexTranslationContext)}
                     />}

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
              <Grid container direction='row' spacing={2} justify='space-around'>
                {(isTheUserInFrontOfTheComputer !== true || updating === true) &&
                <Grid item>
                  <Button variant='contained' color='secondary' onClick={props.onCancel}>
                    <Trans i18nKey='cancelar'>Cancelar</Trans>
                  </Button>
                </Grid>}

                <Grid item>
                  <Button className={classNames('hide-print')} variant='contained' color='primary' type='submit' name='ButtonValidar'>
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

const PersonFormRedux = reduxForm({
  form: formName,
  onSubmitFail: (error) => {
	  console.log(error);
	  focusFirstQuestionWithName(namefirstFieldWithError(error));
  }
})(PersonFormComponent);

const selector = formValueSelector(formName);

const PersonForm = withTranslation('translations')(connect(state => {
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
  const teAlgunGrauDeDependenciaReconegut = selector(state, 'te_algun_grau_de_dependencia_reconegut');
  const tipusDocumentIdentitat = selector(state, 'tipus_document_identitat');
  const treballaPerCompteDAltriParcial = selector(state, 'situacio_laboral') === 'treball_compte_daltri_jornada_parcial';
  const tePrestacioContributivaOSubsidi = selector(state, 'gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio');
  const vidaIndependent = selector(state, 'vida_independent');
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
    teAlgunGrauDeDependenciaReconegut,
    tipusDocumentIdentitat,
    vidaIndependent,
    treballaPerCompteDAltriParcial,
    tePrestacioContributivaOSubsidi
  };
})(PersonFormRedux));

export default PersonForm;

export const PrintPersonForm = withTranslation('translations')(PersonFormRedux);
