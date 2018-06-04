import React from "react";
import {Question} from "./Question";
import {TextField} from "redux-form-material-ui";
import {allowOnlyPositive} from "../../components/Common/NormalizeCommon";
import InputAdornment from "@material-ui/core/InputAdornment";

// TODO Max 100
const max100 = value =>
  value && value >= 100 && value < 0
    ? 'El grau de discapacitat sol pot ser entre el interval de 0 i 100.'
    : undefined;

export const PercentageQuestion = (props) =>
    <Question {...props} type="number" normalize={allowOnlyPositive} component={TextField} validate={max100}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}>
      {props.children}
    </Question>;
