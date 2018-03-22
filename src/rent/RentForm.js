//@flow
import React from 'react';
import {connect} from 'react-redux';
import {addRent} from './RentActions';
import type {Rent} from './RentTypes';
import {Adult} from '../adults/AdultsTypes';
import type {AdultId} from '../adults/AdultsTypes';
import {Map} from 'immutable';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import {MenuItem, Grid} from 'material-ui';
import { Checkbox, TextField, Select } from 'redux-form-material-ui';
import {Trans} from 'react-i18next';


type Props = {
    initialValues: ?Rent,
    addRent: Function,
    personesQuePodenTenirContracteDeLloguer: Map<AdultId, Adult>,
    state: any,
    esLlogater: boolean,
    existeixDeute: boolean
}

const RentForm = (props: Props) => {
    const { esLlogater, existeixDeute } = props;
    return (
        <div>
            <h1>Afegir informació sobre el lloguer del domicili habitual</h1>
            <div  class="bg-container">
                <Grid style={{ padding: 20 }} container wrap="nowrap">
            <form name='RentForm'>
                <div>
                    <div>
                        <div className='field'>
                            <label><Trans>Relació amb l'habitatge</Trans></label>
                            <Field
                                name='relacio_habitatge'
                                component={Select}
                            >
                                <MenuItem value='propietari'><Trans>Propietari</Trans></MenuItem>
                                <MenuItem value='llogater'><Trans>Llogater</Trans></MenuItem>
                                <MenuItem value='usufructuari'><Trans>Usufructuari</Trans></MenuItem>
                            </Field>
                        </div>
                        { esLlogater &&
                        <div className='field'>
                            <label><Trans>Codi postal on es troba l'habitatge</Trans></label>
                            <Field
                                required
                                name='codi_postal_habitatge'
                                placeholder='08000'
                                component={TextField}
                            />
                        </div>}
                        { esLlogater &&
                        <div className='field'>
                            <label>Titular del contracte de lloguer</label>
                            <Field
                                    name='titular_contracte_de_lloguer_id'
                                    component={Select}>
                                    {props.personesQuePodenTenirContracteDeLloguer.valueSeq().map((persona) => (
                                        <MenuItem key={persona.id} value={persona.id}>{persona.nom}</MenuItem>
                                    ))}
                                    <MenuItem key='no-conviu' value='no-conviu'>Una persona que no viu a l'habitatge</MenuItem>
                            </Field>
                        </div>}
                        { esLlogater &&
                        <div className='field'>
                            <label>Data signatura del contracte d'arrendament</label>
                            <Field
                                name='data_signatura_contracte_arrendament'
                                placeholder='2005-01-21'
                                type='date'
                                component={TextField}
                                required
                            />
                        </div>}
                        { esLlogater &&
                        <div className='field'>
                            <label><Field name='relacio_de_parentiu_amb_el_propietari' component={Checkbox}/> Algun membre de la família té relació de parentiu amb el propietari de l'habitatge</label>
                        </div>}
                        { esLlogater &&
                        <div className='field'>
                            <label><Field name='existeix_deute_en_el_pagament_del_lloguer' component={Checkbox}/> Existeix un deute en el pagament del lloguer</label>
                        </div>}

                        { esLlogater && existeixDeute &&
                        <div className='field'>
                            <label>Import total del deute (&euro;)</label>
                            <Field
                                name='import_del_deute_amb_el_propietari'
                                component={TextField}
                                placeholder='0'/>
                        </div>}

                        { esLlogater &&
                        <div className='field'>
                            <label><Field name='lloguer_domiciliat' component={Checkbox}/> El pagament del lloguer està domiciliat</label>
                        </div>}

                        { esLlogater &&
                        <div className='field'>
                            <label>Import mensual del lloguer (&euro;)</label>
                            <Field
                                name='import_del_lloguer'
                                component={TextField}
                                placeholder='0'/>
                        </div>}

                        {
                            //Preguntar si hi ha hipoteca
                            //              Preguntar titular hipoteca
                        }

                        <div className='field'>
                            <label><Field name='tinc_alguna_propietat' component={Checkbox}/> Tinc alguna propietat a part de l'habitatge habitual</label>
                        </div>
                        {
                            // Valor finca rustica
                            // Valor finca urbana
                        }
                    </div>
                </div>
            </form>
                </Grid>
            </div>
        </div>
    );
}

const selector = formValueSelector('RentForm');

function mapStateToProps(state) {
    return {
        esLlogater: selector(state, 'relacio_habitatge') === 'llogater',
        existeixDeute: selector(state, 'existeix_deute_en_el_pagament_del_lloguer'),
        initialValues: state.rent,
        personesQuePodenTenirContracteDeLloguer: state.adults.filter((adult) => adult.rol !== 'fill')
    };
}

export default connect(mapStateToProps)(reduxForm(
    {
        form: 'RentForm',
        onChange: (values, dispatch, props, previousValues) => {
            dispatch(addRent(values));
        },
    })(RentForm));
