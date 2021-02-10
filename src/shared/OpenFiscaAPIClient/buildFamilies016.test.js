import {Map} from 'immutable';
import {serialize} from '../../persons/PersonsReducer';
import {families016} from './RequestBuilder';


export const anotherFamily = Map({
  'e10bbacc-cd1d-4b5e-8170-df5b2b81a766': {
    is_the_person_in_front_of_the_computer: true,
    nom: 'Maria',
    edat: '33',
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
    edat: '35',
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
    edat: '11',
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
    edat: '11',
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

const anotherFamilyCustodies = {
  '8002c8ac-2d3b-43fd-9e67-4ac16b65c3ff': {
    primer: 'e10bbacc-cd1d-4b5e-8170-df5b2b81a766',
    segon: 'no_conviu'
  },
  '22177e2c-84e0-484b-ab93-0c76f3ee4ac5': {
    primer: 'e10bbacc-cd1d-4b5e-8170-df5b2b81a766',
    segon: 'no_conviu'
  }
};


const anotherFamilyCustodiesWithNobodyElse = {
  '8002c8ac-2d3b-43fd-9e67-4ac16b65c3ff': {
    primer: 'e10bbacc-cd1d-4b5e-8170-df5b2b81a766',
    segon: 'ningu_mes'
  }
};

export const aFamilyWithTwoKids = Map({
  'fd2adda9-5928-49f9-a5b8-3f601b7d9ab8': {
    is_the_person_in_front_of_the_computer: true,
    nom: 'Maria',
    edat: '33',
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
    id: 'fd2adda9-5928-49f9-a5b8-3f601b7d9ab8'
  },
  '8db98acd-da00-4304-bbd3-97360c469730': {
    is_the_person_in_front_of_the_computer: false,
    nom: 'Pere',
    edat: '35',
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
    id: '8db98acd-da00-4304-bbd3-97360c469730'
  },
  '2a82aeb3-eb60-4f46-95ce-1ef3a46abef2': {
    nom: 'Nora',
    sexe: 'dona',
    relacio_parentiu: 'fill',
    edat: '11',
    tipus_document_identitat: 'DNI',
    porta_dos_anys_o_mes_empadronat_a_catalunya: true,
    municipi_empadronament: 'barcelona',
    anys_empadronat_a_barcelona: '5',
    te_algun_grau_de_discapacitat_reconegut: false,
    es_escolaritzat_entre_P3_i_4rt_ESO: true,
    beneficiari_de_prestacio_residencial: false,
    id: '2a82aeb3-eb60-4f46-95ce-1ef3a46abef2'
  },
  '91f9d921-a3fc-4b49-a994-2c8d25d61f3f': {
    nom: 'Maria',
    sexe: 'dona',
    relacio_parentiu: 'fill',
    edat: '9',
    tipus_document_identitat: 'DNI',
    porta_dos_anys_o_mes_empadronat_a_catalunya: true,
    municipi_empadronament: 'barcelona',
    anys_empadronat_a_barcelona: '5',
    te_algun_grau_de_discapacitat_reconegut: false,
    es_escolaritzat_entre_P3_i_4rt_ESO: true,
    beneficiari_de_prestacio_residencial: false,
    id: '91f9d921-a3fc-4b49-a994-2c8d25d61f3f'
  }
});

export const anExtenseFamilyWithTwoKidsInEachLevel = Map({
  'fd2adda9-5928-49f9-a5b8-3f601b7d9ab8': {
    is_the_person_in_front_of_the_computer: true,
    nom: 'Maria',
    edat: '33',
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
    id: 'fd2adda9-5928-49f9-a5b8-3f601b7d9ab8'
  },
  '8db98acd-da00-4304-bbd3-97360c469730': {
    is_the_person_in_front_of_the_computer: false,
    nom: 'Pere',
    edat: '35',
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
    id: '8db98acd-da00-4304-bbd3-97360c469730'
  },
  '2a82aeb3-eb60-4f46-95ce-1ef3a46abef2': {
    nom: 'Nora',
    sexe: 'dona',
    relacio_parentiu: 'fill',
    edat: '11',
    tipus_document_identitat: 'DNI',
    porta_dos_anys_o_mes_empadronat_a_catalunya: true,
    municipi_empadronament: 'barcelona',
    anys_empadronat_a_barcelona: '5',
    te_algun_grau_de_discapacitat_reconegut: false,
    es_escolaritzat_entre_P3_i_4rt_ESO: true,
    beneficiari_de_prestacio_residencial: false,
    id: '2a82aeb3-eb60-4f46-95ce-1ef3a46abef2'
  },
  '91f9d921-a3fc-4b49-a994-2c8d25d61f3f': {
    nom: 'Marina',
    sexe: 'dona',
    relacio_parentiu: 'fill',
    edat: '9',
    tipus_document_identitat: 'DNI',
    porta_dos_anys_o_mes_empadronat_a_catalunya: true,
    municipi_empadronament: 'barcelona',
    anys_empadronat_a_barcelona: '5',
    te_algun_grau_de_discapacitat_reconegut: false,
    es_escolaritzat_entre_P3_i_4rt_ESO: true,
    beneficiari_de_prestacio_residencial: false,
    id: '91f9d921-a3fc-4b49-a994-2c8d25d61f3f'
  },
  '6c15c4f2-5f49-41f5-8d40-5ad62709a470': {
    is_the_person_in_front_of_the_computer: false,
    relacio_parentiu: 'pare',
    nom: 'Rosa',
    edat: '60',
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
    id: '6c15c4f2-5f49-41f5-8d40-5ad62709a470'
  },
  '406093c2-526f-4a07-8c48-88f9991acc59': {
    is_the_person_in_front_of_the_computer: false,
    nom: 'Arnau',
    edat: '65',
    sexe: 'home',
    relacio_parentiu: 'pare',
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
    id: '406093c2-526f-4a07-8c48-88f9991acc59'
  },
  'a52f4fbc-a03d-468b-8783-6f51d34018ae': {
    nom: 'Joana',
    sexe: 'dona',
    relacio_parentiu: 'germa',
    edat: '11',
    tipus_document_identitat: 'DNI',
    porta_dos_anys_o_mes_empadronat_a_catalunya: true,
    municipi_empadronament: 'barcelona',
    anys_empadronat_a_barcelona: '5',
    te_algun_grau_de_discapacitat_reconegut: false,
    es_escolaritzat_entre_P3_i_4rt_ESO: true,
    beneficiari_de_prestacio_residencial: false,
    id: 'a52f4fbc-a03d-468b-8783-6f51d34018ae'
  },
  'cf0b0052-6c62-4934-9e29-54ea6190cdc9': {
    nom: 'Lurdes',
    sexe: 'dona',
    relacio_parentiu: 'germa',
    edat: '9',
    tipus_document_identitat: 'DNI',
    porta_dos_anys_o_mes_empadronat_a_catalunya: true,
    municipi_empadronament: 'barcelona',
    anys_empadronat_a_barcelona: '5',
    te_algun_grau_de_discapacitat_reconegut: false,
    es_escolaritzat_entre_P3_i_4rt_ESO: true,
    beneficiari_de_prestacio_residencial: false,
    id: 'cf0b0052-6c62-4934-9e29-54ea6190cdc9'
  }
});

const aFamilyWithTwoKidsCustodies = {
  '2a82aeb3-eb60-4f46-95ce-1ef3a46abef2': {
    primer: 'fd2adda9-5928-49f9-a5b8-3f601b7d9ab8',
    segon: '8db98acd-da00-4304-bbd3-97360c469730'
  },
  '91f9d921-a3fc-4b49-a994-2c8d25d61f3f': {
    primer: '8db98acd-da00-4304-bbd3-97360c469730',
    segon: 'fd2adda9-5928-49f9-a5b8-3f601b7d9ab8'
  }
};

const aFamilyWithTwoKidsRegroupedCustodies = {
  '2a82aeb3-eb60-4f46-95ce-1ef3a46abef2': {
    primer: 'fd2adda9-5928-49f9-a5b8-3f601b7d9ab8',
    segon: 'no_conviu'
  },
  '91f9d921-a3fc-4b49-a994-2c8d25d61f3f': {
    primer: '8db98acd-da00-4304-bbd3-97360c469730',
    segon: 'no_conviu'
  }
};

const aFamilyWithTwoKidsRegroupedCustodiesCommonChild = {
  '2a82aeb3-eb60-4f46-95ce-1ef3a46abef2': {
    primer: 'fd2adda9-5928-49f9-a5b8-3f601b7d9ab8',
    segon: 'no_conviu'
  },
  '91f9d921-a3fc-4b49-a994-2c8d25d61f3f': {
    primer: '8db98acd-da00-4304-bbd3-97360c469730',
    segon: 'fd2adda9-5928-49f9-a5b8-3f601b7d9ab8'
  }
};

const aFamilyWithTwoKidsOneParentWithCustody = {
  '2a82aeb3-eb60-4f46-95ce-1ef3a46abef2': {
    primer: 'fd2adda9-5928-49f9-a5b8-3f601b7d9ab8',
    segon: 'no_conviu'
  },
  '91f9d921-a3fc-4b49-a994-2c8d25d61f3f': {
    primer: 'no_conviu',
    segon: 'fd2adda9-5928-49f9-a5b8-3f601b7d9ab8'
  }
};

const aFamilyWithTwoKidsOneParentWithCustodyOfOneKidOtherUnkown = {
  '2a82aeb3-eb60-4f46-95ce-1ef3a46abef2': {
    primer: 'fd2adda9-5928-49f9-a5b8-3f601b7d9ab8',
    segon: 'no_conviu'
  }
};
const aFamilyWithTwoKidsRegroupedCustodiesInTwoLevels = {
  '2a82aeb3-eb60-4f46-95ce-1ef3a46abef2': {
    primer: 'fd2adda9-5928-49f9-a5b8-3f601b7d9ab8',
    segon: 'no_conviu'
  },
  '91f9d921-a3fc-4b49-a994-2c8d25d61f3f': {
    primer: '8db98acd-da00-4304-bbd3-97360c469730',
    segon: 'no_conviu'
  },
  'a52f4fbc-a03d-468b-8783-6f51d34018ae': {
    primer: '6c15c4f2-5f49-41f5-8d40-5ad62709a470',
    segon: 'no_conviu'
  },
  'cf0b0052-6c62-4934-9e29-54ea6190cdc9': {
    primer: '406093c2-526f-4a07-8c48-88f9991acc59',
    segon: 'no_conviu'
  }
};

const aFamilyWithTwoKidsUsuari_families = {
  usuari_serveis_socials: {
    '8db98acd-da00-4304-bbd3-97360c469730fd2adda9-5928-49f9-a5b8-3f601b7d9ab8': false
  }
};

const anExtenseFamilyWithTwoKidsInEachLevel_families = {
  usuari_serveis_socials: {
    '8db98acd-da00-4304-bbd3-97360c469730fd2adda9-5928-49f9-a5b8-3f601b7d9ab8': false,
    '406093c2-526f-4a07-8c48-88f9991acc596c15c4f2-5f49-41f5-8d40-5ad62709a470': false
  }
};

describe('Given a set of custodies detect families', () => {
  it('Two parents two kids ony custody', () => {
    expect(
        families016(anotherFamilyCustodies, serialize(anotherFamily), {parelles: {}})
    ).toEqual(
        {
          "cf01f1ec-fd06-479d-af40-b3f751f50b5de10bbacc-cd1d-4b5e-8170-df5b2b81a766": {
            "menors": [
              "8002c8ac-2d3b-43fd-9e67-4ac16b65c3ff",
              "22177e2c-84e0-484b-ab93-0c76f3ee4ac5"
            ],
            "monoparental": false,
            "sustentadors_i_custodia": [
              "cf01f1ec-fd06-479d-af40-b3f751f50b5d",
              "e10bbacc-cd1d-4b5e-8170-df5b2b81a766"
            ],
            "tipus_custodia": "compartida"
          }
        }
    )
  });
  it('Two parents two kids one custody nobody else', () => {
    expect(
        families016(anotherFamilyCustodiesWithNobodyElse, serialize(anotherFamily), {parelles: {}})
    ).toEqual(
        {
          "cf01f1ec-fd06-479d-af40-b3f751f50b5de10bbacc-cd1d-4b5e-8170-df5b2b81a766": {
            "menors": [
              "8002c8ac-2d3b-43fd-9e67-4ac16b65c3ff"
            ],
            "monoparental": false,
            "sustentadors_i_custodia": [
              "cf01f1ec-fd06-479d-af40-b3f751f50b5d",
              "e10bbacc-cd1d-4b5e-8170-df5b2b81a766"
            ],
            "tipus_custodia": "total"
          }
        }
    )
  });
  it('', () => {
    expect(
        families016(aFamilyWithTwoKidsOneParentWithCustodyOfOneKidOtherUnkown, serialize(aFamilyWithTwoKids), {parelles: {}})
    ).toEqual(
        {
          "8db98acd-da00-4304-bbd3-97360c469730fd2adda9-5928-49f9-a5b8-3f601b7d9ab8": {
            "menors": [
              "2a82aeb3-eb60-4f46-95ce-1ef3a46abef2"
            ],
            "monoparental": false,
            "sustentadors_i_custodia": [
              "8db98acd-da00-4304-bbd3-97360c469730",
              "fd2adda9-5928-49f9-a5b8-3f601b7d9ab8"
            ],
            "tipus_custodia": "compartida"
          }
        }
    )
  });
  it('Detects a family with two parents and two kids', () => {
    expect(
        families016(aFamilyWithTwoKidsCustodies, serialize(aFamilyWithTwoKids), aFamilyWithTwoKidsUsuari_families)
    ).toEqual(
        {
          "8db98acd-da00-4304-bbd3-97360c469730fd2adda9-5928-49f9-a5b8-3f601b7d9ab8": {
            "menors": [
              "2a82aeb3-eb60-4f46-95ce-1ef3a46abef2",
              "91f9d921-a3fc-4b49-a994-2c8d25d61f3f"
            ],
            "monoparental": false,
            "sustentadors_i_custodia": [
              "8db98acd-da00-4304-bbd3-97360c469730",
              "fd2adda9-5928-49f9-a5b8-3f601b7d9ab8"
            ],
            "tipus_custodia": "total"
          }
        }
    );
  });
  it('Detects a family with two childs two kids from different relations', () => {
    expect(
        families016(aFamilyWithTwoKidsRegroupedCustodies, serialize(aFamilyWithTwoKids), aFamilyWithTwoKidsUsuari_families)
    ).toEqual(
        {
          "8db98acd-da00-4304-bbd3-97360c469730fd2adda9-5928-49f9-a5b8-3f601b7d9ab8": {
            "menors": [
              "2a82aeb3-eb60-4f46-95ce-1ef3a46abef2",
              "91f9d921-a3fc-4b49-a994-2c8d25d61f3f"
            ],
            "monoparental": false,
            "sustentadors_i_custodia": [
              "8db98acd-da00-4304-bbd3-97360c469730",
              "fd2adda9-5928-49f9-a5b8-3f601b7d9ab8"
            ],
            "tipus_custodia": "compartida"
          }
        }
    );
  });
  it('Detects a family with two childs one from another relation one in common', () => {
    expect(
        families016(aFamilyWithTwoKidsRegroupedCustodiesCommonChild, serialize(aFamilyWithTwoKids), aFamilyWithTwoKidsUsuari_families)
    ).toEqual(
        {
          "8db98acd-da00-4304-bbd3-97360c469730fd2adda9-5928-49f9-a5b8-3f601b7d9ab8": {
            "menors": [
              "2a82aeb3-eb60-4f46-95ce-1ef3a46abef2",
              "91f9d921-a3fc-4b49-a994-2c8d25d61f3f"
            ],
            "monoparental": false,
            "sustentadors_i_custodia": [
              "8db98acd-da00-4304-bbd3-97360c469730",
              "fd2adda9-5928-49f9-a5b8-3f601b7d9ab8"
            ],
            "tipus_custodia": "compartida"
          }
        }
    );
  });
  it('Detects a family with two childs only one parent has custody', () => {
    expect(
        families016(aFamilyWithTwoKidsOneParentWithCustody, serialize(aFamilyWithTwoKids), aFamilyWithTwoKidsUsuari_families)
    ).toEqual(
        {
          "8db98acd-da00-4304-bbd3-97360c469730fd2adda9-5928-49f9-a5b8-3f601b7d9ab8": {
            "menors": [
              "2a82aeb3-eb60-4f46-95ce-1ef3a46abef2",
              "91f9d921-a3fc-4b49-a994-2c8d25d61f3f"
            ],
            "monoparental": false,
            "sustentadors_i_custodia": [
              "8db98acd-da00-4304-bbd3-97360c469730",
              "fd2adda9-5928-49f9-a5b8-3f601b7d9ab8"
            ],
            "tipus_custodia": "compartida"
          }
        }
    );
  });
  it('Detects a family with two parents in two levels', () => {
    expect(
        families016(aFamilyWithTwoKidsRegroupedCustodiesInTwoLevels, serialize(anExtenseFamilyWithTwoKidsInEachLevel), anExtenseFamilyWithTwoKidsInEachLevel_families)
    ).toEqual(
        {
          "406093c2-526f-4a07-8c48-88f9991acc596c15c4f2-5f49-41f5-8d40-5ad62709a470": {
            "menors": [
              "a52f4fbc-a03d-468b-8783-6f51d34018ae",
              "cf0b0052-6c62-4934-9e29-54ea6190cdc9"
            ],
            "monoparental": false,
            "sustentadors_i_custodia": [
              "406093c2-526f-4a07-8c48-88f9991acc59",
              "6c15c4f2-5f49-41f5-8d40-5ad62709a470"
            ],
            "tipus_custodia": "compartida"
          },
          "8db98acd-da00-4304-bbd3-97360c469730fd2adda9-5928-49f9-a5b8-3f601b7d9ab8": {
            "menors": [
              "2a82aeb3-eb60-4f46-95ce-1ef3a46abef2",
              "91f9d921-a3fc-4b49-a994-2c8d25d61f3f"
            ],
            "monoparental": false,
            "sustentadors_i_custodia": [
              "8db98acd-da00-4304-bbd3-97360c469730",
              "fd2adda9-5928-49f9-a5b8-3f601b7d9ab8"
            ],
            "tipus_custodia": "compartida"
          }
        }
    );
  });
});
