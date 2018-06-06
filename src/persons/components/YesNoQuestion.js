import YesNo from "../../components/redux-form-material-ui/YesNo";
import React from "react";
import {Question} from "./Question";

export const YesNoQuestion = (props) =>
    <Question {...props} component={YesNo}>
      {props.children}
    </Question>;
