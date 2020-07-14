import React from 'react';
import {Trans} from 'react-i18next';
import {Grid, Typography} from '@material-ui/core';
import {AppFormContainer} from '../components/AppForms';

export default (simulationID) => (
  <AppFormContainer>
    <Grid item xs={12} sm={11}>
      <Typography variant='h6'><Trans i18nKey='error_fent_la_peticio'>Error fent la petició</Trans></Typography>
      <Grid container direction='column' className='ResultList'>
        <Grid item>
          {/*<Typography><Trans i18nKey='detalls'>Detalls:</Trans></Typography>*/}
          {/*<Typography>{resultsData.message}</Typography>*/}
          {/*<Typography>{JSON.stringify(resultsData.response ? resultsData.response.data : 'Unknown error', null, 2)}</Typography>*/}
          <Typography><Trans i18nKey='result_error'>No s'ha pogut realitzar la simulació, provi més tard</Trans></Typography>
          {this.props.simulationID &&
            <Typography><Trans i18nKey='identificador_simulacio'>Identificador simulació</Trans>: {simulationID}</Typography>
          }
        </Grid>
      </Grid>
    </Grid>
  </AppFormContainer>
);
