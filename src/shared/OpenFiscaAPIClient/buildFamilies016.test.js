import {Map} from 'immutable';
import {serialize} from '../../persons/PersonsReducer';
import {buildFamilies016} from './RequestBuilder';

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
    percep_prestacions_incompatibles_amb_la_feina: false,
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
    percep_prestacions_incompatibles_amb_la_feina: false,
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
    segon: 'no-conviu'
  },
  '91f9d921-a3fc-4b49-a994-2c8d25d61f3f': {
    primer: '8db98acd-da00-4304-bbd3-97360c469730',
    segon: 'no-conviu'
  }
};

const aFamilyWithTwoKidsUsuari_families = {
  usuari_serveis_socials: {
    '8db98acd-da00-4304-bbd3-97360c469730fd2adda9-5928-49f9-a5b8-3f601b7d9ab8': false
  }
};

describe('Given a set of custodies detect families', () => {
      it('Detects a family with two parents', () => {
        expect(
            buildFamilies016(aFamilyWithTwoKidsCustodies, serialize(aFamilyWithTwoKids), aFamilyWithTwoKidsUsuari_families)
        ).toEqual(
            {
              '8db98acd-da00-4304-bbd3-97360c469730fd2adda9-5928-49f9-a5b8-3f601b7d9ab8': {
                "altres_familiars": [],
                "altres_persones": [],
                "es_usuari_serveis_socials": {"2017-01": false},
                "menors": ["2a82aeb3-eb60-4f46-95ce-1ef3a46abef2", "91f9d921-a3fc-4b49-a994-2c8d25d61f3f"],
                "sustentadors": [],
                "sustentadors_i_custodia": ["8db98acd-da00-4304-bbd3-97360c469730", "fd2adda9-5928-49f9-a5b8-3f601b7d9ab8"],
                "tipus_custodia": {"2017-01": "total"},
                "tipus_familia_monoparental": {"2017-01": "nop"}
              }
            }
        );
      });
    }
);

describe('Given a set of custodies detect families', () => {
      it('Detects a family with two parents', () => {
        expect(
            buildFamilies016(aFamilyWithTwoKidsRegroupedCustodies, serialize(aFamilyWithTwoKids), aFamilyWithTwoKidsUsuari_families)
        ).toEqual(
            {
              '8db98acd-da00-4304-bbd3-97360c469730fd2adda9-5928-49f9-a5b8-3f601b7d9ab8': {
                "altres_familiars": [],
                "altres_persones": [],
                "es_usuari_serveis_socials": {"2017-01": false},
                "menors": ["2a82aeb3-eb60-4f46-95ce-1ef3a46abef2", "91f9d921-a3fc-4b49-a994-2c8d25d61f3f"],
                "sustentadors": [],
                "sustentadors_i_custodia": ["8db98acd-da00-4304-bbd3-97360c469730", "fd2adda9-5928-49f9-a5b8-3f601b7d9ab8"],
                "tipus_custodia": {"2017-01": "total"},
                "tipus_familia_monoparental": {"2017-01": "nop"}
              }
            }
        );
      });
    }
);
