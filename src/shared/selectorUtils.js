import {Adult} from "../adults/AdultsTypes";
import {Map} from "immutable";
import type {AdultId} from "../adults/AdultsTypes";
import type {HouseholdData} from "../household/HouseholdDataTypes";

export const esFill = (persona: Adult) => persona.rol === 'fill' || esInfantAcollit(persona);
export const esSustentador = (persona: Adult) => persona.rol === 'pares';
export const esFamiliaNombrosa = (persona: Map<AdultId, Adult>) =>{
    const tresFillsOMes: boolean = persona.filter( (persona: Adult) => esFill(persona) ).count() >= 3;
    const dosFillsOMesAlgunAmbDiscapacitatSuperior33: boolean = persona.filter( (persona: Adult) => esFill(persona) ).count() >= 2 && persona.filter( (persona: Adult) => esFill(persona) && persona.grau_discapacitat > 33 ).count() >= 1;
    return tresFillsOMes || dosFillsOMesAlgunAmbDiscapacitatSuperior33;
};

export const esInfantAcollit = (persona: Adult) => persona.rol === 'infant_acollit';
export const tipusCustodia = (persona: Adult, familia: HouseholdData) => ( typeof familia.custodies[persona.id] !== undefined )? familia.custodies.tipus: 'cap';