import React from 'react';
import {Control} from 'react-redux-form';

const ChildrenFields = (props) => (
    <div>
        <div className="field">
            <Control.text
                model=".id"
                type="hidden"
            />
        </div>
        <div className="field">
            <label>Nom</label>
            <Control.text
                required
                className="RegularTextInput"
                model='.nom'
                placeholder='Nom'
          />
        </div>
        <div className="field">
            <label>Data naixement</label>
            <Control.text
                required
                className="RegularTextInput"
                type="date"
                model='.data_naixement'
                placeholder="2005-01-21"
            />
        </div>
        <div className="field">
            <label>Codi postal empadronament</label>
            <Control.text
                required
                className="RegularTextInput"
                model='.codi_postal_empadronament'
                placeholder='08000'
            />
        </div>
        <div className="field">
            <label>Grau de discapacitat</label>
            <Control.text
                className="RegularTextInput"
                model='.grau_discapacitat'
                placeholder="0"
            />
        </div>
        <div className="field">
            <label>
                <Control.checkbox
                    model=".social_services_user"
                /> Usuari de serveis socials
            </label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".es_escolaritzat_entre_P3_i_4rt_ESO" /> Està escolaritzat entre P4 i 4rt d'ESO</label>
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