// @flow
import {Map} from 'immutable';
export type ChildId = string;
export type ChildState = Map<string, Child>;

export type Child = {
    id: ChildId;
    nom: string;
    data_naixement: string;
    ciutat_empadronament: string;
    social_services_user: boolean;
    grau_discapacitat: number;
    es_escolaritzat: boolean;
    utilitza_el_servei_de_menjador: boolean;
    te_beca_menjador: boolean;
    en_acolliment: boolean;
    en_guardia_i_custodia: boolean;
}
