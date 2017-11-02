//@flow
import axios from 'axios';
import {serialize as serialize_child} from "../children/ChildrenReducer";
import {serialize as serialize_adult} from "../adults/AdultsReducer";
import type {AdultState, Adult} from "../adults/AdultsTypes";
import type {ChildState, Child} from "../children/ChildrenTypes";
import type {HouseholdData} from "../household/householdDataTypes";
import type {Rent} from "../rent/rentTypes";
import type {Properties} from "../properties/PropertiesTypes";
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
    children: ChildState,
    rent: Rent,
    properties: Properties,
    householdData: HouseholdData
}
function printPeriod(value) {
    return { "2017-01": value}
}
function buildRequest(simulationData: SimulationData) {
    let menors = simulationData.children.reduce((acc, child: Child) =>
    {
        acc[child.id] = {
            data_naixement: printPeriod(child.data_naixement),
            es_usuari_serveis_socials: printPeriod(child.social_services_user),
            ciutat_empadronament: printPeriod(child.ciutat_empadronament),
            grau_discapacitat: printPeriod(child.grau_discapacitat),
            es_escolaritzat: printPeriod(child.es_escolaritzat),
            utilitza_el_servei_de_menjador: printPeriod(child.utilitza_el_servei_de_menjador),
            te_beca_menjador: printPeriod(child.te_beca_menjador),
            en_acolliment: printPeriod(child.en_acolliment),
            en_guardia_i_custodia: printPeriod(child.en_guardia_i_custodia),
            AE_230_mensual: {"2017-01": null},
            EG_233_mensual: {"2017-01": null},
            GE_051_01_mensual: {"2017-01": null},
            GE_051_02_mensual: {"2017-01": null},
            GE_051_03_mensual: {"2017-01": null},
            GG_270_mensual: {"2017-01": null},
            HG_077_mensual: {"2017-01": null}
        };
        return acc;
    }, {});

    let adults = simulationData.adults.reduce((acc, adult: Adult) =>
    {  acc[adult.id] = {
            data_naixement: printPeriod(adult.data_naixement),
            ciutat_empadronament: printPeriod(adult.ciutat_empadronament),
            es_usuari_serveis_socials: printPeriod(adult.social_services_user),
            victima_violencia_de_genere: printPeriod(adult.victima_violencia_de_genere),
            victima_de_terrorisme: printPeriod(adult.victima_de_terrorisme),
            es_victima_de_violencia_masclista: printPeriod(adult.es_victima_de_violencia_masclista),
            te_permis_de_residencia: printPeriod(adult.te_permis_de_residencia),
            es_divorciada_de_familia_reagrupada: printPeriod(adult.es_divorciada_de_familia_reagrupada),
            ha_residit_a_catalunya_durant_24_mesos: printPeriod(adult.ha_residit_a_catalunya_durant_24_mesos),
            resident_a_catalunya_durant_5_anys: printPeriod(adult.resident_a_catalunya_durant_5_anys),
            es_beneficiari_d_una_prestacio_residencial: printPeriod(adult.es_beneficiari_d_una_prestacio_residencial),
            en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: printPeriod(adult.en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina),
            es_empadronat_a_catalunya: printPeriod(adult.es_empadronat_a_catalunya),
            grau_discapacitat: printPeriod(adult.grau_discapacitat),
            ingressat_en_centre_penitenciari: printPeriod(adult.ingressat_en_centre_penitenciari),
            desocupat: printPeriod(adult.desocupat),
            es_orfe_dels_dos_progenitors: printPeriod(adult.es_orfe_dels_dos_progenitors),
            ha_treballat_a_l_estranger_6_mesos: printPeriod(adult.ha_treballat_a_l_estranger_6_mesos),
            no_se_li_ha_concedit_tres_ajudes_rai_anteriors: printPeriod(adult.no_se_li_ha_concedit_tres_ajudes_rai_anteriors),
            no_se_li_ha_concedit_cap_ajuda_rai_en_els_ultims_12_mesos: printPeriod(adult.no_se_li_ha_concedit_cap_ajuda_rai_en_els_ultims_12_mesos),
            treballa_per_compte_propi: printPeriod(adult.treballa_per_compte_propi),
            percep_prestacions_incompatibles_amb_la_feina: printPeriod(adult.percep_prestacions_incompatibles_amb_la_feina),
            ha_esgotat_prestacio_de_desocupacio: printPeriod(adult.ha_esgotat_prestacio_de_desocupacio),
            demandant_d_ocupacio_durant_12_mesos: printPeriod(adult.demandant_d_ocupacio_durant_12_mesos),
            durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina: printPeriod(adult.durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina),
            beneficiari_ajuts_per_violencia_de_genere: printPeriod(adult.beneficiari_ajuts_per_violencia_de_genere),
            al_corrent_de_les_obligacions_tributaries: printPeriod(adult.al_corrent_de_les_obligacions_tributaries),
            ingressos_disponibles: printPeriod(200),
            AE_230_mensual: {"2017-01": null},
            EG_233_mensual: {"2017-01": null},
            GE_051_01_mensual: {"2017-01": null},
            GE_051_02_mensual: {"2017-01": null},
            GE_051_03_mensual: {"2017-01": null},
            GG_270_mensual: {"2017-01": null},
            HG_077_mensual: {"2017-01": null}
        };
        return acc
    }, {});

    return {
            families:{
                familia_1:
                {
                    adults: serialize_adult(simulationData.adults).map((adult) => adult.id),
                    menors: serialize_child(simulationData.children).map((child) => child.id),
                    ...Object.keys(simulationData.householdData).reduce((acc, value) =>
                        {
                            acc[value] = printPeriod(simulationData.householdData[value]);
                            return acc;
                        }, {}),
                    ...Object.keys(simulationData.rent).reduce((acc, value) =>
                    {
                        acc[value] = printPeriod(simulationData.rent[value]);
                        return acc;
                    }, {}),
                    ...Object.keys(simulationData.properties).reduce((acc, value) =>
                    {
                        acc[value] = printPeriod(simulationData.properties[value]);
                        return acc;
                    }, {}),
                    //HG_077_mensual: {"2017-01": null}
                }
            },
            persones: {...adults, ...menors}
        }
}

export default  function fetchSimulation(simulationData: SimulationData, url: string) {
    let requestBody = buildRequest(simulationData);
    console.info(requestBody);
    const request = axios.post(url, requestBody);
    return {
        type: FETCH_SIMULATION,
        payload: request
    };
}