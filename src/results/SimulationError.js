import React from 'react';
import {Trans} from 'react-i18next';
import {Grid, Typography} from '@material-ui/core';
import {AppFormContainer} from '../components/AppForms';

export default (resultsData, simulationID) => (
  <AppFormContainer>
    <Grid item xs={12} sm={11}>
      <Typography variant='h6'><Trans i18nKey='error_fent_la_peticio'>Error fent la petició</Trans></Typography>
    </Grid>
  </AppFormContainer>
);
