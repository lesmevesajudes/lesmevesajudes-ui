//@flow
import {Button, Grid, MenuItem} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {Trans} from "react-i18next";
import {connect} from 'react-redux';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import MultipleAnswerQuestion from '../persons/components/MultipleAnswerQuestion';
import {YesNoQuestion} from '../persons/components/YesNoQuestion';
import {email, required} from '../shared/formValidators';
import Spinner from '../shared/spinner.svg';
import * as UUID from '../shared/UUID';

type Props = {
  currentState: any,
  handleSubmit: Function,
  resultatIncorrecte: boolean,
  initialValues: Object,
  isError: boolean,
  isRequestDone: boolean,
  reset: Function,
  requestInProgress: boolean,
}

const ReportBugForm = (props: Props) => {
      const {handleSubmit, resultatIncorrecte, isError, isRequestDone, requestInProgress} = props;
      console.log('props: ', props);
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
            <Grid container direction='column' className='ItemResult'>
              <Grid item sm={12}>
                <Typography variant='headline' gutterBottom>Informar del resultat de la simulació</Typography>
              </Grid>
              <Grid container direction='column' justify='space-between' spacing={16}>
                <form onSubmit={handleSubmit}>
                  <Grid item>
                    <YesNoQuestion name='accepted_result' validate={[required]}>
                      <Trans>El resultat de la simulació és correcte?</Trans>
                    </YesNoQuestion>
                  </Grid>
                  {resultatIncorrecte &&
                  <Grid item xs={11}>
                    <label>
                      <Trans>
                        Indiqui quin és el resultat esperat (ajuda que esperava rebre, persones que l'hauríen de rebre, .. )
                      </Trans>
                    </label>
                    <Field name='expected_result' placeholder='...' fullWidth component={TextField} validate={[required]}/>
                  </Grid>
                  }
                  <Grid item xs={11}>
                    <label>Comentaris o millores</label>
                    <Field name='comments' placeholder='...' fullWidth component={TextField}/>
                  </Grid>
                  <Grid item xs={11}>
                    <label>Faciliti el seu correu electrònic</label>
                    <Field name='reporter_email' placeholder='john@doe.com' component={TextField}
                           validate={[required, email]}/>
                  </Grid>
                  <Grid item xs={11}>
                    <MultipleAnswerQuestion label={<Trans>Grup de probes</Trans>} name='test_group' validate={[required]}>
                      <MenuItem value='professional_serveis_socials'>
                        <Trans>Professional serveis socials</Trans>
                      </MenuItem>
                      <MenuItem value='entitat_del_tercer_sector'>
                        <Trans>Entitat del tercer sector</Trans>
                      </MenuItem>
                      <MenuItem value='altre_personal_de_l_ajuntament_de_barcelona'>
                        <Trans>Altre personal de l'ajuntament de barcelona</Trans>
                      </MenuItem>
                      <MenuItem value='altres'>
                        <Trans>Altres</Trans>
                      </MenuItem>
                    </MultipleAnswerQuestion>
                  </Grid>
                  <Field component='input' name='application_state' type='hidden'/>
                  <Field component='input' name='simulation_id' type='hidden'/>
                  <Grid container direction='row'>
                    <Grid item className='margin-buttons'>
                      <Button variant='raised' color='primary' type='submit'><Trans>Informar</Trans></Button>
                    </Grid>
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

function mapStateToProps(state, ownProps) {
  return {
    initialValues: {...ownProps.initialValues, application_state: JSON.stringify(state), simulation_id: UUID.create()},
    resultatIncorrecte: selector(state, 'accepted_result') === false,
    isError: state.reportBug.isError,
    isRequestDone: state.reportBug.isRequestDone,
    requestInProgress: state.reportBug.requestInProgress,
    response: state.reportBug.response
  };
}

export default connect(mapStateToProps)(reduxForm({
  form: 'ReportBugForm',
})(ReportBugForm));
