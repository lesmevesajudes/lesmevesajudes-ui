//@flow
import React from 'react';
import { addHouseholdData } from './HouseholdDataActions';
import { connect } from 'react-redux';
import type {HouseholdData } from "./HouseholdDataTypes";
import { Select, Checkbox, TextField } from 'redux-form-material-ui';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { MenuItem } from "material-ui";
import {Trans} from "react-i18next";
import {Adult} from "../adults/AdultsTypes";
import type {AdultId} from "../adults/AdultsTypes";
import {Map} from 'immutable';


type Props = {
    initialValues: HouseholdData,
    addHouseholdData: Function,
    esUsuariServeisSocials: Boolean,
    esMonoparental: Boolean,
    esFamiliaNombrosa: Boolean,
    infantsEnAcolliment: Map<AdultId, Adult>
}

let HouseholdForm = (props: Props) => {
    const { esUsuariServeisSocials, esMonoparental, esFamiliaNombrosa, infantsEnAcolliment  } = props;
    return (
        <div>
            <h1>Informació sobre el tipus de família</h1>
            <div className="FormContainer">
                <form name='HouseholdForm'>
                    { esFamiliaNombrosa &&
                    <div className="field">
                        <label>Tipus familia nombrosa:</label>
                        <Field name='tipus_familia_nombrosa' component={Select}>
                            <MenuItem value="No">No</MenuItem>
                            <MenuItem value="General">General</MenuItem>
                            <MenuItem value="Especial">Especial</MenuItem>
                        </Field>
                    </div>}

                    { esMonoparental &&
                    <div className="field">
                        <label>Disposa del carnet de familia monoparental:</label>
                        <Field name='tipus_familia_monoparental' component={Select}>
                            <MenuItem value="No">No</MenuItem>
                            <MenuItem value="General">General</MenuItem>
                            <MenuItem value="Especial">Especial</MenuItem>
                        </Field>
                    </div>}
                    { (infantsEnAcolliment.count() > 0) &&
                        infantsEnAcolliment.valueSeq().map( (infant: Adult) =>
                            <div key={infant.id}>
                                <label><Field name={"custodia." + infant.id } component={Checkbox}/> Tinc la custodia de {infant.nom}</label>
                            </div>)

                    }
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
const esFill = (persona: Adult) => persona.rol === 'fill' || persona.rol === 'infant_acollit';

const esFamiliaNombrosa = (persona: Map<AdultId, Adult>) =>{
    const tresFillsOMes: boolean = persona.filter( (persona: Adult) => esFill(persona) ).count() >= 3;
    const dosFillsOMesAlgunAmbDiscapacitatSuperior33: boolean = persona.filter( (persona: Adult) => esFill(persona) ).count() >= 2 && persona.filter( (persona: Adult) => esFill(persona) && persona.grau_discapacitat > 33 ).count() >= 1;
    return tresFillsOMes || dosFillsOMesAlgunAmbDiscapacitatSuperior33;
};

function mapStateToProps(state) {
    return {
        initialValues: state.household,
        esUsuariServeisSocials: selector(state, 'es_usuari_serveis_socials'),
        esMonoparental: state.adults.filter( (adult: Adult) => adult.rol === 'pares' ).count() === 1,
        esFamiliaNombrosa: esFamiliaNombrosa(state.adults) ,
        infantsEnAcolliment: state.adults.filter( (adult: Adult) => adult.rol === 'infant_acollit')
    };
}

export default connect(mapStateToProps, {addHouseholdData})(
    reduxForm(
        {
            form: 'HouseholdForm',
            onChange: (values, dispatch, props, previousValues) => {
                dispatch(addHouseholdData(values));
            },})(HouseholdForm));