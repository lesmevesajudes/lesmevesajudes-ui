import uuid from 'uuid/v4';

export const aPerson = (props) => ({
  ...props, ...{
    anys_empadronat_a_barcelona: '3',
    beneficiari_de_prestacio_residencial: true,
    cobra_algun_tipus_de_pensio_no_contributiva: true,
    edat: '45',
    gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio: true,
    grau_discapacitat: '33',
    ha_treballat_a_l_estranger_6_mesos: true,
    ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos: true,
    id: uuid(),
    ingressos_bruts: '3000',
    ingressos_per_pnc: '1000',
    inscrit_com_a_demandant_docupacio: true,
    inscrit_com_a_demandant_docupacio_mes_de_12_mesos: true,
    is_the_person_in_front_of_the_computer: false,
    municipi_empadronament: 'barcelona',
    nom: 'MariaB',
    percep_prestacions_incompatibles_amb_la_feina: true,
    porta_dos_anys_o_mes_empadronat_a_catalunya: true,
    sexe: 'dona',
    situacio_laboral: 'aturat',
    tipus_document_identitat: 'DNI',
    victima_violencia_domestica: true,
    te_algun_grau_de_discapacitat_reconegut: true
  }
});

export const aWoman = (props) => ({sexe: 'dona', ...props});
export const aMan = (props) => ({sexe: 'home', ...props});
export const ofAge = (age, props) => ({edat: age, ...props});
export const isThePersonInFromOfTheComputer = (props) => ({is_the_person_in_front_of_the_computer: true, ...props});
export const isPartner = (props) => ({relacio_parentiu: '', ...props});
