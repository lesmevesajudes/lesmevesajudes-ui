import React from 'react';
import { Field } from 'react-redux-form';

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
            <label>Tipus familia nombrosa:</label>
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
            <label>Tipus familia monoparental:</label>
            <Field model='.tipus_familia_monoparental' dynamic={false}>
                <select>
                    <option default value="select one" >Select one ....</option>
                    <option value="No">No</option>
                    <option value="General">General</option>
                    <option value="Especial">Especial</option>
                </select>
            </Field>
        </div>
    </div>
    );

export default HouseholdFields;