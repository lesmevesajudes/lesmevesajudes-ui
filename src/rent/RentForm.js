//@flow
import React, {Component} from 'react';
import {LocalForm} from 'react-redux-form';
import {connect} from 'react-redux';
import {addRent} from './RentActions';
import RentFields from "./RentFields";
import type {Rent} from "./RentTypes";
import {Adult} from "../adults/AdultsTypes";
import type {AdultId} from "../adults/AdultsTypes";

type Props = {
    initialState:?Rent,
    addRent: Function,
    personesQuePodenTenirContracteDeLloguer: Map<AdultId, Adult>,
    state: any
}
class RentForm extends Component<Props> {
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
                           initialState={this.props.state}
                >
                    <div>
                        <RentFields
                            state={this.props.state}
                            personesQuePodenTenirContracteDeLloguer={this.props.personesQuePodenTenirContracteDeLloguer}/>
                    </div>
                </LocalForm>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        state: state.rent,
        personesQuePodenTenirContracteDeLloguer: state.adults
    };
}

export default connect(mapStateToProps, {addRent})(RentForm);
