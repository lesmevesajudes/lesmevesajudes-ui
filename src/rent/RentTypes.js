// @flow

export type Rent = {
  codi_postal_habitatge: string,
  existeix_deute_en_el_pagament_del_lloguer: boolean,
  existeix_deute_en_el_pagament_de_la_hipoteca: boolean,
  fa_mes_de_12_mesos_que_existeix_el_deute_de_hipoteca: boolean,
  ha_pagat_almenys_3_quotes_del_lloguer: boolean,
  ha_perdut_lhabitatge_en_els_ultims_2_anys: boolean,
  ha_pagat_12_mesos_daquesta_hipoteca: boolean,
  ha_participat_en_un_proces_de_mediacio: boolean,
  import_del_lloguer: number,
  import_de_la_hipoteca: number,
  relacio_habitatge: string,
  relacio_de_parentiu_amb_el_propietari: boolean,
  titular_contracte_lloguer_temps_empadronat: string,
  titular_hipoteca_temps_empadronat: string,
  tinc_alguna_propietat_a_part_habitatge_habitual: boolean,
  tinc_alguna_propietat_a_part_habitatge_habitual_i_disposo_dusdefruit: boolean,
  titular_contracte_de_lloguer_id: string,
  titular_hipoteca_id: string,
};
