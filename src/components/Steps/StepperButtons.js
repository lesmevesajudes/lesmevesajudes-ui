import React from 'react';
import {Button, Grid} from "@material-ui/core";
import {Trans} from "react-i18next";
import classNames from "classnames";

type Props = {
  nextIsResults: boolean,
  buttonVisible: boolean,
  buttonEnabled: boolean,
  nextAction: Function,
  backAction: Function
};

let StepperButtons = (props: Props) => {
  const content = (
      <Grid container justify={'center'} className="buttons-container">
        <Grid item sm={6} md={6}>
                {typeof props.backAction !== "undefined" &&
          <Button variant="raised"
                  disabled={!props.buttonEnabled} onClick={props.backAction}
                  className={classNames(props.classes.backButton, "left-button")}>
            <Trans>Anterior</Trans>
          </Button>}
        </Grid>
        <Grid item sm={6} md={6} >
          {typeof props.nextAction !== "undefined" &&
          <Button variant="raised" color="primary" onClick={props.nextAction} disabled={!props.buttonEnabled} className="right-button">
            {props.nextIsResults ? <Trans>Veure resultats</Trans> : <Trans>Següent</Trans>}
          </Button>}
        </Grid>
      </Grid>
  );
  return props.buttonVisible ? content : null;
};

export default StepperButtons;
