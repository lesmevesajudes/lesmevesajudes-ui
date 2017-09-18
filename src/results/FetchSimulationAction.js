import axios from 'axios';
import {serialize} from "../children/ChildrenReducer";

export const FETCH_SIMULATION='fetch_simulation';

const CALCULATE_URL ='http://localhost:2000/api/1/calculate';

/*
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
function buildRequest(simulationData) {
    let menors = serialize(simulationData.children).map((child) =>
        ({
        id: child.id,
        data_naixement: child.data_naixement,
        es_usuari_serveis_socials: child.social_services_user,
        ciutat_empadronament: child.ciutat_empadronament,
        grau_discapacitat: child.grau_discapacitat,
        es_escolaritzat: child.es_escolaritzat,
        utilitza_el_servei_de_menjador: child.utilitza_el_servei_de_menjador,
        te_beca_menjador: child.te_beca_menjador,
        en_acolliment: child.en_acolliment
    }));

    let adults = serialize(simulationData.adults).map((adult) =>
        ({
            id: adult.id,
            data_naixement: adult.data_naixement,
            ingressos_disponibles: 200,
            es_usuari_serveis_socials: adult.social_services_user,
            ciutat_empadronament: adult.ciutat_empadronament,
            ingressat_en_centre_penitenciari: adult.ingressat_a_centre_penitenciari,
            desocupat: adult.desocupat,
            ha_treballat_a_l_estranger_6_mesos: adult.ha_treballat_a_l_estranger_6_mesos,
            no_se_li_ha_concedit_cap_ajuda_rai_en_els_ultims_12_mesos: adult.no_se_li_ha_concedit_cap_ajuda_rai_en_els_ultims_12_mesos,
            no_se_li_ha_concedit_tres_ajudes_rai_anteriors: adult.no_se_li_ha_concedit_tres_ajudes_rai_anteriors,
            treballa_per_compte_propi: adult.treballa_per_compte_propi,
            percep_prestacions_incompatibles_amb_la_feina: adult.percep_prestacions_incompatibles_amb_la_feina
        }));
    return {
        output_format: "variables",
        variables: ["AE_230_mensual"],
        scenarios: [
            {
                test_case: {
                    families: [
                        {
                            adults: serialize(simulationData.adults).map((adult) => adult.id),
                            menors: serialize(simulationData.children).map((child) => child.id)
                        }
                    ],
                    persones: [...adults, ...menors ]
                },
                "period": "2017-1"
            }
        ]
    };
}
export default  function fetchSimulation(simulationData) {
    let requestBody = buildRequest(simulationData);
    const request = axios.post(`${CALCULATE_URL}`,requestBody);
    return {
        type: FETCH_SIMULATION,
        payload: request
    };
}