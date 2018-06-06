import React from "react";
import {Question} from "./Question";
import {TextField} from "redux-form-material-ui";
import {allowOnlyPositive} from "../../components/Common/NormalizeCommon";

export const TimePeriodQuestion = (props) =>
    <Question {...props} type="number" normalize={allowOnlyPositive} component={TextField} placeholder="0" >
      {props.children}
    </Question>;
