import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {Trans} from 'react-i18next';
import {renderSelectField} from './MaterialUIFields';
import {getCanonicalName} from '../../shared/getCanonicalName';
import HelpIcon from '../HelpIcon';
import {isHelpAvailable} from '../HelpText';
import {IRemoveMyValueWhenUnmountedField} from "../IRemoveMyValueWhenUnmountedField";

const MultipleAnswerQuestion = ({name, label, hidelabel, children, ...rest}) =>
    <Grid item xs={12}>
      {!hidelabel &&
      <label id={name}>
        <Typography>
          {typeof label === 'string' ? <Trans i18nKey={label}/> : <Trans {...label}/>}
          {isHelpAvailable(getCanonicalName(name)) &&
          <HelpIcon name={getCanonicalName(name)}/>}
        </Typography>
      </label>}
      {/* We're breaking a bit material guides here as select should show label when there is no value selected */}
      <IRemoveMyValueWhenUnmountedField name={name} {...rest} component={renderSelectField} fullWidth label=''>
        {children}
      </IRemoveMyValueWhenUnmountedField>
    </Grid>;

export default MultipleAnswerQuestion;
