//@flow
import React, {Fragment} from "react";
import type {PersonRole} from "./PersonTypes";
import {Person} from "./PersonTypes";
import {Checkbox, Select, TextField} from "redux-form-material-ui";
import ClearIcon from "@material-ui/icons/Clear";
import {Trans} from "react-i18next";
import {Field, formValueSelector, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Button, FormLabel, Grid, MenuItem} from "@material-ui/core";
import DescriptionText from "../components/Common/DescriptionText";
import {allowOnlyPositive} from '../components/Common/NormalizeCommon'
import Hidden from "@material-ui/core/es/Hidden/Hidden";

export type PersonFormInitialValues = Person | { is_the_user_in_front_of_the_computer: boolean };

type Props = {
  cobraAlgunTipusDePensioNoContributiva: Boolean,
  edat: number,
  esDesocupat: Boolean,
  esDona: Boolean,
  esFamiliarOUsuari: Boolean,
  esFill: Boolean,
  esFillastre: Boolean,
  handleSubmit: Function,
  haTreballatALEstranger6Mesos: Boolean,
  inscritComADemandantDocupacio: Boolean,
  isTheUserInFrontOfTheComputer: Boolean,
  membreDeFamiliaReagrupada: Boolean,
  municipiEmpadronament: string,
  onCancel: Function,
  potTreballar: Boolean,
  portaDosAnysOMesEmpadronatACatalunya: Boolean,
  rol: PersonRole,
  teAlgunGrauDeDiscapacitatReconegut: Boolean,
  tipusDocumentIdentitat: Boolean,
  treballaPerCompteDAltriParcial: Boolean,
  victimaViolenciaDeGenere: Boolean
};

