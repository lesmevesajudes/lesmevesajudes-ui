import {Grid, Typography} from '@material-ui/core';
import React, {Fragment} from 'react';
import {Trans} from 'react-i18next';
import {connect} from 'react-redux';
import {IconFont} from '../components/IconFont/IconFont';
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
    if (!this.enoughDataForSimulation()) {
      return (
          <Grid container xs={12}>
            <Grid item xs={12} className='bg-container'>
              <h1>Ajudes a les que podria optar</h1>
              <Grid container xs={12}>
                <Grid item xs={12}>
                  <Typography className='errorText'>
                    <Trans>Falten dades per a executar la simulació</Trans>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      );
    }

    if (!this.props.isRequestDone) {
      return (
          <Grid container direction='column' justify='center' alignItems='center' className='bg-container'>
            <Grid item xs={12} className='bg-form-exterior'>
              <Grid container direction='column' justify='center' alignItems='center'>
                <Grid item>
                  <img className="spinner" src={Spinner} width="40" alt="carregant"/>
                </Grid>
                <Grid item>
                  <Typography align='center'>
                    <Trans>Carregant...</Trans>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>);
    }

    if (this.props.isRequestDone && this.props.isError) {
      return (
          <Fragment>
            <Grid container className='bg-container' justify='center'>
              <Grid item xs={12} className='bg-form-exterior'>
                <Grid item xs={12}>
                  <Typography variant='title'>Error fent la petició</Typography>
                  <Grid container direction='column' className='ResultList'>
                    <Grid item className='ItemResult'>
                      <Trans>Detalls:</Trans>
                      <Typography>{this.props.resultsData.message}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Fragment>
      );
    }
    //Añadir Trans en titlePage
    return (
        <Fragment>
          <ShowMeOnceModal name='resultsModal' title='Ajudes a les que podria optar'>
            <Trans>A continuació es mostrarà el conjunt d’ajudes a les quals podria arribar a optar.
              L’informem que la concessió d’una d’elles pot fer variar els llindars d’ingressos i/o requisits que
              les
              altres ajudes preveuen per a ser concedides.&nbsp;
              Per tant, a la pràctica, pot trobar ajudes incompatibles entre sí.&nbsp;
              Informi-se’n clicant sobre cada ajut.</Trans>
          </ShowMeOnceModal>
          <Grid container className='bg-container' justify='center'>

            <Grid item xs={12} sm={12} className='titleContainer'>
              <Typography variant='headline' className='titlePage'>
                <IconFont icon='resultats' sizeSphere={48} fontSize={32}/>
                <span className='titleText'><Trans>A partir de la informació que ens ha facilitat, a continuació li informem que:</Trans></span>
              </Typography>
            </Grid>
            <Grid item xs={12} className='bg-form-exterior'>
              <Grid item xs={12}>
                <PersonalBenefits
                    benefitsForPersons={this.props.resultsData.persones}
                    persons={this.props.persons}
                />
              </Grid>
              <Grid item xs={12}>
                <FamilyBenefits benefits={this.props.resultsData.families}/>
              </Grid>
              <Grid item xs={12}>
                <UnitatDeConvivenciaBenefits
                    unitatDeConvivencia={this.props.resultsData.unitats_de_convivencia}
                    persons={this.props.persons}
                    period={this.period}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom>
                  <Trans>
                    Li recordem que la concessió d’una d’aquestes ajudes pot fer variar els seus ingressos i/o
                    requisits
                    fent que algunes de les ajudes llistades no puguin ser concedides.&nbsp;
                    Per tant, a la pràctica, pot trobar ajudes incompatibles entre sí.&nbsp;
                    Informi-se’n clicant sobre cada ajut..
                  </Trans>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {console.log('qqq ', this.getReportBugDataFromLocalStorage())}

                <ReportBug initialValues={this.getReportBugDataFromLocalStorage()} onSubmit={this.submitReport}/>
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
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
