import React, {useEffect, useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { subMonths, subYears, startOfMonth, endOfMonth, startOfYear, min, max } from 'date-fns/fp';
import { compose } from 'ramda';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {DatePicker} from "@material-ui/pickers";
import {makeStyles} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import {SIMULATIONS_DASHBOARD_FILTER} from './SimulationsDashboardReducer';
import {retrieveResults} from "../DashboardAction";


type Props = {
  allResults: [],
  dispatch: any,
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  aidCheckBox: {
    padding: 0,
    paddingLeft: 10,
    fontSize: 10,
  },
  label: {
       fontSize: '0.8em'
   },
  filterBlock : {
    paddingBottom: 10,
  },
  MuiTypography: {
    body1: {
      fontSize: 10,
    }
  }
}));

const getMinDate = compose(startOfYear, (subYears(1)));
const getDefaultFromDate = compose(startOfMonth, (subMonths(3)));
const getMaxDate = endOfMonth;

const FilterPanel = (props: Props) => {

  const classes = useStyles();
  //const {t} = useTranslation('dashboard');

  useEffect(() => {
    props.dispatch({
      type: SIMULATIONS_DASHBOARD_FILTER,
      fromDate,
      untilDate,
    });
  }, []);
  const currentDate = new Date();
  const minDate = getMinDate(currentDate);
  const maxDate = getMaxDate(currentDate);
  const defaultFromDate = getDefaultFromDate(currentDate);

  const [fromDate, handleFromDateChange] = useState(props.fromDate || defaultFromDate);
  const [untilDate, handleUntilDateChange] = useState(props.untilDate || maxDate);

  const applyFilter = () => {
    props.dispatch({
      type: SIMULATIONS_DASHBOARD_FILTER,
      fromDate,
      untilDate,
    });
    props.retrieveResults(fromDate, untilDate);
  };

  useEffect(() => {
    applyFilter();
  }, []);

  return (
    <Paper elevation={2}>
      <FormControl className={classes.formControl} disabled={props.loading}>
        <FormLabel>Des de</FormLabel>
        <DatePicker
          id='month'
          className={classes.filterBlock}
          views={["year", "month"]}
          minDate={minDate}
          maxDate={min([maxDate, untilDate])}
          value={fromDate}
          onChange={handleFromDateChange}
        />

        <FormLabel>Fins a</FormLabel>
        <DatePicker
          id='month'
          className={classes.filterBlock}
          views={["year", "month"]}
          minDate={max([minDate, fromDate])}
          maxDate={maxDate}
          value={untilDate}
          onChange={handleUntilDateChange}
        />
        <Button variant="contained" onClick={applyFilter}>
          {props.loading ? (
            <>
              <Icon>cached</Icon>
              Calculant...
            </>
          ) : 'Aplica'}
        </Button>
      </FormControl>
    </Paper>
    );
}

const mapStateToProps = (state) => {
  return {
    fromDate: state.simulationsDashboard.fromDate,
    untilDate: state.simulationsDashboard.untilDate,
    loading: state.dashboard.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveResults : bindActionCreators(retrieveResults, dispatch),
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
