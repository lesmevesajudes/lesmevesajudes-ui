//@flow
import React, {Fragment} from "react";
import {connect} from "react-redux";
import {addRent} from "./RentActions";
import type {Rent} from "./RentTypes";
import type {PersonID} from "../persons/PersonTypes";
import {Person} from "../persons/PersonTypes";
import {Map} from "immutable";
import {Field, formValueSelector, reduxForm} from "redux-form";
import {Grid, MenuItem} from "@material-ui/core";
import {Checkbox, Select, TextField} from "redux-form-material-ui";
import {Trans} from "react-i18next";
import DescriptionText from "../components/Common/DescriptionText";
import {esFill} from "../shared/selectorUtils";
import {allowOnlyPositive} from "../components/Common/NormalizeCommon";

type Props = {
  addRent: Function,
  esLlogater: boolean,
  esPropietari: boolean,
  existeixDeutePagamentLloguer: boolean,
  existeixDeutePagamentHipoteca: boolean,
  existeixHipoteca: boolean,
  initialValues: ?Rent,
  personesQuePodenTenirContracte: Map<PersonID, Person>,
  state: any,
  teAlgunaPropietat: boolean,
  teHabitatgeHabitual: boolean,
};

const RentForm = (props: Props) => {
  const {
    esLlogater,
    esPropietari,
    existeixDeutePagamentHipoteca,
    existeixDeutePagamentLloguer,
    existeixHipoteca,
    teAlgunaPropietat,
    teHabitatgeHabitual
  } = props;
  return (
    <Grid container className="bg-container">
      <h1><Trans>Afegeixi informació del seu domicili habitual</Trans></h1>
      <Grid container direction={"row"} justify={"space-around"}>
        <Grid item xs={12} sm={6}>
          <form name='RentForm'>
            <label><Trans>Relació amb l'habitatge</Trans></label>
            <Field name='relacio_habitatge' data-test='relacio_habitatge' component={Select} fullWidth>
              <MenuItem value='propietari'><Trans>Visc en un habitatge de propietat sense hipoteca</Trans></MenuItem>
              <MenuItem value='propietari_hipoteca'><Trans>Visc en un habitatge de propietat amb
                hipoteca</Trans></MenuItem>
              <MenuItem value='llogater' data-test='llogater'><Trans>Visc de lloguer</Trans></MenuItem>
              <MenuItem value='cessio'><Trans>Cessió</Trans></MenuItem>
              <MenuItem value='no_en_te'><Trans>No tinc un habitatge fixe</Trans></MenuItem>
              <MenuItem value='altres'><Trans>Altres</Trans></MenuItem>
            </Field>
            {teHabitatgeHabitual &&
            <Grid item>
              <label><Trans>Codi postal on es troba l'habitatge</Trans></label>
              <Field required name='codi_postal_habitatge' placeholder='08000' fullWidth component={TextField}/>
            </Grid>}

            {esLlogater &&
            <Grid item>
              <label><Trans>Persona titular del contracte de lloguer</Trans></label>
              <Field name='titular_contracte_de_lloguer_id' component={Select} fullWidth>
                {props.personesQuePodenTenirContracte.valueSeq().map((persona) => (
                  <MenuItem key={persona.id} value={persona.id}>{persona.nom}</MenuItem>
                ))}
                <MenuItem key='no-conviu' value='no-conviu'><Trans>Una persona que no viu a
                  l'habitatge</Trans></MenuItem>
              </Field>
            </Grid>}

            {existeixHipoteca &&
            <Grid item>
              <label><Trans>Persona titular de la hipoteca:</Trans></label>
              <Field name='titular_hipoteca_id' component={Select} fullWidth>
                {props.personesQuePodenTenirContracte.valueSeq().map((persona) => (
                  <MenuItem key={persona.id} value={persona.id}>{persona.nom}</MenuItem>
                ))}
                <MenuItem key='no-conviu' value='no-conviu'><Trans>Una persona que no viu a
                  l'habitatge</Trans></MenuItem>
              </Field>
            </Grid>}

            {(esLlogater || existeixHipoteca) &&
            <Fragment>
              <label><Trans>Quant temps fa que [Nom titular convivent] està empadronat en aquest
                habitatge?</Trans></label>
              <Field name='temps_empadronat' data-test='temps_empadronat' component={Select} fullWidth>
                <MenuItem value='no_empadronat'><Trans>No està empadronat</Trans></MenuItem>
                <MenuItem value='menys_9_mesos'><Trans>Menys de 9 mesos</Trans></MenuItem>
                <MenuItem value='9_mesos_o_mes' data-test='llogater'><Trans>9 mesos o més</Trans></MenuItem>
              </Field>
            </Fragment>}

            {esLlogater &&
            <Grid item>
              <label><Trans>Import mensual del lloguer (&euro;)</Trans></label>
              <Field name='import_del_lloguer' component={TextField} type="number" normalize={allowOnlyPositive}
                     placeholder='0' fullWidth/>
            </Grid>}

            {existeixHipoteca &&
            <Grid item>
              <label><Trans>Import mensual de la hipoteca (&euro;)</Trans></label>
              <Field name='import_de_la_hipoteca' component={TextField} type="number" normalize={allowOnlyPositive}
                     placeholder='0' fullWidth/>
            </Grid>}

            {esLlogater &&
            <label><Field name='existeix_deute_en_el_pagament_del_lloguer' component={Checkbox}/>
              <Trans>Existeix un deute en el pagament del lloguer</Trans></label>}

            {existeixHipoteca &&
            <label><Field name='existeix_deute_en_el_pagament_de_la_hipoteca' component={Checkbox}/>
              <Trans>Existeix un deute en el pagament de la hipoteca</Trans></label>}

            {existeixDeutePagamentHipoteca &&
            <label>
              <Field name='ha_pagat_12_mesos_daquesta_hipoteca' component={Checkbox}/>
              <Trans>Ha pagat com a mínim 12 quotes d’aquesta hipoteca?</Trans>
            </label>}

            {existeixDeutePagamentLloguer &&
            <Fragment>
              <label><Trans>Des de quan teniu deutes de pagament de lloguer?</Trans></label>
              <Field name='des_de_quan_existeix_deute_lloguer' data-test='des_de_quan_existeix_deute_lloguer'
                     component={Select} fullWidth>
                <MenuItem value='mes_dun_any'><Trans>Més d'un any</Trans></MenuItem>
                <MenuItem value='menys_dun_any'><Trans>Menys d'un any</Trans></MenuItem>
              </Field>
            </Fragment>}

            {existeixDeutePagamentHipoteca &&
            <Fragment>
              <label><Trans>Des de quan teniu deutes de pagament de la hipoteca?</Trans></label>
              <Field name='des_de_quan_existeix_deute_hipoteca' data-test='des_de_quan_existeix_deute_hipoteca'
                     component={Select} fullWidth>
                <MenuItem value='mes_dun_any'><Trans>Més d'un any</Trans></MenuItem>
                <MenuItem value='menys_dun_any'><Trans>Menys d'un any</Trans></MenuItem>
              </Field>
            </Fragment>}

            {esLlogater &&
            <label><Field name='relacio_de_parentiu_amb_el_propietari' component={Checkbox}/>
              <Trans>Algun membre de la família té relació de parentiu amb el propietari de l'habitatge</Trans>
            </label>}

            {teHabitatgeHabitual &&
            <label>
              <Field name='tinc_alguna_propietat_a_part_habitatge_habitual' component={Checkbox}/>
              <Trans>Alguna persona que conviu amb vosté té alguna propietat a part de l'habitatge habitual</Trans>
            </label>}

            {teAlgunaPropietat &&
            <label><Field name='tinc_alguna_propietat_a_part_habitatge_habitual_i_disposo_dusufructe'
                          component={Checkbox}/>
              <Trans>Disposa de l'usufructe d'aquesta propietat</Trans>
            </label>}
            {esLlogater &&
            <label><Field name='ha_perdut_lhabitatge_en_els_ultims_2_anys' component={Checkbox}/>
              <Trans>Ha perdut el seu habitatge habitual degut a una execució hipotecària o desnonament en els ultims
                2 anys?</Trans>
            </label>}

            {esLlogater &&
            <label><Field name='ha_participat_en_un_proces_de_mediacio' component={Checkbox}/>
              <Trans>Ha participat en un procés de mediació del servei de mediació de laXarxa d’Oficines d’Habitatge
                de Barcelona</Trans>
            </label>}

            {esPropietari && existeixDeutePagamentHipoteca &&
            <Grid item>
              <label><Trans>Data de la primera quota de hipoteca no pagada</Trans></label>
              <Field name='data_de_la_primera_quota_de_hipoteca_no_pagada' component={TextField}
                     placeholder='2005-01-21' type='date' fullWidth/>
            </Grid>}

          </form>
        </Grid>
        <Grid item md={5} hidden={{smDown: true}}>
          <DescriptionText/>
        </Grid>

      </Grid>
    </Grid>
  );
};

