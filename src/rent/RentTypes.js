// @flow

export type Rent = {
    relacio_habitatge: string,
    codi_postal_empadronament: string,
    titular_contracte_de_lloguer_id: string,
    data_signatura_contracte_arrendament: string,
    relacio_de_parentiu_amb_el_propietari: boolean,
    existeix_deute_en_el_pagament_del_lloguer: boolean,
    import_del_deute_amb_el_propietari: number,
    lloguer_domiciliat: boolean,
    import_del_lloguer: number,
    tinc_alguna_propietat: boolean
}
