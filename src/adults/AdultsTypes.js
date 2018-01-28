// @flow
import {Map} from 'immutable';

export type AdultId = string;

export class Adult  {
    id: AdultId;
    nom: string;
    sexe: string;
    nacionalitat: string;
    situacio_laboral: string;
    data_naixement: string;
    codi_postal_empadronament: string;
    social_services_user: boolean = false;
    victima_violencia_de_genere: boolean = false;
    victima_de_terrorisme: boolean = false;
    es_victima_de_violencia_masclista: boolean = false;
    te_permis_de_residencia: boolean = false;
    es_divorciada_de_familia_reagrupada: boolean = false;
    ha_residit_a_lextranger_els_ultims_24_mesos: boolean = false;
    ha_residit_a_lextranger_36_mesos_continuats: boolean = false;
    ha_residit_a_lextranger_60_mesos_discontinuats: boolean = false;
    resident_a_catalunya_durant_5_anys: boolean = false;
    en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: boolean = false;
    grau_discapacitat: number = 0;
    ingressat_en_centre_penitenciari: boolean = false;
    es_orfe_dels_dos_progenitors: boolean = false;
    ha_treballat_a_l_estranger_6_mesos: boolean = false;
    ha_esgotat_prestacio_de_desocupacio: boolean = false;
    demandant_d_ocupacio_durant_12_mesos: boolean = false;
    durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina: boolean = false;
    al_corrent_de_les_obligacions_tributaries: boolean = false;

}

export type AdultState = Map<string, Adult>;