//@flow
import React from 'react';
import {addHouseholdData} from './HouseholdDataActions';
import {connect} from 'react-redux';
import type {HouseholdData} from "./HouseholdDataTypes";
import {Select} from 'redux-form-material-ui';
import {Field, reduxForm} from 'redux-form';
import {MenuItem} from "material-ui";


type Props = {
    initialFormFields: HouseholdData,
    addHouseholdData: Function
}

let HouseholdForm = (props: Props) => {
    return (
        <div>
            <h1>Informació sobre el tipus de família</h1>
            <div className="FormContainer">
                <form
                   onBlur={(values) => props.addHouseholdData({...values})}
                >
                    <div className="field">
                        <label>Tipus familia nombrosa:</label>
                        <Field name='tipus_familia_nombrosa' component={Select}>
                            <MenuItem default value="select one" >Select one ....</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                            <MenuItem value="General">General</MenuItem>
                            <MenuItem value="Especial">Especial</MenuItem>
                        </Field>
                    </div>

                    <div className="field">
                        <label>Tipus familia monoparental:</label>
                        <Field name='tipus_familia_monoparental' component={Select}>
                            <MenuItem default value="select one" >Select one ....</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                            <MenuItem value="General">General</MenuItem>
                            <MenuItem value="Especial">Especial</MenuItem>
                        </Field>
                    </div>
                </form>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        initialFormFields: state.householdData
    };
}

export default connect(mapStateToProps, {addHouseholdData})(reduxForm({form: 'household'})(HouseholdForm));