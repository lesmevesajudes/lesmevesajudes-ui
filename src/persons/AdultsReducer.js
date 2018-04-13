// @flow
import {Map} from "immutable";

import type {Person, PersonID, PersonsState} from "./PersonTypes";
import type {PersonActions} from "./PersonsActions";

function removeAdult(
    state: PersonsState,
    adultIdToBeRemoved: PersonID
): PersonsState {
  return state.delete(adultIdToBeRemoved);
}

function addAdult(state: PersonsState, adultToBeAdded: Person): PersonsState {
  return state.set(adultToBeAdded.id, adultToBeAdded);
}

function updateAdult(state: PersonsState, adultToBeUpdated: Person): PersonsState {
  return addAdult(state, adultToBeUpdated);
}

export function serialize(state: PersonsState): Person[] {
  return state.toArray();
}

export function initAdultState(initialValues: Array<Object> = []): PersonsState {
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
    state: PersonsState = initAdultState(),
    action: PersonActions
): PersonsState {
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
