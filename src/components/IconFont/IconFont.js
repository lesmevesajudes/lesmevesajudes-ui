import React from 'react';
export const IconFont = (props) => {
  const iconStyle = {
    fontSize: props.fontSize,
  }

  return (
    <div className="iconTitle-container">
    <span className="iconAjuntament iconTitle" style={iconStyle}>{props.icon}</span>
  </div>
  )
}
