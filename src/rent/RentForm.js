//@flow
import React, {Component} from 'react';
import {LocalForm} from 'react-redux-form';
import {connect} from 'react-redux';
import {addRent} from './RentActions';
import RentFields from "./RentFields";
import type {Rent} from "./RentTypes";
import {serialize as serialize_adults} from '../adults/AdultsReducer';
import {serialize as serialize_children} from '../children/ChildrenReducer';

type Props = {
    initialState:?Rent,
    addRent: Function
}
class RentAdder extends Component<Props> {
    handleSubmit(values) {
        this.props.addRent({...values});
    }

    render() {
        return (
            <div>
                <h1>Afegir informació sobre el lloguer del domicili habitual</h1>
                <div className="FormContainer">
                <LocalForm model="rent"
                           onChange={(values) => this.handleSubmit(values)}
                           initialState={this.props.initialState}
                >
                    <div>

                        <RentFields persons={this.props.persons}/>
                    </div>
                </LocalForm>
                </div>
            </div>
        );
    }
}

function listPersons(state) {
    return [
        ...serialize_adults(state.adults),
        ...serialize_children(state.children)];
}


function mapStateToProps(state) {
    return {
        initialState: state.rent,
        persons: listPersons(state)
    };
}

export default connect(mapStateToProps, {addRent})(RentAdder);
