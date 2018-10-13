import {Grid, Typography} from '@material-ui/core';
import React from 'react';
import {Trans} from 'react-i18next';
import {connect} from 'react-redux';
import {AppForm, AppFormContainer, AppFormTitle} from '../components/AppForms';
import ShowMeOnceModal from '../components/ShowMeOnceModal'
import type {Person, PersonID} from '../persons/PersonTypes';
import {submitReport} from "../reportBug/ReportBugActions";
import ReportBug from '../reportBug/ReportBugForm';
import Spinner from '../shared/spinner.svg';
import FamilyBenefits from './FamilyBenefits';
import {fetchSimulation} from './FetchSimulationAction';
import PersonalBenefits from './PersonalBenefits';
import UnitatDeConvivenciaBenefits from './UnitatDeConvivenciaBenefits';

type Props = {
  isError: boolean,
  isRequestDone: boolean,
  simulationData: any,
  resultsData: any,
  dispatch: Function,
  persons: Map<PersonID, Person>
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
    const {isError, isRequestDone, resultsData, persons} = this.props;
    if (!this.enoughDataForSimulation()) {
      return (
          <AppFormContainer>
            <h1>Ajudes a les que podria optar</h1>
            <Grid container xs={12}>
              <Grid item xs={12}>
                <Typography className='errorText'>
                  <Trans>Falten dades per a executar la simulació</Trans>
                </Typography>
              </Grid>
            </Grid>
          </AppFormContainer>
      );
    }

    if (!isRequestDone) {
      return (
          <AppFormContainer>
            <Grid item xs={12} className='bg-form-exterior'>
              <Grid container direction='column' justify='center' alignItems='center'>
                <Grid item>
                  <img className="spinner" src={Spinner} width="40" alt="carregant"/>
                </Grid>
                <Grid item>
                  <Typography align='center'>
                    <Trans>Calculant ajuts...</Trans>
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
              <Typography variant='h6'>Error fent la petició</Typography>
              <Grid container direction='column' className='ResultList'>
                <Grid item className='ItemResult'>
                  <Trans>Detalls:</Trans>
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
          <ShowMeOnceModal name='resultsModal' title='Ajudes a les que podria optar'>
            <Trans>A continuació es mostrarà el conjunt d’ajudes a les quals podria arribar a optar.
              L’informem que la concessió d’una d’elles pot fer variar els llindars d’ingressos i/o requisits que
              les
              altres ajudes preveuen per a ser concedides.&nbsp;
              Per tant, a la pràctica, pot trobar ajudes incompatibles entre sí.&nbsp;
              Informi-se’n clicant sobre cada ajut.</Trans>
          </ShowMeOnceModal>
          <AppFormTitle iconName='resultats'>
            <Trans>A partir de la informació que ens ha facilitat, a continuació li informem que:</Trans>
          </AppFormTitle>
          <AppForm>
            <Typography style={{background: '#f2f2f2', zIndex: 4}} gutterBottom>
              <Trans>
                Li recordem que la concessió d’una d’aquestes ajudes pot fer variar els seus ingressos i/o
                requisits
                fent que algunes de les ajudes llistades no puguin ser concedides.
                Per tant, a la pràctica, pot trobar ajudes incompatibles entre sí.
                Informi-se’n clicant sobre cada ajut.
              </Trans>
            </Typography>
          </AppForm>
          <Grid item xs={12} className='bg-form-exterior'>
            <Grid item xs={12}>
              <PersonalBenefits
                  benefitsForPersons={resultsData.persones}
                  persons={persons}
              />
            </Grid>
            <Grid item xs={12}>
              <FamilyBenefits benefits={resultsData.families}/>
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
          </Grid>
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
    persons: state.persons
  };
}

export default connect(mapStateToProps, {fetchSimulation, submitReport})(ResultsPage);
