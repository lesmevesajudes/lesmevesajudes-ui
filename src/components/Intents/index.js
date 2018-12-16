import {Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import React from 'react';
import {connect} from 'react-redux';
import {addPerson} from '../../persons/PersonsActions';
import {addResidenceData} from '../../residence/ResidenceActions';
import {create as create_UUID} from '../../shared/UUID';
import {enableButtons, showButtons} from '../Steps/StepsActions';

const aWoman = {
  is_the_person_in_front_of_the_computer: true,
  nom: 'Maria',
  edat: '33',
  sexe: 'dona',
  tipus_document_identitat: 'DNI',
  porta_dos_anys_o_mes_empadronat_a_catalunya: true,
  municipi_empadronament: 'barcelona',
  anys_empadronat_a_barcelona: '4',
  situacio_laboral: 'aturat',
  inscrit_com_a_demandant_docupacio: true,
  inscrit_com_a_demandant_docupacio_mes_de_12_mesos: true,
  en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: false,
  ha_treballat_a_l_estranger_6_mesos: true,
  ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos: true,
  ingressos_bruts: '4500',
  ingressos_bruts_ultims_sis_mesos: '1200',
  cobra_algun_tipus_de_pensio_no_contributiva: false,
  gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio: false,
  percep_prestacions_incompatibles_amb_la_feina: false,
  te_algun_grau_de_discapacitat_reconegut: true,
  grau_discapacitat: '77',
  victima_violencia_de_genere: true,
  beneficiari_de_prestacio_residencial: false,
  id: create_UUID()
};

const aMan = (id = create_UUID()) => ({
  is_the_person_in_front_of_the_computer: false,
  nom: 'Pere',
  edat: '35',
  sexe: 'home',
  relacio_parentiu: "parella",
  tipus_document_identitat: 'DNI',
  porta_dos_anys_o_mes_empadronat_a_catalunya: true,
  municipi_empadronament: 'barcelona',
  anys_empadronat_a_barcelona: '4',
  situacio_laboral: 'aturat',
  inscrit_com_a_demandant_docupacio: true,
  inscrit_com_a_demandant_docupacio_mes_de_12_mesos: true,
  en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: false,
  ha_treballat_a_l_estranger_6_mesos: true,
  ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos: true,
  ingressos_bruts: '4500',
  ingressos_bruts_ultims_sis_mesos: '1200',
  cobra_algun_tipus_de_pensio_no_contributiva: false,
  gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio: false,
  percep_prestacions_incompatibles_amb_la_feina: false,
  te_algun_grau_de_discapacitat_reconegut: true,
  grau_discapacitat: '77',
  victima_violencia_domestica: false,
  beneficiari_de_prestacio_residencial: false,
  id: id,

});

const aChild = (id = create_UUID()) => ({
  nom: 'Nora',
  sexe: 'dona',
  relacio_parentiu: 'fill',
  edat: '11',
  tipus_document_identitat: 'DNI',
  porta_dos_anys_o_mes_empadronat_a_catalunya: true,
  municipi_empadronament: 'barcelona',
  anys_empadronat_a_barcelona: '5',
  te_algun_grau_de_discapacitat_reconegut: false,
  es_escolaritzat_entre_P3_i_4rt_ESO: true,
  beneficiari_de_prestacio_residencial: false,
  id: id,
});

const residenceData = {
  relacio_habitatge: 'llogater',
  existeix_deute_en_el_pagament_del_lloguer: true,
  ha_rebut_una_notificacio_de_desnonament: true,
  import_deute_en_el_pagament_del_lloguer: '2000',
  ha_perdut_lhabitatge_en_els_ultims_2_anys: true,
  codi_postal_habitatge: '08003',
  import_del_lloguer: '600',
  titular_contracte_de_lloguer_id: aWoman.id,
  titular_contracte_lloguer_temps_empadronat: 'nou_mesos_o_mes',
  ha_pagat_almenys_3_quotes_del_lloguer: true,
  relacio_de_parentiu_amb_el_propietari: false,
  tinc_alguna_propietat_a_part_habitatge_habitual: false,
  es_ocupant_dun_habitatge_gestionat_per_lagencia_de_lhabitatge: false,
  ha_rebut_oferta_per_accedir_a_habitatge_i_lha_rebutjada: false
};

// Todo My eyes are bleeding.. this button management thing is wrong..
const enableAndShowButtons = (props) => {
  props.enableButtons();
  props.showButtons();
};

export const intents = (WizardPage) =>
    connect(null, {addPerson, enableButtons, showButtons, addResidenceData})((props) =>
        <Grid container direction='column'>
          <Grid container direction='row' style={{height: '100px'}}>
            <Grid item xs={1}>
              <Button variant='contained' onClick={() => props.addPerson(aWoman)}>
                Add Maria
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant='contained' onClick={() => props.addPerson(aMan())}>
                Add Pere
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant='contained' onClick={() => props.addPerson(aChild())}>
                Add Nora
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant='contained' onClick={() => enableAndShowButtons(props)}>
                Buttons ON
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant='contained' onClick={() => props.addResidenceData(residenceData)}>
                Add rent data
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <WizardPage/>
          </Grid>
        </Grid>);
