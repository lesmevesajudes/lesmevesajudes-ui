//@flow
import React from 'react';
import {connect} from 'react-redux';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import {Checkbox, TextField} from 'redux-form-material-ui';
import {Button, Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Trans} from "react-i18next";
import Spinner from '../shared/spinner.svg';

type Props = {
  currentState: any,
  handleSubmit: Function,
  resultatIncorrecte: boolean,
  isError: boolean,
  isRequestDone: boolean,
  requestInProgress: boolean
}

const ReportBug = (props: Props) => {
      const {handleSubmit, resultatIncorrecte, isError, isRequestDone, requestInProgress} = props;
      if (requestInProgress) return (
          <Grid container direction='column'>
            <Grid item sm={12}>
              <Grid container direction='column' justify='center' alignItems='center'>
                <Grid item>
                  <img className="spinner" src={Spinner} width="40" alt="carregant"/>
                </Grid>
                <Grid item>
                  <Typography align='center'>
                    <Trans>Carregant...</Trans>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      );
      if (!isRequestDone) {
        return (
            <Grid container direction='column'>
              <Grid item sm={12}>
                <Typography variant='headline' gutterBottom>Informar del resultat de la simulació</Typography>
              </Grid>
              <Grid container direction='column' spacing={16}>
                <form onSubmit={handleSubmit}>
                  <Grid item sm={12}>
                    <label>
                      <Field name='invalid_result' component={Checkbox}/>
                      El resultat de la simulació NO és correcte.
                    </label>
                  </Grid>
                  {resultatIncorrecte &&
                  <Grid item>
                    <label>Resultat esperat</label>
                    <Field name='resultat_esperat' component={TextField} placeholder='...'/>
                  </Grid>
                  }
                  <Grid item>
                    <label>Comentaris</label>
                    <Field name='comments' placeholder='...' fullWidth component={TextField}/>
                  </Grid>
                  <Field component='input' name='application_state' type='hidden'/>
                  <Grid item className='margin-buttons'>
                    <Button variant='raised' color='primary' type='submit'>Informar</Button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
        );
      } else if (isRequestDone && !isError) {
        return (
            <Grid container direction='column'>
              <Grid item sm={12}>
                <Typography variant='headline' gutterBottom>
                  <Trans>Gràcies per informar del resultat de la simulació</Trans>
                </Typography>
              </Grid>
            </Grid>
        )
      } else if (isRequestDone && isError) {
        return (<Grid container direction='column'>
          <Grid item sm={12}>
            <Typography variant='headline' gutterBottom>
              <Trans>Hi ha hagut un error informant de l'errada.</Trans>
            </Typography>
          </Grid>
        </Grid>)
      }
    }
;

const selector = formValueSelector('ReportBug');

function mapStateToProps(state) {
  return {
    initialValues: {application_state: JSON.stringify(state)},
    resultatIncorrecte: selector(state, 'invalid_result'),
    isError: state.reportBug.isError,
    isRequestDone: state.reportBug.isRequestDone,
    requestInProgress: state.reportBug.requestInProgress,
    response: state.reportBug.response
  };
}

export default connect(mapStateToProps)(reduxForm({
  form: 'ReportBug',
})(ReportBug));
