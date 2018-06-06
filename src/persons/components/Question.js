import React, {Fragment} from 'react';
import {Field} from "redux-form";
import HelpIcon from "../../components/HelpIcon";
import {isHelpAvailable} from "../../components/HelpText";
import Hidden from "@material-ui/core/Hidden";

type Props = {
  name: string
}
export const Question = (props: Props) =>
    <Fragment>
      <label>
        {props.children}
        {isHelpAvailable(props.name) &&
        <Hidden smUp> <HelpIcon name={props.name}/> </Hidden>
        }
      </label>
      <Field {...props} />
    </Fragment>;
