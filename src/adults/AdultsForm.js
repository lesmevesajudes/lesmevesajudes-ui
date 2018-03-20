//@flow
import React from 'react';
import { Adult } from './AdultsTypes';
import {
    Checkbox,
    Select,
    TextField
} from 'redux-form-material-ui'
import { Trans } from "react-i18next";
import { withStyles } from 'material-ui/styles';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {Button, MenuItem} from "material-ui";
import edat from "../shared/Edat";

type Props = {
    initialState: ?Adult,
    onCancel: Function,
    handleSubmit: Function,
    classes: Object,
    esDona: Boolean,
    teDNI: Boolean,
    esDesocupat: Boolean,
    esFill: Boolean,
    potTreballar: Boolean,
    escolaritzat: Boolean
}

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

let AdultsForm = (props: Props) => {
        const { classes, esDona, teDNI, esDesocupat, esFill, handleSubmit, potTreballar } = props;
        return (
            <div>
                <h1><Trans>Afegir una persona a la unitat de convivència</Trans></h1>
                <div className="FormContainer">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="field">
                                <Field
                                    component="input"
                                    name="id"
                                    type="hidden"/>
                            </div>
                            <div className="field">
                                <label><Trans>Com vol identificar a aquesta persona?</Trans></label>
                                <Field
                                    id='nom'
                                    name='nom'
                                    placeholder='Nom'
                                    component={TextField}
                                    required/>
                            </div>
                            <div className="field">
                                <label><Trans>Rol</Trans></label>
                                <Field
                                    name='rol'
                                    label='Rol'
                                    component={Select}
                                >
                                    <MenuItem value="pares"><Trans>Pare/Mare/Tutor/a</Trans></MenuItem>
                                    <MenuItem value="avis"><Trans>Avi/Àvia/Sogre/Sogra</Trans></MenuItem>
                                    <MenuItem value="fill"><Trans>Fill/Filla</Trans></MenuItem>
                                    <MenuItem value="infant_acollit"><Trans>Infant en acolliment</Trans></MenuItem>
                                    <MenuItem value="altres_adults_familiars"><Trans>Altres familiar</Trans></MenuItem>
                                    <MenuItem value="altres_adults"><Trans>Altres convivents</Trans></MenuItem>
                                </Field>
                            </div>
                            <div className="field">
                                <label><Trans>Data naixement</Trans></label>
                                <Field
                                    id='data_naixement'
                                    name='data_naixement'
                                    placeholder="2005-01-21"
                                    type="date"
                                    component={TextField}
                                    required
                                />
                            </div>
                            <div className="field">
                                <label><Trans>Gènere</Trans></label>
                                <Field
                                    id='genere'
                                    name='genere'
                                    component={Select}
                                >
                                    <MenuItem value="dona"><Trans>Dona</Trans></MenuItem>
                                    <MenuItem value="home"><Trans>Home</Trans></MenuItem>
                                </Field>
                            </div>
                            <div className="field">
                                <label><Trans>Tipus de document de identitat</Trans></label>
                                <Field
                                    name='tipus_document_identitat'
                                    component={Select}
                                >
                                    <MenuItem value="DNI"><Trans>DNI</Trans></MenuItem>
                                    <MenuItem value="NIE"><Trans>NIE</Trans></MenuItem>
                                    <MenuItem value="passaport"><Trans>Passaport</Trans></MenuItem>
                                    <MenuItem value="altres"><Trans>Altres</Trans></MenuItem>
                                </Field>
                            </div>
                            <div className="field">
                                <label><Trans>Data alta padró a l'actual habitatge (sense interrupcions)</Trans></label>
                                <Field
                                    id='data_alta_padro'
                                    name='data_alta_padro'
                                    placeholder="2005-01-21"
                                    type="date"
                                    component={TextField}
                                    required
                                />
                            </div>
                            { potTreballar &&
                            <div className="field">
                                <label><Trans>Situació laboral</Trans></label>
                                <Field
                                    name='situacio_laboral'
                                    component={Select}
                                >
                                    <MenuItem value="treball_compte_alie"><Trans>Treballa per compte alié</Trans></MenuItem>
                                    <MenuItem value="treball_compte_propi"><Trans>Treballa per compte propi</Trans></MenuItem>
                                    <MenuItem value="desocupat"><Trans>Desocupat</Trans></MenuItem>
                                    <MenuItem value="estudiant"><Trans>Estudiant</Trans></MenuItem>
                                    <MenuItem value="jubilat"><Trans>Jubilat</Trans></MenuItem>
                                </Field>
                            </div>}
                            <div className="field">
                                <label><Trans>Total ingressos bruts 2016</Trans></label>
                                <Field
                                    name='ingressos_bruts'
                                    placeholder="0"
                                    type="number"
                                    component={TextField}
                                />
                            </div>
                            <div className="field">
                                <label><Trans>Grau discapacitat</Trans></label>
                                <Field
                                    name='grau_discapacitat'
                                    placeholder="0"
                                    type="number"
                                    component={TextField}
                                />
                            </div>
                            { esDona && ! esFill &&
                            <div className="field">
                                <label><Field name="victima_violencia_de_genere" checked={false} component={Checkbox}/><Trans>Víctima violencia de genere</Trans></label>
                            </div>}
                            { esDona && ! esFill &&
                            <div className="field">
                                <label><Field name="es_divorciada_de_familia_reagrupada" checked={false} component={Checkbox}/><Trans>És divorciada de familia reagrupada</Trans></label>
                            </div>}
                            { potTreballar &&
                            <div className="field">
                                <label><Field name="victima_de_terrorisme" checked={false} component={Checkbox}/><Trans>Víctima de terrorisme</Trans></label>
                            </div>}
                            {potTreballar &&
                            <div className="field">
                                <label><Field name="ha_residit_a_lextranger_els_ultims_24_mesos" checked={false} component={Checkbox}/><Trans>Ha residit a l'extranger durant els últims 24 mesos</Trans></label>
                            </div>}
                            { teDNI && potTreballar &&
                            <div className="field">
                                <label><Field name="resident_a_catalunya_durant_5_anys" checked={false} component={Checkbox}/><Trans>Ha residit a Catalunya durant 5 anys</Trans></label>
                            </div>}
                            { potTreballar &&
                            <div className="field">
                                <label><Field name="ingressat_en_centre_penitenciari" checked={false} component={Checkbox}/><Trans>Ingressat en centre penitenciari</Trans></label>
                            </div>}
                            { potTreballar &&
                            <div className="field">
                                <label><Field name="es_orfe_dels_dos_progenitors" checked={false} component={Checkbox}/><Trans>És orfe dels dos progenitors</Trans></label>
                            </div>}
                            { potTreballar &&
                            <div className="field">
                                <label><Field name="ha_treballat_a_l_estranger_6_mesos" checked={false} component={Checkbox}/><Trans>Ha treballat a l'estranger 6 mesos</Trans></label>
                            </div>}
                            { potTreballar && esDesocupat &&
                            <div className="field">
                                <label><Field name="en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina" checked={false} component={Checkbox}/><Trans>En els últims 12 mesos ha fet baixa voluntaria de la feina</Trans></label>
                            </div>}
                            { potTreballar && esDesocupat &&
                            <div className="field">
                                <label><Field name="ha_esgotat_prestacio_de_desocupacio" checked={false} component={Checkbox}/><Trans>Ha esgotat prestació de desocupació</Trans></label>
                            </div>}
                            { potTreballar && esDesocupat &&
                            <div className="field">
                                <label><Field name="demandant_d_ocupacio_durant_12_mesos" checked={false} component={Checkbox}/><Trans>Demandant d'ocupació durant 12 mesos</Trans></label>
                            </div>}
                            { potTreballar && esDesocupat &&
                            <div className="field">
                                <label><Field name="durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina" checked={false} component={Checkbox}/><Trans>Durant el mes anterior ha presentat solicituds recerca de feina</Trans></label>
                            </div>}
                            {potTreballar &&
                            <div className="field">
                                <label><Field name="al_corrent_de_les_obligacions_tributaries" component={Checkbox}/><Trans>Al corrent de les obligacions tributàries</Trans></label>
                            </div> }
                            { esFill &&
                            <div className="field">
                                <label><Field name="es_escolaritzat_entre_P3_i_4rt_ESO" component={Checkbox} /> Està escolaritzat entre P3 i 4rt d'ESO</label>
                            </div>}
                        </div>
                        <Button variant="raised" color="secondary" className={classes.button} onClick={props.onCancel}><Trans>Cancelar</Trans></Button>
                        <Button variant="raised" color="primary" type="submit" className={classes.button} ><Trans>Validar</Trans></Button>
                    </form>
                </div>
            </div>
        );
    };

AdultsForm = reduxForm({
    form: 'AdultsForm'  // a unique identifier for this form
})(AdultsForm);

const selector = formValueSelector('AdultsForm');

AdultsForm = connect(
    state => {
        // can select values individually
        const esFill = selector(state, 'rol') === "fill" || selector(state, 'rol') === 'infant_acollit';
        const esDesocupat = selector(state, 'situacio_laboral') === "desocupat";
        const teDNI = selector(state, 'tipus_document_identitat') === "DNI";
        const esDona = selector(state, 'genere') === "dona";
        const potTreballar = (edat(selector(state, 'data_naixement')) || 0) >=16;
        return {
            esFill,
            esDesocupat,
            teDNI,
            esDona,
            potTreballar
        }
    }
)(AdultsForm);

export default withStyles(styles)(AdultsForm);
