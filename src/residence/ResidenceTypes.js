// @flow

export type ResidenceData = {
  codi_postal_habitatge: string,
  demarcacio_de_lhabitatge: string,
  es_ocupant_dun_habitatge_gestionat_per_lagencia_de_lhabitatge: boolean,
  existeix_deute_en_el_pagament_del_lloguer: boolean,
  existeix_deute_en_el_pagament_de_la_hipoteca: boolean,
  ha_pagat_almenys_3_quotes_del_lloguer: boolean,
  ha_perdut_lhabitatge_en_els_ultims_2_anys: boolean,
  ha_rebut_una_notificacio_de_desnonament: boolean,
  ha_rebut_oferta_per_accedir_a_habitatge_i_lha_rebutjada: boolean,
  ha_pagat_12_mesos_daquesta_hipoteca: boolean,
  import_del_lloguer: number,
  import_deute_en_el_pagament_del_lloguer: number,
  import_de_la_hipoteca: number,
  import_deute_en_el_pagament_hipoteca: number,
  relacio_habitatge: string,
  relacio_de_parentiu_amb_el_propietari: boolean,
  tinc_alguna_propietat_a_part_habitatge_habitual: boolean,
  tinc_alguna_propietat_a_part_habitatge_habitual_i_disposo_dusdefruit: boolean,
  titular_contracte_lloguer_temps_empadronat: string,
  titular_hipoteca_temps_empadronat: string,
  titular_contracte_de_lloguer_id: string,
  titular_hipoteca_id: string,
  titular_hipoteca_temps_empadronat: string,
  zona_de_lhabitatge: string
};

export const parse = (residenceJson: string) => {
	const residencia = residenceJson[Object.keys(residenceJson)[0]];
	
	const dateKey = Object.keys(residencia.codi_postal_habitatge)[0];
	
	var residence = new Object();
	residence.id = Object.keys(residenceJson)[0];
//	person.victima_violencia_domestica = persona.victima_violencia_domestica[dateKey];
	
	residence.codi_postal_habitatge =  residencia.codi_postal_habitatge[dateKey];
	residence.demarcacio_de_lhabitatge = residencia.demarcacio_de_lhabitatge[dateKey];
//	  residence.es_ocupant_dun_habitatge_gestionat_per_lagencia_de_lhabitatge;
	residence.existeix_deute_en_el_pagament_del_lloguer = residencia.existeix_deute_en_el_pagament_del_lloguer[dateKey];
	residence.existeix_deute_en_el_pagament_de_la_hipoteca = residencia.existeix_deute_en_el_pagament_de_la_hipoteca[dateKey];
	residence.ha_pagat_almenys_3_quotes_del_lloguer = residencia.ha_pagat_almenys_3_quotes_del_lloguer[dateKey];
	residence.ha_perdut_lhabitatge_en_els_ultims_2_anys = residencia.ha_perdut_lhabitatge_en_els_ultims_2_anys[dateKey];
	residence.ha_rebut_una_notificacio_de_desnonament = residencia.ha_rebut_una_notificacio_de_desnonament[dateKey];
//	  residence.ha_rebut_oferta_per_accedir_a_habitatge_i_lha_rebutjada,
	residence.ha_pagat_12_mesos_daquesta_hipoteca = residencia.ha_pagat_12_mesos_daquesta_hipoteca[dateKey];
	residence.import_del_lloguer = residencia.import_del_lloguer[dateKey];
	residence.import_deute_en_el_pagament_del_lloguer = residencia.import_deute_en_el_pagament_del_lloguer[dateKey];
	residence.import_de_la_hipoteca = residencia.import_de_la_hipoteca[dateKey];
	residence.import_deute_en_el_pagament_hipoteca = residencia.import_deute_en_el_pagament_hipoteca[dateKey];
//	  residence.relacio_habitatge;
	residence.relacio_de_parentiu_amb_el_propietari = residencia.relacio_de_parentiu_amb_el_propietari[dateKey];
//	  residence.tinc_alguna_propietat_a_part_habitatge_habitual;
	residence.tinc_alguna_propietat_a_part_habitatge_habitual_i_disposo_dusdefruit = residencia.tinc_alguna_propietat_a_part_habitatge_habitual_i_disposo_dusdefruit[dateKey];
//	  residence.titular_contracte_lloguer_temps_empadronat;
//	  residence.titular_hipoteca_temps_empadronat;
//	  residence.titular_contracte_de_lloguer_id;
//	  residence.titular_hipoteca_id;
//	  residence.titular_hipoteca_temps_empadronat;
	residence.zona_de_lhabitatge = residencia.zona_de_lhabitatge[dateKey];
	
	if (residence.import_de_la_hipoteca) {
		residence.relacio_habitatge = 'propietari_hipoteca'; 
	} else if (residence.import_del_lloguer) {
		residence.relacio_habitatge = 'llogater';
	} else {
		residence.relacio_habitatge = 'altres';
	}
	
	return residence;
};
