//@flow
import React from 'react';
import {connect} from 'react-redux';
import {reportBug} from './ReportBugActions';
import {withRouter} from 'react-router-dom';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import {Checkbox, TextField} from 'redux-form-material-ui';
import {Button, Grid} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

type Props = {
  currentState: any,
  handleSubmit: Function,
  onCancel: Function,
  resultatIncorrecte: Boolean
}

const ReportBug = (props: Props) => {
  const {handleSubmit, resultatIncorrecte} = props;
  return (
      <Grid container className="container-family">
        <Grid item sm={12}>
          <Typography variant="headline" gutterBottom>Informar del resultat de la simulació</Typography>
        </Grid>
        <Grid item sm={12}>
          <Grid item className="bg-container extra-padding">
            <form name="ReportBug" onSubmit={handleSubmit}>
              <Grid item>
                <label><Field name='invalid_result' component={Checkbox}/> El resultat de la simulació NO és
                  correcte.</label>
              </Grid>
              {resultatIncorrecte &&
              <Grid item>
                <label>Resultat esperat</label>
                <Field name="resultat_esperat" component={TextField} placeholder='...'/>
              </Grid>
              }
              <Grid item>
                <label>Comentaris</label>
                <Field name='comments' placeholder='...' fullWidth component={TextField}/>
              </Grid>
              <Field component="input" name="application_state" type="hidden"/>
              <Button variant="raised" color="primary" type="submit">Informar</Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
  );
};

const selector = formValueSelector('ReportBug');

function mapStateToProps(state) {
  return {
    initialValues: {application_state: JSON.stringify(state)},
    resultatIncorrecte: selector(state, 'invalid_result')
  };
}

export default connect(mapStateToProps, {reportBug})(withRouter(reduxForm({
  form: 'ReportBug'
})(ReportBug)));
