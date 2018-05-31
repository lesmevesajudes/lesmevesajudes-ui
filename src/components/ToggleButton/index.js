import React, {Component, Fragment} from 'react';
import ButtonBase from "@material-ui/core/ButtonBase";
import purple from '@material-ui/core/colors/purple';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
  input: {
    display: 'none',
  },
  leftButton: {
    borderBottomLeftRadius: 2 + 'px',
    borderTopLeftRadius: 2 + 'px',

  },
  midButton: {
    borderRight: 0 +'px !important',
    borderLeft: 0 +'px !important'
  },
  rightButton: {
    borderBottomRightRadius: 2 + 'px',
    borderTopRightRadius: 2 + 'px',
  },
  buttonFinal: {
    padding: 10 + 'px',
    border: '1px solid #d2d2d2',
    color: "#000",

  },
  buttonActive: {
    backgroundColor:'rgb(23, 230, 109)'
  },
  test: {
    //boxShadow: "-1px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"

  }
});


type Props = {
  setup: Object,
  optionSelected: Function
}

class ToggleButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  selectStyle = (name, classes, currentState) => {
    if(name === 'Si'){
      if(currentState === 'Si'){
        return classNames(classes.leftButton, classes.buttonFinal, classes.buttonActive);
      }
      else{
        return classNames(classes.leftButton, classes.buttonFinal);
      }
    }
    else if(name ==='No'){
      if(currentState === 'No'){
        return classNames(classes.midButton, classes.buttonFinal, classes.buttonActive);
      }
      else{
        return classNames(classes.midButton, classes.buttonFinal);
      }
    }
    else if(name === 'Potser'){
            if(currentState === 'Potser'){
        return classNames(classes.rightButton, classes.buttonFinal, classes.buttonActive);
      }
      else{
        return classNames(classes.rightButton, classes.buttonFinal);
      }
    }

  }
  render() {
    const {classes} = this.props;
    return (
        <Grid container direction="row">
          <div className={classes.test}>

          {this.props.setup.map((currentElement) => {
            console.log(this.props.currentState)
            return (
                <ButtonBase variant="outline"
                        className={this.selectStyle(currentElement.name, classes, this.props.currentState)}
                        onClick={() => this.props.optionSelected(currentElement.name)}
                        key={currentElement.name}
                >
                  {currentElement.name}
                </ButtonBase>
            )
          })}
          </div>
        </Grid>)
  }
}


export default withStyles(styles)(ToggleButton);
