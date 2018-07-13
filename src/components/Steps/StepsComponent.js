//@flow
import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import {Grid, Step, StepButton, Stepper} from '@material-ui/core';
import StepperButtons from './StepperButtons';
import Typography from '@material-ui/core/Typography';
import {Trans} from 'react-i18next';
import {styles} from '../../styles/theme';
import {IconFont} from '../IconFont/IconFont';
import Tooltip from "@material-ui/core/Tooltip";

type Props = {
  appState: Object,
  classes: Object,
  steps: Array<any>,
  nextStep: Function,
  backStep: Function,
  setActualStep: Function,
  currentStep: number,
  buttonEnabled: boolean,
  buttonVisible: boolean
}

type State = {
  current_step: number,
  max_step_reached: number
}

const chooseIcon = (props: Object, currentStep: number, maxStepReached: number, index: number) => {
  const iconStep = props.steps[index].icon;
  let active = false;
  let completed = false;
  if (currentStep === index) {
    active = true;
  }
  else if (maxStepReached >= index) {
    completed = true;
  }
  return <IconFont icon={iconStep} completed={completed} active={active} isStepperIcon sizeSphere={48} fontSize={32}/>
};

const isOptionalStep = (step) => {
  return typeof step.shouldShowStep === 'function';
};

const FORWARD = 1;
const BACKWARD = -1;

class StepsComponent extends React.Component<Props, State> {
  nextStep = () => {
    let step = this.state.current_step;
    step = this.findNextPageThatShouldShow(step, FORWARD);
    this.setState({
      current_step: step,
      max_step_reached: step > this.state.max_step_reached ? step : this.state.max_step_reached
    });
  };

  backStep = () => {
    let step = this.state.current_step;
    step = this.findNextPageThatShouldShow(step, BACKWARD);
    this.setState({
      current_step: step
    });
  };

  setStep = (index: number) => {
    if (index <= this.state.max_step_reached && this.shouldShowStep(index)) {
      this.setState({
        ...this.state,
        current_step: index,
      })
    }
  };

  shouldShowStep(index) {
    return !isOptionalStep(this.props.steps[index])
        || (isOptionalStep(this.props.steps[index]) && this.props.steps[index].shouldShowStep(this.props.appState));
  }

  constructor(props) {
    super(props);
    this.state = {current_step: 0, max_step_reached: 0};
    this.nextStep = this.nextStep.bind(this);
    this.backStep = this.backStep.bind(this);
    this.setStep = this.setStep.bind(this);

  }

  findNextPageThatShouldShow(currentStepIndex: number, direction: number) {
    let index = currentStepIndex + direction;
    while (
        isOptionalStep(this.props.steps[index])
        && this.props.steps[index].shouldShowStep(this.props.appState) === false
        && index < this.props.steps.length
        && index >= 0) {
      index = index + direction;
    }
    return index;
  }

  render() {
    const {classes, steps, buttonEnabled, buttonVisible} = this.props;
    const currentStep = this.state.current_step;
    const maxStepReached = this.state.max_step_reached;
    const childComponent = steps[currentStep].component;
    return (
        <div className={classes.root}>
          <Stepper activeStep={currentStep} nonLinear alternativeLabel className='stepperContainer'>
            {steps.map((step, index) => {
              const labelProps = step.optional ? {
                optional: <Tooltip id='unknown-tooltip'
                                   title='Aquesta opció només està disponible si les dades ho requereixen'
                                   placement='bottom-start'>
                  <Typography variant='caption'>
                    <Trans>Opcional</Trans>
                  </Typography>
                </Tooltip>
              } : {};
              return <Step key={step}>
                <StepButton {...labelProps} onClick={() => this.setStep(index)}
                            icon={chooseIcon(this.props, currentStep, maxStepReached, index)}>{step.label}</StepButton>
              </Step>
            })
            }
          </Stepper>
          <Grid container>
            <Grid item sm={12} xs={12} md={12}>
              {childComponent}
            </Grid>
            <Grid item sm={12} xs={12} md={12}>
              <StepperButtons nextAction={(currentStep === steps.length - 1) ? undefined : this.nextStep}
                              backAction={(currentStep === 0) ? undefined : this.backStep} classes={classes}
                              buttonEnabled={buttonEnabled} buttonVisible={buttonVisible}
                              nextIsResults={currentStep === steps.length - 2}/>
            </Grid>
          </Grid>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state,
    buttonEnabled: state.step.button_enabled,
    buttonVisible: state.step.button_visible,
  }
};

export default connect(mapStateToProps)(withStyles(styles)(StepsComponent));
