import React from "react";
import {Question} from "./Question";
import {TextField} from "redux-form-material-ui";
import {allowOnlyPositive} from "../../components/Common/NormalizeCommon";


const tooYoung = value =>
  value && value >= 120
    ? 'No pots tenir més de 120 anys, ho sento!'
    : undefined;
export const TimePeriodQuestion = (props) =>
    <Question {...props} type="number" normalize={allowOnlyPositive} component={TextField} placeholder="0" validate={tooYoung}>
      {props.children}
    </Question>;
