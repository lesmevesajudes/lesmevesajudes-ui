import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid} from '@material-ui/core';
import AidsTable from './AidsTable';
import FilterPanel from './FilterPanel';
import {retrieveAids} from '../DashboardAction';
import {FilterType} from './AidsDashboardTypes';

type Props = {
  aids: [],
  filter: FilterType,
  date: Date,
  retrieveAids: any
};

const AidsDashboard = (props :Props) => {
  useEffect(() => {
      props.retrieveAids();
  }, [props.retrieveAids]);

  return (
    <Grid container>
      <Grid xs={3} item container spacing={5}>
          <FilterPanel />
      </Grid>
      <Grid xs={9} item direction="column" container spacing={5}>
        <Grid xs item>
          <AidsTable aids={props.aids} filter={props.filter} date={props.date}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    aids: state.dashboard.aids,
    filter: state.aidsDashboard.filter,
    date: state.aidsDashboard.date
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveAids : bindActionCreators(retrieveAids, dispatch),
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AidsDashboard);
