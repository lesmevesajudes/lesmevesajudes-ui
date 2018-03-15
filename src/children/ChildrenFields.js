import React from 'react';
import {Control} from 'react-redux-form';
import {Checkbox, Input} from "material-ui";

const ChildrenFields = (props) => (
    <div>
        <div className="field">
            <Control.text
                model=".id"
                type="hidden"
            />
        </div>
        <div className="field">
            <label>Com vol identificar a aquesta persona?</label>
            <Control.text
                required
                model='.nom'
                placeholder='Nom'
                component={Input}
          />
        </div>
        <div className="field">
            <label>Data naixement</label>
            <Control.text
                required
                type="date"
                model='.data_naixement'
                placeholder="2005-01-21"
                component={Input}
            />
        </div>
        <div className="field">
            <label>Codi postal empadronament</label>
            <Control.text
                required
                model='.codi_postal_empadronament'
                placeholder='08000'
                component={Input}
            />
        </div>
        <div className="field">
            <label>Grau de discapacitat</label>
            <Control.text
                model='.grau_discapacitat'
                placeholder="0"
                component={Input}
            />
        </div>
        <div className="field">
            <label>
                <Control.checkbox
                    model=".social_services_user"
                    component={Checkbox}
                /> Usuari de serveis socials
            </label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".es_escolaritzat_entre_P3_i_4rt_ESO" component={Checkbox} /> Està escolaritzat entre P4 i 4rt d'ESO</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".utilitza_el_servei_de_menjador" component={Checkbox} /> Utilitza el servei de menjador de l'escola</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".te_beca_menjador" component={Checkbox} /> Té beca menjador</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".en_acolliment" component={Checkbox} /> En acolliment</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".en_guardia_i_custodia" component={Checkbox}/> En guardia i custodia</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".beneficiari_fons_infancia_2017" component={Checkbox}/> Beneficiari/a fons infància 2017</label>
        </div>
    </div>
);

export default ChildrenFields;