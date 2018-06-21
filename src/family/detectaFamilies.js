import type {Person, PersonID} from "../persons/PersonTypes";
import {serialize} from "../persons/PersonsReducer";

type Custodia = {
  primer: string,
  segon?: string
}

const familyID = (menorID: PersonID, sustentadors) => sustentadors.sort().join('');

const isCustodyFilled = (menorID: PersonID, custodies) => typeof custodies[menorID] !== 'undefined'
    && typeof custodies[menorID].primer === 'string'
    && typeof custodies[menorID].segon === 'string';

const personesAmbCustodiaConvivents = (menorID: PersonID, custodies) => [custodies[menorID].primer, custodies[menorID].segon].filter((sustentadorID) => sustentadorID !== 'ningu_mes' && sustentadorID !== 'no_conviu').sort();

const findPersonsWithRole = (role: string, persons: Array<Person>, excludedPersonID: PersonID) => {
  persons.filter(person => person.role === role).filter(person => person.id !== excludedPersonID)
};

const buildFamiliesFromCustodies = (custodies: { [string]: Custodia }, persones: Array<Person>): Object =>
    Object.keys(custodies).reduce(
        (families: Object, menorID: string) => {
          const sustentadors = personesAmbCustodiaConvivents(menorID, custodies);
          if (isCustodyFilled(menorID, custodies) && sustentadors.length > 0) {
            const familiaID = familyID(menorID, sustentadors);
            if (typeof families[familiaID] !== 'undefined') {
              families[familiaID].menors.push(menorID);
            } else {
              families[familiaID] =
                  {
                    sustentadors: sustentadors,
                    menors: [menorID],
                    monoparental: sustentadors.length === 1,
                    tipus_custodia: custodies[menorID].segon === 'ningu_mes' ? 'total' : 'compartida'
                  };
            }
          }
          return families;
        }, {});

export const detectaFamilies = (custodies: { [string]: Custodia }, persones: Map<PersonID, Person>): Object => {
  return buildFamiliesFromCustodies(custodies, serialize(persones));
};


