import React from 'react';
import PersonsReducer, {initPersonState} from '../../persons/PersonsReducer';
import {aMan, aPerson, aWoman, isPartner, isThePersonInFromOfTheComputer, ofAge} from '../../../test/fixtures/Persons';
import {addPerson} from '../../persons/PersonsActions';
import {buildRequest} from '../../results/FetchSimulationAction';
import OpenFiscaAPIClient from './OpenFiscaAPIClient';

describe('PersonsReducer', () => {
  it('should add a person', () => {
    const maria = isThePersonInFromOfTheComputer(ofAge(45, aWoman(aPerson({id: '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1'}))));
    const pere = isPartner(ofAge(45, aMan(aPerson({id: '42c5f2a9-4f60-47ad-87cd-63a08b19b360'}))));
    const josep = isPartner(ofAge(12, aMan(aPerson({id: 'd2c2c1f0-3399-4143-a2c2-8c3263b493f3'}))));

    const state = {
      persons: [addPerson(maria), addPerson(pere), addPerson(josep)].reduce(PersonsReducer, initPersonState()),
      family: {
        custodies: {
          'd2c2c1f0-3399-4143-a2c2-8c3263b493f3': {
            primer: '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1',
            segon: '42c5f2a9-4f60-47ad-87cd-63a08b19b360'
          }
        },
        disposa_de_carnet_familia_monoparental: {
          '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c142c5f2a9-4f60-47ad-87cd-63a08b19b360': 'nop'
        },
        usuari_serveis_socials: {
          '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c142c5f2a9-4f60-47ad-87cd-63a08b19b360': true
        }
      },
      residence: {
        relacio_habitatge: 'llogater',
        codi_postal_habitatge: '08003',
        titular_contracte_de_lloguer_id: '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1',
        titular_contracte_lloguer_temps_empadronat: '9_mesos_o_mes',
        import_del_lloguer: '700'
      }
    };
    let client = new OpenFiscaAPIClient(true);
    return client.makeSimulation(state)
        .then(result => expect(result.data).toEqual({
              'families': {
                '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c142c5f2a9-4f60-47ad-87cd-63a08b19b360': {
                  'adults': ['23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1', '42c5f2a9-4f60-47ad-87cd-63a08b19b360'],
                  'altres_persones': [],
                  'es_usuari_serveis_socials': {'2017-01': true},
                  'menors': ['d2c2c1f0-3399-4143-a2c2-8c3263b493f3'],
                  'tipus_custodia': {'2017-01': 'compartida'},
                  'tipus_familia_monoparental': {'2017-01': 'general'}
                }
              },
              'persones': {
                '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1': {
                  'AE_230_01_mensual': {'2017-01': 0},
                  'AE_230_mensual': {'2017-01': 0},
                  'EG_233_mensual': {'2017-01': 0},
                  'GE_051_00_mensual': {'2017-01': 0},
                  'GE_051_01_mensual': {'2017-01': 0},
                  'GE_051_02_mensual': {'2017-01': 0},
                  'GE_051_03_mensual': {'2017-01': 0},
                  'GG_270_mensual': {'2017-01': 0},
                  'anys_empadronat_a_barcelona': {'2017-01': '3'},
                  'beneficiari_de_prestacio_residencial': {'2017-01': true},
                  'edat': {'2017-01': '45'},
                  'en_acolliment': {'2017-01': false},
                  'en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina': {},
                  'es_divorciada_de_familia_reagrupada': {},
                  'es_escolaritzat_entre_P3_i_4rt_ESO': {},
                  'es_orfe_dels_dos_progenitors': {},
                  'grau_discapacitat': {'2017-01': '33'},
                  'ha_esgotat_prestacio_de_desocupacio': {'2017-01': false},
                  'ha_treballat_a_l_estranger_6_mesos': {'2017-01': true},
                  'ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos': {'2017-01': true},
                  'ingressos_bruts': {'2016': '3000'},
                  'ingressos_per_pnc': {'2016': '1000'},
                  'inscrit_com_a_demandant_docupacio': {'2017-01': true},
                  'inscrit_com_a_demandant_docupacio_mes_de_12_mesos': {'2017-01': true},
                  'municipi_empadronament': {'2017-01': 'barcelona'},
                  'percep_prestacions_incompatibles_amb_la_feina': {'2017-01': true},
                  'porta_dos_anys_o_mes_empadronat_a_catalunya': {'2017-01': true},
                  'sexe': {'2017-01': 'dona'},
                  'situacio_laboral': {'2017-01': 'aturat'},
                  'tipus_document_identitat': {'2017-01': 'DNI'},
                  'titular_contracte_de_lloguer': {'2017-01': true},
                  'victima_violencia_de_genere': {},
                  'victima_violencia_domestica': {'2017-01': true}
                },
                '42c5f2a9-4f60-47ad-87cd-63a08b19b360': {
                  'AE_230_01_mensual': {'2017-01': 0},
                  'AE_230_mensual': {'2017-01': 0},
                  'EG_233_mensual': {'2017-01': 0},
                  'GE_051_00_mensual': {'2017-01': 0},
                  'GE_051_01_mensual': {'2017-01': 0},
                  'GE_051_02_mensual': {'2017-01': 0},
                  'GE_051_03_mensual': {'2017-01': 0},
                  'GG_270_mensual': {'2017-01': 0},
                  'anys_empadronat_a_barcelona': {'2017-01': '3'},
                  'beneficiari_de_prestacio_residencial': {'2017-01': true},
                  'edat': {'2017-01': '45'},
                  'en_acolliment': {'2017-01': false},
                  'en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina': {},
                  'es_divorciada_de_familia_reagrupada': {},
                  'es_escolaritzat_entre_P3_i_4rt_ESO': {},
                  'es_orfe_dels_dos_progenitors': {},
                  'grau_discapacitat': {'2017-01': '33'},
                  'ha_esgotat_prestacio_de_desocupacio': {'2017-01': false},
                  'ha_treballat_a_l_estranger_6_mesos': {'2017-01': true},
                  'ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos': {'2017-01': true},
                  'ingressos_bruts': {'2016': '3000'},
                  'ingressos_per_pnc': {'2016': '1000'},
                  'inscrit_com_a_demandant_docupacio': {'2017-01': true},
                  'inscrit_com_a_demandant_docupacio_mes_de_12_mesos': {'2017-01': true},
                  'municipi_empadronament': {'2017-01': 'barcelona'},
                  'percep_prestacions_incompatibles_amb_la_feina': {'2017-01': true},
                  'porta_dos_anys_o_mes_empadronat_a_catalunya': {'2017-01': true},
                  'sexe': {'2017-01': 'dona'},
                  'situacio_laboral': {'2017-01': 'aturat'},
                  'tipus_document_identitat': {'2017-01': 'DNI'},
                  'victima_violencia_de_genere': {},
                  'victima_violencia_domestica': {'2017-01': true}
                },
                'd2c2c1f0-3399-4143-a2c2-8c3263b493f3': {
                  'AE_230_01_mensual': {'2017-01': 0},
                  'AE_230_mensual': {'2017-01': 0},
                  'EG_233_mensual': {'2017-01': 0},
                  'GE_051_00_mensual': {'2017-01': 0},
                  'GE_051_01_mensual': {'2017-01': 0},
                  'GE_051_02_mensual': {'2017-01': 0},
                  'GE_051_03_mensual': {'2017-01': 0},
                  'GG_270_mensual': {'2017-01': 0},
                  'anys_empadronat_a_barcelona': {'2017-01': '3'},
                  'beneficiari_de_prestacio_residencial': {'2017-01': true},
                  'edat': {'2017-01': '45'},
                  'en_acolliment': {'2017-01': false},
                  'en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina': {},
                  'es_divorciada_de_familia_reagrupada': {},
                  'es_escolaritzat_entre_P3_i_4rt_ESO': {},
                  'es_orfe_dels_dos_progenitors': {},
                  'grau_discapacitat': {'2017-01': '33'},
                  'ha_esgotat_prestacio_de_desocupacio': {'2017-01': false},
                  'ha_treballat_a_l_estranger_6_mesos': {'2017-01': true},
                  'ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos': {'2017-01': true},
                  'ingressos_bruts': {'2016': '3000'},
                  'ingressos_per_pnc': {'2016': '1000'},
                  'inscrit_com_a_demandant_docupacio': {'2017-01': true},
                  'inscrit_com_a_demandant_docupacio_mes_de_12_mesos': {'2017-01': true},
                  'municipi_empadronament': {'2017-01': 'barcelona'},
                  'percep_prestacions_incompatibles_amb_la_feina': {'2017-01': true},
                  'porta_dos_anys_o_mes_empadronat_a_catalunya': {'2017-01': true},
                  'sexe': {'2017-01': 'dona'},
                  'situacio_laboral': {'2017-01': 'aturat'},
                  'tipus_document_identitat': {'2017-01': 'DNI'},
                  'victima_violencia_de_genere': {},
                  'victima_violencia_domestica': {'2017-01': true}
                }
              }
            }), error => {
              console.log(error);
              console.log(error.response.data);
              console.log(error.config.data, null, 2);
            }
        );
  })
});
