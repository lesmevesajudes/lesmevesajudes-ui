// @flow
import React from 'react';
import {Control} from 'react-redux-form';
import type {Rent} from "./RentTypes";

type Props = {
    state:?Rent,
    persons: Array<any>,
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
                    {props.persons.map((person) => (
                        <option key={person.id} value={person.id}>{person.nom}</option>
                    ))}
                </Control.select>
            </div>
        </div>
        <div className="field">
            <label>Data signatura del contracte d'arrendament</label>
            <Control.text
                className="RegularTextInput"
                id='data_signatura_contracte_arrendament'
                model='.data_signatura_contracte_arrendament'
                placeholder="2005-01-21"
                type="date"
                required
            />
        </div>
        <div className="field">
            <label><Control.checkbox model=".relacio_de_parentiu_amb_el_propietari" /> Algun membre de la família té relació de parentiu amb el propietari de l'habitatge</label>
        </div>

        <div className="field">
            <label><Control.checkbox model=".existeix_deute_en_el_pagament_del_lloguer" /> Existeix un deute en el pagament del lloguer</label>
        </div>
        {props.state.existeix_deute_en_el_pagament_del_lloguer === true &&
            <div className="field">
                <label>Import total del deute (&euro;)</label>
                <Control.text
                    className="RegularTextInput"
                    model=".import_del_deute_amb_el_propietari"
                    placeholder='0'/>
            </div>
        }
        <div className="field">
            <label><Control.checkbox model=".lloguer_domiciliat" /> El pagament del lloguer està domiciliat</label>
        </div>
        <div className="field">
            <label>Import mensual del lloguer (&euro;)</label>
            <Control.text
                className="RegularTextInput"
                model=".import_del_lloguer"
                placeholder='0'/>
        </div>
    </div>
);

export default RentFields;