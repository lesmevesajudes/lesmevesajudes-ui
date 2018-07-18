import React from 'react';
import {Select} from 'redux-form-material-ui';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {IRemoveMyValueWhenUnmountedField} from "../../components/IRemoveMyValueWhenUnmountedField";

type Props = {
  label: Object,
}
const MultipleAnswerQuestion = (props: Props) =>
    <Grid item>
      <label>
        <Typography>
          {props.label}
        </Typography>
      </label>
      <IRemoveMyValueWhenUnmountedField {...props} component={Select} fullWidth>
        {props.children}
      </IRemoveMyValueWhenUnmountedField>
    </Grid>;

export default MultipleAnswerQuestion;
