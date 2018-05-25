import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {NextStepAction, BackStepAction} from './StepsActions'
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
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
  return ['Añadir un familiar', 'Familia','Domicili Habitual'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <PersonsPage/>;
    case 1:
      return <RentForm/>;
    case 2:
      return <HouseholdForm/>;
      default:
        return "patata"
  }
}

class StepsComponent extends React.Component {

  render() {
    const { classes, NextStepAction, BackStepAction, counter } = this.props;
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
                  onClick={(e)=> BackStepAction()}
                  className={classes.backButton}
                >
                  Back 
                </Button>
                <Button variant="raised" color="primary" onClick={(e)=> NextStepAction()}>
                  {actualStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

StepsComponent.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps, {NextStepAction, BackStepAction})(withStyles(styles)(StepsComponent));
