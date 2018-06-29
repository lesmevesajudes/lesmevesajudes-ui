import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchSimulation} from './FetchSimulationAction';
import PersonalBenefits from './PersonalBenefits';
import FamilyBenefits from './FamilyBenefits';
import type {Person, PersonID} from '../persons/PersonTypes';
import ReportBug from '../reportBug/ReportBugPage';
import axios from 'axios/index';
import {Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {IconFont} from '../components/IconFont/IconFont';

type Props = {
  isError: boolean,
  isRequestDone: boolean,
  simulationData: any,
  resultsData: any,
  persons: Map<PersonID, Person>
};

class ResultsPage extends React.Component<Props> {
  enoughDataForSimulation() {
    return this.props.persons.count() > 0;
  }

  componentDidMount() {
    if (this.enoughDataForSimulation()) this.props.fetchSimulation(this.props.simulationData);
  }

  submitReport = values => {
    // print the form values to the console
    console.log('form submit:', values);
    axios
        .post('https://lesmevesajudes-ss.herokuapp.com/api/simulations', {
          comments: values.comments || '',
          expected_result: values.resultat_esperat || '',
          application_state: values.application_state,
          valid_result: !values.invalid_result
        })
        .then(function (response) {
          console.log('saved successfully', response);
          //kill em all
          window.location.reload(true);
        })
        .catch(function (error) {
          console.error(error);
          alert(error);
        });
  };

  render() {
    if (!this.enoughDataForSimulation()) {
      return (
          <div>
            <div className='bg-container '>
              <h1>Ajudes a les que podria optar</h1>
              <Grid container>
                <Grid item>
                  <Typography className='errorText'>
                    Falten dades per a executar la simulació
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div className='bg-container '>
              <Grid container>
                <Grid item xs={12}>
                  <ReportBug onSubmit={this.submitReport}/>
                </Grid>
              </Grid>
            </div>
          </div>
      );
    }

    if (!this.props.isRequestDone) {
      return <div>Carregant...</div>;
    }

    if (this.props.isError) {
      return (
          <div>
            <h1>Error fent la petició</h1>
            <p>{this.props.resultsData.message}</p>
            <p>Details:</p>
            <p>
              {JSON.stringify(
                  JSON.parse(this.props.resultsData.response.request.responseText),
                  null,
                  2
              )}
            </p>
          </div>
      );
    }

    return (
        <Fragment>
          <div className='bg-container'>
              <Grid item xs={12} sm={12} className="titleContainer">
                  <Typography variant='headline' className="titlePage">
                    <IconFont icon="resultats"/>
                    Ajudes a les que podria optar
                  </Typography>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <PersonalBenefits
                    benefitsForPersons={this.props.resultsData.persones}
                    persons={this.props.persons}
                />
              </Grid>
              <Grid item xs={12}>
                <div>
                  <FamilyBenefits benefits={this.props.resultsData.families}/>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container>
              <Grid item xs={12}>
                <ReportBug onSubmit={this.submitReport}/>
              </Grid>
            </Grid>
          </div>
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

export default connect(mapStateToProps, {fetchSimulation})(ResultsPage);
