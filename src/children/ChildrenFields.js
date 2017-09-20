import React from 'react';
import {Control, Field} from 'react-redux-form';

const ChildrenFields = (props) => (
    <div>
        <div className="field">
            <Control.text
                model=".id"
                type="hidden"
                value={props.id}
            />
        </div>
        <div className="field">
            <label>Child name</label>
            <Control.text
                model='.nom'
                placeholder='First Name'
                value={props.name}
          />
        </div>
        <div className="field">
            <label>Date born</label>
            <Control.text
                model='.data_naixement'
                placeholder="2005-01-21"
                value={props.dateBorn}
            />
        </div>
        <div className="field">
            <label>City</label>
            <Field model='.ciutat_empadronament' dynamic={false}>
                <select>
                    <option default value="select one" >Select one ....</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="L'Hospitalet">L'Hospitalet</option>
                    <option value="Cornellà">Cornellà</option>
                </select>
            </Field>
        </div>
        <div className="field">
            <label>Grau de discapacitat</label>
            <Control.text
                model='.grau_discapacitat'
                placeholder="0"
                value={props.grau_discapacitat}
            />
        </div>
        <div className="field">
            <label>
                <Control.checkbox
                    model=".social_services_user"
                    value={props.social_services_user}
                /> I am a social services user
            </label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".es_escolaritzat" /> Està escolaritzat</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".utilitza_el_servei_de_menjador" /> Utilitza el servei de menjador de l'escola</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".te_beca_menjador" /> Té beca menjador</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".en_acolliment" /> En acolliment</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".en_guardia_i_custodia" /> En guardia i custodia</label>
        </div>
    </div>
);

export default ChildrenFields;