let PersonForm = (props: Props) => {
  const {
    cobraAlgunTipusDePensioNoContributiva,
    edat,
    esDesocupat,
    esDona,
    esFamiliarOUsuari,
    esFill,
    esFillastre,
    handleSubmit,
    haTreballatALEstranger6Mesos,
    inscritComADemandantDocupacio,
    isTheUserInFrontOfTheComputer,
    membreDeFamiliaReagrupada,
    municipiEmpadronament,
    potTreballar,
    portaDosAnysOMesEmpadronatACatalunya,
    teAlgunGrauDeDiscapacitatReconegut,
    tipusDocumentIdentitat,
    treballaPerCompteDAltriParcial,
    victimaViolenciaDeGenere
  } = props;

  return (
      <Grid container className="bg-container">
        <Grid item xs={12}>
                {isTheUserInFrontOfTheComputer ? <h1>Informació sobre vosté</h1> :
              <h1>Dades sobre una persona que conviu amb vosté</h1>}
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Field component="input" name="id" type="hidden"/>
            <Field component="input" name="is_the_user_in_front_of_the_computer" type="hidden"/>
            <Grid container direction="row" justify="space-around" alignItems="stretch">
              <Grid item xs={12} md={5}>
                <Grid container direction="column" alignItems="stretch">
                  <label>
                    <Trans>
                      {isTheUserInFrontOfTheComputer ? "Identifiqui's amb un nom" : "Identifiqui'l amb un nom"}
                    </Trans>
                  </label>
                  <Field name="nom" placeholder="Nom" component={TextField} fullWidth required autoFocus/>

                  {!isTheUserInFrontOfTheComputer &&
                  <Fragment>
                    <label>
                      <Trans>Aquesta persona és el/la seu/va?</Trans>
                    </label>
                    <Field data-test="relacio_parentiu" name="relacio_parentiu" component={Select} fullWidth>
                      <MenuItem data-test="parella" value="parella">
                        <Trans>Cònjuge / parella</Trans>
                      </MenuItem>
                      <MenuItem data-test="fill" value="fill">
                        <Trans>Fill/a</Trans>
                      </MenuItem>
                      <MenuItem data-test="fillastre" value="fillastre">
                        <Trans>Fillastre/a (o fill/a de la parella actual)</Trans>
                      </MenuItem>
                      <MenuItem data-test="net" value="net">
                        <Trans>Nét/a</Trans>
                      </MenuItem>
                      <MenuItem data-test="infant_acollit" value="infant_acollit">
                        <Trans>Infant en acolliment</Trans>
                      </MenuItem>
                      <MenuItem data-test="pare" value="pare">
                        <Trans>Pare o mare</Trans>
                      </MenuItem>
                      <MenuItem data-test="avi" value="avi">
                        <Trans>Avi / Àvia</Trans>
                      </MenuItem>
                      <MenuItem data-test="sogre" value="sogre">
                        <Trans>Sogre/a</Trans>
                      </MenuItem>
                      <MenuItem data-test="germa" value="germa">
                        <Trans>Germà/germana</Trans>
                      </MenuItem>
                      <MenuItem data-test="cunyat" value="cunyat">
                        <Trans>Cunyat/da</Trans>
                      </MenuItem>
                      <MenuItem data-test="gendre" value="gendre">
                        <Trans>Gendre/Nora/Parella del meu fill/a</Trans>
                      </MenuItem>
                      <MenuItem data-test="altres" value="altres">
                        <Trans>Altres familiars</Trans>
                      </MenuItem>
                      <MenuItem data-test="cap" value="cap">
                        <Trans>Sense relació de parentiu</Trans>
                      </MenuItem>
                    </Field>
                  </Fragment>
                  }

                  {esFamiliarOUsuari &&
                  <Fragment>
                    <label>
                      <Trans>Quina és la seva edat?</Trans>
                    </label>
                    <Field name="edat" type="number" normalize={allowOnlyPositive} component={TextField} fullWidth
                           required/>
                    <label>
                      <Trans>Sexe</Trans>
                    </label>
                    <Field data-test="sexe" name="sexe" fullWidth component={Select}>
                      <MenuItem data-test="sexe_dona" value="dona">
                        <Trans>Dona</Trans>
                      </MenuItem>
                      <MenuItem data-test="sexe_home" value="home">
                        <Trans>Home</Trans>
                      </MenuItem>
                    </Field>
                    <FormLabel className="sectionTitle">Informació sobre el padró</FormLabel>
                    <label>
                      <Trans>Tipus de document de identitat</Trans>
                    </label>
                    <Field data-test="tipus_document_identitat" name="tipus_document_identitat" component={Select}
                           fullWidth>
                      <MenuItem data-test="di_dni" value="DNI">
                        <Trans>DNI</Trans>
                      </MenuItem>
                      <MenuItem data-test="di_nie" value="NIE">
                        <Trans>NIE</Trans>
                      </MenuItem>
                      <MenuItem data-test="di_pass" value="passaport">
                        <Trans>Passaport</Trans>
                      </MenuItem>
                      <MenuItem data-test="di_altres" value="altres">
                        <Trans>Altres</Trans>
                      </MenuItem>
                    </Field>
                    <label>
                      Porta dos anys o més empadronat a Catalunya?
                      <Field name="porta_dos_anys_o_mes_empadronat_a_catalunya" checked={false} component={Checkbox}/>
                    </label>
                  </Fragment>}

                  {esFamiliarOUsuari && esDona && tipusDocumentIdentitat === "passaport" && portaDosAnysOMesEmpadronatACatalunya &&
                  <label>
                    És membre d'una família reagrupada?
                    <Field name="membre_de_familia_reagrupada" checked={false} component={Checkbox}/>
                  </label>}

                  {esFamiliarOUsuari && membreDeFamiliaReagrupada &&
                  <label>
                    És una persona divorciada?
                    <Field name="es_una_persona_divorciada" checked={false} component={Checkbox}/>
                  </label>}

                  {esFamiliarOUsuari &&
                  <Fragment>
                    <label>
                      En quin municipi està empadronat actualment?
                    </label>
                    <Field data-test="municipi_empadronament" name="municipi_empadronament" component={Select} fullWidth>
                      <MenuItem data-test="barcelona" value="barcelona">
                        <Trans>Barcelona</Trans>
                      </MenuItem>
                      <MenuItem data-test="altres" value="altres">
                        <Trans>Altres</Trans>
                      </MenuItem>
                    </Field>
                  </Fragment>}

                  {municipiEmpadronament === "barcelona" &&
                  <Fragment>
                    <label>
                      Quants anys porta empadronat a Barcelona?
                    </label>
                    <Field name="anys_empadronat_a_barcelona" type="number" placeholder="0" component={TextField}
                           normalize={allowOnlyPositive} fullWidth required/>
                  </Fragment>}

                  {esFamiliarOUsuari && potTreballar &&
                  <Fragment>
                    <FormLabel className="sectionTitle">Situació
                      laboral</FormLabel>
                    <label>
                      Indiqui la seva situació laboral:
                    </label>
                    <Field data-test="situacio_laboral" name="situacio_laboral" component={Select} fullWidth>
                      <MenuItem data-test="treball_compte_daltri_jornada_complerta"
                                value="treball_compte_daltri_jornada_complerta">
                        <Trans>Treballa per compte d'altri jornada complerta</Trans>
                      </MenuItem>
                      <MenuItem data-test="treball_compte_daltri_jornada_parcial"
                                value="treball_compte_daltri_jornada_parcial">
                        <Trans>Treballa per compte d'altri jornada parcial</Trans>
                      </MenuItem>
                      <MenuItem data-test="treball_compte_propi" value="treball_compte_propi">
                        <Trans>Treballa per compte propi</Trans>
                      </MenuItem>
                      <MenuItem data-test="desocupat" value="desocupat">
                        <Trans>Desocupat</Trans>
                      </MenuItem>
                      <MenuItem data-test="estudiant" value="estudiant">
                        <Trans>Estudiant</Trans>
                      </MenuItem>
                      <MenuItem data-test="jubilat" value="jubilat">
                        <Trans>Jubilat</Trans>
                      </MenuItem>
                    </Field>

                    {esFamiliarOUsuari && esDesocupat &&
                    <Fragment>
                      <label>
                        Està inscrit com a demandant d’ocupació?
                        <Field name="inscrit_com_a_demandant_docupacio" checked={false} component={Checkbox}/>
                      </label>
                      <label>
                        Ha deixat la feina de forma voluntària en els darrers 12 mesos?
                        <Field name="en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina" checked={false}
                               component={Checkbox}/>
                      </label>
                    </Fragment>}

                    {esFamiliarOUsuari && (esDesocupat || treballaPerCompteDAltriParcial) &&
                    <Fragment>
                      <label>
                        Ha treballat a l’estranger un mínim de 6 mesos?
                        <Field name="ha_treballat_a_l_estranger_6_mesos" checked={false} component={Checkbox}/>
                      </label>
                      {haTreballatALEstranger6Mesos &&
                      <label>
                        Ha retornat d’aquest període de treball en els últims 12 mesos?
                        <Field name="ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos"
                               checked={false} component={Checkbox}/>
                      </label>}
                    </Fragment>}

                  </Fragment>}

                  <FormLabel className="sectionTitle">
                    Ingressos
                  </FormLabel>
                  <label>
                    <Trans>Indiqui els seus ingressos bruts anuals de l’any passat?</Trans>
                  </label>
                  <Field name="ingressos_bruts" type="number" normalize={allowOnlyPositive} component={TextField}
                         fullWidth
                         required/>

                  {esFamiliarOUsuari &&
                  <label>
                    Cobra algun tipus de pensió no contributiva?
                    <Field name="cobra_algun_tipus_de_pensio_no_contributiva" checked={false} component={Checkbox}/>
                  </label>}
                  {esFamiliarOUsuari && cobraAlgunTipusDePensioNoContributiva &&
                  <Fragment>
                    <label>
                      <Trans>Indiqui la suma dels imports de totes les pensions no contributives que cobri</Trans>
                    </label>
                    <Field name="ingressos_per_pnc" type="number" component={TextField} normalize={allowOnlyPositive}
                           fullWidth required/>
                  </Fragment>}

                  {esFamiliarOUsuari && inscritComADemandantDocupacio &&
                  <label>
                    Gaudeix actualment d’una prestació contributiva o subsidi per desocupació?
                    <Field name="gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio" checked={false}
                           component={Checkbox}/>
                  </label>}

                  {esFamiliarOUsuari &&
                  <Fragment>
                    <FormLabel className="sectionTitle">Situació personal</FormLabel>
                    <label>
                      Té vostè algun grau de discapacitat reconegut?
                      <Field name="te_algun_grau_de_discapacitat_reconegut" checked={false} component={Checkbox}/>
                    </label>
                    {teAlgunGrauDeDiscapacitatReconegut &&
                    <Fragment>
                      <label>
                        <Trans>Grau discapacitat</Trans>
                      </label>
                      <Field name="grau_discapacitat" placeholder="0" type="number" normalize={allowOnlyPositive}
                             component={TextField}/>
                    </Fragment>}

                    {potTreballar &&
                    <label>
                      <Field name="victima_violencia_de_genere" checked={false} component={Checkbox}/>
                      <Trans>Víctima violència de gènere</Trans>
                    </label>}

                    {esDona && victimaViolenciaDeGenere &&
                    <label>
                      <Field name="percep_prestacions_incompatibles_amb_la_feina" checked={false}
                             component={Checkbox}/>
                      <Trans>Perceb alguna ajuda que no li permeti treballar?</Trans>
                    </label>}

                    <label>
                      <Field name="victima_violencia_domestica" checked={false} component={Checkbox}/>
                      <Trans>Víctima violència domèstica</Trans>
                    </label>

                    {(edat > 18 && edat < 23) && !(esFill || esFillastre) &&
                    <label>
                      <Field name="es_orfe_dels_dos_progenitors" checked={false} component={Checkbox}/>
                      <Trans>És orfe dels dos progenitors</Trans>
                    </label>}
                  </Fragment>}

                </Grid>
              </Grid>
              <Hidden smDown>
                <Grid item md={5}>
                  <DescriptionText/>
                </Grid>
              </Hidden>
            </Grid>

            <Grid item sm={12}>
              <Grid container justify={"space-around"}>
                <Button variant="raised" color="secondary" onClick={props.onCancel}>
                  <Trans>Cancelar</Trans> <ClearIcon/>
                </Button>
                <Button variant="raised" color="primary" type="submit" name="ButtonValidar">
                  <Trans>Validar</Trans>
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
  );
};

