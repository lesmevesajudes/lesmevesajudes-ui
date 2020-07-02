import {v4 as uuidv4} from 'uuid';

export const aPerson = (props) => ({
  ...{
    anys_empadronat_a_barcelona: '3',
    beneficiari_de_prestacio_residencial: true,
    cobra_algun_tipus_de_pensio_no_contributiva: true,
    edat: '45',
    gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio: true,
    grau_discapacitat: '33',
    ha_treballat_a_l_estranger_6_mesos: true,
    ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos: true,
    id: uuidv4(),
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
  }, ...props
});

export const aWoman = (props) => ({...props, sexe: 'dona'});
export const aMan = (props) => ({...props, sexe: 'home'});
export const ofAge = (age, props) => ({...props, edat: age});
export const isThePersonInFromOfTheComputer = (props) => ({...props, is_the_person_in_front_of_the_computer: true});
export const isPartner = (props) => ({...props, relacio_parentiu: 'parella'});
export const isSon = (props) => ({...props, relacio_parentiu: 'fill'});
export const isBrother = (props) => ({...props, relacio_parentiu: 'germa'});
export const isParent = (props) => ({...props, relacio_parentiu: 'pare'});
export const isGrandSon = (props) => ({...props, relacio_parentiu: 'net'});
export const isPoliticalSon = (props) => ({...props, relacio_parentiu: 'gendre'});
export const isPoliticalBrother = (props) => ({...props, relacio_parentiu: 'cunyat'});
export const named = (nom, props) => ({...props, nom: nom});


