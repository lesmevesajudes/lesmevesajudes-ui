import React from 'react';
import Grid from '@material-ui/core/Grid';
import {HelpText} from '../HelpText';
import {Typography,Hidden} from '@material-ui/core';

type Props = {
  currentField: string
}
const DescriptionText = (props: Props) =>
        <Grid item className="descriptionText">
          <Hidden smDown>
              <HelpText id={props.currentField}/>
          </Hidden>
        </Grid>;
export default DescriptionText;
