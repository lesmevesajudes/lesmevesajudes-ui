import React from 'react';
export const IconFont = (props) => {
  const iconStyle = {
    fontSize: props.fontSize,
    lineHeight: props.sizeSphere
  }
  const noStepperIcon = {
    height: props.sizeSphere,
    width: props.sizeSphere,
    backgroundColor: "#00ACD4",
  }
  const StepperIcon = {
    height: props.sizeSphere,
    width: props.sizeSphere,
    backgroundColor: props.active ? "#d50283" : props.completed ? "#00ACD4" : "#d2d2d2",
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
