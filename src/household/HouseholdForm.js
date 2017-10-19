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
            <div>
                <h1>Informació sobre el tipus de família</h1>
                <LocalForm model="householdData"
                           onChange={(e) => this.handleSubmit(e)}
                           initialState={this.props.initialFormFields}
                >
                    <HouseholdFields/>
                </LocalForm>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        initialFormFields: state.householdData
    };
}
export default connect(mapStateToProps, {addHouseholdData})(HouseholdForm);