//@flow
import React, { Component } from 'react';
import { LocalForm, Control, Field } from 'react-redux-form';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { addChild } from './ChildrenActions';
import type {Child} from './ChildrenTypes';
import * as UUID from '../shared/UUID';

class ChildrenAdder extends Component {
    handleSubmit(formValues: Child) {
        this.props.addChild({...formValues, 'id': UUID.create()});
        this.props.history.push('/children');
    }

    render() {
        return (
            <div>
                <h1>Add a new child</h1>
                <LocalForm model="children"
                           onSubmit={(values) => this.handleSubmit(values)}
                >
                    <div>
                        <div className="field">
                            <label>Child name</label>
                            <Control.text
                                model=".name"
                                placeholder='First Name'/>
                        </div>
                        <div className="field">
                            <label>Date born</label>
                            <Control.text
                                model=".dateBorn"
                                placeholder="2005-10-10"/>
                        </div>

                        <div className="field">
                            <label>City</label>
                            <Field model='.city' dynamic={false}>
                                <select>
                                    <option default value="select one">Select one ....</option>l
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
                    <button type="submit">
                        Add
                    </button>
                </LocalForm>
            </div>
        );
    }
}

export default connect(null, {addChild})(ChildrenAdder);
