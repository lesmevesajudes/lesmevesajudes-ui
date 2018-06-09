//@flow
import React, {Fragment} from "react";
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
import {esFill, esSustentador} from "../shared/selectorUtils";
import DescriptionText from "../components/Common/DescriptionText";
import {Trans} from "react-i18next";
import Typography from "@material-ui/core/Typography";
import {YesNoQuestion} from "../persons/components/YesNoQuestion";
import FormSubTitle from "../persons/components/FormSubTitle";

type Props = {
  initialValues: FamilyData,
  addHouseholdData: Function,
  esUsuariServeisSocials: boolean,
  families: Array<Object>,
  persones: Map<PersonID, Person>,
  possiblesSustentadors: Map<PersonID, Person>,
  esFamiliaNombrosa: boolean,
  fills: Map<PersonID, Person>,
  custodies: Object
};
type Custodia = {
  primer: string,
  segon?: string
}

export const detectaFamilies = (custodies: { [string]: Custodia }): Object =>
    Object.keys(custodies).reduce(
        (families: Object, menorID: string) => {
          if (typeof custodies[menorID] !== "undefined"
              && typeof custodies[menorID].primer === "string"
              && typeof custodies[menorID].segon === "string") {
            const familiaID = [custodies[menorID].primer, custodies[menorID].segon].sort().join('');
            if (typeof families[familiaID] !== "undefined") {
              families[familiaID].menors.push(menorID);
            } else {
              families[familiaID] =
                  {
                    sustentadors: custodies[menorID].segon === "ningu_mes" || custodies[menorID].segon === "no_conviu"
                        ? [custodies[menorID].primer]
                        : [custodies[menorID].primer, custodies[menorID].segon],
                    menors: [menorID],
                    monoparental: custodies[menorID].segon === "ningu_mes"
                  };
            }
          }
          return families;
        }, {});

const toArray = (anObject: Object) =>
    Object.keys(anObject).reduce(
        (result: Object[], key: string) =>
            [...result, {...anObject[key], ID: key}]
        , []
    );

function formatMembers(arr) {
  console.log(arr);
  let outStr = "";
  if (arr.length === 1) {
    outStr = arr[0];
  } else if (arr.length === 2) {
    outStr = arr.join(' i ');
  } else if (arr.length > 2 && arr.length <= 4) {
    outStr = arr.slice(0, -1).join(', ') + ' i ' + arr.slice(-1);
  } else if (arr.length > 4) {
    outStr = arr.slice(0, 3).join(', ') + '...';
  }
  return outStr;
}

const createFamilyName = (familia, persones) =>
    formatMembers([...familia.sustentadors.map((key) => persones.get(key).nom), ...familia.menors.map((key) => persones.get(key).nom)]);

const FamilyForm = (props: Props) => {
  const {custodies, families, fills, persones, possiblesSustentadors} = props;
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
                                          value={sustentador.id}>{sustentador.nom}</MenuItem>
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
                                typeof custodies !== "undefined" && typeof custodies[infant.id] !== "undefined" && custodies[infant.id].primer === sustentador.id
                                    ? null
                                    : <MenuItem key={`segon-${sustentador.id}`} value={sustentador.id}>
                                      {sustentador.nom}
                                    </MenuItem>
                            )}
                            <MenuItem value="ningu_mes"><Trans>Ningú més</Trans></MenuItem>
                            <MenuItem value="no_convivent"><Trans>Una persona que no conviu</Trans></MenuItem>
                          </Field>
                        </Grid>
                      </Grid>

                    </Grid>)}
                {families.length > 0 &&
                families.map((familia) =>
                    <Fragment>
                      <FormSubTitle><Trans>Familia de </Trans> {createFamilyName(familia, persones)} </FormSubTitle>
                      {familia.monoparental &&
                      <Grid item>
                        <label><Typography><Trans>Disposa del carnet de familia
                          monoparental:</Trans></Typography></label>
                        <Field name='tipus_familia_monoparental' component={Select} fullWidth>
                          <MenuItem value="nop"><Trans>No</Trans></MenuItem>
                          <MenuItem value="general"><Trans>General</Trans></MenuItem>
                          <MenuItem value="especial"><Trans>Especial</Trans></MenuItem>
                        </Field>
                      </Grid>
                      }

                      <YesNoQuestion name="es_usuari_serveis_socials">
                        <Trans>És usuari/a de serveis socials en seguiment a un CSS o servei especialitzat de
                          l'Ajuntament de Barcelona</Trans>
                      </YesNoQuestion>
                    </Fragment>
                )}

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
  console.log("custodies", state.family.custodies);
  const families = toArray(typeof state.family.custodies !== "undefined" ? detectaFamilies(state.family.custodies) : {});
  console.log("families: ", families);
  console.log("monoparentals: ", families.filter(familia => familia.monoparental));
  return {
    initialValues: state.family,
    fills: state.persons.filter((person: Person) => esFill(person)),
    persones: state.persons,
    possiblesSustentadors: state.persons.filter((person: Person) => esSustentador(person)),
    custodies: state.family.custodies,
    families: families
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
