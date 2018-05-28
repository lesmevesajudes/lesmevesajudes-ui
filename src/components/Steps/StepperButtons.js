import React from 'react';
import {Button, Grid} from "@material-ui/core";
import {Trans} from "react-i18next";

type Props = {
  nextIsResults: boolean,
  buttonVisible: boolean,
  buttonEnabled: boolean,
  nextAction: Function,
  backAction: Function
};

let StepperButtons = (props: Props) => {
  const content = (
      <Grid container justify={'center'}>
        {typeof props.backAction !== "undefined" &&
        <Button
            disabled={!props.buttonEnabled} onClick={props.backAction} className={props.classes.backButton}>
          <Trans>Anterior</Trans>
        </Button>}
        {typeof props.nextAction !== "undefined" &&
        <Button variant="raised" color="primary" onClick={props.nextAction} disabled={!props.buttonEnabled}>
          {props.nextIsResults ? <Trans>Veure resultats</Trans> : <Trans>Següent</Trans>}
        </Button>}
      </Grid>
  );
  return props.buttonVisible ? content : null;
};

export default StepperButtons;
