import React, {Component} from 'react';
import {LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {addRent} from './PropertiesActions';
import PropertiesFields from "./PropertiesFields";

class PropertiesAdder extends Component {
    handleSubmit(values) {
        this.props.addRent({...values});
        this.props.history.push('/properties');
    }

    render() {
        return (
            <div>
                <h1>Afegir informació sobre el lloguer del domicilil habitual</h1>
                <LocalForm model="properties"
                           onSubmit={(values) => this.handleSubmit(values)}
                >
                    <div>

                        <PropertiesFields {...this.props.properties}/>
                        <button type="submit">
                            Validar
                        </button>
                    </div>
                </LocalForm>
                <Link to="/household/">
                    <button>
                        Tornar
                    </button>
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        properties: state.properties
    };
}

export default connect(mapStateToProps, {addRent})(PropertiesAdder);
