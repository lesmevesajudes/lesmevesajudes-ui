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
                <Link to="/adults/">
                    <button>
                        Add adult information
                    </button>
                </Link>

                <Link to="/children/">
                    <button>
                        Add children information
                    </button>
                </Link>
                <Link to="/financial/">
                    <button>
                        Add financial data
                    </button>
                </Link>
                <Link to="/results/">
                    <button>
                        Fetch results
                    </button>
                </Link>
            </div>
        );
    }
}


export default connect(null, {addHouseholdData})(HouseholdForm);