import React, { Component } from 'react';
import { Control, Form } from 'react-redux-form';
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
                    <label>Your income?</label>
                    <Control.text model=".income" placeholder="1000"/>
                </div>
                <button>
                    <Link to="/children/">
                        Add children to your family
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