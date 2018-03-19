// @flow
import {Map} from 'immutable';

export type AdultId = string;

export class Adult  {
    id: AdultId;
    nom: string;
    rol: string;
    data_naixement: string;
    genere: string;
    tipus_document_identitat: string;
    situacio_laboral: string;
    data_alta_padro: string;
    grau_discapacitat: number = 0;
    ingressos_bruts: number = 0;
    victima_violencia_de_genere: boolean = false;
    es_divorciada_de_familia_reagrupada: boolean = false;
    victima_de_terrorisme: boolean = false;
    ha_residit_a_lextranger_els_ultims_24_mesos: boolean = false;
    resident_a_catalunya_durant_5_anys: boolean = false;
    ingressat_en_centre_penitenciari: boolean = false;
    es_orfe_dels_dos_progenitors: boolean = false;
    ha_treballat_a_l_estranger_6_mesos: boolean = false;
    en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: boolean = false;
    ha_esgotat_prestacio_de_desocupacio: boolean = false;
    demandant_d_ocupacio_durant_12_mesos: boolean = false;
    durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina: boolean = false;
    al_corrent_de_les_obligacions_tributaries: boolean = false;
    es_escolaritzat_entre_P3_i_4rt_ESO: boolean = false;
    en_acolliment: boolean = false;
    en_guardia_i_custodia: boolean = false;
    beneficiari_fons_infancia_2017: boolean = false;
}

export type AdultState = Map<string, Adult>;