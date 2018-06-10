//@flow
import React from 'react';
import ButtonBase from '@material-ui/core/Button';

type Props = {
  value: any,
  children: any,
  className?: ?string,
  onClick?: Function,
  onFocus?: Function,
  variant?: string
}
export const Choice = (props: Props) =>
    <ButtonBase {...props}>
      {props.children}
    </ButtonBase>;