// TODO: El icono AddIcon, se deberia añadir Absolute, 25% y relative al button para probar si funciona bien el tema de align, pero es un parche.
PersonForm = reduxForm({
  form: "PersonForm"
})(PersonForm);

const selector = formValueSelector("PersonForm");

PersonForm = connect(state => {
  const cobraAlgunTipusDePensioNoContributiva = selector(state, "cobra_algun_tipus_de_pensio_no_contributiva");
  const edat = selector(state, "edat");
  const esDesocupat = selector(state, "situacio_laboral") === "desocupat";
  const esDona = selector(state, "genere") === "dona";
  const esFamiliarOUsuari = (typeof selector(state, "relacio_parentiu") !== "undefined" && selector(state, "relacio_parentiu") !== "cap") || selector(state, "is_the_user_in_front_of_the_computer") === true;
  const esFill = selector(state, "relacio_parentiu") === "fill";
  const esFillastre = selector(state, "relacio_parentiu") === "fillastre";
  const haTreballatALEstranger6Mesos = selector(state, "ha_treballat_a_l_estranger_6_mesos");
  const inscritComADemandantDocupacio = selector(state, "inscrit_com_a_demandant_docupacio");
  const isTheUserInFrontOfTheComputer = selector(state, "is_the_user_in_front_of_the_computer");
  const membreDeFamiliaReagrupada = selector(state, "membre_de_familia_reagrupada");
  const municipiEmpadronament = selector(state, "municipi_empadronament");
  const potTreballar = selector(state, "edat") >= 16;
  const portaDosAnysOMesEmpadronatACatalunya = selector(state, "porta_dos_anys_o_mes_empadronat_a_catalunya");
  const rol = selector(state, "rol");
  const teAlgunGrauDeDiscapacitatReconegut = selector(state, "te_algun_grau_de_discapacitat_reconegut");
  const tipusDocumentIdentitat = selector(state, "document_identitat");
  const treballaPerCompteDAltriParcial = selector(state, "situacio_laboral") === "treball_compte_daltri_jornada_parcial";
  const victimaViolenciaDeGenere = selector(state, "victima_violencia_de_genere");
  return {
    cobraAlgunTipusDePensioNoContributiva,
    edat,
    esDesocupat,
    esDona,
    esFamiliarOUsuari,
    esFill,
    esFillastre,
    haTreballatALEstranger6Mesos,
    inscritComADemandantDocupacio,
    isTheUserInFrontOfTheComputer,
    membreDeFamiliaReagrupada,
    municipiEmpadronament,
    potTreballar,
    portaDosAnysOMesEmpadronatACatalunya,
    rol,
    teAlgunGrauDeDiscapacitatReconegut,
    tipusDocumentIdentitat,
    treballaPerCompteDAltriParcial,
    victimaViolenciaDeGenere
  };
})(PersonForm);

export default PersonForm;
