import React from 'react';
import {Control} from 'react-redux-form';

const ChildrenFields = (props) => (
    <div>
        <div className="field">
            <Control.text
                model=".id"
                type="hidden"
                value={props.id}
            />
        </div>
        <div className="field">
            <label>Child name</label>
            <Control.text
                model='.name'
                placeholder='First Name'/>
        </div>
        <div className="field">
            <label>Date born</label>
            <Control.text
                model='.born'
                placeholder="21-01-2005"/>
        </div>
    </div>
);

export default ChildrenFields;