import type {AdultId} from "../adults/AdultsTypes";
import {Adult} from "../adults/AdultsTypes";
import {Map} from "immutable";
import type {HouseholdData} from "../household/HouseholdDataTypes";

export const esFill = (persona: Adult) =>
    persona.rol === "fill" || esInfantAcollit(persona);
export const esSustentador = (persona: Adult) => persona.rol === "pares";
export const esFamiliaNombrosa = (persones: Map<AdultId, Adult>) => {
  const tresFillsOMes: boolean =
      persones.filter((persona: Adult) => esFill(persona)).count() >= 3;
  const dosFillsOMesAlgunAmbDiscapacitatSuperior33: boolean =
      persones.filter((persona: Adult) => esFill(persona)).count() >= 2 &&
      persones
          .filter(
              (persona: Adult) => esFill(persona) && persona.grau_discapacitat > 33
          )
          .count() >= 1;
  return tresFillsOMes || dosFillsOMesAlgunAmbDiscapacitatSuperior33;
};
export const esMonoparental = (persones: Map<AdultId, Adult>) =>
    persones.filter((persona: Adult) => esSustentador(persona)).count() === 1;
export const esInfantAcollit = (persona: Adult) =>
    persona.rol === "infant_acollit";
export const esAltresFamiliars = (persona: Adult) =>
    persona.rol === "altres_adults_familiars";
export const esAltresNoFamiliars = (persona: Adult) =>
    persona.rol === "altres_adults";
export const tipusCustodia = (
    persona: Adult,
    familia: HouseholdData,
    esMonoparental: boolean
) =>
    familia.custodies !== null &&
    typeof familia.custodies[persona.id] !== "undefined"
        ? familia.custodies[persona.id].tipus
        : esMonoparental ? "cap" : "total";
