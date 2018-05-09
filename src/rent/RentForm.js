//@flow
import React from 'react';
import {connect} from 'react-redux';
import {addRent} from './RentActions';
import type {Rent} from './RentTypes';
import type {PersonID} from '../persons/PersonTypes';
import {Person} from '../persons/PersonTypes';
import {Map} from 'immutable';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import {FormLabel, Grid, MenuItem, Radio, RadioGroup} from 'material-ui';
import {Checkbox, Select, TextField} from 'redux-form-material-ui';
import {Trans} from 'react-i18next';
import DescriptionText from "../components/Common/DescriptionText";
import {esFill} from "../shared/selectorUtils";
import FormControlLabel from "material-ui/es/Form/FormControlLabel";

type Props = {
  addRent: Function,
  esLlogater: boolean,
  esPropietari: boolean,
  existeixDeutePagamentLloguer: boolean,
  existeixDeutePagamentHipoteca: boolean,
  haParticipatEnMediacio: boolean,
  haPerdutLHhabitatgeEnElsUltims2Anys: boolean,
  initialValues: ?Rent,
  personesQuePodenTenirContracteDeLloguer: Map<PersonID, Person>,
  state: any,
  teAlgunaPropietat: boolean,
  teHabitatgeHabitual: boolean,
  teHipoteca: boolean,
};

