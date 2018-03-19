//@flow
import React from 'react';
import { addHouseholdData } from './HouseholdDataActions';
import { connect } from 'react-redux';
import type {HouseholdData } from "./HouseholdDataTypes";
import { Select, Checkbox, TextField } from 'redux-form-material-ui';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { MenuItem } from "material-ui";
import {Trans} from "react-i18next";


type Props = {
    initialValues: HouseholdData,
    addHouseholdData: Function,
    esUsuariServeisSocials: Boolean
}

let HouseholdForm = (props: Props) => {
    const { esUsuariServeisSocials } = props;
    return (
        <div>
            <h1>Informació sobre el tipus de família</h1>
            <div className="FormContainer">
                <form name='HouseholdForm'>
                    <div className="field">
                        <label>Tipus familia nombrosa:</label>
                        <Field name='tipus_familia_nombrosa' component={Select}>
                            <MenuItem value="No">No</MenuItem>
                            <MenuItem value="General">General</MenuItem>
                            <MenuItem value="Especial">Especial</MenuItem>
                        </Field>
                    </div>

                    <div className="field">
                        <label>Tipus familia monoparental:</label>
                        <Field name='tipus_familia_monoparental' component={Select}>
                            <MenuItem value="No">No</MenuItem>
                            <MenuItem value="General">General</MenuItem>
                            <MenuItem value="Especial">Especial</MenuItem>
                        </Field>
                    </div>
                    <div className="field">
                        <label><Field name="es_usuari_serveis_socials" component={Checkbox}/> Família usuaria de serveis socials en seguiment a un CSS o servei especialitzat de l'Ajuntament de Barcelona</label>
                        { esUsuariServeisSocials &&
                        <div>
                            <label><Trans>Data d'obertura d'expedient</Trans></label>
                            <Field
                                name='data_obertura_expedient_serveis_socials'
                                placeholder="2005-01-21"
                                type="date"
                                component={TextField}
                                required
                            />
                        </div>}
                    </div>
                </form>
            </div>
        </div>
    );
};

const selector = formValueSelector('HouseholdForm');

function mapStateToProps(state) {
    return {
        initialValues: state.household,
        esUsuariServeisSocials: selector(state, 'es_usuari_serveis_socials')
    };
}

export default connect(mapStateToProps, {addHouseholdData})(
    reduxForm(
        {
            form: 'HouseholdForm',
            onChange: (values, dispatch, props, previousValues) => {
                dispatch(addHouseholdData(values));
            },})(HouseholdForm));