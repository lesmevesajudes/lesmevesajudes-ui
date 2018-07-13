import React from 'react';
import {Select} from 'redux-form-material-ui';
import {Field} from 'redux-form';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

type Props = {
  label: Object,
}
const MultipleAnswerQuestion = (props: Props) =>
    <Grid item id={props.id}>
      <label>
        <Typography>
          {props.label}
        </Typography>
      </label>
      <Field {...props} component={Select} fullWidth>
        {props.children}
      </Field>
    </Grid>;

export default MultipleAnswerQuestion;
