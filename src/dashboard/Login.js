import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Box, Button, Grid} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import {Trans} from "react-i18next";

const Login = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Grid>
      <Grid container alignItems="center" justify="center" direction="row" spacing={4}>
        <Box m={3}>
          <Typography gutterBottom>
            Codi accés
          </Typography>
        </Box>
        <Field component='input' type='password' name='accessCode' />
        <Button variant='text' color='default' type='submit' vertical-align="center">
          <Trans i18nKey='aceptar'>Acceptar</Trans>
        </Button>
      </Grid>
    </Grid>
  </form>
);

export default reduxForm({
  form: 'login',
})(Login);
