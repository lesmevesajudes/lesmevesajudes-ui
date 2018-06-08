//@flow
import React from "react";
import {connect} from "react-redux";
import {addRent} from "./RentActions";
import type {Rent} from "./RentTypes";
import type {PersonID} from "../persons/PersonTypes";
import {Person} from "../persons/PersonTypes";
import {Map} from "immutable";
import {formValueSelector, reduxForm} from "redux-form";
import {Grid, Hidden, MenuItem} from "@material-ui/core";
import {Trans} from "react-i18next";
import DescriptionText from "../components/Common/DescriptionText";
import {esFill} from "../shared/selectorUtils";
import MultipleAnswerQuestion from "../persons/components/MultipleAnswerQuestion";
import {Question} from "../persons/components/Question";
import {YesNoQuestion} from "../persons/components/YesNoQuestion";
import {TextField} from "redux-form-material-ui";
import {MoneyQuestion} from "../persons/components/MoneyQuestion";

const seemsPostalCode = value =>
    value && (isNaN(Number(value)) || value.length !== 5)
        ? <Trans>Els codis postals han de tenir un màxim de 5 xifres</Trans>
        : undefined;

const onlyNumbers = value =>
    value.replace(/[^\d]/, '');

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
  titularContracteLloguer: Person,
  titularContracteHipoteca: Person
};

