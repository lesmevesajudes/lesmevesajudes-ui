import React from "react";
import YesNo from "../redux-form-material-ui/YesNo";
import {Question} from "./Question";

export const YesNoQuestion = (props) =>
  <Question {...props} component={YesNo}>
    {props.children}
  </Question>;
