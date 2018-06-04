import React from "react";
import {Question} from "./Question";
import {TextField} from "redux-form-material-ui";
import {allowOnlyPositive} from "../../components/Common/NormalizeCommon";
import InputAdornment from "@material-ui/core/InputAdornment";

// TODO Max 100
const max100 = value =>
  value && value >= 100
    ? 'No pots tenir més de 120 anys, ho sento!'
    : undefined;

export const PercentageQuestion = (props) =>
    <Question {...props} type="number" normalize={allowOnlyPositive} component={TextField} validate={max100}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}>
      {props.children}
    </Question>;
