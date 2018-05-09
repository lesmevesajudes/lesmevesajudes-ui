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
import {esFamiliaNombrosa, esFill, esMonoparental} from "../shared/selectorUtils";
import DescriptionText from "../components/Common/DescriptionText"
import {Trans} from "react-i18next";

type Props = {
  initialValues: HouseholdData,
  addHouseholdData: Function,
  esUsuariServeisSocials: Boolean,
  esMonoparental: Boolean,
  esFamiliaNombrosa: Boolean,
  fills: Map<PersonID, Person>,
  custodies: Object
};

let HouseholdForm = (props: Props) => {
  const {esMonoparental, esFamiliaNombrosa, fills, custodies} = props;
  return (
      <Grid container className="bg-container">
        <h1><Trans>Informació sobre el tipus de família</Trans></h1>
        <Grid container direction={'row'} justify={'space-around'}>
          <Grid item xs sm={5}>
            <form name='HouseholdForm'>
              {esFamiliaNombrosa &&
              <Grid item>
                <label><Trans>Tipus familia nombrosa:</Trans></label>
                <Field name='tipus_familia_nombrosa' component={Select} fullWidth>
                  <MenuItem value="nop"><Trans>No</Trans></MenuItem>
                  <MenuItem value="general"><Trans>General</Trans></MenuItem>
                  <MenuItem value="especial"><Trans>Especial</Trans></MenuItem>
                </Field>
              </Grid>}

              {esMonoparental &&
              <Grid item>
                <label>Disposa del carnet de familia monoparental:</label>
                <Field name='tipus_familia_monoparental' component={Select} fullWidth>
                  <MenuItem value="nop"><Trans>No</Trans></MenuItem>
                  <MenuItem value="general"><Trans>General</Trans></MenuItem>
                  <MenuItem value="especial"><Trans>Especial</Trans></MenuItem>
                </Field>
              </Grid>}
              {esMonoparental &&
              fills.valueSeq().map((infant: Person) =>
                  <Grid item key={infant.id}>
                    <label><Field name={"custodies." + infant.id + ".existeix"} component={Checkbox}/>
                      <Trans>Tinc la custodia de </Trans>{infant.nom}</label>
                    {(custodies !== null && custodies[infant.id] !== null) &&
                    <Grid item>
                      <label><Trans>Tipus de guardia i custodia:</Trans></label>
                      <Field name={'custodies.' + infant.id + '.tipus'} component={Select} fullWidth>
                        <MenuItem value="compartida"><Trans>Compartida</Trans></MenuItem>
                        <MenuItem value="total"><Trans>Total</Trans></MenuItem>
                      </Field>
                    </Grid>}
                  </Grid>)

              }
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
    esFamiliaNombrosa: esFamiliaNombrosa(state.persons),
    fills: state.persons.filter((person: Person) => esFill(person)),
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
