import React from 'react';
import {renderTextField} from './MaterialUIFields';
import {allowOnlyPositive} from '../Common/NormalizeCommon';
import {Question} from './Question';

export const TimePeriodQuestion = (props) =>
    <Question {...props} type='number' normalize={allowOnlyPositive} component={renderTextField} placeholder='0'>
      {props.children}
    </Question>;
