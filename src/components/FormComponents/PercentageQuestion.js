import InputAdornment from '@material-ui/core/InputAdornment';
import React from 'react';
import {Trans} from 'react-i18next';
import {renderTextField} from './MaterialUIFields';
import {allowOnlyPositive} from '../Common/NormalizeCommon';
import {Question} from './Question';

// TODO Max 100
const max100 = value =>
    value && (value > 100 || value < 0)
        ? <Trans>Només s'admeten valors entre 0 i 100</Trans>
        : undefined;

export const PercentageQuestion = (props) =>
    <Question {...props} type='number' normalize={allowOnlyPositive} component={renderTextField}
              validate={[max100, ...props.validate]}
              InputProps={{
                endAdornment: <InputAdornment position='end'>%</InputAdornment>,
              }}>
      {props.children}
    </Question>;
