// @flow
import React from 'react';
import {Control} from 'react-redux-form';
import type {Rent} from "./RentTypes";

type Props = {
    initialState:?Rent,
    persons: Array<any>,
}

const RentFields = (props: Props) => (
    <div>
        <div className="field">
            <label>Titular del contracte de lloguer</label>
            <div className="custom-select">
                <Control.select
                    required
                    model=".titular_contracte_lloguer_id">
                    <option defaultValue value="" >seleccioni una persona</option>
                    {props.persons.map((person) => (
                        <option key={person.id} value={person.id}>{person.nom}</option>
                    ))}
                </Control.select>
            </div>
        </div>
        <div className="field">
            <label><Control.checkbox model=".esta_al_corrent_del_pagament_de_lloguer" /> Està al corrent del pagament del lloguer</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".lloguer_domiciliat" /> El pagament del lloguer està domiciliat</label>
        </div>
        <div className="field">
            <label>Import de lloguer:</label>
            <Control.text
                className="RegularTextInput"
                model=".import_del_lloguer"
                placeholder='0'/>
        </div>
    </div>
);

export default RentFields;