import React from 'react';
import {TextField} from 'redux-form-material-ui';
import {allowOnlyPositive} from '../Common/NormalizeCommon';
import {Question} from './Question';

export const TimePeriodQuestion = (props) =>
    <Question {...props} type='number' normalize={allowOnlyPositive} component={TextField} placeholder='0'>
      {props.children}
    </Question>;
