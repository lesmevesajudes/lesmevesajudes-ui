import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Grid,Typography} from '@material-ui/core';
import {map, propOr, compose} from 'ramda';
import {useTranslation} from 'react-i18next';
import {eachMonthOfInterval, format} from 'date-fns/fp';

const monthRange = compose(
  map(format('yy/MM')),
  eachMonthOfInterval,
);

const ChronologicDataChart = ({from, until, totalSimuationsByMonth, recalculatedSimulationsByMonth}) => {

  const {t} = useTranslation('dashboard');
  const months = (from && until) ? monthRange({ start: from, end: until }) : [];
  const getValues = (data) =>  map(m => propOr(0, m, data))(months)

  const vals = {
    labels: months,
    datasets: [
      {
        type: 'bar',
        label: 'Totals',
        backgroundColor: '#bdcebe',
        data: getValues(totalSimuationsByMonth),
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'Recalculades',
        backgroundColor: '#eca1a6',
        data : getValues(recalculatedSimulationsByMonth),
      },
    ],
  }

  return <Grid align='center' item>
          <Typography variant='h3' color='textPrimary'>{t('simulation_number')}</Typography>
          <Bar data={vals} />
         </Grid>
}

export default ChronologicDataChart;
