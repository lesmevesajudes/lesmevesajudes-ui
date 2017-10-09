import React, { Component } from 'react';
import { LocalForm } from 'react-redux-form';
import {addHouseholdData} from './HouseholdDataActions';
import {connect} from 'react-redux';

import "./HouseholdForm.css";
import HouseholdFields from "./HouseholdFields";

class HouseholdForm extends Component {
    handleSubmit(values) {
        this.props.addHouseholdData({...values});
    }
    render() {
        return (
            <Form model="householdData"
                       onSubmit={(values) => this.handleSubmit(values)}
            >

                <HouseholdFields/>
                <button type="submit">
                    Afegir informació de la família
                </button>
            </Form>
        );
    }
}


export default connect(null, {addHouseholdData})(HouseholdForm);