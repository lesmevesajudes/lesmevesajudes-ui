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
            <label>Tipus d'ingrés</label>
            <Control.text
                model=".description"
                placeholder='Salari'/>
        </div>
        <div className="field">
            <label>Quantitat</label>
            <Control.text
                model=".amount"
                placeholder="100"/>
        </div>
    </div>
);
export default FinancialDataFields;