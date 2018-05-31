//@flow
import React from 'react';
import ButtonBase from "@material-ui/core/Button";

type Props = {
  name: string,
  children: any,
  className?: ?string,
  onClick?: Function,
  variant?: string
}
export const Choice = (props: Props) =>
    <ButtonBase {...props}>
      {props.children}
    </ButtonBase>;
