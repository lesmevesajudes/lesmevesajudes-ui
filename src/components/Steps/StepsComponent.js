//@flow
import {Grid, Step, StepButton, Stepper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Tooltip from "@material-ui/core/Tooltip";
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {Trans, withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {getFormSyncErrors, isValid, touch} from "redux-form";
import {flatten} from '../../shared/flatten';
import {styles} from '../../styles/theme';
import {IconFont} from '../IconFont/IconFont';
import StepperButtons from './StepperButtons';

type Props = {
  appState: Object,
  backStep: Function,
  buttonEnabled: boolean,
  buttonVisible: boolean,
  currentStep: number,
  classes: Object,
  dispatch: Function,
  nextStep: Function,
  setActualStep: Function,
  steps: Array<any>,
  t: Function,
}

type State = {
  current_step: number,
  max_step_reached: number
}

const flattenErrors = (errors: Object) => flatten(errors, {removeKeys: ['$$typeof', 'type', 'key', 'ref', 'props', '_owner', '_store']});

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
  return <IconFont icon={iconStep} completed={completed} active={active} isStepperIcon sizeSphere={60} fontSize={26}/>
};

const isOptionalStep = (step) => {
  return typeof step.shouldShowStep === 'function';
};

const FORWARD = 1;
const BACKWARD = -1;

class StepsComponent extends React.Component<Props, State> {
  nextStep = () => {
    const currentStep = this.state.current_step;
    const formToValidate = this.props.steps[currentStep].validateFormToEnableNext;
    const formIsValid = isValid(formToValidate);
    console.log("steps!!!!!!");
    console.log(JSON.stringify(this.props.steps));

    if (typeof formToValidate !== 'undefined' && !formIsValid(this.props.appState)) {
      const errors = getFormSyncErrors(formToValidate)(this.props.appState);
      const visibleFields = Object.keys(flattenErrors(errors));

      this.props.dispatch(touch(formToValidate, ...visibleFields));
    } else {
      const nextStep = this.findNextPageThatShouldShow(currentStep, FORWARD);

      this.setState({
        current_step: nextStep,
        max_step_reached: nextStep > this.state.max_step_reached ? nextStep : this.state.max_step_reached
      });
    }
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
    const {classes, steps, buttonEnabled, buttonVisible, t} = this.props;
    const currentStep = this.state.current_step;
    const maxStepReached = this.state.max_step_reached;
    const childComponent = steps[currentStep].component;
    return (
        <div className={classes.root}>
          <Stepper activeStep={currentStep} nonLinear alternativeLabel className={classes.stepperContainer}>
            {steps.map((step, index) => {
              const labelProps = step.optional ? {
                optional: <Tooltip id='unknown-tooltip'
                                   title={t('opcional_text_llarg')}
                                   placement='bottom-start'>
                  <Typography variant='caption'>
                    <Trans i18nKey='opcional'>Opcional</Trans>
                  </Typography>
                </Tooltip>
              } : {};
              return <Step key={step.id}>
                <StepButton {...labelProps} onClick={() => this.setStep(index)}
                            icon={chooseIcon(this.props, currentStep, maxStepReached, index)}>{step.label}</StepButton>
              </Step>
            })
            }
          </Stepper>
          <Grid container>
            <Grid item xs={12}>
              {childComponent}
            </Grid>
            <Grid item xs={12}>
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

export default connect(mapStateToProps)(withStyles(styles)(withTranslation('translations')(StepsComponent)));
