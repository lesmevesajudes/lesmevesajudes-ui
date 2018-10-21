import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import HelpIcon from '../../components/HelpIcon';
import {isHelpAvailable} from '../../components/HelpText';
import {IRemoveMyValueWhenUnmountedField} from "../../components/IRemoveMyValueWhenUnmountedField";

type Props = {
  name: string
}
export const Question = (props: Props) =>
    <Grid item>
      <label id={props.name}>
        <Typography gutterBottom>
          {props.children}
          {isHelpAvailable(props.name) &&
          <Hidden smUp> <HelpIcon name={props.name}/> </Hidden>
          }
        </Typography>
      </label>
      <IRemoveMyValueWhenUnmountedField {...props} fullWidth/>
    </Grid>;
