import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <div>
                <LocalForm model="householdData"
                           onSubmit={(values) => this.handleSubmit(values)}
                >

                    <HouseholdFields/>
                    <button type="submit">
                        Afegir informació de la família
                    </button>
                </LocalForm>
                <div>
                    <Link to="/admin/">
                        <button>
                            Tornar
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}


export default connect(null, {addHouseholdData})(HouseholdForm);