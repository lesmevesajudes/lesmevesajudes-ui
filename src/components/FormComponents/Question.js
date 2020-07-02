import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {Trans} from 'react-i18next';
import {getCanonicalName} from '../../shared/getCanonicalName';
import HelpIcon from '../HelpIcon';
import {isHelpAvailable} from '../HelpText';
import {IRemoveMyValueWhenUnmountedField} from "../IRemoveMyValueWhenUnmountedField";

export const Question = ({name, label, children, type, validate, hidelabel, ...rest}) =>
    <Grid item>
    {!hidelabel &&
      <label id={name}>
        <Typography gutterBottom>
          {typeof label === 'string' ? <Trans i18nKey={label}/> : <Trans {...label}/>}
          {children}
          {isHelpAvailable(getCanonicalName(name)) &&
          <HelpIcon name={getCanonicalName(name)}/>
          }
        </Typography>
      </label>}
      <IRemoveMyValueWhenUnmountedField type={type ? type : 'text'} name={name} validate={validate} {...rest} fullWidth/>
    </Grid>;
