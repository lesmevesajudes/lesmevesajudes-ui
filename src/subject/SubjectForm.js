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