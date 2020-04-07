// @flow
import {Map} from 'immutable';

export type PersonID = string;

export type PersonRole = 'pares' | 'fill' | 'altres_adults' | 'altres_adults_familiars';
export const rolesThatShowExtraInfo = ['parella', 'fill','fillastre','net','infant_acollit','pare','avi','sogre','germa','cunyat', 'gendre'];
export type Person = {
  anys_empadronat_a_barcelona: number;
  beneficiari_de_prestacio_residencial: boolean;
  cobra_algun_tipus_de_pensio_no_contributiva: boolean;
  edat: ?number;
  en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: boolean;
  es_escolaritzat_entre_P3_i_4rt_ESO: boolean;
  es_orfe_dels_dos_progenitors: boolean;
  es_una_persona_divorciada: boolean;
  gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio: boolean;
  grau_discapacitat: number;
  ha_treballat_a_l_estranger_6_mesos: boolean;
  ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos: boolean;
  id: PersonID;
  ingressos_bruts: number;
  ingressos_per_pnc: number;
  ingressos_bruts_ultims_sis_mesos: number;
  inscrit_com_a_demandant_docupacio: boolean;
  inscrit_com_a_demandant_docupacio_mes_de_12_mesos: boolean;
  is_the_person_in_front_of_the_computer: boolean;
  membre_de_familia_reagrupada: boolean;
  municipi_empadronament: string;
  nom: string;
  percep_prestacions_incompatibles_amb_la_feina: boolean;
  porta_dos_anys_o_mes_empadronat_a_catalunya: boolean;
  relacio_parentiu: 'parella' | 'fill' | 'fillastre' | 'net' | 'infant_acollit' | 'pare' | 'avi' | 'sogre' | 'germa' | 'cunyat' | 'gendre' | 'altres' | 'cap';
  sexe: 'home' | 'dona';
  situacio_laboral: string;
  te_algun_grau_de_discapacitat_reconegut: boolean;
  tipus_document_identitat: string;
  victima_violencia_de_genere: boolean;
  victima_violencia_domestica: boolean;
}

export class HowManyPersonsLiveTogetherType {
  how_many_persons_live_together: number;
}

export type PersonsState = Map<PersonID, Person>;

export const parse = (personesJson: string) => {
	const persona = personesJson[Object.keys(personesJson)[0]];
	
	const dateKey = Object.keys(persona.sexe)[0];
	
	var person = new Object();
	person.id = Object.keys(personesJson)[0];
	person.nom = 'mock name';
	person.sexe = persona.sexe[dateKey];
	person.edat = persona.edat[dateKey];
	person.ingressos_bruts = persona.ingressos_bruts[Object.keys(persona.ingressos_bruts)[0]]; 
	person.ingressos_bruts_ultims_sis_mesos = persona.ingressos_bruts_ultims_sis_mesos[dateKey]; 
//	person.relacio_parentiu = persona.relacio_parentiu[Object.keys(persona.relacio_parentiu)[0]];
	
	person.anys_empadronat_a_barcelona = persona.anys_empadronat_a_barcelona[dateKey];
	person.beneficiari_de_prestacio_residencial = persona.beneficiari_de_prestacio_residencial[dateKey];
//	person.cobra_algun_tipus_de_pensio_no_contributiva;
	person.en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina = persona.en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina[dateKey];
	person.es_escolaritzat_entre_P3_i_4rt_ESO = persona.es_escolaritzat_entre_P3_i_4rt_ESO[dateKey];
	person.es_orfe_dels_dos_progenitors = persona.es_orfe_dels_dos_progenitors[dateKey];
//	person.es_una_persona_divorciada;
//	person.gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio;
	person.grau_discapacitat = persona.grau_discapacitat[dateKey];
	person.ha_treballat_a_l_estranger_6_mesos = persona.ha_treballat_a_l_estranger_6_mesos[dateKey];
	person.ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos = persona.ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos[dateKey];
	person.ingressos_per_pnc = persona.ingressos_per_pnc[dateKey];
	person.inscrit_com_a_demandant_docupacio = persona.inscrit_com_a_demandant_docupacio[dateKey];
	person.inscrit_com_a_demandant_docupacio_mes_de_12_mesos = persona.inscrit_com_a_demandant_docupacio_mes_de_12_mesos[dateKey];
//	person.is_the_person_in_front_of_the_computer;
//	person.membre_de_familia_reagrupada;
	person.municipi_empadronament = persona.municipi_empadronament[dateKey];
	person.percep_prestacions_incompatibles_amb_la_feina = persona.percep_prestacions_incompatibles_amb_la_feina[dateKey];
	person.porta_dos_anys_o_mes_empadronat_a_catalunya = persona.porta_dos_anys_o_mes_empadronat_a_catalunya[dateKey];
//	  relacio_parentiu: 'parella' | 'fill' | 'fillastre' | 'net' | 'infant_acollit' | 'pare' | 'avi' | 'sogre' | 'germa' | 'cunyat' | 'gendre' | 'altres' | 'cap';
	person.relacio_parentiu= 'parella';
	person.situacio_laboral = persona.situacio_laboral[dateKey];
	person.te_algun_grau_de_discapacitat_reconegut = persona.grau_discapacitat.length > 0;
	if (person.te_algun_grau_de_discapacitat_reconegut) {
		person.te_algun_grau_de_discapacitat_reconegut = true;
		person.grau_discapacitat = persona.grau_discapacitat[dateKey];
	}
	person.tipus_document_identitat = persona.tipus_document_identitat[dateKey];
	person.victima_violencia_de_genere = persona.victima_violencia_de_genere[dateKey];
	person.victima_violencia_domestica = persona.victima_violencia_domestica[dateKey];
	
	return person;
};
