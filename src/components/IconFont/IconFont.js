import React from 'react';
export const IconFont = (props) => {
  const colors = {
    active: "#d50283",
    completed: "#00ACD4",
    uncompleted: "#d2d2d2",
  }
  const iconStyle = {
    fontSize: props.fontSize,
    lineHeight: props.sizeSphere
  }
  const noStepperIcon = {
    height: props.sizeSphere,
    width: props.sizeSphere,
    backgroundColor: colors.completed,
  }
  const StepperIcon = {
    height: props.sizeSphere,
    width: props.sizeSphere,
    backgroundColor: props.active ? colors.active : props.completed ? colors.completed : colors.uncompleted,
  }
  return (
    <div className="iconTitle-container" style={props.isStepperIcon ? StepperIcon : noStepperIcon}>
      <span className="iconAjuntament iconTitle" style={iconStyle}>{props.icon}</span>
    </div>
  )
}
IconFont.defaultProps = {
  fontSize: '36px',
  sizeSphere:'64px',
  active: false,
  completed: false,
  isStepperIcon: false
};
