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
                        Add HouseholdData
                    </button>
                </LocalForm>
                <button>
                    <Link to="/adults/">
                        Add adult information
                    </Link>
                </button>
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
            </div>
        );
    }
}


export default connect(null, {addHouseholdData})(HouseholdForm);