//@flow
import React from "react";
import type {PersonRole} from "./PersonTypes";
import {Person} from "./PersonTypes";
import {Checkbox, Select, TextField} from "redux-form-material-ui";
import AddIcon from "material-ui-icons/Add";
import ClearInputIcon from "material-ui-icons/Clear";
import {Trans} from "react-i18next";
import {Field, formValueSelector, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Button, Grid, MenuItem} from "material-ui";
import edat from "../shared/Edat";
import DescriptionText from "../components/Common/DescriptionText"

export type PersonFormInitialValues = Person | { rol: String };

type Props = {
  escolaritzat: Boolean,
  esDesocupat: Boolean,
  esDona: Boolean,
  esFill: Boolean,
  handleSubmit: Function,
  haTreballatALEstranger6Mesos: Boolean,
  ingressatEnCentrePenitenciari: Boolean,
  inscritComADemandantDocupacio: Boolean,
  onCancel: Function,
  potTreballar: Boolean,
  rol: PersonRole,
  //teDNI: Boolean,
  victimaViolenciaDeGenere: Boolean
};

const textesSegonsRol: { [PersonRole]: string } = {
  pares: "pare/mare",
  fill: "fill/filla",
  altres_adults: "altres persons",
  altres_adults_familiars: "altres familiars"
};

