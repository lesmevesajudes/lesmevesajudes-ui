//@flow
import React from 'react';

type Props = {
  icon: string,
  className: string
}

export const IconFontAjuntamentBarcelona = (props: Props) => {
  let icon = "";
  switch(props.icon){
    case 'persona':
      icon = "";
      break;
    case 'familia':
      icon = "";
      break;
    case 'domicili':
      icon = "";
      break;
    case 'resultats':
      icon = "";
      break;
    default:
      icon = props.icon;
      break;
  }
  const colors = {
    active: "#d50283",
    completed: "#00ACD4",
    uncompleted: "#d2d2d2",
  };
  console.log((props.fontSize * 1.42857));
  const iconStyle = {
    fontSize: props.fontSize + "px",
    lineHeight: props.sizeSphere + 'px',
  };
  const noStepperIcon = {
    backgroundColor: colors.completed,
    marginRight: '10px'
  };

  return (
      <div className="iconTitle-container" style={props.isStepperIcon ? StepperIcon : noStepperIcon}>
        <span className="iconAjuntament iconTitle" style={iconStyle}>{icon}</span>
      </div>
  )
};