const RentForm = (props: Props) => {
  const {
    esLlogater,
    existeixDeutePagamentHipoteca,
    existeixDeutePagamentLloguer,
    existeixHipoteca,
    teAlgunaPropietat,
    teHabitatgeHabitual,
    titularContracteLloguer,
    titularContracteHipoteca
  } = props;
  return (
      <Grid container className="bg-container">
        <h1><Trans>Afegeixi informació del seu domicili habitual</Trans></h1>
        <Grid container direction="row" justify="space-around">
          <Grid item xs={12} sm={6}>
            <Grid container direction="column" spacing={16}>
              <form name='RentForm'>
                <MultipleAnswerQuestion name='relacio_habitatge' label={<Trans>Relació amb l'habitatge</Trans>}>
                  <MenuItem value='llogater' data-test='llogater'><Trans>Visc de lloguer</Trans></MenuItem>
                  <MenuItem value='propietari'><Trans>Visc en un habitatge de propietat sense
                    hipoteca</Trans></MenuItem>
                  <MenuItem value='propietari_hipoteca'><Trans>Visc en un habitatge de propietat amb
                    hipoteca</Trans></MenuItem>
                  <MenuItem value='no_en_te'><Trans>No tinc un habitatge fixe</Trans></MenuItem>
                  <MenuItem value='cessio'><Trans>Cessió</Trans></MenuItem>
                  <MenuItem value='altres'><Trans>Altres</Trans></MenuItem>
                </MultipleAnswerQuestion>
                {teHabitatgeHabitual &&
                <Question required name='codi_postal_habitatge' placeholder='08000' normalize={onlyNumbers}
                          component={TextField} validate={seemsPostalCode}>
                  <Trans>Codi postal on es troba l'habitatge</Trans>
                </Question>}

                {esLlogater &&
                <MultipleAnswerQuestion name='titular_contracte_de_lloguer_id'
                                        label={<Trans>Persona titular del contracte de lloguer</Trans>}>
                  {props.personesQuePodenTenirContracte.valueSeq().map((persona) => (
                      <MenuItem key={persona.id} value={persona.id}>{persona.nom}</MenuItem>
                  ))}
                  <MenuItem key='no-conviu' value='no-conviu'>
                    <Trans>Una persona que no viu a l'habitatge</Trans>
                  </MenuItem>
                </MultipleAnswerQuestion>}

                {existeixHipoteca &&
                <MultipleAnswerQuestion name='titular_hipoteca_id'
                                        label={<Trans>Persona titular de la hipoteca:</Trans>}>
                  {props.personesQuePodenTenirContracte.valueSeq().map((persona) => (
                      <MenuItem key={persona.id} value={persona.id}>{persona.nom}</MenuItem>
                  ))}
                  <MenuItem key='no-conviu' value='no-conviu'>
                    <Trans>Una persona que no viu a l'habitatge</Trans>
                  </MenuItem>
                </MultipleAnswerQuestion>}

                {esLlogater && typeof titularContracteLloguer !== "undefined" &&
                <MultipleAnswerQuestion name='titular_contracte_lloguer_temps_empadronat'
                                        label={<Trans>Quant temps fa que {titularContracteLloguer.nom} està empadronat
                                          en
                                          aquest habitatge?</Trans>}>
                  <MenuItem value='no_empadronat'><Trans>No està empadronat</Trans></MenuItem>
                  <MenuItem value='menys_9_mesos'><Trans>Menys de 9 mesos</Trans></MenuItem>
                  <MenuItem value='9_mesos_o_mes' data-test='llogater'><Trans>9 mesos o més</Trans></MenuItem>
                </MultipleAnswerQuestion>}

                {existeixHipoteca && typeof titularContracteHipoteca !== "undefined" &&
                <MultipleAnswerQuestion name='titular_hipoteca_temps_empadronat'
                                        label={<Trans>Quant temps fa que {titularContracteHipoteca.nom} està empadronat
                                          en aquest habitatge?</Trans>}>
                  <MenuItem value='no_empadronat'><Trans>No està empadronat</Trans></MenuItem>
                  <MenuItem value='menys_9_mesos'><Trans>Menys de 9 mesos</Trans></MenuItem>
                  <MenuItem value='9_mesos_o_mes' data-test='llogater'><Trans>9 mesos o més</Trans></MenuItem>
                </MultipleAnswerQuestion>}

                {esLlogater &&
                <MoneyQuestion name='import_del_lloguer'>
                  <Trans>Quina és la quota mensual d’aquest lloguer?</Trans>
                </MoneyQuestion>}

                {existeixHipoteca &&
                <MoneyQuestion name='import_de_la_hipoteca'>
                  <Trans>Quina és la quota mensual de la seva hipoteca?</Trans>
                </MoneyQuestion>}

                {esLlogater &&
                <YesNoQuestion name='existeix_deute_en_el_pagament_del_lloguer'>
                  <Trans>Existeix un deute en el pagament del lloguer</Trans>
                </YesNoQuestion>}

                {existeixHipoteca &&
                <YesNoQuestion name='existeix_deute_en_el_pagament_de_la_hipoteca'>
                  <Trans>Existeix un deute en el pagament de la hipoteca</Trans>
                </YesNoQuestion>}

                {existeixDeutePagamentHipoteca &&
                <YesNoQuestion name='ha_pagat_12_mesos_daquesta_hipoteca'>
                  <Trans>Ha pagat com a mínim 12 quotes d’aquesta hipoteca?</Trans>
                </YesNoQuestion>}

                {existeixDeutePagamentHipoteca &&
                <YesNoQuestion name='fa_mes_de_12_mesos_que_existeix_el_deute_de_hipoteca'>
                  <Trans>Fa més de 12 mesos que no paga les quotes de la hipoteca?</Trans>
                </YesNoQuestion>}

                {existeixDeutePagamentLloguer &&
                <YesNoQuestion name='fa_mes_de_12_mesos_que_existeix_el_deute_de_lloguer'>
                  <Trans>Fa més de 12 mesos que no paga les quotes del lloguer?</Trans>
                </YesNoQuestion>}

                {esLlogater &&
                <YesNoQuestion name='relacio_de_parentiu_amb_el_propietari'>
                  <Trans>Algun membre de la família té relació de parentiu amb el propietari de l'habitatge</Trans>
                </YesNoQuestion>}

                {teHabitatgeHabitual &&
                <YesNoQuestion name='tinc_alguna_propietat_a_part_habitatge_habitual'>
                  <Trans>Alguna persona que conviu amb vostè té alguna propietat a part de l'habitatge habitual</Trans>
                </YesNoQuestion>}

                {teAlgunaPropietat &&
                <YesNoQuestion name='tinc_alguna_propietat_a_part_habitatge_habitual_i_disposo_dusufructe'>
                  <Trans>Disposa de l'usufructe d'aquesta propietat</Trans>
                </YesNoQuestion>}

                {esLlogater &&
                <YesNoQuestion name='ha_perdut_lhabitatge_en_els_ultims_2_anys'>
                  <Trans>Ha perdut el seu habitatge habitual degut a una execució hipotecària o desnonament en els
                    ultims
                    2 anys?</Trans>
                </YesNoQuestion>}

                {esLlogater &&
                <YesNoQuestion name='ha_participat_en_un_proces_de_mediacio'>
                  <Trans>Ha participat en un procés de mediació del servei de mediació de laXarxa d’Oficines d’Habitatge
                    de Barcelona</Trans>
                </YesNoQuestion>}
              </form>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid item md={5}>
              <DescriptionText/>
            </Grid>
          </Hidden>
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
  const titularContracteLloguer = state.persons.get(selector(state, "titular_contracte_de_lloguer_id"));
  const titularContracteHipoteca = state.persons.get(selector(state, "titular_hipoteca_id"));

  return {
    esLlogater: esLlogater,
    esPropietari: esPropietari,
    existeixDeutePagamentLloguer: selector(state, "existeix_deute_en_el_pagament_del_lloguer"),
    existeixDeutePagamentHipoteca: selector(state, "existeix_deute_en_el_pagament_de_la_hipoteca"),
    existeixHipoteca: existeixHipoteca,
    initialValues: state.rent,
    personesQuePodenTenirContracte: state.persons.filter((persona) => !esFill(persona)),
    teAlgunaPropietat: selector(state, "tinc_alguna_propietat_a_part_habitatge_habitual"),
    teHabitatgeHabitual: esLlogater || esPropietari || esCessio,
    titularContracteLloguer: titularContracteLloguer,
    titularContracteHipoteca: titularContracteHipoteca

  };
}

export default connect(mapStateToProps)(reduxForm(
    {
      form: "RentForm",
      onChange: (values, dispatch) => {
        dispatch(addRent(values));
      }
    })(RentForm));
