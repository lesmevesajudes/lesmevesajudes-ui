import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const FormSubTitle = (props) =>
    <Grid item>
      <Typography variant='h2'>
        {props.children}
      </Typography>
    </Grid>;
export default FormSubTitle;
