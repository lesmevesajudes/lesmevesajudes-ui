import InputAdornment from '@material-ui/core/InputAdornment';
import React from 'react';
import {renderTextField} from './MaterialUIFields';
import {allowOnlyPositive} from '../Common/NormalizeCommon';
import {Question} from './Question';

export const MoneyQuestion = (props) =>
    <Question {...props} type='number' normalize={allowOnlyPositive} component={renderTextField}
              InputProps={{
                endAdornment: <InputAdornment position='end'>€</InputAdornment>,
              }}>
      {props.children}
    </Question>;
