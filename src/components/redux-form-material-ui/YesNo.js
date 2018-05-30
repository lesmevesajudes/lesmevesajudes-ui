import React from 'react';
import ToggleButton from '../ToggleButton';

const toggleElements = [
  {name: "Si"},
  {name: "No"},
  {name: "Potser"}
];

const YesNo = ({input}) => (
    <ToggleButton
        setup={toggleElements}
        currentState={input.value}
        optionSelected={input.onChange}
    />
);
export default YesNo;
