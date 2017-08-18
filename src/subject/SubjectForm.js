import React, { Component } from 'react';
import {Control, Field, Form} from 'react-redux-form';
import { Link } from 'react-router-dom';

import "./SubjectForm.css";

class SubjectForm extends Component {
    render() {
        return (
            <Form model="user">
                <div className="field">
                    <label>Your name?</label>
                    <Control.text model=".name" placeholder="First Name"/>
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
                    <label>Date born</label>
                    <Control.text
                        model=".dateBorn"
                        placeholder="2005-10-10"/>
                </div>
                <div className="field">
                    <label><Control.checkbox model=".social_services_user" /> I am a social services user</label>
                </div>
                <button>
                    <Link to="/children/">
                        Add children information
                    </Link>
                </button>
                <button>
                    <Link to="/financial/">
                        Add financial data
                    </Link>
                </button>
                <button>
                    <Link to="/results/">
                        Fetch results
                    </Link>
                </button>
                <Control.reset model="user" className="secondary">
                    Clear Values
                </Control.reset>
            </Form>
        );
    }
}

export default SubjectForm;