let PersonForm = (props: Props) => {
  const {
    escolaritzat,
    esDesocupat,
    esDona,
    esFill,
    handleSubmit,
    haTreballatALEstranger6Mesos,
    ingressatEnCentrePenitenciari,
    inscritComADemandantDocupacio,
    potTreballar,
    rol,
    //teDNI,
    victimaViolenciaDeGenere
  } = props;

  return (
      <Grid container className="bg-container">
        <h1>{`Afegir ${textesSegonsRol[rol]} a la unitat de convivència`}</h1>
        <form onSubmit={handleSubmit}>
          <Field component="input" name="id" type="hidden"/>
          <Grid container>
            <Grid item xs={12}>
              <Grid container direction={"row"} justify={"space-around"} alignItems={"stretch"}>
                <Grid item xs={12} md={5}>
                  <Grid container direction={"column"} alignItems={"stretch"}>
                    <label>
                      <Trans>Com vol identificar a aquesta persona?</Trans>
                    </label>
                    <Field name="nom" placeholder="Nom" component={TextField} fullWidth required/>
                    <label>
                      <Trans>Data naixement</Trans>
                    </label>
                    <Field name="data_naixement" placeholder="2005-01-21" type="date" fullWidth component={TextField}
                           required/>
                    <Field name="rol" component={TextField} type="hidden" required/>
                    <label>
                      <Trans>Sexe</Trans>
                    </label>
                    <Field data-test="genere" name="genere" fullWidth component={Select}>
                      <MenuItem data-test="genere_dona" value="dona">
                        <Trans>Dona</Trans>
                      </MenuItem>
                      <MenuItem data-test="genere_home" value="home">
                        <Trans>Home</Trans>
                      </MenuItem>
                    </Field>
                    <label>
                      <Trans>Tipus de document de identitat</Trans>
                    </label>
                    <Field data-test="document_identitat" name="document_identitat" component={Select} fullWidth>
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
                      <Trans>
                        Data alta padró a l&apos;actual habitatge (sense interrupcions)
                      </Trans>
                    </label>
                    <Field name="data_alta_padro" placeholder="2005-01-21" type="date" component={TextField} fullWidth
                           required/>
                    {potTreballar &&
                    <Grid item>
                      <label>
                        <Trans>Situació laboral</Trans>
                      </label>
                      <Field data-test="situacio_laboral" name="situacio_laboral" component={Select} fullWidth>
                        <MenuItem data-test="treball_compte_daltri_jornada_complerta"
                                  value="treball_compte_daltri_jornada_complerta">
                          <Trans>Treballa per compte d'altri jornada complerta</Trans>
                        </MenuItem>
                        <MenuItem data-test="treball_compte_alie_jornada_parcial"
                                  value="treball_compte_alie_jornada_parcial">
                          <Trans>Treballa per compte alié jornada parcial</Trans>
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
                    </Grid>
                    }
                    <label>
                      <Trans>Total ingressos bruts 2016</Trans>
                    </label>
                    <Field name="ingressos_bruts" placeholder="0" type="number" fullWidth component={TextField}/>
                    <label>
                      <Trans>Grau discapacitat</Trans>
                    </label>
                    <Field name="grau_discapacitat" placeholder="0" type="number" component={TextField}/>
                    {esDona && potTreballar &&
                    <label>
                      <Field name="victima_violencia_de_genere" checked={false} component={Checkbox}/>
                      <Trans>Víctima violència de genere</Trans>
                    </label>
                    }
                    {esDona && victimaViolenciaDeGenere &&
                    <label>
                      <Field name="percep_prestacions_incompatibles_amb_la_feina" checked={false}
                             component={Checkbox}/>
                      <Trans>Perceb alguna ajuda que no li permeti treballar?</Trans>
                    </label>
                    }
                    {potTreballar &&
                    <label>
                      <Field name="victima_violencia_domestica" checked={false} component={Checkbox}/>
                      <Trans>Víctima violència de domèstica</Trans>
                    </label>
                    }
                    {esDona && !esFill &&
                    <label>
                      <Field name="es_divorciada_de_familia_reagrupada" checked={false} component={Checkbox}/>
                      <Trans>És divorciada de familia reagrupada</Trans>
                    </label>
                    }
                    {potTreballar && esDesocupat && inscritComADemandantDocupacio &&
                    <label>
                      <Field name="ingressat_en_centre_penitenciari" checked={false} component={Checkbox}/>
                      <Trans>Ingressat en centre penitenciari</Trans>
                    </label>
                    }
                    {ingressatEnCentrePenitenciari &&
                    <label>
                      <Field name="ingressat_en_centre_penitenciari_pot_treballar" checked={false}
                             component={Checkbox}/>
                      <Trans>El règim penitenciari li permet treballar fora del centre</Trans>
                    </label>
                    }
                    <label>
                      <Field name="es_orfe_dels_dos_progenitors" checked={false} component={Checkbox}/>
                      <Trans>És orfe dels dos progenitors</Trans>
                    </label>
                    {potTreballar &&
                    <label>
                      <Field name="ha_treballat_a_l_estranger_6_mesos" checked={false} component={Checkbox}/>
                      <Trans>Ha treballat a l&apos;estranger 6 mesos</Trans>
                    </label>
                    }
                    {potTreballar && haTreballatALEstranger6Mesos &&
                    <label>
                      <Field name="ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos"
                             checked={false} component={Checkbox}/>
                      <Trans>Ha retornat d'aquest període de treball en els últims 12 mesos</Trans>
                    </label>
                    }
                    {potTreballar && esDesocupat &&
                    <label>
                      <Field name="en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina" checked={false}
                             component={Checkbox}/>
                      <Trans>En els últims 12 mesos ha fet baixa voluntaria de la feina</Trans>
                    </label>
                    }
                    {potTreballar && esDesocupat &&
                    <label>
                      <Field name="ha_esgotat_prestacio_de_desocupacio" checked={false} component={Checkbox}/>
                      <Trans>Ha esgotat una prestació contributiva o subsidi per desocupació</Trans>
                    </label>
                    }
                    {potTreballar && esDesocupat &&
                    <label>
                      <Field name="inscrit_com_a_demandant_docupacio" checked={false} component={Checkbox}/>
                      <Trans>És inscrit com a demandant d'ocupació</Trans>
                    </label>
                    }
                    {potTreballar && esDesocupat && inscritComADemandantDocupacio &&
                    <label>
                      <Field name="demandant_d_ocupacio_durant_12_mesos" checked={false} component={Checkbox}/>
                      <Trans>Ha estat inscrit de forma ininterrompuda com a demandant d'ocupació almenys 12
                        mesos</Trans>
                    </label>
                    }
                    {potTreballar && esDesocupat && inscritComADemandantDocupacio &&
                    <label>
                      <Field name="durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina" checked={false}
                             component={Checkbox}/>
                      <Trans>Ha realitzat accions de recerca activa de feina en el mes anterior</Trans>
                    </label>
                    }
                    {potTreballar && esDesocupat && inscritComADemandantDocupacio &&
                    <label>
                      <Field name="ha_estat_beneficiari_de_la_rai_en_els_ultims_12_mesos" checked={false}
                             component={Checkbox}/>
                      <Trans>Ha estat beneficiari de la RAI en els últims 12 mesos</Trans>
                    </label>
                    }
                    {potTreballar && esDesocupat && inscritComADemandantDocupacio &&
                    <label>
                      <Field name="ha_estat_beneficiari_de_les_tres_rai_anteriors" checked={false}
                             component={Checkbox}/>
                      <Trans>Ha estat beneficiari de tres RAI anteriors</Trans>
                    </label>
                    }
                    {esFill &&
                    <label>
                      <Field name="es_escolaritzat_entre_P3_i_4rt_ESO" component={Checkbox}/>
                      <Trans>Està escolaritzat entre P4 i 4rt d&apos;ESO</Trans>
                    </label>
                    }
                    {esFill && escolaritzat &&
                    <Grid item>
                      <label>
                        <Field name="te_beca_menjador" component={Checkbox}/>
                        <Trans>Té beca menjador</Trans>
                      </label>
                    </Grid>
                    }
                    {esFill &&
                    <label>
                      <Field name="en_acolliment" component={Checkbox}/> <Trans>En acolliment</Trans>
                    </label>
                    }
                    {esFill &&
                    <label>
                      <Field name="beneficiari_fons_infancia_2017" component={Checkbox}/>
                      <Trans>Beneficiari/a fons infància 2017</Trans>
                    </label>
                    }
                  </Grid>
                </Grid>
                <Grid item md={5} hidden={{smDown: true}}>
                  <DescriptionText/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12}>
              <Grid container justify={"space-around"}>
                <Button variant="raised" color="secondary" onClick={props.onCancel}>
                  <Trans>Cancelar <ClearInputIcon/></Trans>
                </Button>
                <Button variant="raised" color="primary" type="submit" name="ButtonValidar">
                  <Trans>Validar <AddIcon/></Trans>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
  );
};

