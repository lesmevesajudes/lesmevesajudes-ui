// @flow
import type {FamilyDataActions} from './FamilyDataActions';
import type {FamilyData} from './FamilyDataTypes';

type FamilyDataState = FamilyData | {};

export default function (
    state: FamilyDataState = {custodies: {}},
    action: FamilyDataActions
): FamilyDataState {
  switch (action.type) {
    case 'ADD_FAMILY_DATA':
      return action.familyData;
    case 'ADD_PERSON':
    case 'UPDATE_PERSON':
    case 'REMOVE_PERSON':
      return {custodies: {}};
    default:
      return state;
  }
}
