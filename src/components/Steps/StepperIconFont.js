//@flow
import React from 'react';
import {IconFontAjuntamentBarcelona} from "../IconFont/IconFontAjuntamentBarcelona";

type Props = {
  icon: string,
  active: boolean,
  completed: boolean,
  classes: Object
}
export const StepperIconFont = (props: Props) => {
  const backgroundColor = props.active
      ? props.classes.actualStep
      : props.classes.completedStep
          ? props.classes.completedStep
          : props.classes.unCompletedStep;

  return (
      <IconFontAjuntamentBarcelona icon={props.icon} backgroundColor={backgroundColor}/>
  )
};
