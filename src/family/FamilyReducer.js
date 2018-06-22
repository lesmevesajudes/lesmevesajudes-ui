// @flow
import type {FamilyData} from './FamilyDataTypes';
import type {FamilyDataActions} from './FamilyDataActions';

type FamilyDataState = FamilyData | {};

export default function (
    state: FamilyDataState = {custodies: {}},
    action: FamilyDataActions
): FamilyDataState {
  switch (action.type) {
    case 'ADD_FAMILY_DATA':
      return action.familyData;
    default:
      return state;
  }
}
