import React from 'react';
import Grid from '@material-ui/core/Grid';
import {HelpText} from '../HelpText';
import {Hidden, Typography} from '@material-ui/core';

type Props = {
  currentField: string
}
const DescriptionText = (props: Props) =>
    <Grid item className='descriptionText'>
          <Hidden smDown>
            <Typography  className="text" component='span'>
              <HelpText id={props.currentField}/>
          </Typography>
          </Hidden>
        </Grid>;
export default DescriptionText;
