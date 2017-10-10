//@flow
import React, { Component } from 'react';
import { LocalForm } from 'react-redux-form';
import {addHouseholdData} from './HouseholdDataActions';
import {connect} from 'react-redux';

import "./HouseholdForm.css";
import HouseholdFields from "./HouseholdFields";
import type {HouseholdData} from "./HouseholdDataTypes";

type Props = {
    initialFormFields: HouseholdData,
    addHouseholdData: Function
}
class HouseholdForm extends Component<Props, void> {
    handleSubmit: Function;

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
        this.props.addHouseholdData({...values});
    }
    render() {
        return (
            <LocalForm model="householdData"
                       onSubmit={this.handleSubmit}
                       initialState={this.props.initialFormFields}
            >

                <HouseholdFields/>
                <button type="submit">
                    Afegir informació de la família
                </button>
            </LocalForm>
        );
    }
}

function mapStateToProps(state) {
    return {
        initialFormFields: state.householdData
    };
}
export default connect(mapStateToProps, {addHouseholdData})(HouseholdForm);