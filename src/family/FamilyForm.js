//@flow
import React from "react";
import {addFamilyData} from "./FamilyDataActions";
import {connect} from "react-redux";
import type {FamilyData} from "./FamilyDataTypes";
import {Select} from "redux-form-material-ui";
import {Field, reduxForm} from "redux-form";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Hidden from "@material-ui/core/Hidden";
import type {PersonID} from "../persons/PersonTypes";
import {Person} from "../persons/PersonTypes";
import {Map} from "immutable";
import {esFill, esMonoparental, esSustentador} from "../shared/selectorUtils";
import DescriptionText from "../components/Common/DescriptionText";
import {Trans} from "react-i18next";
import Typography from "@material-ui/core/Typography";
import {YesNoQuestion} from "../persons/components/YesNoQuestion";

type Props = {
  initialValues: FamilyData,
  addHouseholdData: Function,
  esUsuariServeisSocials: Boolean,
  esMonoparental: Boolean,
  possiblesSustentadors: Map<PersonID, Person>,
  esFamiliaNombrosa: Boolean,
  fills: Map<PersonID, Person>,
  custodies: Object
};

let FamilyForm = (props: Props) => {
  const {esMonoparental, possiblesSustentadors, fills} = props;
  return (
      <Grid container className="bg-container">
        <Typography variant="headline" gutterBottom><Trans>Informació sobre la seva família</Trans></Typography>
        <Grid container direction="row" justify="space-around" alignItems="stretch">
          <Grid item xs={12} sm={6}>
            <form name='FamilyForm'>
              <Grid container direction="column" alignItems="stretch" spacing={16}>
                {fills.valueSeq().map((infant: Person) =>
                    <Grid item key={infant.id}>

                      <label>
                        <Typography><Trans>Qui té la guarda i custòdia o tutela legal de </Trans>{infant.nom}
                        </Typography>
                      </label>
                      <Grid container direction="row" justify="space-between">
                        <Grid item xs={5}>
                          <Field name={"custodies." + infant.id + ".primer"} component={Select} fullWidth>
                            {possiblesSustentadors.valueSeq().map((sustentador: Person) =>
                                <MenuItem key={`primer-${sustentador.id}`}
                                          value={sustentador.id}><Trans>{sustentador.nom}</Trans></MenuItem>
                            )}
                            <MenuItem value="no_convivent"><Trans>Una persona que no conviu</Trans></MenuItem>
                          </Field>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography><Trans>i</Trans></Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Field name={"custodies." + infant.id + ".segon"} component={Select} fullWidth>
                            {possiblesSustentadors.valueSeq().map((sustentador: Person) =>
                                <MenuItem key={`segon-${sustentador.id}`}
                                          value={sustentador.id}><Trans>{sustentador.nom}</Trans></MenuItem>
                            )}
                            <MenuItem value="ningu_mes"><Trans>Ningú més</Trans></MenuItem>
                            <MenuItem value="no_convivent"><Trans>Una persona que no conviu</Trans></MenuItem>
                          </Field>
                        </Grid>
                      </Grid>

                    </Grid>)}
                {esMonoparental &&
                <Grid item>
                  <label><Typography><Trans>Disposa del carnet de familia monoparental:</Trans></Typography></label>
                  <Field name='tipus_familia_monoparental' component={Select} fullWidth>
                    <MenuItem value="nop"><Trans>No</Trans></MenuItem>
                    <MenuItem value="general"><Trans>General</Trans></MenuItem>
                    <MenuItem value="especial"><Trans>Especial</Trans></MenuItem>
                  </Field>
                </Grid>}
                <YesNoQuestion name="es_usuari_serveis_socials">
                  <Trans>Família usuaria de serveis socials en seguiment a un CSS o servei especialitzat de
                    l'Ajuntament de Barcelona</Trans>
                </YesNoQuestion>
              </Grid>
            </form>
          </Grid>
          <Hidden smDown>
            <Grid item xs sm={5}>
              <DescriptionText/>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
  );
};

function mapStateToProps(state) {
  return {
    initialValues: state.family,
    esMonoparental: esMonoparental(state.persons),
    fills: state.persons.filter((person: Person) => esFill(person)),
    possiblesSustentadors: state.persons.filter((person: Person) => esSustentador(person)),
    custodies: state.family.custodies
  };
}

export default connect(mapStateToProps, {addHouseholdData: addFamilyData})(
    reduxForm(
        {
          form: "FamilyForm",
          onChange: (values, dispatch) => {
            dispatch(addFamilyData(values));
          }
        })(FamilyForm));
