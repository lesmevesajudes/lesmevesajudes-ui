import {FETCH_SIMULATION} from './FetchSimulationAction';

function initialState() {
    return {
        response: {
            families: {
            familia_1: {
                adults: [
                    'e4f16155-1bb6-4f9b-8d01-4ec7e2cff021'
                ],
                altres_adults: [],
                codi_postal_habitatge: {
                    '2017-01': '08003'
                },
                domicili_a_barcelona_ciutat: {
                    '2017-01': true
                },
                es_usuari_serveis_socials: {
                    '2017-01': true
                },
                menors: [
                    '4efdb18c-e5a6-42cd-81ec-b81be8467da2'
                ],
                tipus_familia_monoparental: {
                    '2017-01': 'Especial'
                },
                tipus_familia_nombrosa: {
                    '2017-01': 'No'
                }
            }
        },
        persones: {
            '4efdb18c-e5a6-42cd-81ec-b81be8467da2': {
                AE_230_01_mensual: {
                    '2017-01': 900
                },
                AE_230_mensual: {
                    '2017-01': 50
                },
                EG_233_mensual: {
                    '2017-01': 0
                },
                al_corrent_de_les_obligacions_tributaries: {},
                data_alta_padro: {
                    '2017-01': '2010-10-10'
                },
                data_naixement: {
                    '2017-01': '2010-10-10'
                },
                demandant_d_ocupacio_durant_12_mesos: {},
                durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina: {},
                en_acolliment: {
                    '2017-01': false
                },
                en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: {},
                es_divorciada_de_familia_reagrupada: {},
                es_escolaritzat_entre_P3_i_4rt_ESO: {},
                es_orfe_dels_dos_progenitors: {},
                grau_discapacitat: {},
                ha_esgotat_prestacio_de_desocupacio: {},
                ha_residit_a_lextranger_els_ultims_24_mesos: {},
                ha_treballat_a_l_estranger_6_mesos: {},
                ingressat_en_centre_penitenciari: {},
                ingressos_bruts: {},
                resident_a_catalunya_durant_5_anys: {},
                situacio_laboral: {},
                tipus_custodia: {
                    '2017-01': 'compartida'
                },
                tipus_document_identitat: {
                    '2017-01': 'DNI'
                },
                victima_de_terrorisme: {},
                victima_violencia_de_genere: {}
            },
            'e4f16155-1bb6-4f9b-8d01-4ec7e2cff021': {
                AE_230_01_mensual: {
                    '2017-01': 0
                },
                AE_230_mensual: {
                    '2017-01': 0
                },
                EG_233_mensual: {
                    '2017-01': 0
                },
                al_corrent_de_les_obligacions_tributaries: {},
                data_alta_padro: {
                    '2017-01': '2010-10-29'
                },
                data_naixement: {
                    '2017-01': '1978-01-15'
                },
                demandant_d_ocupacio_durant_12_mesos: {},
                durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina: {},
                en_acolliment: {
                    '2017-01': false
                },
                en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: {},
                es_divorciada_de_familia_reagrupada: {},
                es_escolaritzat_entre_P3_i_4rt_ESO: {},
                es_orfe_dels_dos_progenitors: {},
                grau_discapacitat: {},
                ha_esgotat_prestacio_de_desocupacio: {},
                ha_residit_a_lextranger_els_ultims_24_mesos: {},
                ha_treballat_a_l_estranger_6_mesos: {},
                ingressat_en_centre_penitenciari: {},
                ingressos_bruts: {},
                resident_a_catalunya_durant_5_anys: {},
                situacio_laboral: {
                    '2017-01': 'treball_compte_alie'
                },
                tipus_custodia: {
                    '2017-01': 'cap'
                },
                tipus_document_identitat: {
                    '2017-01': 'DNI'
                },
                victima_de_terrorisme: {},
                victima_violencia_de_genere: {}
            }
        }
    },
        isRequestDone: true
    };
}
//
export default function (state = initialState(), action) {
    switch (action.type) {
        case FETCH_SIMULATION:
            console.log("Response: ",action);
            return {response: (action.error)?action.payload:action.payload.data, isError: action.error, isRequestDone: true};
        default:
            return state;
    }
}
