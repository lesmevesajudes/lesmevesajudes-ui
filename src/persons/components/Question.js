import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import HelpIcon from '../../components/HelpIcon';
import {isHelpAvailable} from '../../components/HelpText';
import {IRemoveMyValueWhenUnmountedField} from "../../components/IRemoveMyValueWhenUnmountedField";

type Props = {
  name: string
}
const getCanonicalName = (name: string) => name.split('.')[0];
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
