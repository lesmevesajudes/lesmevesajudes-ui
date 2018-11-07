import React, { Fragment } from "react";
import {Button, Grid, Icon} from '@material-ui/core';
import {Trans} from 'react-i18next';
import classNames from 'classnames';

type Props = {
  nextIsResults: boolean,
  buttonVisible: boolean,
  buttonEnabled: boolean,
  nextAction: Function,
  backAction: Function,
  classes: Object
};


let StepperButtons = (props: Props) => {
  const content = (
      <Grid container justify={'flex-end'} alignItems={'center'} className='buttons-container'>
        <Grid item sm={2} md={2}>
          {typeof props.backAction !== 'undefined' &&
          <Button color='secondary' variant='contained'
                  disabled={!props.buttonEnabled} onClick={props.backAction}
                  className={classNames(props.classes.backButton, 'left-button')} >
            <Icon className={props.classes.rightIcon}>keyboard_arrow_left</Icon><Trans i18nKey='anterior'>Anterior</Trans>
          </Button>}
        </Grid>
        <Grid item sm={2} md={2}>
          {typeof props.nextAction === 'undefined' &&
          <Button className={classNames('right-button', 'buttonTheme')}
                  color='secondary' variant='contained'
                  onClick={() => window.location.replace('/')}
                  disabled={!props.buttonEnabled}>
            <Trans i18nKey='nou_calcul'>Nou càlcul</Trans>
          </Button>
          }
          {typeof props.nextAction !== 'undefined' &&
          <Button className={classNames('right-button', 'buttonTheme')}
                  color='primary' variant='contained'
                  onClick={props.nextAction}
                  disabled={!props.buttonEnabled}>
            {props.nextIsResults ? <Trans i18nKey='veure_resultats'>Veure resultats</Trans> : <Fragment><Trans i18nKey='seguent'>Següent</Trans><Icon className={props.classes.leftIcon}>keyboard_arrow_right</Icon></Fragment>}
          </Button>}
        </Grid>
      </Grid>
  );
  return props.buttonVisible ? content : null;
};

export default StepperButtons;
