import React, { Component } from 'react';
import {Button, Grid} from "@material-ui/core";
class ButtonsSteps extends Component {
  
  constructor(props) {
    super(props);
  };
  render() {
    console.log(this.props)
    let actualStatus = this.props.statusButtons === "tests";
    console.log(actualStatus)
    return (
        <Grid container justify={'center'}>
            <Button
              disabled={this.props.actualStep === 0}
              onClick={this.props.backAction}
              className={this.props.classes.backButton}
            >
              Back
            </Button>
            <Button variant="raised" color="primary" onClick={this.props.nextAction}>
              {this.props.actualStep === this.props.stepsTotal.length - 1 ? 'Finish' : 'Next'}
            </Button>
        </Grid>
    );
  }
}

export default ButtonsSteps;
