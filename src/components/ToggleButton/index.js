import React, {Component, Fragment} from 'react';
import Button from "@material-ui/core/Button";
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
});


type Props = {
  setup: Object,
  optionSelected: Function
}

class ToggleButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
        <Grid container direction="row">
          {this.props.setup.map((currentElement) => {
            return (
                <Button variant="outlined"
                        className={currentElement.name === this.props.currentState ? classNames(classes.margin, classes.cssRoot) : null}
                        onClick={() => this.props.optionSelected(currentElement.name)}
                        key={currentElement.name}
                >
                  {currentElement.name}
                </Button>
            )
          })}
        </Grid>)
  }
}


export default withStyles(styles)(ToggleButton);
