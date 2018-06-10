import React from 'react';
import Grid from '@material-ui/core/Grid';
import {HelpText} from '../HelpText';
import Typography from '@material-ui/core/Typography';

type Props = {
  currentField: string
}
const DescriptionText = (props: Props) =>
        <Grid item>
          <Typography>
            <HelpText id={props.currentField}/>
          </Typography>
        </Grid>;

export default DescriptionText;
