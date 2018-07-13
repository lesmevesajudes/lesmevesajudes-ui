import React from 'react';
import {Field} from 'redux-form';
import HelpIcon from '../../components/HelpIcon';
import {isHelpAvailable} from '../../components/HelpText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

type Props = {
  name: string
}
export const Question = (props: Props) =>
    <Grid item>
      <label>
        <Typography id="test" gutterBottom>
          {props.children}
          {isHelpAvailable(props.name) &&
          <Hidden smUp> <HelpIcon name={props.name}/> </Hidden>
          }
        </Typography>
      </label>
      <Field {...props} id="test" fullWidth/>
    </Grid>;
