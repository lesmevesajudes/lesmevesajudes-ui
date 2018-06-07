// @flow
import type {HouseholdData} from "./FamilyDataTypes";

type AddHouseholdDataAction = {
  type: "ADD_HOUSEHOLD_DATA",
  householdData: HouseholdData
};

export type FamilyDataActions = AddHouseholdDataAction;

export function addHouseholdData(
    householdData: HouseholdData
): AddHouseholdDataAction {
  return {
    type: "ADD_HOUSEHOLD_DATA",
    householdData: householdData
  };
}
