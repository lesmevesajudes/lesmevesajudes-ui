import React from 'react';
import {connect} from 'react-redux';
import {Trans} from 'react-i18next';
import {AppFormContainer} from '../components/AppForms';
import type {Person, PersonID} from '../persons/PersonTypes';
import {submitReport} from "../reportBug/ReportBugActions";
import {fetchSimulation} from './FetchSimulationAction';
import SimulationMissingData from './SimulationMissingData';
import SimulationLoading from './SimulationLoading';
import SimulationError from './SimulationError';
import SimulationSuccess from './SimulationSuccess';
import {isAdmin} from '../pages/Wizard';

type Props = {
  dispatch: Function,
  isError: boolean,
  isRequestDone: boolean,
  persons: Map<PersonID, Person>,
  resultsData: any,
  simulationData: any,
  simulationID: string,
  initialSimulationId: string,
  isShowSimulation: boolean,
  isAdmin: boolean,
};

class ResultsPage extends React.Component<Props> {
  submitReport = values => {
    // print the form values to the console
    console.log('form submit:', values);
    this.props.submitReport(values);
  };

  enoughDataForSimulation() {
    return this.props.persons.count() > 0;
  }

  componentDidMount() {
	  if (this.enoughDataForSimulation() && !this.props.isShowSimulation) {
		  this.props.fetchSimulation(this.props.simulationData);
	  }
  }

  constructor(props) {
    super(props);
    this.submitReport = this.submitReport.bind(this);
  }

  render() {
    const {isError, isRequestDone, resultsData, persons, simulationID, initialSimulationId, classes, isShowSimulation, isAdmin} = this.props;
    if (!this.enoughDataForSimulation() && !isAdmin) {
      return (<SimulationMissingData/>);
    }

    if (!this.enoughDataForSimulation() && isAdmin) {
        return (
            <AppFormContainer>
              <h1><Trans i18nKey='introdueix_codi_simulació'>Introdueix el codi de la simulació</Trans></h1>
            </AppFormContainer>
        );
      }

    if (!isRequestDone) {
      return (<SimulationLoading/>);
    }

    if (isRequestDone && isError) {
      return (<SimulationError resultsData={resultsData} simulationID={simulationID}/>);
    }
    return (<SimulationSuccess
      resultsData={resultsData}
      persons={persons}
      simulationID={simulationID}
      initialSimulationId={initialSimulationId}
      isShowSimulation={isShowSimulation}
      />);
  }
}

function mapStateToProps(state) {
  return {
    isError: state.results.isError,
    isRequestDone: state.results.isRequestDone,
    simulationData: state,
    resultsData: state.results.response,
    simulationID: state.results.simulationID !== null ? state.results.simulationID : 'none',
    initialSimulationId : state.results.initialSimulationId !== undefined ? state.results.initialSimulationId : null,
    persons: state.persons,
    isShowSimulation: state.step.is_show_simulation,
    isAdmin: state.admin.isAdmin,
  };
}

export default connect(mapStateToProps, {fetchSimulation, submitReport})(ResultsPage);
