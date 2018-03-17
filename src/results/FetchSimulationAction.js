//@flow
import {serialize as serialize_adult} from "../adults/AdultsReducer";
import type {AdultState, Adult} from "../adults/AdultsTypes";
import type {HouseholdData} from "../household/householdDataTypes";
import type {Rent} from "../rent/rentTypes";
import OpenFiscaAPIClient from "../shared/OpenFiscaAPIClient";
export const FETCH_SIMULATION='fetch_simulation';

/*
 Sample:

 {
     "output_format": "variables",
     "scenarios": [
             {
                "test_case": {
                    "households": [
                        {
                            "parents": ["pare1"],
                            "children": ["infant1"]
                        }
                    ],
                    "persons": [
                        {
                            "id": "pare1",
                            "birth": "1961-01-15",
                            "disposable_income": "7000",
                            "usuari_serveis_socials": 1,
                            "ciutat_empadronament": "Barcelona"
                        },
                        {
                            "id": "infant1",
                            "birth": "2002-01-15",
                            "usuari_serveis_socials": 1,
                            "ciutat_empadronament": "Barcelona"
                        }
                    ]
             },
             "period": "2017-1"
           }
        ],
     "variables": ["ajuda_016_mensual"]
 */

type SimulationData = {
    adults: AdultState,
    rent: Rent,
    householdData: HouseholdData
}

const addPeriod = value => ({'2017-01': value});

function shouldBePartOfFamilyVariables(value) {
    return (value !== "titular_contracte_de_lloguer_id" && value !== "existeix_deute_en_el_pagament_del_lloguer");
}

function buildRequest(simulationData: SimulationData) {
    /*const menorsPersonalData = simulationData.children.reduce((acc, child: Child) =>
    {
        acc[child.id] = {
            data_naixement: addPeriod(child.data_naixement),
            es_usuari_serveis_socials: addPeriod(child.social_services_user),
            ciutat_empadronament: addPeriod(esBarcelona(child.codi_postal_empadronament) ? "Barcelona" : "Altre"),
            codi_postal_empadronament: addPeriod(child.codi_postal_empadronament),
            grau_discapacitat: addPeriod(child.grau_discapacitat),
            es_escolaritzat_entre_P3_i_4rt_ESO: addPeriod(child.es_escolaritzat_entre_P3_i_4rt_ESO),
            utilitza_el_servei_de_menjador: addPeriod(child.utilitza_el_servei_de_menjador),
            te_beca_menjador: addPeriod(child.te_beca_menjador),
            en_acolliment: addPeriod(child.en_acolliment),
            en_guardia_i_custodia: addPeriod(child.en_guardia_i_custodia),
            AE_230_mensual: addPeriod(null),
            EG_233_mensual: addPeriod(null),
            GE_051_01_mensual: addPeriod(null),
            GE_051_02_mensual: addPeriod(null),
            GE_051_03_mensual: addPeriod(null),
            GG_270_mensual: addPeriod(null)
        };
        return acc;
    }, {});*/

    const adultsPersonalData = simulationData.adults.reduce((acc, adult: Adult) =>
    {  acc[adult.id] = {
            data_naixement: addPeriod(adult.data_naixement),
            tipus_document_identitat: addPeriod(adult.tipus_document_identitat),
            situacio_laboral: addPeriod(adult.situacio_laboral),
            data_alta_padro: addPeriod(adult.data_alta_padro),
            grau_discapacitat: addPeriod(adult.grau_discapacitat),
            ingressos_bruts: addPeriod(adult.ingressos_bruts),
            victima_violencia_de_genere: addPeriod(adult.victima_violencia_de_genere),
            es_divorciada_de_familia_reagrupada: addPeriod(adult.es_divorciada_de_familia_reagrupada),
            victima_de_terrorisme: addPeriod(adult.victima_de_terrorisme),
            ha_residit_a_lextranger_els_ultims_24_mesos: addPeriod(adult.ha_residit_a_lextranger_els_ultims_24_mesos),
            resident_a_catalunya_durant_5_anys: addPeriod(adult.resident_a_catalunya_durant_5_anys),
            ingressat_en_centre_penitenciari: addPeriod(adult.ingressat_en_centre_penitenciari),
            es_orfe_dels_dos_progenitors: addPeriod(adult.es_orfe_dels_dos_progenitors),
            ha_treballat_a_l_estranger_6_mesos: addPeriod(adult.ha_treballat_a_l_estranger_6_mesos),
            en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: addPeriod(adult.en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina),
            ha_esgotat_prestacio_de_desocupacio: addPeriod(adult.ha_esgotat_prestacio_de_desocupacio),
            demandant_d_ocupacio_durant_12_mesos: addPeriod(adult.demandant_d_ocupacio_durant_12_mesos),
            durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina: addPeriod(adult.durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina),
            al_corrent_de_les_obligacions_tributaries: addPeriod(adult.al_corrent_de_les_obligacions_tributaries),
            es_escolaritzat_entre_P3_i_4rt_ESO: addPeriod(adult.es_escolaritzat_entre_P3_i_4rt_ESO),
            utilitza_el_servei_de_menjador: addPeriod(adult.utilitza_el_servei_de_menjador),
            te_beca_menjador: addPeriod(adult.te_beca_menjador),
            en_acolliment: addPeriod(adult.en_acolliment),
            en_guardia_i_custodia: addPeriod(adult.en_guardia_i_custodia),
            beneficiari_fons_infancia_2017: addPeriod(adult.beneficiari_fons_infancia_2017),
            AE_230_mensual: addPeriod(null),
            EG_233_mensual: addPeriod(null),
            GE_051_01_mensual: addPeriod(null),
            GE_051_02_mensual: addPeriod(null),
            GE_051_03_mensual: addPeriod(null),
            GG_270_mensual: addPeriod(null)
        };
        return acc
    }, {});
    if ( typeof adultsPersonalData[simulationData.rent.titular_contracte_de_lloguer_id] !== 'undefined' ) {
        adultsPersonalData[simulationData.rent.titular_contracte_de_lloguer_id].titular_contracte_de_lloguer = addPeriod(true);
    }

    return {
            families:{
                familia_1:
                {
                    adults: serialize_adult(simulationData.adults).map((adult) => adult.id),
                    //menors: serialize_child(simulationData.children).map((child) => child.id),
                    ...Object.keys(simulationData.householdData).reduce((acc, value) =>
                        {
                            acc[value] = addPeriod(simulationData.householdData[value]);
                            return acc;
                        }, {}),
                    ...Object.keys(simulationData.rent).reduce((acc, value) =>
                    {
                        if ( shouldBePartOfFamilyVariables(value) ) {
                            acc[value] = addPeriod(simulationData.rent[value]);
                        }
                        return acc;
                    }, {})
                }
            },
            persones: {...adultsPersonalData}
        }
}

export function fetchSimulation(simulationData: SimulationData) {
    let requestBody = buildRequest(simulationData);
    console.log("Request: ",requestBody);
    let client = new OpenFiscaAPIClient();
    return {
        type: FETCH_SIMULATION,
        payload: client.makeSimulation(requestBody)
    };
}