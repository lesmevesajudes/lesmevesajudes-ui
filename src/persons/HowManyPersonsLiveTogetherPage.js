//@flow
import {Button, Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {Trans} from 'react-i18next';
import {withRouter} from 'react-router-dom'
import {reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import {Field} from 'redux-form/';
import {allowOnlyPositive} from '../components/Common/NormalizeCommon';
import {IconFont} from '../components/IconFont/IconFont'
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
let HowManyPersonsLiveTogetherPage = props => {
  const {handleSubmit, history} = props;
  return (
      <Grid container className='bg-container' justify='center'>
        <Grid item xs={12} sm={12} className='titleContainer'>

          <Typography variant='h5' className='titlePage'>
            <IconFont icon='persona' sizeSphere={48} fontSize={32}/>
            <span
                className='titleText'><Trans>Quantes persones viuen en el seu domicili? (amb vostè inclòs)</Trans></span>
          </Typography>
        </Grid>
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
        <Grid item xs={12} className='bg-form-exterior bg-form'>
          <form onSubmit={handleSubmit}>
            <Grid container justify='space-between' direction='column' spacing={16}>
              <Grid item xs={12} sm={12}>
                <Field name='how_many_persons_live_together' placeholder='0' type='number'
                       component={TextField} normalize={allowOnlyPositive} autoFocus/>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid container direction='row' className='margin-buttons' justify='flex-end'>
                  <Grid item xs={2}>
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
        </Grid>
      </Grid>
  );
};

HowManyPersonsLiveTogetherPage = reduxForm({
  form: 'HowManyPersonsLiveTogetherForm',
  validate
})(HowManyPersonsLiveTogetherPage);

export default withRouter(HowManyPersonsLiveTogetherPage);
