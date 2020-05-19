import React from 'react';
import {connect} from 'react-redux';
import type {Person, PersonID} from '../persons/PersonTypes';
import {submitReport} from "../reportBug/ReportBugActions";
import {fetchSimulation} from './FetchSimulationAction';
import SimulationMissingData from './SimulationMissingData';
import SimulationLoading from './SimulationLoading';
import SimulationError from './SimulationError';
import SimulationSuccess from './SimulationSuccess';

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

  enoughDataForSimulation() {
    return this.props.persons.count() > 0;
  }

  componentDidMount() {
    console.log("component did mount");
    console.log(this.props.persons.count);
    if (this.enoughDataForSimulation()) this.props.fetchSimulation(this.props.simulationData);
  }

  constructor(props) {
    super(props);
    this.submitReport = this.submitReport.bind(this);
  }

  render() {
    const {isError, isRequestDone, resultsData, persons, simulationID} = this.props;
    if (!this.enoughDataForSimulation()) {
      return (<SimulationMissingData/>);
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
    persons: state.persons
  };
}

export default connect(mapStateToProps, {fetchSimulation, submitReport})(ResultsPage);
