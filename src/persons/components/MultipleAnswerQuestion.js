import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {TextField} from 'redux-form-material-ui';
import {IRemoveMyValueWhenUnmountedField} from "../../components/IRemoveMyValueWhenUnmountedField";

type Props = {
  label: Object,
}
const MultipleAnswerQuestion = (props: Props) =>
    <Grid item xs={12}>
      <label id={props.name}>
        <Typography>
          {props.label}
        </Typography>
      </label>
      {/* We're breaking a bit material guides here as select should show label when there is no value selected */}
      <IRemoveMyValueWhenUnmountedField {...props} component={TextField} select fullWidth label=''>
        {props.children}
      </IRemoveMyValueWhenUnmountedField>
    </Grid>;

export default MultipleAnswerQuestion;
