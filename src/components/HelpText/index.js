//@flow
import React from 'react';
import HelpTextMap from './HelpTextMap';

type Props = {
  id: string
}

export const HelpText = (props: Props) => HelpTextMap[props.id];
export const isHelpAvailable = (id: string) => {
  return typeof HelpTextMap[id] !== "undefined";
};
