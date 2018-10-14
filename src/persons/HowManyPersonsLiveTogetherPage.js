//@flow
import {Button, Grid} from '@material-ui/core';
import React from 'react';
import {Trans} from 'react-i18next';
import {withRouter} from 'react-router-dom'
import {reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import {Field} from 'redux-form/';
import {AppForm, AppFormContainer, AppFormTitle} from '../components/AppForms';
import {allowOnlyPositive} from '../components/Common/NormalizeCommon';
import ShowMeOnceModal from '../components/ShowMeOnceModal'

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
type Props = {
  classes: Object,
  history: Object,
  handleSubmit: Function
}

let HowManyPersonsLiveTogetherPage = (props: Props) => {
  const {handleSubmit, history} = props;
  return (
      <AppFormContainer>
        <AppFormTitle iconName='persona'>
          <Trans>Quantes persones viuen en el seu domicili? (amb vostè inclòs)</Trans>
        </AppFormTitle>

        <ShowMeOnceModal name='howManyPersonsModal' title='Dades sobre les persones'>
          <Trans>
            Pot començar la simulació.<br/>
            A partir d’aquest moment, li formularem una sèrie de preguntes sobre vostè i sobre els membres de la seva
            llar
            que són necessàries per conèixer els ajuts als quals pot arribar a optar.<br/>
            Li informem que les dades de caràcter personal que es recullin a través dels recursos disponibles en el
            portal
            es tractaran de forma confidencial i en cap cas no s'utilitzaran amb finalitats incompatibles amb la Llei
            orgànica de protecció de dades de caràcter personal (LOPD) i/o Reglament general de protecció de dades
            (RGPD)
          </Trans>
        </ShowMeOnceModal>
        <AppForm>
          <form onSubmit={handleSubmit}>
            <Grid container direction='column' spacing={16}>
              <Grid container direction='column' alignItems='center' spacing={16}>
                <Grid item xs={8}>
                  <Field name='how_many_persons_live_together' placeholder='0' type='number'
                         component={TextField} normalize={allowOnlyPositive} autoFocus/>
                </Grid>
              </Grid>

              <Grid item xs={11}>
                <Grid container direction='row' justify='flex-end'>
                  <Grid item xs={3}>
                    <Button variant='contained' name='ButtonTornar' onClick={() => {
                      history.push('/')
                    }}>
                      <Trans>Tornar</Trans>
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant='contained' color='primary' type='submit' name='ButtonValidar'>
                      <Trans>Validar</Trans>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </AppForm>
      </AppFormContainer>
  );
};

HowManyPersonsLiveTogetherPage = reduxForm({
  form: 'HowManyPersonsLiveTogetherForm',
  validate
})(HowManyPersonsLiveTogetherPage);

export default withRouter(HowManyPersonsLiveTogetherPage);
