import React from 'react';
import {Button, Grid, Icon} from '@material-ui/core';
import {Trans} from 'react-i18next';
import classNames from 'classnames';

type Props = {
  nextIsResults: boolean,
  buttonVisible: boolean,
  buttonEnabled: boolean,
  nextAction: Function,
  backAction: Function
};

let StepperButtons = (props: Props) => {
  const content = (
      <Grid container justify={'center'} className='buttons-container'>
        <Grid item sm={6} md={6}>
          {typeof props.backAction !== 'undefined' &&
          <Button
                  disabled={!props.buttonEnabled} onClick={props.backAction}
                  className={classNames(props.classes.backButton, 'left-button buttonThemeInverted')}>
            <Trans><Icon>keyboard_arrow_left</Icon> Anterior</Trans>
          </Button>}
        </Grid>
        <Grid item sm={6} md={6} >
          {typeof props.nextAction !== 'undefined' &&
          <Button onClick={props.nextAction} disabled={!props.buttonEnabled}
                  className='right-button buttonTheme'>
            {props.nextIsResults ? <Trans>Veure resultats</Trans> : <Trans>Següent <Icon>keyboard_arrow_right</Icon></Trans>}
          </Button>}
        </Grid>
      </Grid>
  );
  return props.buttonVisible ? content : null;
};

export default StepperButtons;
