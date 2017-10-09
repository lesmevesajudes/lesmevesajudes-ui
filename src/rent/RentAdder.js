import React, {Component} from 'react';
import {LocalForm} from 'react-redux-form';
import {connect} from 'react-redux';
import {addRent} from './RentActions';
import RentFields from "./RentFields";

class RentAdder extends Component {
    handleSubmit(values) {
        this.props.addRent({...values});
        this.props.history.push('/rent');
    }

    render() {
        return (
            <div>
                <h1>Afegir informació sobre el lloguer del domicili habitual</h1>
                <LocalForm model="rent"
                           onSubmit={(values) => this.handleSubmit(values)}
                >
                    <div>

                        <RentFields {...this.props.rent}/>
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
        rent: state.rent
    };
}

export default connect(mapStateToProps, {addRent})(RentAdder);
