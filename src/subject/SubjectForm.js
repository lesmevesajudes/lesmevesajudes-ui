import React, { Component } from 'react';
import { Control, Form } from 'react-redux-form';
import "./SubjectForm.css";
import makeSimulation from '../app/Api';

class SubjectForm extends Component {
    static handleSubmit(val) {
        makeSimulation(val);
        console.log(val);
    }

    render() {
        return (
            <Form model="user" onSubmit={(val) => SubjectForm.handleSubmit(val)}>
                <div className="field">
                    <label>Your name?</label>
                    <Control.text model=".name" placeholder="First Name"/>
                </div>
                <button type="submit">Submit!</button>
                <Control.reset model="user" className="secondary">
                    Clear Values
                </Control.reset>
            </Form>
        );
    }
}

export default SubjectForm;