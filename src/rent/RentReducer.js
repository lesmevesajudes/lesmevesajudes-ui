// @flow
import type {Rent} from "./RentTypes";
import type {RentActions} from "./RentActions";

type RentState = Rent | {};

export default function (
    state: RentState = {},
    action: RentActions
): RentState {
  switch (action.type) {
    case "ADD_RENT":
      return action.rent;
    default:
      return state;
  }
}
