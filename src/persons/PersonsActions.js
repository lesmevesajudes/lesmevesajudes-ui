// @flow
import type {Person, PersonID} from "./PersonTypes";

type AddPersonAction = {
  type: "ADD_PERSON",
  person: any
};

type RemovePersonAction = {
  type: "REMOVE_PERSON",
  personID: PersonID
};

type UpdatePersonAction = {
  type: "UPDATE_PERSON",
  person: Person
};

export type PersonActions =
    | AddPersonAction
    | RemovePersonAction
    | UpdatePersonAction;

export function addPerson(person: Person): AddPersonAction {
  return {
    type: "ADD_PERSON",
    person: person
  };
}

export function updatePerson(person: Person): UpdatePersonAction {
  return {
    type: "UPDATE_PERSON",
    person: person
  };
}

export function removePerson(personID: PersonID): RemovePersonAction {
  return {
    type: "REMOVE_PERSON",
    personID: personID
  };
}
