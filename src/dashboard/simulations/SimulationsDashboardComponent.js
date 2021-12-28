import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid} from '@material-ui/core';
import FilterPanel from './FilterPanel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ChronologicDataChart from './charts/ChronologicDataComponent';
import DonutChart from '../../components/Charts/DonutChartComponent';
import HorizontalBarChart from '../../components/Charts/HorizontalBarChartComponent';
import {keys, map, pipe} from 'ramda';
import {retrieveResults, countEdited} from '../DashboardAction';
import {useTranslation} from 'react-i18next';

type Props = {
  positiveNegativeData: Object,
  totalSimulationsByMonthData: Object,
  recalculatedSimulationsByMonthData: Object,
  retrieveResults: Function,
  simulationsByPersonsData: Object,
  fromDate: Date,
  untilDate: Date,
};

const SimulationsDashboard = (props :Props) => {

  const {t} = useTranslation('dashboard');
  const getPersonLabel = number => number + ' Persones'

  return (
    <Grid container direction='row'>
      <Grid xs={3} item>
        <FilterPanel />
      </Grid>
      <Grid container direction='column' xs={9} spacing={5} item>

        <Grid container direction='row' spacing={5} item>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <ChronologicDataChart
                  from={props.fromDate}
                  until={props.untilDate}
                  totalSimuationsByMonth={props.totalSimulationsByMonthData}
                  recalculatedSimulationsByMonth={props.recalculatedSimulationsByMonthData}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container direction='row' spacing={5} item>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <HorizontalBarChart data={props.simulationsByPersonsData} title={'Per nº de persones'} labels={pipe(keys,map(getPersonLabel))(props.simulationsByPersonsData)} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <DonutChart height={50} data={props.positiveNegativeData} title={t('simulation_resultats')}/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    totalSimulationsByMonthData: state.dashboard.totalSimulationsByMonthData,
    recalculatedSimulationsByMonthData: state.dashboard.recalculatedSimulationsByMonthData,
    simulationsByPersonsData: state.dashboard.simulationsByPersonsData,
    positiveNegativeData: state.dashboard.positiveNegativeData,
    fromDate: state.simulationsDashboard.fromDate,
    untilDate: state.simulationsDashboard.untilDate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveResults : bindActionCreators(retrieveResults, dispatch),
    countEdited : bindActionCreators(countEdited, dispatch),
    dispatch,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SimulationsDashboard);
