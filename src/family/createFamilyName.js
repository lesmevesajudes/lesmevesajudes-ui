import {Map} from 'immutable';
import {Person} from '../persons/PersonTypes';

export const toArray = (anObject: Object) =>
    Object.keys(anObject).reduce(
        (result: Object[], key: string) =>
            [...result, {...anObject[key], ID: key}]
        , []
    );

function placeCommasAndAnds(arr: Array<string>) {
  let outStr = '';
  if (arr.length === 1) {
    outStr = arr[0];
  } else if (arr.length === 2) {
    outStr = arr.join(' i ');
  } else if (arr.length > 2 && arr.length <= 4) {
    outStr = arr.slice(0, -1).join(', ') + ' i ' + arr.slice(-1)[0];
  } else if (arr.length > 4) {
    outStr = arr.slice(0, 3).join(', ') + '...';
  }
  return outStr;
}

const getNamesOf = (IDs: Array<string>, persones: Map<string, Person>): Array<string> => {
  return IDs.map((key) => persones.get(key).nom);
};

export const createFamilyName = (familia, persones) =>
    placeCommasAndAnds([...getNamesOf(familia.sustentadors, persones), ...getNamesOf(familia.menors, persones)]);
