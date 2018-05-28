import React from 'react';
import {connect} from "react-redux";
import {backStep, nextStep} from './StepsActions'
import {withStyles} from '@material-ui/core/styles';
import {Grid, Step, StepLabel, Stepper} from "@material-ui/core";
import StepperButtons from './StepperButtons';

const styles = theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

type Props = {
  classes: Object,
  steps: Array,
  nextStep: Function,
  backStep: Function
}

let StepsComponent = (props: Props) => {
  const {classes, steps, currentStep, buttonEnabled, buttonVisible, backStep, nextStep} = props;
  const childComponent = steps[currentStep].component;
  console.log("currentStep: ", currentStep);
  console.log("total: ", steps.length);
  return (
      <div className={classes.root}>

        <Stepper activeStep={currentStep} alternativeLabel>
          {steps.map(step =>
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
              </Step>)
          }
        </Stepper>
        <Grid container>
          <Grid item sm={12} xs={12} md={12}>
            {childComponent}
          </Grid>
          <Grid item sm={12} xs={12} md={12}>
            <StepperButtons nextAction={(currentStep === steps.length - 1) ? undefined : nextStep}
                            backAction={(currentStep === 0) ? undefined : backStep} classes={classes}
                            buttonEnabled={buttonEnabled} buttonVisible={buttonVisible}
                            nextIsResults={currentStep === steps.length - 2}/>
          </Grid>
        </Grid>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentStep: state.step.current_step,
    buttonEnabled: state.step.button_enabled,
    buttonVisible: state.step.button_visible

  }
};

export default connect(mapStateToProps, {nextStep, backStep})(withStyles(styles)(StepsComponent));
