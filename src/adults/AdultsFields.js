import React from 'react';
import {Control, Field} from 'react-redux-form';

const AdultsFields = (props) => (
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
                model='.nom'
                placeholder='Nom'
                required
          />
        </div>
        <div className="field">
            <label>Data naixement</label>
            <Control.text
                model='.data_naixement'
                placeholder="2005-01-21"
                type="date"
            />
        </div>
        <div className="field">
            <label>Sexe</label>
            <Field
                model='.sexe'
                dynamic={false}
            >
                <select>
                    <option default value="">Seleccioni'n un</option>
                    <option value="Dona">Dona</option>
                    <option value="Home">Home</option>
                </select>
            </Field>
        </div>
        <div className="field">
            <label>Nacionalitat</label>
            <Field
                model='.nacionalitat'
                dynamic={false}
            >
                <select>
                    <option default value="">Seleccioni'n un</option>
                    <option value="Espanyola">Espanyola</option>
                    <option value="UE">UE</option>
                    <option value="UE">Altres</option>
                </select>
            </Field>
        </div>
        <div className="field">
            <label>Situació laboral</label>
            <Field
                model='.situacio_laboral'
                dynamic={false}
            >
                <select>
                    <option default value="">Seleccioni'n un</option>
                    <option value="treball_compte_alie">Treballa per compte alié</option>
                    <option value="treball_compte_propi">Treballa per compte propi</option>
                    <option value="desocupat">Desocupat</option>
                    <option value="estudiant">Estudiant</option>
                </select>
            </Field>
        </div>

        <div className="field">
            <label>Grau discapacitat</label>
            <Control.text
                model='.grau_discapacitat'
                placeholder="0"
                type="number"
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
        {props.state.sexe === "Dona" &&
            <div className="field">
            <label><Control.checkbox model=".victima_violencia_de_genere" value={false}/> Víctima violencia de genere</label>
            </div>}
        {props.state.sexe === "Dona" &&
        <div className="field">
            <label><Control.checkbox model=".es_victima_de_violencia_masclista" value={false}/> Víctima de violencia masclista</label>
        </div>}
        {props.state.sexe === "Dona" &&
        <div className="field">
            <label><Control.checkbox model=".es_divorciada_de_familia_reagrupada" value={false}/> És divorciada de familia reagrupada</label>
        </div>}
        <div className="field">
            <label><Control.checkbox model=".victima_de_terrorisme" value={false}/> Víctima de terrorisme</label>
        </div>
        {props.state.nacionalitat && props.state.nacionalitat !== "Espanyola" &&
        <div className="field">
            <label><Control.checkbox model=".te_permis_de_residencia" value={false}/> Té permís de residència</label>
        </div>}
        {props.state.nacionalitat && props.state.nacionalitat !== "Espanyola" &&
        <div className="field">
            <label><Control.checkbox model=".ha_residit_a_catalunya_durant_24_mesos" value={false}/> Ha residit a Catalunya durant 24 mesos</label>
        </div>}
        {props.state.nacionalitat && props.state.nacionalitat !== "Espanyola" &&
        <div className="field">
            <label><Control.checkbox model=".resident_a_catalunya_durant_5_anys" value={false}/> Ha residit a Catalunya durant 5 anys</label>
        </div>}
        <div className="field">
            <label><Control.checkbox model=".ingressat_en_centre_penitenciari" value={false}/> Ingressat en centre penitenciari</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".es_orfe_dels_dos_progenitors" value={false}/> És orfe dels dos progenitors</label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".ha_treballat_a_l_estranger_6_mesos" value={false}/> Ha treballat a l'estranger 6 mesos</label>
        </div>
        { props.state.situacio_laboral === "desocupat" &&
        <div className="field">
            <label><Control.checkbox model=".en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina" value={false}/> En els últims 12 mesos ha fet baixa voluntaria de la feina</label>
        </div>}
        { props.state.situacio_laboral === "desocupat" &&
        <div className="field">
            <label><Control.checkbox model=".ha_esgotat_prestacio_de_desocupacio" value={false}/> Ha esgotat prestació de desocupació</label>
        </div>}
        { props.state.situacio_laboral === "desocupat" &&
        <div className="field">
            <label><Control.checkbox model=".demandant_d_ocupacio_durant_12_mesos" value={false}/> Demandant d'ocupació durant 12 mesos</label>
        </div>}
        { props.state.situacio_laboral === "desocupat" &&
        <div className="field">
            <label><Control.checkbox model=".durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina" value={false}/> Durant el mes anterior ha presentat solicituds recerca de feina</label>
        </div>}
        <div className="field">
            <label><Control.checkbox model=".al_corrent_de_les_obligacions_tributaries" value={false}/> Al corrent de les obligacions tributàries</label>
        </div>

    </div>
);

export default AdultsFields;