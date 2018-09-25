import React from 'react';
import PersonsReducer, {initPersonState} from '../../persons/PersonsReducer';
import {
  aMan,
  aPerson,
  aWoman,
  isPartner,
  isSon,
  isThePersonInFromOfTheComputer,
  ofAge
} from '../../../test/fixtures/Persons';
import {addPerson} from '../../persons/PersonsActions';
import {buildRequest} from '../../results/FetchSimulationAction';
import OpenFiscaAPIClient from './OpenFiscaAPIClient';
import {API_URL} from "../../config";

describe('OpenFiscaAPIClient', () => {
  it('Can make a simulation', () => {
    const maria = isThePersonInFromOfTheComputer(ofAge(45, aWoman(aPerson({id: '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1'}))));
    const pere = isPartner(ofAge(45, aMan(aPerson({id: '42c5f2a9-4f60-47ad-87cd-63a08b19b360'}))));
    const josep = isSon(ofAge(12, aMan(aPerson({id: 'd2c2c1f0-3399-4143-a2c2-8c3263b493f3'}))));
    const miquel = isSon(ofAge(12, aMan(aPerson({id: '6bbc763b-03f3-4114-a4c7-df49c50108d4'}))));

    const state = {
      persons: [addPerson(maria), addPerson(pere), addPerson(josep), addPerson(miquel)].reduce(PersonsReducer, initPersonState()),
      family: {
        custodies: {
          'd2c2c1f0-3399-4143-a2c2-8c3263b493f3': {
            primer: maria.id,
            segon: pere.id
          },
          '6bbc763b-03f3-4114-a4c7-df49c50108d4': {
            primer: maria.id,
            segon: pere.id
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
        titular_contracte_de_lloguer_id: maria.id,
        titular_contracte_lloguer_temps_empadronat: 'nou_mesos_o_mes',
        import_del_lloguer: '700'
      }
    };
    let client = new OpenFiscaAPIClient(API_URL);
    return client.makeSimulation(state)
        .then(result => expect(result.data).toEqual({
              "families":
                  {
                    "23c1a8ca-8c2d-46bf-8469-ad1e1d5190c142c5f2a9-4f60-47ad-87cd-63a08b19b360":
                        {
                          "altres_familiars": [],
                          "altres_persones": [],
                          "es_usuari_serveis_socials":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "menors":
                              ["d2c2c1f0-3399-4143-a2c2-8c3263b493f3", "6bbc763b-03f3-4114-a4c7-df49c50108d4"],
                          "sustentadors": [],
                          "sustentadors_i_custodia":
                              ["23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1", "42c5f2a9-4f60-47ad-87cd-63a08b19b360"],
                          "tipus_custodia":
                              {
                                "2017-01":
                                    "total"
                              }
                          ,
                          "tipus_familia_monoparental":
                              {
                                "2017-01":
                                    "general"
                              }
                        }
                  }
              ,
              "families_fins_a_segon_grau":
                  {
                    "8d17515f-c442-48b5-8823-3af1f498a293":
                        {
                          "familiars":
                              ["23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1", "42c5f2a9-4f60-47ad-87cd-63a08b19b360", "d2c2c1f0-3399-4143-a2c2-8c3263b493f3", "6bbc763b-03f3-4114-a4c7-df49c50108d4"],
                          "no_familiars": []
                        }
                  }
              ,
              "persones":
                  {
                    "23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1":
                        {
                          "AE_230_01_mensual":
                              {
                                "2017-01":
                                    900
                              }
                          ,
                          "AE_230_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "EG_233_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_00_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_01_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_02_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_03_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GG_270_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "anys_empadronat_a_barcelona":
                              {
                                "2017-01":
                                    "3"
                              }
                          ,
                          "beneficiari_de_prestacio_residencial":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "edat":
                              {
                                "2017-01":
                                    45
                              }
                          ,
                          "en_acolliment":
                              {
                                "2017-01":
                                    false
                              }
                          ,
                          "en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina":
                              {}
                          ,
                          "es_divorciada_de_familia_reagrupada":
                              {}
                          ,
                          "es_escolaritzat_entre_P3_i_4rt_ESO":
                              {}
                          ,
                          "es_orfe_dels_dos_progenitors":
                              {}
                          ,
                          "grau_discapacitat":
                              {
                                "2017-01":
                                    "33"
                              }
                          ,
                          "ha_esgotat_prestacio_de_desocupacio":
                              {
                                "2017-01":
                                    false
                              }
                          ,
                          "ha_treballat_a_l_estranger_6_mesos":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "ingressos_bruts":
                              {
                                "2016":
                                    "3000"
                              }
                          ,
                          "ingressos_bruts_ultims_sis_mesos":
                              {}
                          ,
                          "ingressos_per_pnc":
                              {
                                "2016":
                                    "1000"
                              }
                          ,
                          "inscrit_com_a_demandant_docupacio":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "inscrit_com_a_demandant_docupacio_mes_de_12_mesos":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "municipi_empadronament":
                              {
                                "2017-01":
                                    "barcelona"
                              }
                          ,
                          "percep_prestacions_incompatibles_amb_la_feina":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "porta_dos_anys_o_mes_empadronat_a_catalunya":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "sexe":
                              {
                                "2017-01":
                                    "dona"
                              }
                          ,
                          "situacio_laboral":
                              {
                                "2017-01":
                                    "aturat"
                              }
                          ,
                          "temps_empadronat_habitatge_actual":
                              {
                                "2017-01":
                                    "nou_mesos_o_mes"
                              }
                          ,
                          "tipus_document_identitat":
                              {
                                "2017-01":
                                    "DNI"
                              }
                          ,
                          "titular_contracte_de_lloguer":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "victima_violencia_de_genere":
                              {}
                          ,
                          "victima_violencia_domestica":
                              {
                                "2017-01":
                                    true
                              }
                        }
                    ,
                    "42c5f2a9-4f60-47ad-87cd-63a08b19b360":
                        {
                          "AE_230_01_mensual":
                              {
                                "2017-01":
                                    900
                              }
                          ,
                          "AE_230_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "EG_233_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_00_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_01_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_02_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_03_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GG_270_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "anys_empadronat_a_barcelona":
                              {
                                "2017-01":
                                    "3"
                              }
                          ,
                          "beneficiari_de_prestacio_residencial":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "edat":
                              {
                                "2017-01":
                                    45
                              }
                          ,
                          "en_acolliment":
                              {
                                "2017-01":
                                    false
                              }
                          ,
                          "en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina":
                              {}
                          ,
                          "es_divorciada_de_familia_reagrupada":
                              {}
                          ,
                          "es_escolaritzat_entre_P3_i_4rt_ESO":
                              {}
                          ,
                          "es_orfe_dels_dos_progenitors":
                              {}
                          ,
                          "grau_discapacitat":
                              {
                                "2017-01":
                                    "33"
                              }
                          ,
                          "ha_esgotat_prestacio_de_desocupacio":
                              {
                                "2017-01":
                                    false
                              }
                          ,
                          "ha_treballat_a_l_estranger_6_mesos":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "ingressos_bruts":
                              {
                                "2016":
                                    "3000"
                              }
                          ,
                          "ingressos_bruts_ultims_sis_mesos":
                              {}
                          ,
                          "ingressos_per_pnc":
                              {
                                "2016":
                                    "1000"
                              }
                          ,
                          "inscrit_com_a_demandant_docupacio":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "inscrit_com_a_demandant_docupacio_mes_de_12_mesos":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "municipi_empadronament":
                              {
                                "2017-01":
                                    "barcelona"
                              }
                          ,
                          "percep_prestacions_incompatibles_amb_la_feina":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "porta_dos_anys_o_mes_empadronat_a_catalunya":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "sexe":
                              {
                                "2017-01":
                                    "home"
                              }
                          ,
                          "situacio_laboral":
                              {
                                "2017-01":
                                    "aturat"
                              }
                          ,
                          "tipus_document_identitat":
                              {
                                "2017-01":
                                    "DNI"
                              }
                          ,
                          "victima_violencia_de_genere":
                              {}
                          ,
                          "victima_violencia_domestica":
                              {
                                "2017-01":
                                    true
                              }
                        }
                    ,
                    "6bbc763b-03f3-4114-a4c7-df49c50108d4":
                        {
                          "AE_230_01_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "AE_230_mensual":
                              {
                                "2017-01":
                                    75
                              }
                          ,
                          "EG_233_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_00_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_01_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_02_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_03_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GG_270_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "anys_empadronat_a_barcelona":
                              {
                                "2017-01":
                                    "3"
                              }
                          ,
                          "beneficiari_de_prestacio_residencial":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "edat":
                              {
                                "2017-01":
                                    12
                              }
                          ,
                          "en_acolliment":
                              {
                                "2017-01":
                                    false
                              }
                          ,
                          "en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina":
                              {}
                          ,
                          "es_divorciada_de_familia_reagrupada":
                              {}
                          ,
                          "es_escolaritzat_entre_P3_i_4rt_ESO":
                              {}
                          ,
                          "es_orfe_dels_dos_progenitors":
                              {}
                          ,
                          "grau_discapacitat":
                              {
                                "2017-01":
                                    "33"
                              }
                          ,
                          "ha_esgotat_prestacio_de_desocupacio":
                              {
                                "2017-01":
                                    false
                              }
                          ,
                          "ha_treballat_a_l_estranger_6_mesos":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "ingressos_bruts":
                              {
                                "2016":
                                    "3000"
                              }
                          ,
                          "ingressos_bruts_ultims_sis_mesos":
                              {}
                          ,
                          "ingressos_per_pnc":
                              {
                                "2016":
                                    "1000"
                              }
                          ,
                          "inscrit_com_a_demandant_docupacio":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "inscrit_com_a_demandant_docupacio_mes_de_12_mesos":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "municipi_empadronament":
                              {
                                "2017-01":
                                    "barcelona"
                              }
                          ,
                          "ordre_del_menor":
                              {
                                "2017-01":
                                    1
                              }
                          ,
                          "percep_prestacions_incompatibles_amb_la_feina":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "porta_dos_anys_o_mes_empadronat_a_catalunya":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "sexe":
                              {
                                "2017-01":
                                    "home"
                              }
                          ,
                          "situacio_laboral":
                              {
                                "2017-01":
                                    "aturat"
                              }
                          ,
                          "tipus_document_identitat":
                              {
                                "2017-01":
                                    "DNI"
                              }
                          ,
                          "victima_violencia_de_genere":
                              {}
                          ,
                          "victima_violencia_domestica":
                              {
                                "2017-01":
                                    true
                              }
                        }
                    ,
                    "d2c2c1f0-3399-4143-a2c2-8c3263b493f3":
                        {
                          "AE_230_01_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "AE_230_mensual":
                              {
                                "2017-01":
                                    100
                              }
                          ,
                          "EG_233_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_00_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_01_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_02_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GE_051_03_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "GG_270_mensual":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "anys_empadronat_a_barcelona":
                              {
                                "2017-01":
                                    "3"
                              }
                          ,
                          "beneficiari_de_prestacio_residencial":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "edat":
                              {
                                "2017-01":
                                    12
                              }
                          ,
                          "en_acolliment":
                              {
                                "2017-01":
                                    false
                              }
                          ,
                          "en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina":
                              {}
                          ,
                          "es_divorciada_de_familia_reagrupada":
                              {}
                          ,
                          "es_escolaritzat_entre_P3_i_4rt_ESO":
                              {}
                          ,
                          "es_orfe_dels_dos_progenitors":
                              {}
                          ,
                          "grau_discapacitat":
                              {
                                "2017-01":
                                    "33"
                              }
                          ,
                          "ha_esgotat_prestacio_de_desocupacio":
                              {
                                "2017-01":
                                    false
                              }
                          ,
                          "ha_treballat_a_l_estranger_6_mesos":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "ingressos_bruts":
                              {
                                "2016":
                                    "3000"
                              }
                          ,
                          "ingressos_bruts_ultims_sis_mesos":
                              {}
                          ,
                          "ingressos_per_pnc":
                              {
                                "2016":
                                    "1000"
                              }
                          ,
                          "inscrit_com_a_demandant_docupacio":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "inscrit_com_a_demandant_docupacio_mes_de_12_mesos":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "municipi_empadronament":
                              {
                                "2017-01":
                                    "barcelona"
                              }
                          ,
                          "ordre_del_menor":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "percep_prestacions_incompatibles_amb_la_feina":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "porta_dos_anys_o_mes_empadronat_a_catalunya":
                              {
                                "2017-01":
                                    true
                              }
                          ,
                          "sexe":
                              {
                                "2017-01":
                                    "home"
                              }
                          ,
                          "situacio_laboral":
                              {
                                "2017-01":
                                    "aturat"
                              }
                          ,
                          "tipus_document_identitat":
                              {
                                "2017-01":
                                    "DNI"
                              }
                          ,
                          "victima_violencia_de_genere":
                              {}
                          ,
                          "victima_violencia_domestica":
                              {
                                "2017-01":
                                    true
                              }
                        }
                  }
              ,
              "unitats_de_convivencia":
                  {
                    "19fad1aa-e742-43a2-8a48-f30e6281e101":
                        {
                          "HA_001":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "HA_002":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "HA_003":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "HA_004":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "HA_005":
                              {
                                "2017-01":
                                    0
                              }
                          ,
                          "codi_postal_habitatge":
                              {
                                "2017-01":
                                    "08003"
                              }
                          ,
                          "demarcacio_de_lhabitatge":
                              {
                                "2017-01":
                                    "barcelona_ciutat"
                              }
                          ,
                          "existeix_deute_en_el_pagament_de_la_hipoteca":
                              {}
                          ,
                          "existeix_deute_en_el_pagament_del_lloguer":
                              {}
                          ,
                          "ha_pagat_12_mesos_daquesta_hipoteca":
                              {}
                          ,
                          "ha_pagat_almenys_3_quotes_del_lloguer":
                              {}
                          ,
                          "ha_participat_en_un_proces_de_mediacio":
                              {}
                          ,
                          "ha_perdut_lhabitatge_en_els_ultims_2_anys":
                              {}
                          ,
                          "import_de_la_hipoteca":
                              {}
                          ,
                          "import_del_lloguer":
                              {
                                "2017-01":
                                    "700"
                              }
                          ,
                          "import_deute_en_el_pagament_del_lloguer":
                              {}
                          ,
                          "import_deute_en_el_pagament_hipoteca":
                              {}
                          ,
                          "persones_que_conviuen":
                              ["23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1", "42c5f2a9-4f60-47ad-87cd-63a08b19b360", "d2c2c1f0-3399-4143-a2c2-8c3263b493f3", "6bbc763b-03f3-4114-a4c7-df49c50108d4"],
                          "relacio_de_parentiu_amb_el_propietari":
                              {}
                          ,
                          "tinc_alguna_propietat_a_part_habitatge_habitual_i_disposo_dusdefruit":
                              {}
                          ,
                          "zona_de_lhabitatge":
                              {
                                "2017-01":
                                    "zona_a"
                              }
                        }
                  }

            }),
            error => {
              let cache = [];
              console.log("error: ", JSON.stringify(error, function (key, value) {
                if (typeof value === 'object' && value !== null) {
                  if (cache.indexOf(value) !== -1) {
                    // Duplicate reference found
                    try {
                      // If this value does not reference a parent it can be deduped
                      return JSON.parse(JSON.stringify(value));
                    } catch (error) {
                      // discard key if value cannot be deduped
                      return;
                    }
                  }
                  // Store value in our collection
                  cache.push(value);
                }
                return value;
              }));
              console.log("response data: ", error.response.data);
              console.log("config data: ", error.config.data, null, 2);
            }
        )
        ;
  })
})
;
