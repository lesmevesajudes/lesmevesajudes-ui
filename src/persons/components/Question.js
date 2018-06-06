import React from 'react';
import {Field} from "redux-form";
import HelpIcon from "../../components/HelpIcon";
import {isHelpAvailable} from "../../components/HelpText";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

type Props = {
  name: string
}
export const Question = (props: Props) =>
    <Grid item>
      <label>
        <Typography gutterBottom>
          {props.children}
          {isHelpAvailable(props.name) &&
          <Hidden smUp> <HelpIcon name={props.name}/> </Hidden>
          }
        </Typography>
      </label>
      <Field {...props} fullWidth/>
    </Grid>;
