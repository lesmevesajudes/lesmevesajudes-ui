//@flow
import {serialize as serialize_adult} from '../adults/AdultsReducer';
import type {AdultState, Adult} from '../adults/AdultsTypes';
import type {HouseholdData} from '../household/householdDataTypes';
import type {Rent} from '../rent/rentTypes';
import OpenFiscaAPIClient from '../shared/OpenFiscaAPIClient';
import {esFill, esInfantAcollit, esMonoparental, esSustentador, tipusCustodia} from "../shared/selectorUtils";
export const FETCH_SIMULATION='fetch_simulation';

type SimulationData = {
    adults: AdultState,
    rent: Rent,
    household: HouseholdData
}

const addPeriod = value => ({'2017-01': value});

function shouldBePartOfFamilyVariables(value) {
    return (value !== 'titular_contracte_de_lloguer_id'
        && value !== 'existeix_deute_en_el_pagament_del_lloguer'
        && value !== 'tinc_alguna_propietat_a_part_habitatge_habitual');
}

function es_barcelona_ciutat(codi_postal: number) {
    const codis_postals_barcelona_ciutat = [8001, 8002, 8003, 8004, 8005, 8006, 8007, 8008, 8009, 8010, 8011, 8012,
        8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, 8023, 8024,
        8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8033, 8034, 8035, 8036,
        8037, 8038, 8039, 8040, 8041, 8042, 8075, 8196, 8830, 8903, 8904, 8930,
        8960];
    return codis_postals_barcelona_ciutat.indexOf(codi_postal) !== -1;
}

function buildRequest(simulationData: SimulationData) {
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
            en_acolliment: addPeriod(esInfantAcollit(adult)),
            tipus_custodia: addPeriod(tipusCustodia(adult, simulationData.household, esMonoparental(simulationData.adults))),
            AE_230_mensual: addPeriod(null),
            EG_233_mensual: addPeriod(null),
            /*GE_051_01_mensual: addPeriod(null),
            GE_051_02_mensual: addPeriod(null),
            GE_051_03_mensual: addPeriod(null),
            GG_270_mensual: addPeriod(null)*/
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
                    adults: serialize_adult(simulationData.adults).filter((persona) => esSustentador(persona)).map((persona) => persona.id),
                    menors: serialize_adult(simulationData.adults).filter((persona) => esFill(persona)).map((persona) => persona.id),
                    altres_adults:serialize_adult(simulationData.adults).filter((persona) => ! esFill(persona) && persona.rol !== 'pares').map((persona) => persona.id),
                    ...Object.keys(simulationData.rent).reduce((acc, value) =>
                    {
                        if ( shouldBePartOfFamilyVariables(value) ) {
                            acc[value] = addPeriod(simulationData.rent[value]);
                        }
                        return acc;
                    }, {}),
                    tipus_familia_monoparental: addPeriod(simulationData.household.tipus_familia_monoparental),
                    tipus_familia_nombrosa: addPeriod(simulationData.household.tipus_familia_nombrosa),
                    es_usuari_serveis_socials: addPeriod(simulationData.household.es_usuari_serveis_socials),
                    domicili_a_barcelona_ciutat: addPeriod(es_barcelona_ciutat(parseInt(simulationData.rent['codi_postal_habitatge'], 10)))
                }
            },
            persones: {...adultsPersonalData}
        }
}

export function fetchSimulation(simulationData: SimulationData) {
    let requestBody = buildRequest(simulationData);
    console.log('Request: ',requestBody);
    let client = new OpenFiscaAPIClient();
    return {
        type: FETCH_SIMULATION,
        payload: client.makeSimulation(requestBody)
    };
}