import React from 'react';
import {connect} from "react-redux";
import {BackStepAction, NextStepAction} from './StepsActions'
import {withStyles} from '@material-ui/core/styles';
import {Typography, Step, Grid, Stepper, StepLabel} from "@material-ui/core";
import PersonsPage from '../../persons/PersonsPage'
import HouseholdForm from '../../household/HouseholdForm';
import RentForm from '../../rent/RentForm';
import ResultsPage from '../../results/ResultsPage';
import ButtonsSteps from './Buttons/ButtonsSteps';
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
      let err = "Invalid Step"
      throw err;
  }
}

type Props = {
  classes: Object
}

let StepsComponent = (props: Props) => {
  const {classes, NextStepAction, BackStepAction, counter} = props;
  const steps = getSteps();
  const actualStep = counter.step.counter;
  const statusButtons = counter.step.buttons_status;
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
          {actualStep === steps.length ? (
              <ResultsPage/>
          ) : (
                <Grid container>
                  <Grid item sm={12} xs={12} md={12}>
                    <Typography className={classes.instructions}>{getStepContent(actualStep)}</Typography>
                  </Grid>
                  <Grid item sm={12} xs={12} md={12}>
                  <ButtonsSteps 
                  nextAction={NextStepAction} 
                  backAction={BackStepAction}
                  classes={classes} 
                  stepsTotal={steps}
                  actualStep={actualStep} 
                  statusButtons={statusButtons}/>
                  </Grid>
                </Grid>
          )}
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

export default connect(mapStateToProps, {NextStepAction, BackStepAction})(withStyles(styles)(StepsComponent));
