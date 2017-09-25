//@flow
import axios from 'axios';
import {serialize as serialize_child} from "../children/ChildrenReducer";
import {serialize as serialize_adult} from "../adults/AdultsReducer";
import type {AdultState, Adult} from "../adults/AdultsTypes";
import type {ChildState, Child} from "../children/ChildrenTypes";
import type {HouseholdData} from "../household/householdDataTypes";

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
function buildRequest(simulationData: SimulationData) {
    let menors = serialize_child(simulationData.children).map((child: Child) =>
        ({
        id: child.id,
        data_naixement: child.data_naixement,
        es_usuari_serveis_socials: child.social_services_user,
        ciutat_empadronament: child.ciutat_empadronament,
        grau_discapacitat: child.grau_discapacitat,
        es_escolaritzat: child.es_escolaritzat,
        utilitza_el_servei_de_menjador: child.utilitza_el_servei_de_menjador,
        te_beca_menjador: child.te_beca_menjador,
        en_acolliment: child.en_acolliment,
        en_guardia_i_custodia: child.en_guardia_i_custodia
    }));

    let adults = serialize_adult(simulationData.adults).map((adult: Adult) =>
        ({
            id: adult.id,
            data_naixement: adult.data_naixement,
            ciutat_empadronament: adult.ciutat_empadronament,
            es_usuari_serveis_socials: adult.social_services_user,
            victima_violencia_de_genere: adult.victima_violencia_de_genere,
            victima_de_terrorisme: adult.victima_de_terrorisme,
            es_victima_de_violencia_masclista: adult.es_victima_de_violencia_masclista,
            te_permis_de_residencia: adult.te_permis_de_residencia,
            es_divorciada_de_familia_reagrupada: adult.es_divorciada_de_familia_reagrupada,
            ha_residit_a_catalunya_durant_24_mesos: adult.ha_residit_a_catalunya_durant_24_mesos,
            resident_a_catalunya_durant_5_anys: adult.resident_a_catalunya_durant_5_anys,
            es_beneficiari_d_una_prestacio_residencial: adult.es_beneficiari_d_una_prestacio_residencial,
            en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: adult.en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina,
            es_empadronat_a_catalunya: adult.es_empadronat_a_catalunya,
            grau_discapacitat: adult.grau_discapacitat,
            ingressat_en_centre_penitenciari: adult.ingressat_en_centre_penitenciari,
            desocupat: adult.desocupat,
            es_orfe_dels_dos_progenitors: adult.es_orfe_dels_dos_progenitors,
            ha_treballat_a_l_estranger_6_mesos: adult.ha_treballat_a_l_estranger_6_mesos,
            no_se_li_ha_concedit_tres_ajudes_rai_anteriors: adult.no_se_li_ha_concedit_tres_ajudes_rai_anteriors,
            no_se_li_ha_concedit_cap_ajuda_rai_en_els_ultims_12_mesos: adult.no_se_li_ha_concedit_cap_ajuda_rai_en_els_ultims_12_mesos,
            treballa_per_compte_propi: adult.treballa_per_compte_propi,
            percep_prestacions_incompatibles_amb_la_feina: adult.percep_prestacions_incompatibles_amb_la_feina,
            ha_esgotat_prestacio_de_desocupacio: adult.ha_esgotat_prestacio_de_desocupacio,
            demandant_d_ocupacio_durant_12_mesos: adult.demandant_d_ocupacio_durant_12_mesos,
            durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina: adult.durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina,
            beneficiari_ajuts_per_violencia_de_genere: adult.beneficiari_ajuts_per_violencia_de_genere,
            al_corrent_de_les_obligacions_tributaries: adult.al_corrent_de_les_obligacions_tributaries,
            ingressos_disponibles: 200
        }));

    return {
        output_format: "test_case",
        variables: ["AE_230_mensual", "EG_233_mensual", "GE_051_01_mensual", "GE_051_02_mensual", "GE_051_03_mensual", "GG_270_mensual", "HG_077_mensual"],
        scenarios: [
            {
                test_case: {
                    families: [
                        {
                            adults: serialize_adult(simulationData.adults).map((adult) => adult.id),
                            menors: serialize_child(simulationData.children).map((child) => child.id),
                            ...simulationData.householdData
                        }
                    ],
                    persones: [...adults, ...menors ]
                },
                "period": "2017-1"
            }
        ]
    };
}

type SimulationData = {
    adults: AdultState,
    children: ChildState,
    householdData: HouseholdData
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