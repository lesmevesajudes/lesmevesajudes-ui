import React from 'react';
import {Control} from 'react-redux-form';

const FinancialDataFields = (props) => (
    <div>
        <div className="field">
            <Control.text
                model=".id"
                type="hidden"
                value={props.id}
            />
        </div>
        <div className="field">
            <label>FinancialData name</label>
            <Control.text
                model=".description"
                placeholder='Wage'/>
        </div>
        <div className="field">
            <label>Date born</label>
            <Control.text
                model=".amount"
                placeholder="100"/>
        </div>
    </div>
);
export default FinancialDataFields;