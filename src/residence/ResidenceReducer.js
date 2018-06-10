// @flow
import type {ResidenceData} from './ResidenceTypes';
import type {ResidenceActions} from './ResidenceActions';

type ResidenceState = ResidenceData | {};

export default function (
    state: ResidenceState = {},
    action: ResidenceActions
): ResidenceState {
  switch (action.type) {
    case 'ADD_RESIDENCE_DATA':
      return action.residenceData;
    default:
      return state;
  }
}
