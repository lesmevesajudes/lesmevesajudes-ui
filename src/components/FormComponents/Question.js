import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {getCanonicalName} from '../../shared/getCanonicalName';
import HelpIcon from '../HelpIcon';
import {isHelpAvailable} from '../HelpText';
import {IRemoveMyValueWhenUnmountedField} from "../IRemoveMyValueWhenUnmountedField";

type Props = {
  name: string
}

export const Question = (props: Props) =>
    <Grid item>
      <label id={props.name}>
        <Typography gutterBottom>
          {props.children}
          {isHelpAvailable(getCanonicalName(props.name)) &&
          <HelpIcon name={getCanonicalName(props.name)}/>
          }
        </Typography>
      </label>
      <IRemoveMyValueWhenUnmountedField {...props} fullWidth/>
    </Grid>;
