// @flow
import type {HouseholdData} from "./FamilyDataTypes";
import type {FamilyDataActions} from "./FamilyDataActions";

type HouseholdDataState = HouseholdData;

function addHouseholdData(
    state: HouseholdDataState,
    householdDataToBeAdded: HouseholdData
): HouseholdDataState {
  return {...householdDataToBeAdded};
}

export default function (
    state: HouseholdDataState = {},
    action: FamilyDataActions
): HouseholdDataState {
  switch (action.type) {
    case "ADD_HOUSEHOLD_DATA":
      return addHouseholdData(state, action.householdData);
    default:
      return state;
  }
}
