//@flow
import React from 'react';
import {TextField} from 'redux-form-material-ui';
import {Button, Grid} from '@material-ui/core';
import {Trans} from 'react-i18next';
import {Field} from 'redux-form/';
import {reduxForm} from 'redux-form';
import {allowOnlyPositive} from '../components/Common/NormalizeCommon';
import Typography from '@material-ui/core/Typography';
import {IconFont} from '../components/IconFont/IconFont'
const validate = values => {
  const errors = {};
  const requiredFields = [
    'how_many_persons_live_together',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Requerit'
    }
  });
  if (values.how_many_persons_live_together <= 0) {
    errors.how_many_persons_live_together = 'Introdueixi un valor superior a 0'
  }
  return errors
};
let HowManyPersonsLiveTogetherPage = props => {
  const {handleSubmit} = props;
  return (
      <Grid container className='bg-container' justify='center'>
        <Grid item xs={12} sm={12} className="titleContainer">

          <Typography variant='headline' className="titlePage">
          <IconFont icon={""} />
          <Trans>Quantes persones viuen en el seu domicili? (amb vostè inclòs)</Trans>
          </Typography>
        </Grid>
        <Grid item xs={12} className='bg-form-exterior bg-form'>
          <form onSubmit={handleSubmit}>
            <Grid container justify='center' alignItems='center' spacing={16}>
              <Grid item xs={12} sm={12}>
              <Field name='how_many_persons_live_together' placeholder='0' type='number'
                          component={TextField} normalize={allowOnlyPositive} autoFocus/>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid container className="margin-buttons" alignItems='flex-start' justify='flex-end'>
                  <Button variant="contained" color='primary' type='submit' name='ButtonValidar'>
                        <Trans>Validar</Trans>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            </form>
          </Grid>
      </Grid>
  );
};

HowManyPersonsLiveTogetherPage = reduxForm({
  form: 'HowManyPersonsLiveTogetherForm',
  validate
})(HowManyPersonsLiveTogetherPage);

export default HowManyPersonsLiveTogetherPage;
