//@flow
import type {ChildrenArray, Element} from 'react';
import React, {cloneElement} from 'react';
import purple from '@material-ui/core/colors/purple';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import {Choice} from '../Choice';
import {colors} from '../../styles/theme'

const styles = theme => ({
  button: {
    backgroundColor: '#f2f2f2',
    color: '#202020',
    '&:hover':{
      backgroundColor: '#f5f5f5'
    },
    '&:active':{
      backgroundColor: '#f5f5f5'
    },
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
    backgroundColor: colors.primary_darker,
    '&:hover': {
      backgroundColor: colors.primary_darker,
    },
  }
});


type Props = {
  currentState: any,
  optionSelected: Function,
  children: ChildrenArray<Element<typeof Choice>>,
  classes: Object,
  onFocus: Function
}

const MultipleChoice = (props: Props) => {
  const {classes} = props;

  return React.Children.map(props.children, (child: Element<typeof Choice>) => {
    return cloneElement(child, {
      className: child.props.value === props.currentState ? classNames(classes.button, classes.selected) : classes.button,
      onClick: () => {
        props.optionSelected(child.props.value)
      },
      onFocus: () => {
        props.onFocus()
      }
    });
  })
};

export default withStyles(styles)(MultipleChoice);
