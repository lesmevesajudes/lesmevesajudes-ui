//@flow
import React, {Component} from 'react';
import {LocalForm} from 'react-redux-form';
import {connect} from 'react-redux';
import {addProperties} from './PropertiesActions';
import PropertiesFields from "./PropertiesFields";
import type {Properties} from "./PropertiesTypes";

type Props = {
    initialState: Properties,
    addProperties: Function
}
class PropertiesForm extends Component<Props> {
    handleSubmit(values) {
        this.props.addProperties({...values});
    }

    render() {
        return (
            <div>
                <h1>Afegir informació sobre les propietats i negocis de la família</h1>
                <LocalForm model="properties"
                           initialState={this.props.initialState}
                           onChange={(values) => this.handleSubmit(values)}
                >
                    <div>

                        <PropertiesFields/>
                    </div>
                </LocalForm>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        initialState: state.properties
    };
}

export default connect(mapStateToProps, {addProperties})(PropertiesForm);
