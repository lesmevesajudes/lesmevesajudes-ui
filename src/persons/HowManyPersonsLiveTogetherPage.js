//@flow
import {Button, Grid, withStyles} from '@material-ui/core';
import React from 'react';
import {Trans} from 'react-i18next';
import {withRouter} from 'react-router-dom'
import {reduxForm} from 'redux-form';
import {renderTextField} from '../components/FormComponents/MaterialUIFields';

import {Field} from 'redux-form/';
import {AppForm, AppFormContainer, AppFormTitle} from '../components/AppForms';
import {allowOnlyPositive} from '../components/Common/NormalizeCommon';
import ShowMeOnceModal from '../components/ShowMeOnceModal'
import {styles} from '../styles/theme';

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
  const {handleSubmit, classes} = props;
  return (
      <AppFormContainer>
        <AppFormTitle iconName='persona'>
          <Trans i18nKey='quantes_persones_viuen_en_el_domicili'>Quantes persones viuen en el teu domicili? (amb tu
            inclòs)</Trans>
        </AppFormTitle>

        <ShowMeOnceModal name='howManyPersonsModal'
                         title={<Trans i18nKey='dades_sobre_les_persones'>Dades sobre les persones</Trans>}>
          <b className="highlightedText">
	        <Trans i18nKey='text_avis_covid'>
	        	Estem treballant per actualitzar l'eina, i en concret per incorporar les ajudes sorgides a causa de la situació
	        	econòmica derivada de la covid19. Tingues present que la informació que et donarem no és complerta.
	        	<br/>
	        	<br/>
	        </Trans>
	      </b>
          <Trans i18nKey='text_avis_inci_simulacio'>
            A partir d’aquest moment et formularem una sèrie de preguntes personals i també sobre els membres de la teva
            llar que són necessàries per conèixer els ajuts als quals pots arribar a optar.<br/>
            T’informem que les dades que incorporis per a la simulació no poden identificar les persones que
            l'utilitzen, per la qual cosa no es requereix cap consentiment.<br/>
            Aquesta eina no tramita les sol·licituds.<br/>
            Pots començar la simulació.
          </Trans>
        </ShowMeOnceModal>
        <AppForm>
          <form onSubmit={handleSubmit}>
              <Grid container direction='column' alignItems='center' spacing={2}>
                <Grid item xs={8}>
                  <Field name='how_many_persons_live_together' placeholder='0' type='number'
                         component={renderTextField} normalize={allowOnlyPositive}/>
                </Grid>
              </Grid>

            <Grid item>
              <Grid container direction='row' justify='space-around' alignContent='center' spacing={2}>
                <Grid item container direction='column' xs={2}>
                  <a href='/lesmevesajudes' className={classes.link}>
                    <Button variant='contained' name='ButtonTornar'>
                      <Trans i18nKey='tornar'>Tornar</Trans>
                    </Button>
                  </a>
                  </Grid>
                <Grid item container direction='column' xs={2}>
                    <Button variant='contained' color='primary' type='submit' name='ButtonValidar'>
                      <Trans i18nKey='validar'>Validar</Trans>
                    </Button>
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

export default withRouter(withStyles(styles)(HowManyPersonsLiveTogetherPage));
