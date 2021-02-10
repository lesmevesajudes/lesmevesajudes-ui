import {Map} from 'immutable';
import {serialize} from '../../persons/PersonsReducer';
import {
  createAFamilyWithAllPersons
} from './RequestBuilder';

export const familyWithAdultDescendants = Map({
  'e10bbacc-cd1d-4b5e-8170-df5b2b81a766': {
    is_the_person_in_front_of_the_computer: true,
    nom: 'Maria',
    edat: '43',
    sexe: 'dona',
    tipus_document_identitat: 'DNI',
    porta_dos_anys_o_mes_empadronat_a_catalunya: true,
    municipi_empadronament: 'barcelona',
    anys_empadronat_a_barcelona: '4',
    situacio_laboral: 'aturat',
    inscrit_com_a_demandant_docupacio: true,
    inscrit_com_a_demandant_docupacio_mes_de_12_mesos: true,
    en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: false,
    ha_treballat_a_l_estranger_6_mesos: true,
    ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos: true,
    ingressos_bruts: '4500',
    ingressos_bruts_ultims_sis_mesos: '1200',
    cobra_algun_tipus_de_pensio_no_contributiva: false,
    gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio: false,
    percep_prestacio_menys_de_950: false,
    percep_prestacions_incompatibles_amb_la_feina: false,
    percep_ajut_serveis_socials_municipals: false,
    te_algun_grau_de_discapacitat_reconegut: true,
    grau_discapacitat: '77',
    victima_violencia_de_genere: true,
    beneficiari_de_prestacio_residencial: false,
    id: 'e10bbacc-cd1d-4b5e-8170-df5b2b81a766'
  },
  'cf01f1ec-fd06-479d-af40-b3f751f50b5d': {
    is_the_person_in_front_of_the_computer: false,
    nom: 'Pere',
    edat: '45',
    sexe: 'home',
    relacio_parentiu: 'parella',
    tipus_document_identitat: 'DNI',
    porta_dos_anys_o_mes_empadronat_a_catalunya: true,
    municipi_empadronament: 'barcelona',
    anys_empadronat_a_barcelona: '4',
    situacio_laboral: 'aturat',
    inscrit_com_a_demandant_docupacio: true,
    inscrit_com_a_demandant_docupacio_mes_de_12_mesos: true,
    en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: false,
    ha_treballat_a_l_estranger_6_mesos: true,
    ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos: true,
    ingressos_bruts: '4500',
    ingressos_bruts_ultims_sis_mesos: '1200',
    cobra_algun_tipus_de_pensio_no_contributiva: false,
    gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio: false,
    percep_prestacio_menys_de_950: false,
    percep_prestacions_incompatibles_amb_la_feina: false,
    percep_ajut_serveis_socials_municipals: false,
    te_algun_grau_de_discapacitat_reconegut: true,
    grau_discapacitat: '77',
    victima_violencia_domestica: false,
    beneficiari_de_prestacio_residencial: false,
    id: 'cf01f1ec-fd06-479d-af40-b3f751f50b5d'
  },
  '8002c8ac-2d3b-43fd-9e67-4ac16b65c3ff': {
    nom: 'Nora',
    sexe: 'dona',
    relacio_parentiu: 'fill',
    edat: '21',
    tipus_document_identitat: 'DNI',
    porta_dos_anys_o_mes_empadronat_a_catalunya: true,
    municipi_empadronament: 'barcelona',
    anys_empadronat_a_barcelona: '5',
    te_algun_grau_de_discapacitat_reconegut: false,
    es_escolaritzat_entre_P3_i_4rt_ESO: true,
    beneficiari_de_prestacio_residencial: false,
    id: '8002c8ac-2d3b-43fd-9e67-4ac16b65c3ff'
  },
  '22177e2c-84e0-484b-ab93-0c76f3ee4ac5': {
    nom: 'Nora',
    sexe: 'dona',
    relacio_parentiu: 'fill',
    edat: '23',
    tipus_document_identitat: 'DNI',
    porta_dos_anys_o_mes_empadronat_a_catalunya: true,
    municipi_empadronament: 'barcelona',
    anys_empadronat_a_barcelona: '5',
    te_algun_grau_de_discapacitat_reconegut: false,
    es_escolaritzat_entre_P3_i_4rt_ESO: true,
    beneficiari_de_prestacio_residencial: false,
    id: '22177e2c-84e0-484b-ab93-0c76f3ee4ac5'
  }
});

describe('Given a family with adult descendant', () => {
  it('Two sustenters and two other familiars', () => {
    expect(
        Object.values(createAFamilyWithAllPersons(familyWithAdultDescendants))[0]
    ).toEqual(
      {
        "altres_familiars": ["8002c8ac-2d3b-43fd-9e67-4ac16b65c3ff", "22177e2c-84e0-484b-ab93-0c76f3ee4ac5"],
        "altres_persones": [],
        "menors": [],
        "sustentadors": ["e10bbacc-cd1d-4b5e-8170-df5b2b81a766", "cf01f1ec-fd06-479d-af40-b3f751f50b5d"],
        "sustentadors_i_custodia": []
      }
    );
  });
});
