// @flow
import type {FamilyData} from './FamilyDataTypes';

type AddFamilyDataAction = {
  type: 'ADD_FAMILY_DATA',
  familyData: FamilyData
};

export type FamilyDataActions = AddFamilyDataAction;

export function addFamilyData(
    familyData: FamilyData
): AddFamilyDataAction {
  return {
    type: 'ADD_FAMILY_DATA',
    familyData: familyData
  };
}
