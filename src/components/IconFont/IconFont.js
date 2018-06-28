import React from 'react';
export const IconFont = (props) => {
  const iconStyle = {
    fontSize: props.fontSize,
    lineHeight: props.sizeSphere
  }
  const ContainerStyle = {
    height: props.sizeSphere,
    width: props.sizeSphere,
    backgroundColor: props.active ? "#d50283" : "#00ACD4",
  }
  return (
    <div className="iconTitle-container" style={ContainerStyle}>
      <span className="iconAjuntament iconTitle" style={iconStyle}>{props.icon}</span>
    </div>
  )
}
IconFont.defaultProps = {
  fontSize: '36px',
  sizeSphere:'64px',
  active: false

};
