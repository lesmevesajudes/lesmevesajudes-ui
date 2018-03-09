import React from 'react';
import {Control, Field} from 'react-redux-form';
import Trans from "react-i18next/dist/es/Trans";
import {translate} from "react-i18next";
import {Input, MenuItem, Select} from "material-ui";


const AdultsFields = (props) => (
    <div>
        <div className="field">
            <Control.text
                model=".id"
                type="hidden"/>
        </div>
        <div className="field">
            <label><Trans>Com vol identificar a aquesta persona?</Trans></label>
            <Control.text
                id='nom'
                model='.nom'
                placeholder='Nom'
                component={Input}
                required/>
        </div>
        <div className="field">
            <label><Trans>Data naixement</Trans></label>
            <Control.text
                id='data_naixement'
                model='.data_naixement'
                placeholder="2005-01-21"
                type="date"
                component={Input}
                required
            />
        </div>
        <div className="field">
            <label><Trans>Sexe</Trans></label>
            <Field
                id='sexe'
                model='.sexe'
                dynamic={false}
            >
                <Select
                    value={(props) => props.viewValue}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <div className="custom-select">
                    <select required>
                        <option default value=""><Trans>Seleccioni'n un</Trans></option>
                        <option value="Dona"><Trans>Dona</Trans></option>
                        <option value="Home"><Trans>Home</Trans></option>
                    </select>
                </div>
            </Field>
        </div>
        <div className="field">
            <label><Trans>Nacionalitat</Trans></label>
            <Field
                model='.nacionalitat'
                dynamic={false}
                component={Select}
            >
                <div className="custom-select">
                    <select required>
                        <option default value=""><Trans>Seleccioni'n un</Trans></option>
                        <option value="Espanyola"><Trans>Espanyola</Trans></option>
                        <option value="UE"><Trans>UE</Trans></option>
                        <option value="UE"><Trans>Altres</Trans></option>
                    </select>
                </div>
            </Field>
        </div>
        <div className="field">
            <label><Trans>Codi postal empadronament</Trans></label>
            <Control.text
                required
                model='.codi_postal_empadronament'
                placeholder='08000'
                component={Input}
            />
        </div>
        <div className="field">
            <label><Trans>Situació laboral</Trans></label>
            <Field
                model='.situacio_laboral'
                dynamic={false}
                component={Select}
            >
                <div className="custom-select">
                    <select required>
                        <option default value=""><Trans>Seleccioni'n un</Trans></option>
                        <option value="treball_compte_alie"><Trans>Treballa per compte alié</Trans></option>
                        <option value="treball_compte_propi"><Trans>Treballa per compte propi</Trans></option>
                        <option value="desocupat"><Trans>Desocupat</Trans></option>
                        <option value="estudiant"><Trans>Estudiant</Trans></option>
                        <option value="jubilat"><Trans>Jubilat</Trans></option>
                    </select>
                </div>
            </Field>
        </div>

        <div className="field">
            <label><Trans>Grau discapacitat</Trans></label>
            <Control.text
                model='.grau_discapacitat'
                placeholder="0"
                type="number"
                component={Input}
            />
        </div>
        <div className="field">
            <label><Control.checkbox model=".social_services_user" value={false}/><Trans>Usuari de serveis socials</Trans></label>
        </div>
        {props.state.sexe === "Dona" &&
            <div className="field">
                <label><Control.checkbox model=".victima_violencia_de_genere" value={false}/><Trans>Víctima violencia de genere</Trans></label>
            </div>}
        {props.state.sexe === "Dona" &&
        <div className="field">
            <label><Control.checkbox model=".es_divorciada_de_familia_reagrupada" value={false}/><Trans>És divorciada de familia reagrupada</Trans></label>
        </div>}
        <div className="field">
            <label><Control.checkbox model=".victima_de_terrorisme" value={false}/><Trans>Víctima de terrorisme</Trans></label>
        </div>
        {props.state.nacionalitat && props.state.nacionalitat !== "Espanyola" &&
        <div className="field">
            <label><Control.checkbox model=".te_permis_de_residencia" value={false}/><Trans>Té permís de residència</Trans></label>
        </div>}
        {props.state.nacionalitat && props.state.nacionalitat !== "Espanyola" &&
        <div className="field">
            <label><Control.checkbox model=".ha_residit_a_lextranger_els_ultims_24_mesos" value={false}/><Trans>Ha residit a l'extranger durant els últims 24 mesos</Trans></label>
        </div>}
        {props.state.nacionalitat && props.state.nacionalitat !== "Espanyola" &&
        <div className="field">
            <label><Control.checkbox model=".resident_a_catalunya_durant_5_anys" value={false}/><Trans>Ha residit a Catalunya durant 5 anys</Trans></label>
        </div>}
        <div className="field">
            <label><Control.checkbox model=".ingressat_en_centre_penitenciari" value={false}/><Trans>Ingressat en centre penitenciari</Trans></label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".es_orfe_dels_dos_progenitors" value={false}/><Trans>És orfe dels dos progenitors</Trans></label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".ha_treballat_a_l_estranger_6_mesos" value={false}/><Trans>Ha treballat a l'estranger 6 mesos</Trans></label>
        </div>
        { props.state.situacio_laboral === "desocupat" &&
        <div className="field">
            <label><Control.checkbox model=".en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina" value={false}/><Trans>En els últims 12 mesos ha fet baixa voluntaria de la feina</Trans></label>
        </div>}
        { props.state.situacio_laboral === "desocupat" &&
        <div className="field">
            <label><Control.checkbox model=".ha_esgotat_prestacio_de_desocupacio" value={false}/><Trans>Ha esgotat prestació de desocupació</Trans></label>
        </div>}
        { props.state.situacio_laboral === "desocupat" &&
        <div className="field">
            <label><Control.checkbox model=".demandant_d_ocupacio_durant_12_mesos" value={false}/><Trans>Demandant d'ocupació durant 12 mesos</Trans></label>
        </div>}
        { props.state.situacio_laboral === "desocupat" &&
        <div className="field">
            <label><Control.checkbox model=".durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina" value={false}/><Trans>Durant el mes anterior ha presentat solicituds recerca de feina</Trans></label>
        </div>}
        <div className="field">
            <label><Control.checkbox model=".al_corrent_de_les_obligacions_tributaries" defaultChecked/><Trans>Al corrent de les obligacions tributàries</Trans></label>
        </div>

    </div>
);

export default translate('translations')(AdultsFields);