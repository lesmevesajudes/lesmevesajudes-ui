// @flow
export type AdultId = string;

export type Adult = {
    id: AdultId;
    nom: string;
    data_naixement: string;
    ciutat_empadronament: string;
    social_services_user: boolean;
    ingressat_a_centre_penitenciari: boolean;
    desocupat: boolean;
    ha_treballat_a_l_estranger_6_mesos: boolean;
    no_se_li_ha_concedit_cap_ajuda_rai_en_els_ultims_12_mesos: boolean;
    no_se_li_ha_concedit_tres_ajudes_rai_anteriors: boolean;
    treballa_per_compte_propi: boolean;
    percep_prestacions_incompatibles_amb_la_feina: boolean;
}
