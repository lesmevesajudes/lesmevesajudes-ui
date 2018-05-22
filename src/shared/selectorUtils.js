import type {PersonID} from "../persons/PersonTypes";
import {Person} from "../persons/PersonTypes";
import {Map} from "immutable";
import type {HouseholdData} from "../household/HouseholdDataTypes";

export const esFill = (persona: Person) => persona.edat < 16 || persona.es_escolaritzat_entre_P3_i_4rt_ESO;
export const esSustentador = (persona: Person) => persona.edat > 16;
export const esFamiliaNombrosa = (persones: Map<PersonID, Person>) => {
  const tresFillsOMes: boolean = persones.filter((persona: Person) => esFill(persona)).count() >= 3;
  const dosFillsOMesAlgunAmbDiscapacitatSuperior33: boolean = persones.filter((persona: Person) =>
      esFill(persona)).count() >= 2 && persones.filter(
      (persona: Person) => esFill(persona) && persona.grau_discapacitat > 33).count() >= 1;
  return tresFillsOMes || dosFillsOMesAlgunAmbDiscapacitatSuperior33;
};
export const esMonoparental = (persones: Map<PersonID, Person>) =>
    persones.filter((persona: Person) => esSustentador(persona)).count() === 1 && persones.filter(esFill).count() > 0;
export const esInfantAcollit = (persona: Person) => persona.rol === 'infant_acollit';
export const tipusCustodia = (persona: Person, familia: HouseholdData, esMonoparental: boolean) =>
    (familia.custodies !== null && typeof familia.custodies[persona.id] !== 'undefined') ?
        familia.custodies[persona.id].tipus : esMonoparental ? 'cap' : 'total';
