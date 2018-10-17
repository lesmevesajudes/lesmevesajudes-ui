import {withStyles} from '@material-ui/core';
import React from 'react';

const myStyles = () => ({
  iconAjuntament: {
    fontFamily: 'Ajuntament',
    color: '#fff'
  },
  iconTitleContainer: {
    float: 'left',
    background: '#00ACD4',
    borderRadius: '100%',
    textAlign: 'center !important',
  }
});

type IconFontProps = {
  active: boolean,
  classes: Object,
  completed: boolean,
  fontSize: number,
  isStepperIcon: boolean,
  sizeSphere: number,
}

export const IconFont = withStyles(myStyles)((props: IconFontProps) => {
  let icon = '';
  switch (props.icon) {
    case 'persona':
      icon = '';
      break;
    case 'familia':
      icon = '';
      break;
    case 'domicili':
      icon = '';
      break;
    case 'resultats':
      icon = '';
      break;
    default:
      icon = props.icon;
      break;
  }
  const colors = {
    active: '#d50283',
    completed: '#00ACD4',
    uncompleted: '#d2d2d2',
  };

  const iconStyle = {
    fontSize: props.fontSize + 'px',
    lineHeight: props.sizeSphere + 'px',
  };
  const noStepperIcon = {
    height: props.sizeSphere + 'px',
    width: props.sizeSphere + 'px',
    backgroundColor: colors.completed,
    marginRight: '10px'
  };
  const StepperIcon = {
    height: props.sizeSphere + 'px',
    width: props.sizeSphere + 'px',
    backgroundColor: props.active ? colors.active : props.completed ? colors.completed : colors.uncompleted,
  };

  return (
      <div className={props.classes.iconTitleContainer} style={props.isStepperIcon ? StepperIcon : noStepperIcon}>
        <span className={props.classes.iconAjuntament} style={iconStyle}>{icon}</span>
      </div>
  )
});
IconFont.defaultProps = {
  fontSize: 36,
  sizeSphere: 64,
  active: false,
  completed: false,
  isStepperIcon: false
};
