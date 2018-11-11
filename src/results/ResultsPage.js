import {Grid, Typography, withStyles} from '@material-ui/core';
import React from 'react';
import {Trans} from 'react-i18next';
import {connect} from 'react-redux';
import {AppFormContainer, AppFormTitle} from '../components/AppForms';
import ShowMeOnceModal from '../components/ShowMeOnceModal'
import type {Person, PersonID} from '../persons/PersonTypes';
import {submitReport} from "../reportBug/ReportBugActions";
import ReportBug from '../reportBug/ReportBugForm';
import Spinner from '../shared/spinner.svg';
import {styles} from '../styles/theme';
import {fetchSimulation} from './FetchSimulationAction';
import PersonalBenefits from './PersonalBenefits';
import UnitatDeConvivenciaBenefits from './UnitatDeConvivenciaBenefits';

export const ResultsContainer = withStyles(styles)((props: AppFormProps) =>
    <Grid item xs={12} md={11} className={props.classes.resultsContainer}>
      {props.children}
    </Grid>);

type Props = {
  dispatch: Function,
  isError: boolean,
  isRequestDone: boolean,
  persons: Map<PersonID, Person>,
  resultsData: any,
  simulationData: any,
  simulationID: string,
};

class ResultsPage extends React.Component<Props> {
  submitReport = values => {
    // print the form values to the console
    console.log('form submit:', values);
    this.props.submitReport(values);
  };
  getReportBugDataFromLocalStorage = () => (
      {
        ...(typeof localStorage.getItem('reporter_email') !== 'undefined' && {reporter_email: localStorage.getItem('reporter_email')}),
        ...(typeof localStorage.getItem('test_group') !== 'undefined' && {test_group: localStorage.getItem('test_group')})
      });

  enoughDataForSimulation() {
    return this.props.persons.count() > 0;
  }

  componentDidMount() {
    if (this.enoughDataForSimulation()) this.props.fetchSimulation(this.props.simulationData);
  }

  constructor(props) {
    super(props);
    this.period = '2017-01';
    this.submitReport = this.submitReport.bind(this);
  }

  render() {
    const {isError, isRequestDone, resultsData, persons, simulationID} = this.props;
    if (!this.enoughDataForSimulation()) {
      return (
          <AppFormContainer>
            <h1><Trans i18nKey='ajudes_a_les_que_podria_optar'>Ajudes a les que podria optar</Trans></h1>
            <Grid container xs={12}>
              <Grid item xs={12} md={11}>
                <Typography className={this.props.classes.errorText}>
                  <Trans i18nKey='falten_dades'>Falten dades per a executar la simulació</Trans>
                </Typography>
              </Grid>
            </Grid>
          </AppFormContainer>
      );
    }

    if (!isRequestDone) {
      return (
          <AppFormContainer>
            <Grid item xs={12} md={11}>
              <Grid container direction='column' justify='center' alignItems='center'>
                <Grid item>
                  <img className="spinner" src={Spinner} width="40" alt="carregant"/>
                </Grid>
                <Grid item>
                  <Typography align='center'>
                    <Trans i18nKey='calculant_ajuts'>Calculant ajuts...</Trans>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </AppFormContainer>);
    }

    if (isRequestDone && isError) {
      return (
          <AppFormContainer>
            <Grid item xs={12}>
              <Typography variant='h6'><Trans i18nKey='error_fent_la_peticio'>Error fent la petició</Trans></Typography>
              <Grid container direction='column' className='ResultList'>
                <Grid item>
                  <Trans i18nKey='detalls'>Detalls:</Trans>
                  <Typography>{resultsData.message}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </AppFormContainer>
      );
    }
    //Añadir Trans en titlePage
    return (
        <AppFormContainer>
          <ShowMeOnceModal name='resultsModal'
                           title={<Trans i18nKey='ajudes_a_les_que_podria_optar'>Ajudes a les que podria optar</Trans>}>
            <Trans i18nKey='avis_ajudes_a_les_que_podria_optar'>A continuació es mostrarà el conjunt d’ajudes a les
              quals podria arribar a optar.
              L’informem que la concessió d’una d’elles pot fer variar els llindars d’ingressos i/o requisits que
              les
              altres ajudes preveuen per a ser concedides.&nbsp;
              Per tant, a la pràctica, pot trobar ajudes incompatibles entre sí.&nbsp;
              Informi-se’n clicant sobre cada ajut.</Trans>
          </ShowMeOnceModal>
          <AppFormTitle iconName='resultats'>
            <Trans i18nKey='a_partir_de_la_informacio_facilitada_linformem_que'>
              A partir de la informació que ens ha facilitat, a continuació li informem que:
            </Trans>
          </AppFormTitle>
          <ResultsContainer>
            <Typography style={{background: '#f2f2f2', zIndex: 4}} gutterBottom>
              <Trans i18nKey='avis_variacio_ajuts'>
                Li recordem que la concessió d’una d’aquestes ajudes pot fer variar els seus ingressos i/o
                requisits
                fent que algunes de les ajudes llistades no puguin ser concedides.
                Per tant, a la pràctica, pot trobar ajudes incompatibles entre sí.
                Informi-se’n clicant sobre cada ajut.
              </Trans>
            </Typography>

            <Grid item xs={12}>
              <PersonalBenefits
                  benefitsForPersons={resultsData.persones}
                  persons={persons}
              />
            </Grid>
            <Grid item xs={12}>
              <UnitatDeConvivenciaBenefits
                  unitatDeConvivencia={resultsData.unitats_de_convivencia}
                  persons={persons}
                  period={this.period}
              />
            </Grid>
            <Grid item xs={12}>
              <ReportBug initialValues={this.getReportBugDataFromLocalStorage()} onSubmit={this.submitReport}/>
            </Grid>
            <Grid item>
              simulation ID: {simulationID}
            </Grid>
          </ResultsContainer>
        </AppFormContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    isError: state.results.isError,
    isRequestDone: state.results.isRequestDone,
    simulationData: state,
    resultsData: state.results.response,
    simulationID: state.results.response !== null ? state.results.response.id : 'none',
    persons: state.persons
  };
}

export default connect(mapStateToProps, {fetchSimulation, submitReport})(ResultsPage);
