// @flow
import {Map} from 'immutable';

import type {Person, PersonID, PersonsState} from './PersonTypes';
import {parse} from './PersonTypes';
import type {PersonActions} from './PersonsActions';

function removePerson(state: PersonsState, personIDToBeRemoved: PersonID): PersonsState {
  return state.delete(personIDToBeRemoved);
}

function addPerson(state: PersonsState, personToBeAdded: Person): PersonsState {
  return state.set(personToBeAdded.id, personToBeAdded);
}

function addPersons(state: PersonsState, personsToBeAdded: Array<Person>): PersonsState {
	var person = parse(personsToBeAdded);
	state = addPerson(state, person);
	return state;
}

function updatePerson(state: PersonsState, personToBeUpdated: Person): PersonsState {
  return addPerson(state, personToBeUpdated);
}

export function serialize(state: PersonsState): Person[] {
  return state.toArray();
}

export function initPersonState(initialValues: Array<Object> = []): PersonsState {
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

export default function (
    state: PersonsState = initPersonState(),
    action: PersonActions
): PersonsState {
  switch (action.type) {
    case 'ADD_PERSON':
      return addPerson(state, action.person);
    case 'REMOVE_PERSON':
      return removePerson(state, action.personID);
    case 'UPDATE_PERSON':
      return updatePerson(state, action.person);
    case 'SHOW_SIMULATION':
       return addPersons(state, action.simulation.persones);
    default:
    	
      return state;
  }
}
