// @flow
import {Map} from 'immutable';

export type PersonID = string;

export type PersonRole = 'pares' | 'fill' | 'altres_adults' | 'altres_adults_familiars';

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
  inscrit_com_a_demandant_docupacio: boolean;
  is_the_person_in_front_of_the_computer: boolean;
  membre_de_familia_reagrupada: boolean;
  municipi_empadronament: string;
  nom: string;
  percep_prestacions_incompatibles_amb_la_feina: boolean;
  porta_dos_anys_o_mes_empadronat_a_catalunya: boolean;
  relacio_parentiu: 'parella' | 'fill' | 'fillastre' | 'net' | 'infant_acollit' | 'pare' | 'avi' | 'sogre' | 'germa' | 'cunyat' | 'gendre' | 'altres' | 'cap';
  sexe: string;
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
