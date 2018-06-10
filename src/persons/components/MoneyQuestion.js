import React from 'react';
import {Question} from './Question';
import {TextField} from 'redux-form-material-ui';
import {allowOnlyPositive} from '../../components/Common/NormalizeCommon';
import InputAdornment from '@material-ui/core/InputAdornment';

export const MoneyQuestion = (props) =>
    <Question {...props} type='number' normalize={allowOnlyPositive} component={TextField}
              InputProps={{
                endAdornment: <InputAdornment position='end'>€</InputAdornment>,
              }}>
      {props.children}
    </Question>;
