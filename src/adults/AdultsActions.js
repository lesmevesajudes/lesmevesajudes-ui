// @flow
import type {Adult, AdultId} from "./AdultsTypes";

type AddAdultAction = {
  type: "ADD_ADULT",
  adult: any
};

type RemoveAdultAction = {
  type: "REMOVE_ADULT",
  adultId: AdultId
};

type UpdateAdultAction = {
  type: "UPDATE_ADULT",
  adult: Adult
};

type AddIncomeDataAction = {
  type: "ADD_INCOME_DATA",
  adultId: AdultId,
  ingressos_bruts: number
};

export type AdultActions =
    | AddAdultAction
    | RemoveAdultAction
    | UpdateAdultAction;

export function addAdult(adult: Adult): AddAdultAction {
  return {
    type: "ADD_ADULT",
    adult: adult
  };
}
export function updateAdult(adult: Adult): UpdateAdultAction {
  return {
    type: "UPDATE_ADULT",
    adult: adult
  };
}
export function removeAdult(adultId: AdultId): RemoveAdultAction {
  return {
    type: "REMOVE_ADULT",
    adultId: adultId
  };
}

export function addIncomeDataAction(
    adultId: AdultId,
    ingressosBruts: number
): AddIncomeDataAction {
  return {
    type: "ADD_INCOME_DATA",
    adultId: adultId,
    ingressos_bruts: ingressosBruts
  };
}
