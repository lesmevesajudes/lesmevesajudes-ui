import React from 'react';
import {connect} from "react-redux";
import {BackStepAction, NextStepAction} from './StepsActions'
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonsPage from '../../persons/PersonsPage'
import HouseholdForm from '../../household/HouseholdForm';
import RentForm from '../../rent/RentForm';
import ResultsPage from '../../results/ResultsPage';

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

function getSteps() {
  return ['Añadir un familiar', 'Familia', 'Domicili Habitual', 'Resultats'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <PersonsPage/>;
    case 1:
      return <HouseholdForm/>;
    case 2:
      return <RentForm/>;
    case 3:
      return <ResultsPage/>;
    default:
      throw "Invalid Step";
  }
}

type Props = {
  classes: Object
}

let StepsComponent = (props: Props) => {
  const {classes, NextStepAction, BackStepAction, counter} = props;
  const steps = getSteps();
  const actualStep = counter.step.counter;
  return (
      <div className={classes.root}>

        <Stepper activeStep={actualStep} alternativeLabel>
          {steps.map(label => {
            return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
            );
          })}
        </Stepper>
        <div>
          {actualStep === steps.length ? (
              <ResultsPage/>
          ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(actualStep)}</Typography>
                <div>
                  <Button
                      disabled={actualStep === 0}
                      onClick={() => BackStepAction()}
                      className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="raised" color="primary" onClick={() => NextStepAction()}>
                    {actualStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
          )}
        </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

export default connect(mapStateToProps, {NextStepAction, BackStepAction})(withStyles(styles)(StepsComponent));
