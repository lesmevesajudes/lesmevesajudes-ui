import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const FormSubTitle = (props) =>
    <Grid item>
      <Typography variant='title' gutterBottom>
        {props.children}
      </Typography>
    </Grid>;
export default FormSubTitle;
