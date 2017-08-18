import React from 'react';
import {Control, Field} from 'react-redux-form';

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
                placeholder='First Name'
          />
        </div>
        <div className="field">
            <label>Date born</label>
            <Control.text
                model='.dateBorn'
                placeholder="2005-01-21"

            />
        </div>
        <div className="field">
            <label>City</label>
            <Field model='.city' dynamic={false}>
                <select>
                    <option default value="select one">Select one ....</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="L'Hospitalet">L'Hospitalet</option>
                    <option value="Cornellà">Cornellà</option>
                </select>
            </Field>
        </div>
        <div className="field">
            <label><Control.checkbox model=".social_services_user" /> I am a social services user</label>
        </div>
    </div>
);

export default ChildrenFields;