//El icono AddIcon, se deberia añadir Absolute, 25% y relative al button para probar si funciona bien el tema de align, pero es un parche.
PersonForm = reduxForm({
  form: "PersonForm"
})(PersonForm);

const selector = formValueSelector("PersonForm");

PersonForm = connect(state => {
  const esDesocupat = selector(state, "situacio_laboral") === "desocupat";
  //const teDNI = selector(state, "tipus_document_identitat") === "DNI";
  const esDona = selector(state, "genere") === "dona";
  const escolaritzat = selector(state, "es_escolaritzat_entre_P3_i_4rt_ESO");
  const esFill =
      selector(state, "rol") === "fill" ||
      selector(state, "rol") === "infant_acollit";
  const haTreballatALEstranger6Mesos = selector(state, "ha_treballat_a_l_estranger_6_mesos");
  const ingressatEnCentrePenitenciari = selector(state, "ingressat_en_centre_penitenciari");
  const inscritComADemandantDocupacio = selector(state, "inscrit_com_a_demandant_docupacio");
  const potTreballar = (edat(selector(state, "data_naixement")) || 0) >= 16;
  const rol = selector(state, "rol");
  const victimaViolenciaDeGenere = selector(state, "victima_violencia_de_genere");
  return {
    escolaritzat,
    esDesocupat,
    //teDNI,
    esDona,
    esFill,
    haTreballatALEstranger6Mesos,
    ingressatEnCentrePenitenciari,
    inscritComADemandantDocupacio,
    potTreballar,
    rol,
    victimaViolenciaDeGenere
  };
})(PersonForm);

export default PersonForm;
