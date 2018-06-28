//@flow
import React from 'react';
import {connect} from 'react-redux';
import {backStep, nextStep, setActualStep} from './StepsActions'
import {withStyles} from '@material-ui/core/styles';
import {Grid, Step, StepButton, Stepper} from '@material-ui/core';
import StepperButtons from './StepperButtons';
import Typography from '@material-ui/core/Typography';
import {Trans} from 'react-i18next';
import {styles} from '../../styles/theme';
import {IconFont} from '../IconFont/IconFont';

type Props = {
  classes: Object,
  steps: Array<any>,
  nextStep: Function,
  backStep: Function,
  setActualStep: Function,
  currentStep: number,
  buttonEnabled: boolean,
  buttonVisible: boolean
}

const chooseIcon = (props, index) => {
  const iconStep = props.steps[index].icon;
  let active = false;
  let completed = false;
  if (props.currentStep === index) {
    active = true;
  }
  else if (props.currentStep > index) {
    completed = true;
  }
  return <IconFont icon={iconStep} completed={completed} active={active} isStepperIcon={true} sizeSphere={"48px"} fontSize={"32px"}/>
};

let StepsComponent = (props: Props) => {
  const {classes, steps, currentStep,setActualStep, buttonEnabled, buttonVisible, backStep, nextStep} = props;
  const childComponent = steps[currentStep].component;
  return (
      <div className={classes.root}>
        <Stepper activeStep={currentStep} nonLinear alternativeLabel className='stepperContainer'>
          {steps.map((step,index) => {
            const labelProps = step.optional ? {
              optional: <Typography variant='caption'><Trans>Opcional</Trans></Typography>
            } : {};
            return <Step key={step}>
              <StepButton {...labelProps} onClick={() => setActualStep(index)}
                          icon={chooseIcon(props, index)}>{step.label}</StepButton>
                   </Step>
          })
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
    buttonVisible: state.step.button_visible,
  }
};

export default connect(mapStateToProps,{backStep,nextStep, setActualStep})(withStyles(styles)(StepsComponent));