const RentForm = (props: Props) => {
  const {
    esLlogater,
    esPropietari,
    existeixDeutePagamentHipoteca,
    existeixDeutePagamentLloguer,
    haParticipatEnMediacio,
    haPerdutLHhabitatgeEnElsUltims2Anys,
    teAlgunaPropietat,
    teHabitatgeHabitual,
    teHipoteca,
  } = props;
  return (
      <Grid container className="bg-container">
        <h1><Trans>Afegir informació sobre el lloguer del domicili habitual</Trans></h1>
        <Grid container direction={'row'} justify={'space-around'}>
          <Grid item xs sm={5}>
            <form name='RentForm'>
              <label><Trans>Relació amb l'habitatge</Trans></label>
              <Field name='relacio_habitatge' data-test='habitatge' component={Select} fullWidth>
                <MenuItem value='propietari'><Trans>Propietari</Trans></MenuItem>
                <MenuItem data-test='llogater' value='llogater'><Trans>Llogater</Trans></MenuItem>
                <MenuItem value='usufructuari'><Trans>Usufructuari</Trans></MenuItem>
                <MenuItem value='no_en_te'><Trans>No tinc habitatge habitual</Trans></MenuItem>
              </Field>
              {teHabitatgeHabitual &&
              <Grid item>
                <label><Trans>Codi postal on es troba l'habitatge</Trans></label>
                <Field required name='codi_postal_habitatge' placeholder='08000' fullWidth component={TextField}/>
              </Grid>}
              {esLlogater &&
              <Grid item>
                <label>Titular del contracte de lloguer</label>
                <Field name='titular_contracte_de_lloguer_id' component={Select} fullWidth>
                  {props.personesQuePodenTenirContracteDeLloguer.valueSeq().map((persona) => (
                      <MenuItem key={persona.id} value={persona.id}>{persona.nom}</MenuItem>
                  ))}
                  <MenuItem key='no-conviu' value='no-conviu'><Trans>Una persona que no viu a
                    l'habitatge</Trans></MenuItem>
                </Field>
              </Grid>}
              {esLlogater &&
              <Grid item>
                <label><Trans>Data signatura del contracte d'arrendament</Trans></label>
                <Field name='data_signatura_contracte_arrendament' placeholder='2005-01-21' type='date'
                       component={TextField} fullWidth required/>
              </Grid>}

              {esLlogater &&
              <Grid item>
                <label><Trans>Import mensual del lloguer (&euro;)</Trans></label>
                <Field name='import_del_lloguer' component={TextField} placeholder='0' fullWidth/>
              </Grid>}

              {esLlogater &&
              <label><Field name='ha_perdut_lhabitatge_en_els_ultims_2_anys' component={Checkbox}/>
                <Trans>Ha perdut el seu habitatge habitual degut a una execució hipotecària o desnonament en els ultims
                  2 anys?</Trans></label>
              }

              {haPerdutLHhabitatgeEnElsUltims2Anys &&
              <Grid item>
                <label><Trans>Data de pèrdua de l'habitatge</Trans></label>
                <Field required name='data_perdua_habitatge' placeholder='2005-01-21' type='date' fullWidth
                       component={TextField}/>
              </Grid>
              }

              {esLlogater &&
              <label><Field name='ha_participat_en_un_proces_de_mediacio' component={Checkbox}/>
                <Trans>Ha participat en un procés de mediació del servei de mediació de laXarxa d’Oficines d’Habitatge
                  de
                  Barcelona</Trans></label>
              }
              {haParticipatEnMediacio &&
              <Grid item>
                <FormLabel component="legend">Resultat de la mediació</FormLabel>
                <RadioGroup
                    name="resultat_de_la_mediacio">
                  <FormControlLabel value="female" control={<Radio/>}
                                    label="S'ha acordat una rebaixa mínima de 50€ mensuals en el rebut de lloguer"/>
                  <FormControlLabel value="male" control={<Radio/>}
                                    label="Ha estat beneficiari de les prestacions econòmiques derivades de la mediació"/>
                  <FormControlLabel value="male" control={<Radio/>}
                                    label="hagin estat beneficiàries de l’ajut temporal garantit i/o del servei del suport d’accés a l’habitatge que atorga l’Àrea de Drets Socials"/>
                  <FormControlLabel value="male" control={<Radio/>}
                                    label="formalitzin un contracte de lloguer d’un habitatge un cop finalitzada la seva estada i procés d’inclusió en un recurs residencial"/>
                  <FormControlLabel value="other" control={<Radio/>} label="Altre"/>
                </RadioGroup>
              </Grid>
              }

              {esPropietari &&
              <Grid item>
                <label><Field name='existeix_hipoteca' component={Checkbox}/>
                  <Trans>Existeix una hipoteca sobre el domicili habitual</Trans></label>
              </Grid>}

              {teHipoteca &&
              <Grid item>
                <label><Trans>Data signatura del contracte d'hipoteca</Trans></label>
                <Field name='data_signatura_contracte_de_hipoteca' placeholder='2005-01-21' type='date'
                       component={TextField}
                       fullWidth required/>
              </Grid>}

              {esLlogater &&
              <label><Field name='relacio_de_parentiu_amb_el_propietari' component={Checkbox}/>
                <Trans>Algun membre de la família té relació de parentiu amb el propietari de
                  l'habitatge</Trans></label>}

              {esLlogater &&

              <label><Field name='existeix_deute_en_el_pagament_del_lloguer' component={Checkbox}/>
                <Trans>Existeix un deute en el pagament del lloguer</Trans></label>}

              {teHipoteca &&
              <label><Field name='existeix_deute_en_el_pagament_de_la_hipoteca' component={Checkbox}/>
                <Trans>Existeix un deute en el pagament de la hipoteca</Trans></label>}

              {esLlogater && existeixDeutePagamentLloguer &&
              <Grid item>
                <label><Trans>Data de la primera quota de lloguer no pagada</Trans></label>
                <Field name='data_de_la_primera_quota_de_lloguer_no_pagada' component={TextField}
                       placeholder='2005-01-21' type='date' fullWidth/>
              </Grid>}

              {esPropietari && existeixDeutePagamentHipoteca &&
              <Grid item>
                <label><Trans>Data de la primera quota de hipoteca no pagada</Trans></label>
                <Field name='data_de_la_primera_quota_de_hipoteca_no_pagada' component={TextField}
                       placeholder='2005-01-21' type='date' fullWidth/>
              </Grid>}

              {esLlogater && existeixDeutePagamentLloguer &&
              <Grid item>
                <label><Trans>Import total del deute (&euro;)</Trans></label>
                <Field name='import_del_deute_amb_el_propietari' component={TextField} placeholder='0' fullWidth/>
              </Grid>}

              {esPropietari && existeixDeutePagamentHipoteca &&
              <Grid item>
                <label><Trans>Import total del deute (&euro;)</Trans></label>
                <Field name='import_del_deute_amb_el_propietari' component={TextField} placeholder='0' fullWidth/>
              </Grid>}

              {esLlogater &&
              <label><Field name='habitatge_de_la_borsa_dhabitatge_barcelona' component={Checkbox}/>
                <Trans>Ha signat un contracte de lloguer a través de la Borsa d’Habitatge de Lloguer de
                  Barcelona.</Trans></label>
              }

              {teHipoteca &&
              <Grid item>
                <label><Trans>Import mensual de la quota de la hipoteca(&euro;)</Trans></label>
                <Field name='import_del_quota hipoteca' component={TextField} placeholder='0' fullWidth/>
              </Grid>}

              {
                //Preguntar si hi ha hipoteca
                //              Preguntar titular hipoteca
              }
              {teHabitatgeHabitual &&
              <label>
                <Field name='tinc_alguna_propietat_a_part_habitatge_habitual' component={Checkbox}/>
                <Trans>Alguna persona que conviu amb vosté té alguna propietat a part de l'habitatge habitual</Trans>
              </label>}
              {teAlgunaPropietat &&
              <label><Field name='tinc_alguna_propietat_a_part_habitatge_habitual_i_disposo_dusufructe'
                            component={Checkbox}/>
                <Trans>Disposa de l'usufructe d'aquesta propietat</Trans>
              </label>
              }
            </form>
          </Grid>
          <Grid item xs sm={5}>
            <DescriptionText/>
          </Grid>

        </Grid>
      </Grid>
  );
};

const selector = formValueSelector('RentForm');

function mapStateToProps(state) {
  const esLlogater = selector(state, 'relacio_habitatge') === 'llogater';
  const esPropietari = selector(state, 'relacio_habitatge') === 'propietari';
  const esUsufructuari = selector(state, 'relacio_habitatge') === 'usufructuari';
  return {
    esLlogater: esLlogater,
    esPropietari: esPropietari,
    esUsufructuari: esUsufructuari,
    existeixDeutePagamentLloguer: selector(state, 'existeix_deute_en_el_pagament_del_lloguer'),
    existeixDeutePagamentHipoteca: selector(state, 'existeix_deute_en_el_pagament_de_la_hipoteca'),
    haParticipatEnMediacio: selector(state, 'ha_participat_en_un_proces_de_mediacio'),
    haPerdutLHhabitatgeEnElsUltims2Anys: selector(state, 'ha_perdut_lhabitatge_en_els_ultims_2_anys'),
    initialValues: state.rent,
    personesQuePodenTenirContracteDeLloguer: state.persons.filter((persona) => !esFill(persona)),
    teAlgunaPropietat: selector(state, 'tinc_alguna_propietat_a_part_habitatge_habitual'),
    teHabitatgeHabitual: esLlogater || esPropietari || esUsufructuari,
    teHipoteca: selector(state, 'existeix_hipoteca'),

  };
}

export default connect(mapStateToProps)(reduxForm(
    {
      form: 'RentForm',
      onChange: (values, dispatch) => {
        dispatch(addRent(values));
      },
    })(RentForm));
