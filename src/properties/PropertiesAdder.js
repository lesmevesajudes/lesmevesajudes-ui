import React, {Component} from 'react';
import {LocalForm} from 'react-redux-form';
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
                <h1>Afegir informació sobre les propietats i negocis de la família</h1>
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
