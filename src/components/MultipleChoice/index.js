//@flow
import type {ChildrenArray, Element} from 'react';
import React, {cloneElement} from 'react';
import purple from '@material-ui/core/colors/purple';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import {Choice} from "../Choice";

const styles = theme => ({
  button: {
    '&:first-child': {
      borderBottomRightRadius: 0 + 'px',
      borderTopRightRadius: 0 + 'px',
      borderRight: 0 + 'px !important',
    },
    '&:not(:first-child):not(:last-child)': {
      borderBottomLeftRadius: 0 + 'px',
      borderTopLeftRadius: 0 + 'px',
      borderBottomRightRadius: 0 + 'px',
      borderTopRightRadius: 0 + 'px',
      borderRight: 0 + 'px !important',
    },
    '&:last-child': {
      borderBottomLeftRadius: 0 + 'px',
      borderTopLeftRadius: 0 + 'px',
    }
  },
  selected: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }
});


type Props = {
  currentState: string,
  optionSelected: Function,
  children: ChildrenArray<Element<typeof Choice>>,
  classes: Object
}

const MultipleChoice = (props: Props) => {
  const {classes} = props;

  return React.Children.map(props.children, (child: Element<typeof Choice>) => {
    return cloneElement(child, {
      className: child.props.name === props.currentState ? classNames(classes.button, classes.selected) : classes.button,
      onClick: () => {
        props.optionSelected(child.props.name)
      }
    });
  })
};

export default withStyles(styles)(MultipleChoice);
