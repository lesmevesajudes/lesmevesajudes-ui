// @flow
import type {Person, PersonID} from "./PersonTypes";

type AddPersonAction = {
  type: "ADD_ADULT",
  adult: any
};

type RemovePersonAction = {
  type: "REMOVE_ADULT",
  adultId: PersonID
};

type UpdatePersonAction = {
  type: "UPDATE_ADULT",
  adult: Person
};

export type PersonActions =
    | AddPersonAction
    | RemovePersonAction
    | UpdatePersonAction;

export function addPerson(person: Person): AddPersonAction {
  return {
    type: "ADD_ADULT",
    adult: person
  };
}

export function updatePerson(person: Person): UpdatePersonAction {
  return {
    type: "UPDATE_ADULT",
    adult: person
  };
}

export function removePerson(personID: PersonID): RemovePersonAction {
  return {
    type: "REMOVE_ADULT",
    adultId: personID
  };
}
