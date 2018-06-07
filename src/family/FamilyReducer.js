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

function initHouseholdDataState(): HouseholdDataState {
  return {
    tipus_familia_nombrosa: "nop",
    tipus_familia_monoparental: "nop",
    es_usuari_serveis_socials: false,
    custodies: null
  };
}

export default function (
    state: HouseholdDataState = initHouseholdDataState(),
    action: FamilyDataActions
): HouseholdDataState {
  switch (action.type) {
    case "ADD_HOUSEHOLD_DATA":
      return addHouseholdData(state, action.householdData);
    default:
      return state;
  }
}
