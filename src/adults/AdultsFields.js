import React from 'react';
import {Control, Field} from 'react-redux-form';

const AdultsFields = (props) => (
    <div>
        <div className="field">
            <Control.text
                model=".id"
                type="hidden"
                value={props.id}
            />
        </div>
        <div className="field">
            <label>Adult name</label>
            <Control.text
                model='.nom'
                placeholder='First Name'
          />
        </div>
        <div className="field">
            <label>Date born</label>
            <Control.text
                model='.data_naixement'
                placeholder="2005-01-21"

            />
        </div>
        <div className="field">
            <label>City</label>
            <Field model='.ciutat_empadronament' dynamic={false}>
                <select>
                    <option default value="select one">Select one ....</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="L'Hospitalet">L'Hospitalet</option>
                    <option value="Cornellà">Cornellà</option>
                </select>
            </Field>
        </div>
        <div className="field">
            <label><Control.checkbox model=".social_services_user" /> I am a social services user</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".ingressat_a_centre_penitenciari" /> Ingressat en centre penitenciari</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".desocupat" /> Desocupat</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".ha_treballat_a_l_estranger_6_mesos" /> Ha treballat a l'estranger 6 mesos</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".no_se_li_ha_concedit_cap_ajuda_rai_en_els_ultims_12_mesos" /> No se li ha concedit cap ajuda rai en els ultims 12 mesos</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".no_se_li_ha_concedit_tres_ajudes_rai_anteriors" /> No se li ha concedit tres ajudes rai anteiors</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".treballa_per_compte_propi" /> Treballa per compte propi</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".percep_prestacions_incompatibles_amb_la_feina" /> Percep prestacions incompatibles amb la feina</label>
        </div>
    </div>
);

export default AdultsFields;