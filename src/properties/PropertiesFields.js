import React from 'react';
import {Control} from 'react-redux-form';

const PropertiesFields = (props) => (
    <div>
        <div className="field">
            <label>Family business revenue:</label>
            <Control.text
                model=".volum_del_negoci_familiar"
                placeholder='0'/>
        </div>
        <div className="field">
            <label>Rendiments del patrimoni familiar:</label>
            <Control.text
                model=".rendiments_del_patrimoni"
                placeholder='0'/>
        </div>
        <div className="field">
            <label>Valor cadastral finques rustiques:</label>
            <Control.text
                model=".valor_cadastral_finques_rustiques"
                placeholder='0'/>
        </div>

        <div className="field">
            <label>Valor cadastral finques rustiques:</label>
            <Control.text
                model=".valor_cadastral_finques_urbanes"
                placeholder='0'/>
        </div>
    </div>
);

export default PropertiesFields;