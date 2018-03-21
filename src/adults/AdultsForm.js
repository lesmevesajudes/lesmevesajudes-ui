//@flow
import React from 'react';
import {Adult} from './AdultsTypes';
import {
    Checkbox,
    Select,
    TextField,
} from 'redux-form-material-ui'
import {Trans, translate} from "react-i18next";
import {withStyles} from 'material-ui/styles';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {
    Button,
    MenuItem,
    Grid,
    Paper,
    Popover
} from "material-ui";
import QuestionIcon from "material-ui-icons/ErrorOutline"
import AddIcon from "material-ui-icons/Add"
import ClearInputIcon from "material-ui-icons/Clear"
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
    textNormal: {
        textAlign: 'left'
    },
    root: {
        flexGrow: 1,
    },
    wrapper: {
        maxWidth: 200
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

let AdultsForm = (props: Props) => {
    const {classes, esDona, teDNI, esDesocupat, esFill, handleSubmit, potTreballar, escolaritzat} = props;
    return (
        <div className={styles.root}>
            <h1><Trans>Afegir una persona a la unitat de convivència</Trans></h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.wrapper} >
                    <Paper>
                        <Grid style={{ padding: 20 }} container wrap="nowrap">

                            <Grid xs sm item>
                                <Grid container
                                      className={styles.textNormal}
                                      justify={"flex-start"}
                                      alignItems={"flex-start"}>
                                    <Grid item xs sm={5}>
                                        <Field
                                            component="input"
                                            name="id"
                                            type="hidden"/>
                                        <label><Trans>Com vol identificar a aquesta persona?</Trans>
                                            <QuestionIcon/>
                                        </label>
                                        <Field
                                            id='nom'
                                            name='nom'
                                            placeholder='Nom'
                                            component={TextField}
                                            fullWidth
                                            required/>
                                    </Grid>
                                    <Grid item xs sm={4}>
                                        <label><Trans>Data naixement</Trans></label>
                                        <Field
                                            id='data_naixement'
                                            name='data_naixement'
                                            placeholder="2005-01-21"
                                            type="date"
                                            fullWidth
                                            component={TextField}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={0} sm>

                                    </Grid>
                                </Grid>
                                <Grid container
                                      justify={"flex-start"}
                                      alignItems={"flex-start"}>
                                    <Grid item xs sm={5}>
                                        <label><Trans>Rol Familiar</Trans></label>
                                        <Field
                                            name='rol'
                                            label='Rol'
                                            component={Select}
                                            placeholder="Rol familiar"
                                            fullWidth
                                        >

                                            <MenuItem value="pares"><Trans>Pare/Mare/Tutor/a</Trans></MenuItem>
                                            <MenuItem value="avis"><Trans>Avi/Àvia/Sogre/Sogra</Trans></MenuItem>
                                            <MenuItem value="fill"><Trans>Fill</Trans></MenuItem>
                                            <MenuItem value="altres_adults_familiars"><Trans>Altres
                                                familiar</Trans></MenuItem>
                                            <MenuItem value="altres_adults"><Trans>Altres convivents</Trans></MenuItem>
                                        </Field>
                                    </Grid>
                                    <Grid item xs sm={4}>
                                        <label><Trans>Sexe</Trans></label>
                                        <Field
                                            id='sexe'
                                            name='sexe'
                                            fullWidth
                                            component={Select}
                                        >
                                            <MenuItem value="dona"><Trans>Dona</Trans></MenuItem>
                                            <MenuItem value="home"><Trans>Home</Trans></MenuItem>
                                        </Field>
                                    </Grid>
                                    <Grid item xs={0} sm>
                                    </Grid>
                                </Grid>
                                <Grid container
                                      justify={"flex-start"}
                                      alignItems={"flex-start"}>
                                    <Grid item xs sm={5}>
                                        <label><Trans>Tipus de document de identitat</Trans></label>
                                        <Field
                                            name='tipus_document_identitat'
                                            component={Select}
                                            fullWidth
                                        >
                                            <MenuItem value="DNI"><Trans>DNI</Trans></MenuItem>
                                            <MenuItem value="NIE"><Trans>NIE</Trans></MenuItem>
                                            <MenuItem value="passaport"><Trans>Passaport</Trans></MenuItem>
                                            <MenuItem value="altres"><Trans>Altres</Trans></MenuItem>
                                        </Field>
                                    </Grid>
                                    <Grid item xs={0} sm>
                                    </Grid>
                                </Grid>
                                <Grid container
                                      justify={"flex-start"}
                                      alignItems={"flex-start"}>
                                    <Grid item xs sm={5}>
                                        <label><Trans>Data alta padró a l'actual habitatge (sense interrupcions)</Trans></label>
                                        <Field
                                            id='data_alta_padro'
                                            name='data_alta_padro'
                                            placeholder="2005-01-21"
                                            type="date"
                                            component={TextField}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={0} sm>
                                    </Grid>
                                </Grid>
                                <Grid container
                                      justify={"flex-start"}
                                      alignItems={"flex-start"}>
                                    <Grid item xs sm={5}>
                                        {potTreballar &&
                                        <div className="field">
                                            <label><Trans>Situació laboral</Trans></label>
                                            <Field
                                                name='situacio_laboral'
                                                component={Select}
                                                fullWidth
                                            >
                                                <MenuItem value="treball_compte_alie"><Trans>Treballa per compte alié</Trans></MenuItem>
                                                <MenuItem value="treball_compte_propi"><Trans>Treballa per compte
                                                    propi</Trans></MenuItem>
                                                <MenuItem value="desocupat"><Trans>Desocupat</Trans></MenuItem>
                                                <MenuItem value="estudiant"><Trans>Estudiant</Trans></MenuItem>
                                                <MenuItem value="jubilat"><Trans>Jubilat</Trans></MenuItem>
                                            </Field>
                                        </div>}
                                    </Grid>
                                    <Grid item xs={0} sm>
                                    </Grid>
                                </Grid>
                                <Grid container
                                      justify={"flex-start"}
                                      alignItems={"flex-start"}>
                                    <Grid item xs sm={5}>
                                        <label><Trans>Total ingressos bruts 2016</Trans></label>
                                        <Field
                                            name='.ingressos_bruts'
                                            placeholder="0"
                                            type="number"
                                            fullWidth
                                            component={TextField}
                                        />

                                    </Grid>
                                    <Grid item xs={0} sm={2}></Grid>
                                </Grid>
                                <Grid container
                                      justify={"flex-start"}
                                      alignItems={"flex-start"}>
                                    <Grid item xs  sm={5}>
                                        <label><Trans>Grau discapacitat</Trans></label>
                                        <Field
                                            name='.grau_discapacitat'
                                            placeholder="0"
                                            type="number"
                                            fullWidth
                                            component={TextField}
                                        />
                                    </Grid>
                                    <Grid item xs={0} sm={2}></Grid>
                                </Grid>
                                <Grid container
                                      justify={"flex-start"}
                                      alignItems={"flex-start"}>
                                    <Grid item xs sm>
                                        {esDona && !esFill &&
                                        <div className="field">
                                            <label><Field name="victima_violencia_de_genere" checked={false}
                                                          component={Checkbox}/><Trans>Víctima violencia de genere</Trans></label>
                                        </div>}
                                        {esDona && !esFill &&
                                        <div className="field">
                                            <label><Field name="es_divorciada_de_familia_reagrupada" checked={false}
                                                          component={Checkbox}/><Trans>És divorciada de familia
                                                reagrupada</Trans></label>
                                        </div>}
                                        <div className="field">
                                            <label><Field name="victima_de_terrorisme" checked={false} component={Checkbox}/><Trans>Víctima
                                                de terrorisme</Trans></label>
                                        </div>
                                        {potTreballar &&
                                        <div className="field">
                                            <label><Field name="ha_residit_a_lextranger_els_ultims_24_mesos" checked={false}
                                                          component={Checkbox}/><Trans>Ha residit a l'extranger durant els últims 24
                                                mesos</Trans></label>
                                        </div>}
                                        {teDNI && potTreballar &&
                                        <div className="field">
                                            <label><Field name="resident_a_catalunya_durant_5_anys" checked={false}
                                                          component={Checkbox}/><Trans>Ha residit a Catalunya durant 5 anys</Trans></label>
                                        </div>}
                                        {potTreballar &&
                                        <div className="field">
                                            <label><Field name="ingressat_en_centre_penitenciari" checked={false}
                                                          component={Checkbox}/><Trans>Ingressat en centre
                                                penitenciari</Trans></label>
                                        </div>}
                                        <div className="field">
                                            <label><Field name="es_orfe_dels_dos_progenitors" checked={false} component={Checkbox}/><Trans>És
                                                orfe dels dos progenitors</Trans></label>
                                        </div>
                                        {potTreballar &&
                                        <div className="field">
                                            <label><Field name="ha_treballat_a_l_estranger_6_mesos" checked={false}
                                                          component={Checkbox}/><Trans>Ha treballat a l'estranger 6
                                                mesos</Trans></label>
                                        </div>}
                                        {potTreballar && esDesocupat &&
                                        <div className="field">
                                            <label><Field name="en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina"
                                                          checked={false} component={Checkbox}/><Trans>En els últims 12 mesos ha fet
                                                baixa voluntaria de la feina</Trans></label>
                                        </div>}
                                        {potTreballar && esDesocupat &&
                                        <div className="field">
                                            <label><Field name="ha_esgotat_prestacio_de_desocupacio" checked={false}
                                                          component={Checkbox}/><Trans>Ha esgotat prestació de
                                                desocupació</Trans></label>
                                        </div>}
                                        {potTreballar && esDesocupat &&
                                        <div className="field">
                                            <label><Field name="demandant_d_ocupacio_durant_12_mesos" checked={false}
                                                          component={Checkbox}/><Trans>Demandant d'ocupació durant 12 mesos</Trans></label>
                                        </div>}
                                        {potTreballar && esDesocupat &&
                                        <div className="field">
                                            <label><Field name="durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina"
                                                          checked={false} component={Checkbox}/><Trans>Durant el mes anterior ha
                                                presentat solicituds recerca de feina</Trans></label>
                                        </div>}
                                        {potTreballar &&
                                        <div className="field">
                                            <label><Field name="al_corrent_de_les_obligacions_tributaries"
                                                          component={Checkbox}/><Trans>Al corrent de les obligacions
                                                tributàries</Trans></label>
                                        </div>}
                                        {esFill &&
                                        <div className="field">
                                            <label><Field name="es_escolaritzat_entre_P3_i_4rt_ESO" component={Checkbox}/> Està
                                                escolaritzat entre P4 i 4rt d'ESO</label>
                                        </div>}
                                        {esFill && escolaritzat &&
                                        <div className="field">
                                            <label><Field name="utilitza_el_servei_de_menjador" component={Checkbox}/> Utilitza el
                                                servei de menjador de l'escola</label>
                                        </div>}
                                        {esFill && escolaritzat &&
                                        <div className="field">
                                            <label><Field name="te_beca_menjador" component={Checkbox}/> Té beca menjador</label>
                                        </div>}
                                        {esFill &&
                                        <div className="field">
                                            <label><Field name="en_acolliment" component={Checkbox}/> En acolliment</label>
                                        </div>}
                                        {esFill &&
                                        <div className="field">
                                            <label><Field name="en_guardia_i_custodia" component={Checkbox}/> En guardia i custodia</label>
                                        </div>}
                                        {esFill &&
                                        <div className="field">
                                            <label><Field name="beneficiari_fons_infancia_2017" component={Checkbox}/> Beneficiari/a
                                                fons infància 2017</label>
                                        </div>}
                                        <div className="field">
                                            <label><Field name="es_usuari_serveis_socials" component={Checkbox}/> Usuari de serveis
                                                socials en seguiment a un CSS o servei especialitzat de l'Ajuntament de
                                                Barcelona</label>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container
                                      justify={"flex-end"}>
                                    <Grid item xs sm>
                                        <Button variant="raised" color="secondary" className={classes.button}
                                                onClick={props.onCancel}><Trans>Cancelar <ClearInputIcon/></Trans></Button>
                                        <Button variant="raised" color="primary" type="submit"
                                                className={classes.button}><Trans>Validar <AddIcon/></Trans></Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>


                    </Paper>
                </div>
            </form>
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
        const esFill = selector(state, 'rol') === "fill";
        const esDesocupat = selector(state, 'situacio_laboral') === "desocupat";
        const teDNI = selector(state, 'tipus_document_identitat') === "DNI";
        const esDona = selector(state, 'sexe') === "dona";
        const potTreballar = (edat(selector(state, 'data_naixement')) || 0) >= 16;
        const escolaritzat = selector(state, 'es_escolaritzat_entre_P3_i_4rt_ESO');
        return {
            esFill,
            esDesocupat,
            teDNI,
            esDona,
            potTreballar,
            escolaritzat
        }
    }
)(AdultsForm);

export default withStyles(styles)(AdultsForm);
