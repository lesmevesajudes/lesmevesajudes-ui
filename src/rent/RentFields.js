// @flow
import React from 'react';
import {Control, Field} from 'react-redux-form';
import type {Rent} from "./RentTypes";
import {Adult} from "../adults/AdultsTypes";
import {Checkbox, Input} from "material-ui";
import type {AdultId} from "../adults/AdultsTypes";
import {Trans} from "react-i18next";

type Props = {
    state:?Rent,
    personesQuePodenTenirContracteDeLloguer: Map<AdultId, Adult>,
}

const RentFields = (props: Props) => (
    <div>
        <div className="field">
            <label>Titular del contracte de lloguer</label>
            <div className="custom-select">
                <Control.select
                    required
                    model=".titular_contracte_de_lloguer_id">
                    <option defaultValue value="" >seleccioni una persona</option>
                    {props.personesQuePodenTenirContracteDeLloguer.valueSeq().map((persona) => (
                        <option key={persona.id} value={persona.id}>{persona.nom}</option>
                    ))}
                    <option key="no-conviu" value="no-conviu">Una persona que no viu a l'habitatge</option>

                </Control.select>
            </div>
        </div>
        <div className="field">
            <label>Data signatura del contracte d'arrendament</label>
            <Control.text
                id='data_signatura_contracte_arrendament'
                model='.data_signatura_contracte_arrendament'
                placeholder="2005-01-21"
                type="date"
                component={Input}
                required
            />
        </div>
        <div className="field">
            <label><Trans>Codi postal empadronament</Trans></label>
            <Control.text
                required
                model='.codi_postal_empadronament'
                placeholder='08000'
                component={Input}
            />
        </div>
        <div className="field">
            <label><Trans>Relació amb l'habitatge</Trans></label>
            <Field
                model='.relacio_habitatge'
                dynamic={false}
            >
                <div className="custom-select">
                    <select required>
                        <option default value=""><Trans>Seleccioni'n un</Trans></option>
                        <option value="treball_compte_alie"><Trans>Propietari</Trans></option>
                        <option value="treball_compte_propi"><Trans>Llogater</Trans></option>
                        <option value="desocupat"><Trans>Usufructuari</Trans></option>
                    </select>
                </div>
            </Field>
        </div>
        <div className="field">
            <label><Control.checkbox model=".relacio_de_parentiu_amb_el_propietari" component={Checkbox}/> Algun membre de la família té relació de parentiu amb el propietari de l'habitatge</label>
        </div>

        <div className="field">
            <label><Control.checkbox model=".existeix_deute_en_el_pagament_del_lloguer" component={Checkbox}/> Existeix un deute en el pagament del lloguer</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".tinc_alguna_p``opietat" component={Checkbox}/> Tinc alguna propietat a part de l'habitatge habitual</label>
        </div>
        // Valor finca rustica
        // Valor finca urbana


        {props.state.existeix_deute_en_el_pagament_del_lloguer === true &&
            <div className="field">
                <label>Import total del deute (&euro;)</label>
                <Control.text
                    model=".import_del_deute_amb_el_propietari"
                    component={Input}
                    placeholder='0'/>
            </div>
        }
        <div className="field">
            <label><Control.checkbox model=".lloguer_domiciliat" component={Checkbox}/> El pagament del lloguer està domiciliat</label>
        </div>
        <div className="field">
            <label>Import mensual del lloguer (&euro;)</label>
            <Control.text
                model=".import_del_lloguer"
                component={Input}
                placeholder='0'/>
        </div>
    </div>
    //Preguntar si hi ha hipoteca
    //              Preguntar titular hipoteca
);

export default RentFields;