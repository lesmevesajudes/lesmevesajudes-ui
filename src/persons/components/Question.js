import React, {Fragment} from 'react';
import {Field} from "redux-form";


export const Question = (props) =>
    <Fragment>
      <label>
        {props.children}
      </label>
      <Field {...props} />
    </Fragment>;
