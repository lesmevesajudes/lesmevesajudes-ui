// @flow
import type {HouseholdData} from "./HouseholdDataTypes";

type AddHouseholdDataAction = {
  type: "ADD_HOUSEHOLD_DATA",
  householdData: HouseholdData
};

export type HouseholdDataActions = AddHouseholdDataAction;

export function addHouseholdData(
    householdData: HouseholdData
): AddHouseholdDataAction {
  return {
    type: "ADD_HOUSEHOLD_DATA",
    householdData: householdData
  };
}
