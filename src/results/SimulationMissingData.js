import React from 'react';
import {AppFormContainer} from '../components/AppForms';
import {Trans} from 'react-i18next';
import {Grid, Typography} from '@material-ui/core';

export default () => (
  <AppFormContainer>
    <h1><Trans i18nKey='ajudes_a_les_que_podria_optar'>Ajudes a les que podria optar</Trans></h1>
    <Grid container xs={12}>
      <Grid item xs={12} sm={11}>
        <Typography variant='h6'>
          <Trans i18nKey='falten_dades'>Falten dades per a executar la simulació</Trans>
        </Typography>
      </Grid>
    </Grid>
  </AppFormContainer>

);
