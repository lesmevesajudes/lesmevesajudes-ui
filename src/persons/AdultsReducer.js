// @flow
import {Map} from "immutable";

import type {AdultId, AdultState, Person} from "./AdultsTypes";
import type {PersonActions} from "./PersonsActions";

function removeAdult(
    state: AdultState,
    adultIdToBeRemoved: AdultId
): AdultState {
  return state.delete(adultIdToBeRemoved);
}

function addAdult(state: AdultState, adultToBeAdded: Person): AdultState {
  return state.set(adultToBeAdded.id, adultToBeAdded);
}

function updateAdult(state: AdultState, adultToBeUpdated: Person): AdultState {
  return addAdult(state, adultToBeUpdated);
}

export function serialize(state: AdultState): Person[] {
  return state.toArray();
}
export function initAdultState(initialValues: Array<Object> = []): AdultState {
  const initialValuesAsObject: Object = initialValues.reduce(function (
      acc,
      cur
      ) {
        acc[cur.id] = cur;
        return acc;
      },
      {});
  return Map(initialValuesAsObject);
}
export default function(
    state: AdultState = initAdultState(),
    action: PersonActions
): AdultState {
  switch (action.type) {
    case "ADD_ADULT":
      return addAdult(state, action.adult);
    case "REMOVE_ADULT":
      return removeAdult(state, action.adultId);
    case "UPDATE_ADULT":
      return updateAdult(state, action.adult);
    case "ADD_INCOME_DATA":
      return updateAdult(
          state,
          Object.assign(state.get(action.adultId), {
            ingressos_bruts: action.ingressos_bruts
          })
      );
    default:
      return state;
  }
}
