import type {PersonID} from "../persons/PersonTypes";
import {Person} from "../persons/PersonTypes";
import {Map} from "immutable";
import type {FamilyData} from "../family/FamilyDataTypes";

export const esFill = (persona: Person) => persona.edat < 16 || persona.es_escolaritzat_entre_P3_i_4rt_ESO;
export const esSustentador = (persona: Person) => persona.edat > 16;
export const esMonoparental = (persones: Map<PersonID, Person>) =>
    persones.filter((persona: Person) => esSustentador(persona)).count() === 1 && persones.filter(esFill).count() > 0;
export const esInfantAcollit = (persona: Person) => persona.rol === 'infant_acollit';
export const tipusCustodia = (persona: Person, familia: FamilyData, esMonoparental: boolean) =>
    (familia.custodies !== null && typeof familia.custodies[persona.id] !== 'undefined') ?
        familia.custodies[persona.id].tipus : esMonoparental ? 'cap' : 'total';
