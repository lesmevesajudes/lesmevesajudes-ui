import React from 'react';
import {Trans} from 'react-i18next';
import {Grid, Typography} from '@material-ui/core';
import {AppFormContainer} from '../components/AppForms';
import Spinner from '../shared/spinner.svg';

export default () => (
  <AppFormContainer>
    <Grid item xs={12} sm={11}>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
          <img className="spinner" src={Spinner} width="40" alt="carregant"/>
        </Grid>
        <Grid item>
          <Typography align='center'>
            <Trans i18nKey='calculant_ajuts'>Calculant ajuts...</Trans>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </AppFormContainer>
);
