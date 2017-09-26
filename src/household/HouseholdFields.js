import React from 'react';
import { Control, Field } from 'react-redux-form';

const HouseholdFields = (props) => (
    <div>
        <div className="field">
            <label>Grau d'exclusió social:</label>
            <Field model='.nivell_de_risc_d_exclusio_social' dynamic={false}>
                <select>
                    <option default value="select one" >Select one ....</option>
                    <option value="No">No</option>
                    <option value="Existeix">Existeix</option>
                    <option value="Greu">Greu</option>
                </select>
            </Field>
        </div>

        <div className="field">
            <label>tipus familia nombrosa:</label>
        <Field model='.tipus_familia_nombrosa' dynamic={false}>
            <select>
                <option default value="select one" >Select one ....</option>
                <option value="No">No</option>
                <option value="General">General</option>
                <option value="Especial">Especial</option>
            </select>
            </Field>
            </div>

            <div className="field">
            <label>tipus familia monoparental:</label>
        <Field model='.tipus_familia_monoparental' dynamic={false}>
            <select>
                <option default value="select one" >Select one ....</option>
                <option value="No">No</option>
                <option value="General">General</option>
                <option value="Especial">Especial</option>
            </select>
            </Field>
            </div>
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
export default HouseholdFields;