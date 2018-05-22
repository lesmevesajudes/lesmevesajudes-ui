//@flow
import React from 'react';
import {addHouseholdData} from './HouseholdDataActions';
import {connect} from 'react-redux';
import type {HouseholdData} from "./HouseholdDataTypes";
import {Checkbox, Select} from 'redux-form-material-ui';
import {Field, reduxForm} from 'redux-form';
import {Grid, MenuItem} from "material-ui";
import type {PersonID} from "../persons/PersonTypes";
import {Person} from "../persons/PersonTypes";
import {Map} from 'immutable';
import {esFill, esMonoparental, esSustentador} from "../shared/selectorUtils";
import DescriptionText from "../components/Common/DescriptionText"
import {Trans} from "react-i18next";

type Props = {
  initialValues: HouseholdData,
  addHouseholdData: Function,
  esUsuariServeisSocials: Boolean,
  esMonoparental: Boolean,
  possiblesSustentadors: Map<PersonID, Person>,
  esFamiliaNombrosa: Boolean,
  fills: Map<PersonID, Person>,
  custodies: Object
};

let HouseholdForm = (props: Props) => {
  const {esMonoparental, possiblesSustentadors, fills} = props;
  return (
      <Grid container className="bg-container">
        <h1><Trans>Informació sobre el tipus de família</Trans></h1>
        <Grid container direction={'row'} justify={'space-around'}>
          <Grid item xs sm={5}>
            <form name='HouseholdForm'>
              {fills.valueSeq().map((infant: Person) =>
                  <Grid item key={infant.id}>
                    <label><Trans>Qui té la custodia de </Trans>{infant.nom}</label>
                    <Field name={'custodies.' + infant.id + '.primer'} component={Select} fullWidth>
                      {possiblesSustentadors.valueSeq().map((sustentador: Person) =>
                          <MenuItem value={sustentador.id}><Trans>{sustentador.nom}</Trans></MenuItem>
                      )}
                      <MenuItem value="exitus"><Trans>Exitus</Trans></MenuItem>
                      <MenuItem value="no_convivent"><Trans>Una persona que no conviu</Trans></MenuItem>
                      </Field>
                    <Field name={'custodies.' + infant.id + '.segon'} component={Select} fullWidth>
                      {possiblesSustentadors.valueSeq().map((sustentador: Person) =>
                          <MenuItem value={sustentador.id}><Trans>{sustentador.nom}</Trans></MenuItem>
                      )}
                      <MenuItem value="exitus"><Trans>Exitus</Trans></MenuItem>
                      <MenuItem value="no_convivent"><Trans>Una persona que no conviu</Trans></MenuItem>
                    </Field>
                  </Grid>)}
              {esMonoparental &&
              <Grid item>
                <label>Disposa del carnet de familia monoparental:</label>
                <Field name='tipus_familia_monoparental' component={Select} fullWidth>
                  <MenuItem value="nop"><Trans>No</Trans></MenuItem>
                  <MenuItem value="general"><Trans>General</Trans></MenuItem>
                  <MenuItem value="especial"><Trans>Especial</Trans></MenuItem>
                </Field>
              </Grid>}
              <label>
                <Field data-test="es_usuari_serveis_socials" name="es_usuari_serveis_socials" component={Checkbox}/>
                <Trans>Família usuaria de serveis socials en seguiment a un CSS o servei especialitzat de l'Ajuntament
                  de
                  Barcelona</Trans>
              </label>
            </form>
          </Grid>
          <Grid item xs sm={5} hidden={{smDown: true}}>
            <DescriptionText/>
          </Grid>
        </Grid>
      </Grid>
  );
};

function mapStateToProps(state) {
  return {
    initialValues: state.household,
    esMonoparental: esMonoparental(state.persons),
    fills: state.persons.filter((person: Person) => esFill(person)),
    possiblesSustentadors: state.persons.filter((person: Person) => esSustentador(person)),
    custodies: state.household.custodies
  };
}

export default connect(mapStateToProps, {addHouseholdData})(
    reduxForm(
        {
          form: 'HouseholdForm',
          onChange: (values, dispatch) => {
            dispatch(addHouseholdData(values));
          }
        })(HouseholdForm));
