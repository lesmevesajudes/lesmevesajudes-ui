// @flow
import type {Rent} from "./RentTypes";
import type {RentActions} from "./RentActions";

type RentState = Rent;

function addRent(state: RentState, rentToBeAdded: Rent): RentState {
  return rentToBeAdded;
}

export default function (
    state: RentState = {},
    action: RentActions
): RentState {
  switch (action.type) {
    case "ADD_RENT":
      return addRent(state, action.rent);
    default:
      return state;
  }
}
