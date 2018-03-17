import React from 'react';
import {Control, Field} from 'react-redux-form';
import Trans from "react-i18next/dist/es/Trans";
import {translate} from "react-i18next";
import {Checkbox, Input, InputAdornment} from "material-ui";


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
            <label><Trans>Rol</Trans></label>
            <Field
                id='rol'
                model='.rol'
                dynamic={false}
            >
                <div className="custom-select">
                    <select required>
                        <option default value=""><Trans>Seleccioni'n un</Trans></option>
                        <option value="pares"><Trans>Pare/Mare/Tutor/a</Trans></option>
                        <option value="avis"><Trans>Avi/Àvia/Sogre/Sogra</Trans></option>
                        <option value="fill"><Trans>Fill</Trans></option>
                        <option value="altres_adults_familiars"><Trans>Altres familiar</Trans></option>
                        <option value="altres_adults"><Trans>Altres convivents</Trans></option>
                    </select>
                </div>
            </Field>
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
                <div className="custom-select">
                    <select required>
                        <option value=""><Trans>Seleccioni'n un</Trans></option>
                        <option value="dona"><Trans>Dona</Trans></option>
                        <option value="home"><Trans>Home</Trans></option>
                    </select>
                </div>
            </Field>
        </div>
        <div className="field">
            <label><Trans>Tipus de document de identitat</Trans></label>
            <Field
                model='.tipus_document_identitat'
                dynamic={false}
            >
                <div className="custom-select">
                    <select required>
                        <option default value=""><Trans>Seleccioni'n un</Trans></option>
                        <option value="DNI"><Trans>DNI</Trans></option>
                        <option value="NIE"><Trans>NIE</Trans></option>
                        <option value="passaport"><Trans>Passaport</Trans></option>
                        <option value="altres"><Trans>Altres</Trans></option>
                    </select>
                </div>
            </Field>
        </div>

        <div className="field">
            <label><Trans>Situació laboral</Trans></label>
            <Field
                model='.situacio_laboral'
                dynamic={false}
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
            <label><Trans>Data alta padró (sense interrupcions)</Trans></label>
            <Control.text
                id='data_alta_padro'
                model='.data_alta_padro'
                placeholder="2005-01-21"
                type="date"
                component={Input}
                required
            />
        </div>
        <div className="field">
            <label><Trans>Grau discapacitat</Trans></label>
            <Control.text
                model='.grau_discapacitat'
                placeholder="0"
                type="number"
                component={Input}
                controlProps={{endAdornment: <InputAdornment position="end"> % </InputAdornment>}}
            />
        </div>
        <div className="field">
            <label><Trans>Total ingressos bruts 2016</Trans></label>
            <Control.text
                model='.ingressos_bruts'
                placeholder="0"
                type="number"
                component={Input}
                controlProps={{endAdornment: <InputAdornment position="end"> € </InputAdornment>}}
            />
        </div>
        { props.state.sexe === "dona" &&
            <div className="field">
                <label><Control.checkbox model=".victima_violencia_de_genere" checked={false} component={Checkbox}/><Trans>Víctima violencia de genere</Trans></label>
            </div>}
        { props.state.sexe === "dona" &&
        <div className="field">
            <label><Control.checkbox model=".es_divorciada_de_familia_reagrupada" checked={false} component={Checkbox}/><Trans>És divorciada de familia reagrupada</Trans></label>
        </div>}
        <div className="field">
            <label><Control.checkbox model=".victima_de_terrorisme" checked={false} component={Checkbox}/><Trans>Víctima de terrorisme</Trans></label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".ha_residit_a_lextranger_els_ultims_24_mesos" checked={false} component={Checkbox}/><Trans>Ha residit a l'extranger durant els últims 24 mesos</Trans></label>
        </div>
        { props.state.tipus_document_identitat && props.state.tipus_document_identitat !== "DNI" &&
        <div className="field">
            <label><Control.checkbox model=".resident_a_catalunya_durant_5_anys" checked={false} component={Checkbox}/><Trans>Ha residit a Catalunya durant 5 anys</Trans></label>
        </div>}
        <div className="field">
            <label><Control.checkbox model=".ingressat_en_centre_penitenciari" checked={false} component={Checkbox}/><Trans>Ingressat en centre penitenciari</Trans></label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".es_orfe_dels_dos_progenitors" checked={false} component={Checkbox}/><Trans>És orfe dels dos progenitors</Trans></label>
        </div>
        <div className="field">
            <label><Control.checkbox model=".ha_treballat_a_l_estranger_6_mesos" checked={false} component={Checkbox}/><Trans>Ha treballat a l'estranger 6 mesos</Trans></label>
        </div>
        { props.state.situacio_laboral === "desocupat" &&
        <div className="field">
            <label><Control.checkbox model=".en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina" checked={false} component={Checkbox}/><Trans>En els últims 12 mesos ha fet baixa voluntaria de la feina</Trans></label>
        </div>}
        { props.state.situacio_laboral === "desocupat" &&
        <div className="field">
            <label><Control.checkbox model=".ha_esgotat_prestacio_de_desocupacio" checked={false} component={Checkbox}/><Trans>Ha esgotat prestació de desocupació</Trans></label>
        </div>}
        { props.state.situacio_laboral === "desocupat" &&
        <div className="field">
            <label><Control.checkbox model=".demandant_d_ocupacio_durant_12_mesos" checked={false} component={Checkbox}/><Trans>Demandant d'ocupació durant 12 mesos</Trans></label>
        </div>}
        { props.state.situacio_laboral === "desocupat" &&
        <div className="field">
            <label><Control.checkbox model=".durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina" checked={false} component={Checkbox}/><Trans>Durant el mes anterior ha presentat solicituds recerca de feina</Trans></label>
        </div>}
        <div className="field">
            <label><Control.checkbox model=".al_corrent_de_les_obligacions_tributaries" component={Checkbox}/><Trans>Al corrent de les obligacions tributàries</Trans></label>
        </div>
        { props.state.rol === "fill" &&
        <div className="field">
            <label><Control.checkbox model=".es_escolaritzat_entre_P3_i_4rt_ESO" component={Checkbox} /> Està escolaritzat entre P4 i 4rt d'ESO</label>
        </div>}
        { props.state.rol === "fill" &&
        <div className="field">
            <label><Control.checkbox model=".utilitza_el_servei_de_menjador" component={Checkbox} /> Utilitza el servei de menjador de l'escola</label>
        </div>}
        { props.state.rol === "fill" &&
        <div className="field">
            <label><Control.checkbox model=".te_beca_menjador" component={Checkbox} /> Té beca menjador</label>
        </div>}
        { props.state.rol === "fill" &&
        <div className="field">
            <label><Control.checkbox model=".en_acolliment" component={Checkbox} /> En acolliment</label>
        </div>}
        { props.state.rol === "fill" &&
        <div className="field">
            <label><Control.checkbox model=".en_guardia_i_custodia" component={Checkbox}/> En guardia i custodia</label>
        </div>}
        { props.state.rol === "fill" &&
        <div className="field">
            <label><Control.checkbox model=".beneficiari_fons_infancia_2017" component={Checkbox}/> Beneficiari/a fons infància 2017</label>
        </div>}
    </div>
);

export default translate('translations')(AdultsFields);