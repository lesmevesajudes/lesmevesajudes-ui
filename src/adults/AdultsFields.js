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
            <label>Nom</label>
            <Control.text
                model='.nom'
                placeholder='First Name'
          />
        </div>
        <div className="field">
            <label>Fata naixement</label>
            <Control.text
                model='.data_naixement'
                placeholder="2005-01-21"

            />
        </div>
        <div className="field">
            <label>Grau discapacitat</label>
            <Control.text
                model='.grau_discapacitat'
                placeholder="0"

            />
        </div>
        <div className="field">
            <label>Ciutat empadronament</label>
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
            <label><Control.checkbox model=".social_services_user" value={false}/> Usuari de serveis socials</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".victima_violencia_de_genere" value={false}/> Víctima violencia de genere</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".es_victima_de_violencia_masclista" value={false}/> Víctima de violencia masclista</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".victima_de_terrorisme" value={false}/> Víctima de terrorisme</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".te_permis_de_residencia" value={false}/> Té permís de residència</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".es_divorciada_de_familia_reagrupada" value={false}/> És divorciada de familia reagrupada</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".ha_residit_a_catalunya_durant_24_mesos" value={false}/> Ha residit a Catalunya durant 24 mesos</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".resident_a_catalunya_durant_5_anys" value={false}/> Ha residit a Catalunya durant 5 anys</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".es_beneficiari_d_una_prestacio_residencial" value={false}/> És beneficiari d'una prestació residencial</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina" value={false}/> En els últims 12 mesos ha fet baixa voluntaria de la feina</label>
        </div>

        <div className="field">
            <label><Control.checkbox model=".es_empadronat_a_catalunya" value={false} /> És empadronat a Catalunya</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".ingressat_en_centre_penitenciari" value={false}/> Ingressat en centre penitenciari</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".es_orfe_dels_dos_progenitors" value={false}/> És orfe dels dos progenitors</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".desocupat" value={false}/> Desocupat</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".ha_treballat_a_l_estranger_6_mesos" value={false}/> Ha treballat a l'estranger 6 mesos</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".no_se_li_ha_concedit_cap_ajuda_rai_en_els_ultims_12_mesos" value={false}/> No se li ha concedit cap ajuda RAI en els ultims 12 mesos</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".no_se_li_ha_concedit_tres_ajudes_rai_anteriors" value={false}/> No se li ha concedit tres ajudes RAI anteiors</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".treballa_per_compte_propi" value={false}/> Treballa per compte propi</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".percep_prestacions_incompatibles_amb_la_feina" value={false}/> Percep prestacions incompatibles amb la feina</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".ha_esgotat_prestacio_de_desocupacio" value={false}/> Ha esgotat prestació de desocupatacio</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".demandant_d_ocupacio_durant_12_mesos" value={false}/> Demandant d'ocupacio durant 12 mesos</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina" value={false}/> Durant el mes anterior ha presentat solicituds recerca de feina</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".beneficiari_ajuts_per_violencia_de_genere" value={false}/> Beneficiari ajuts per violència de gènere</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".al_corrent_de_les_obligacions_tributaries" value={false}/> Al corrent de les obligacions tributàries</label>
        </div>

    </div>
);

export default AdultsFields;