const selector = formValueSelector("RentForm");

function mapStateToProps(state) {
  const esLlogater = selector(state, "relacio_habitatge") === "llogater";
  const esPropietari = selector(state, "relacio_habitatge") === "propietari"
    || selector(state, "relacio_habitatge") === "propietari_hipoteca";
  const existeixHipoteca = selector(state, "relacio_habitatge") === "propietari_hipoteca";
  const esCessio = selector(state, "relacio_habitatge") === "cessio";
  return {
    esLlogater: esLlogater,
    esPropietari: esPropietari,
    existeixDeutePagamentLloguer: selector(state, "existeix_deute_en_el_pagament_del_lloguer"),
    existeixDeutePagamentHipoteca: selector(state, "existeix_deute_en_el_pagament_de_la_hipoteca"),
    existeixHipoteca: existeixHipoteca,
    initialValues: state.rent,
    personesQuePodenTenirContracte: state.persons.filter((persona) => !esFill(persona)),
    teAlgunaPropietat: selector(state, "tinc_alguna_propietat_a_part_habitatge_habitual"),
    teHabitatgeHabitual: esLlogater || esPropietari || esCessio

  };
}

export default connect(mapStateToProps)(reduxForm(
  {
    form: "RentForm",
    onChange: (values, dispatch) => {
      dispatch(addRent(values));
    }
  })(RentForm));
