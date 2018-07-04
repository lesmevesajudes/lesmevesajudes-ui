import React from 'react';

export const IconFont = (props) => {
  let icon = '';
  switch(props.icon){
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
      <div className='iconTitle-container' style={props.isStepperIcon ? StepperIcon : noStepperIcon}>
        <span className='iconAjuntament iconTitle' style={iconStyle}>{icon}</span>
    </div>
  )
};
IconFont.defaultProps = {
  fontSize: 36,
  sizeSphere: 64,
  active: false,
  completed: false,
  isStepperIcon: false
};
