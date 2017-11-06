import React from 'react';
import {Control} from 'react-redux-form';

const RentFields = (props) => (
    <div>
        <div className="field">
            <label><Control.checkbox model=".ingressos_suficients_per_pagar_el_lloguer" /> Disposa d'ingressos suficients per a pagar el lloguer</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".LLOGMAXBCN" /> El lloguer no supera el lloguer màxim per a Barcelona</label>
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