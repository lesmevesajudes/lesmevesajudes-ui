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
                <Link to="/adults/">
                    <button>
                        INformació dels adults
                    </button>
                </Link>

                <Link to="/children/">
                    <button>
                        Informació dels menors
                    </button>
                </Link>
                <Link to="/rent/">
                    <button>
                        Informació sobre el lloguer
                    </button>
                </Link>
                <Link to="/properties/">
                    <button>
                        Informació sobre les propietats
                    </button>
                </Link>
                <Link to="/financial/">
                    <button>
                        Informació sobre els ingressos
                    </button>
                </Link>
                <Link to="/results/">
                    <button>
                        Veure els resultats
                    </button>
                </Link>
            </div>
        );
    }
}


export default connect(null, {addHouseholdData})(HouseholdForm);