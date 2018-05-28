import React, { Component } from 'react';
import {Button, Grid} from "@material-ui/core";
class ButtonsSteps extends Component {
  render() {
    let actualStatus = this.props.statusButtons;
    if(actualStatus === "okey"){
      return (
            <Grid container justify={'center'}>
              <Button
                disabled={this.props.actualStep === 0}
                onClick={this.props.backAction}
                className={this.props.classes.backButton}
              >
                Back
              </Button>
              <Button 
                variant="raised" 
                color="primary" 
                onClick={this.props.nextAction}
              >
                {this.props.actualStep === this.props.stepsTotal.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Grid>
      );
    }
    else if(actualStatus === "disabled"){
      return (
            <Grid container justify={'center'}>
              <Button
                disabled
                onClick={this.props.backAction}
                className={this.props.classes.backButton}
              >
                Back
              </Button>
              <Button 
                variant="raised" 
                color="primary" 
                disabled                
                onClick={this.props.nextAction}
              >
                {this.props.actualStep === this.props.stepsTotal.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Grid>
      )
    }
    else {
      return (
            <Grid container justify={'center'}>
            </Grid>
      );
    }
  }
}
export default ButtonsSteps;
