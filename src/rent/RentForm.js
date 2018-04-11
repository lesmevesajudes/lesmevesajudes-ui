//@flow
import React from 'react';
import {connect} from 'react-redux';
import {addRent} from './RentActions';
import type {Rent} from './RentTypes';
import {Adult} from '../adults/AdultsTypes';
import type {AdultId} from '../adults/AdultsTypes';
import {Map} from 'immutable';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import {MenuItem, Grid} from 'material-ui';
import {Checkbox, TextField, Select} from 'redux-form-material-ui';
import {Trans} from 'react-i18next';
import DescriptionText from "../components/Common/DescriptionText"

type Props = {
  initialValues: ?Rent,
  addRent: Function,
  personesQuePodenTenirContracteDeLloguer: Map<AdultId, Adult>,
  state: any,
  esLlogater: boolean,
  existeixDeute: boolean,
  teAlgunaPropietat: boolean
};

const RentForm = (props: Props) => {
  const {esLlogater, existeixDeute, teAlgunaPropietat} = props;
  return (
      <Grid container className="bg-container">
        <h1>Afegir informació sobre el lloguer del domicili habitual</h1>
        <Grid container direction={'row'} justify={'space-around'}>
          <Grid item xs sm={5}>
            <form name='RentForm'>
              <label><Trans>Codi postal on es troba l'habitatge</Trans></label>
              <Field required name='codi_postal_habitatge' placeholder='08000' fullWidth component={TextField}/>
              <label><Trans>Relació amb l'habitatge</Trans></label>
              <Field name='relacio_habitatge' data-test='habitatge' component={Select} fullWidth>
                <MenuItem value='propietari'><Trans>Propietari</Trans></MenuItem>
                <MenuItem data-test='llogater' value='llogater'><Trans>Llogater</Trans></MenuItem>
                <MenuItem value='usufructuari'><Trans>Usufructuari</Trans></MenuItem>
              </Field>
              {esLlogater &&
              <Grid item>
                <label>Titular del contracte de lloguer</label>
                <Field name='titular_contracte_de_lloguer_id' component={Select} fullWidth>
                  {props.personesQuePodenTenirContracteDeLloguer.valueSeq().map((persona) => (
                      <MenuItem key={persona.id} value={persona.id}>{persona.nom}</MenuItem>
                  ))}
                  <MenuItem key='no-conviu' value='no-conviu'>Una persona que no viu a l'habitatge</MenuItem>
                </Field>
              </Grid>}
              {esLlogater &&
              <Grid item>
                <label>Data signatura del contracte d'arrendament</label>
                <Field name='data_signatura_contracte_arrendament' placeholder='2005-01-21' type='date' component={TextField}
                    fullWidth required/>
              </Grid>}
              {esLlogater &&
              <label><Field name='relacio_de_parentiu_amb_el_propietari' component={Checkbox}/>
                Algun membre de la família té relació de parentiu amb el propietari de l'habitatge</label>
              }
              {esLlogater &&

              <label><Field name='existeix_deute_en_el_pagament_del_lloguer' component={Checkbox}/>
                Existeix un deute en el pagament del lloguer</label>
              }

              {esLlogater && existeixDeute &&
              <Grid item>
                <label>Import total del deute (&euro;)</label>
                <Field name='import_del_deute_amb_el_propietari' component={TextField} placeholder='0' fullWidth/>
              </Grid>}

              {esLlogater &&
              <label><Field name='lloguer_domiciliat' component={Checkbox}/> El pagament del lloguer està
                domiciliat</label>
              }

              {esLlogater &&
              <Grid item>
                <label>Import mensual del lloguer (&euro;)</label>
                <Field name='import_del_lloguer' component={TextField} placeholder='0' fullWidth/>
              </Grid>}

              {
                //Preguntar si hi ha hipoteca
                //              Preguntar titular hipoteca
              }
              <label>
                <Field name='tinc_alguna_propietat_a_part_habitatge_habitual' component={Checkbox}/>
                Tinc alguna propietat a part de l'habitatge habitual</label>
              {teAlgunaPropietat &&
              <Grid item>
                <label>Valor cadastral finques urbanes (&euro;)</label>
                <Field name='valor_cadastral_finques_urbanes' component={TextField} placeholder='0' fullWidth/>
                <label>Valor cadastral finques rustiques (&euro;)</label>
                <Field name='valor_cadastral_finques_rustiques' component={TextField} placeholder='0' fullWidth/>
              </Grid>
                // Valor finca urbana
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
  return {
    esLlogater: selector(state, 'relacio_habitatge') === 'llogater',
    existeixDeute: selector(state, 'existeix_deute_en_el_pagament_del_lloguer'),
    teAlgunaPropietat: selector(state, 'tinc_alguna_propietat_a_part_habitatge_habitual'),
    initialValues: state.rent,
    personesQuePodenTenirContracteDeLloguer: state.adults.filter((adult) => adult.rol !== 'fill')
  };
}

export default connect(mapStateToProps)(reduxForm(
    {
      form: 'RentForm',
      onChange: (values, dispatch) => {
        dispatch(addRent(values));
      },
    })(RentForm));
