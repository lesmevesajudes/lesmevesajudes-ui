import React from 'react';
import {connect} from 'react-redux';
import {styles} from '../styles/theme';
import {Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import ResultsComponent from './ResultsComponent';
import Moment from 'moment';

type Props = {
  classes: Object,
  persons: Map<PersonID, Person>,
  resultsData: any,
  simulationData: any,
  simulationID: string,
  initialSimulationId: string,
};

class PrintResultPage extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.period = Moment().format('YYYY-MM');
  }

  render() {
    const {resultsData, persons, simulationID, initialSimulationId, classes} = this.props;
    return (
    	<Grid id="result_page">
    		<ResultsComponent classes={classes} resultsData={resultsData} persons={persons} simulationID={simulationID} initialSimulationId={initialSimulationId} period={this.period}/>
        </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    simulationData: state,
    resultsData: state.results.response,
    simulationID: state.results.simulationID !== null ? state.results.simulationID : 'none',
    initialSimulationId : state.results.initialSimulationId !== undefined ? state.results.initialSimulationId : null,
    persons: state.persons,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(PrintResultPage));
