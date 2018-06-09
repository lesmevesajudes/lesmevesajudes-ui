import {Person} from "../persons/PersonTypes";

export const esFill = (persona: Person) => persona.edat < 16 || persona.es_escolaritzat_entre_P3_i_4rt_ESO;
export const esSustentador = (persona: Person) => persona.edat > 16;
export const esInfantAcollit = (persona: Person) => persona.rol === 'infant_acollit';
