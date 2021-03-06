import {Button, Grid, Icon, withStyles} from '@material-ui/core';
import React, {Fragment} from "react";
import {Trans} from 'react-i18next';
import classNames from "classnames";
import {styles} from '../../styles/theme';

type Props = {
  backAction: Function,
  buttonEnabled: boolean,
  buttonVisible: boolean,
  classes: Object,
  nextAction: Function,
  nextIsResults: boolean,
  dispatch: Function,
};

const printPage = function () {
  window.print();
  return false;
};

let StepperButtons = (props: Props) => {
  const {classes, backAction, buttonEnabled, nextAction, nextIsResults} = props;
  const content = (
      <Grid container justify={'flex-end'} alignItems={'center'} className={classNames(classes.buttonsContainer, 'screen-only')}>
        <Grid item container sm={2} md={2} justify={'flex-end'}>
          {typeof backAction !== 'undefined' &&
          <Button color='secondary' variant='contained'
                  disabled={!buttonEnabled} onClick={backAction}
                  className={classes.backButton}>
            <Icon className={classes.leftIcon}>keyboard_arrow_left</Icon><Trans i18nKey='anterior'>Anterior</Trans>
          </Button>}
        </Grid>
        {typeof nextAction === 'undefined' &&
        <Grid item container sm={2} md={2} justify={'flex-end'}>
          <Button color='secondary' variant='contained'
                  onClick={printPage}>
            <Icon className={classes.leftIcon}>print</Icon><Trans i18nKey='imprimir'>Imprimir</Trans>
          </Button>
        </Grid>
        }
        <Grid item container sm={2} md={2} justify={'flex-end'}>
          {typeof nextAction === 'undefined' &&
          <Button color='secondary' variant='contained'
                  onClick={() => window.location.reload()}
                  disabled={!buttonEnabled}>
            <Icon className={classes.leftIcon}>cached</Icon>
            <Trans i18nKey='nou_calcul'>Nova simulació</Trans>
          </Button>
          }

          {typeof nextAction !== 'undefined' &&
          <Button color='primary' variant='contained'
                  onClick={nextAction}
                  disabled={!buttonEnabled}>
            {nextIsResults ? <Trans i18nKey='veure_resultats'>Veure resultats</Trans> :
                <Fragment><Trans i18nKey='seguent'>Següent</Trans><Icon
                    className={classes.rightIcon}>keyboard_arrow_right</Icon></Fragment>}
          </Button>}
        </Grid>
      </Grid>
  );
  return props.buttonVisible ? content : null;
};

export default withStyles(styles)(StepperButtons);
