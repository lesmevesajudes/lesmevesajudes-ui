// @flow
import {Map} from "immutable";

export type PersonID = string;

export type PersonRole = 'pares'|'fill'|'altres_adults'|'altres_adults_familiars';

export class Person {
  anys_empadronat_a_barcelona: number = 0;
  cobra_algun_tipus_de_pensio_no_contributiva: boolean = false;
  edat: number = undefined;
  en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: boolean = false;
  es_escolaritzat_entre_P3_i_4rt_ESO: boolean = false;
  es_orfe_dels_dos_progenitors: boolean = false;
  es_una_persona_divorciada: boolean = false;
  gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio: boolean = false;
  grau_discapacitat: number = 0;
  ha_treballat_a_l_estranger_6_mesos: boolean = false;
  ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos: boolean = false;
  id: PersonID;
  ingressos_bruts: number = 0;
  ingressos_per_pnc: number = 0;
  inscrit_com_a_demandant_docupacio: boolean = false;
  is_the_user_in_front_of_the_computer = false;
  membre_de_familia_reagrupada: boolean = false;
  municipi_empadronament: string;
  nom: string;
  percep_prestacions_incompatibles_amb_la_feina: boolean = false;
  porta_dos_anys_o_mes_empadronat_a_catalunya: boolean = false;
  relacio_parentiu: string;
  sexe: string;
  situacio_laboral: string;
  te_algun_grau_de_discapacitat_reconegut: boolean = false;
  tipus_document_identitat: string;
  victima_violencia_de_genere: boolean = false;
  victima_violencia_domestica: boolean = false;
  show_initial_tip: boolean = false;
}

export class HowManyPersonsLiveTogetherType {
  how_many_persons_live_together: number = 0;
}

export type PersonsState = Map<PersonID, Person>;
