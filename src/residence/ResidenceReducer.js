// @flow
import type {ResidenceData} from './ResidenceTypes';
import type {ResidenceActions} from './ResidenceActions';
import {parse} from './ResidenceTypes';

type ResidenceState = ResidenceData | {};

export default function (
    state: ResidenceState = {},
    action: ResidenceActions
): ResidenceState {
  switch (action.type) {
    case 'ADD_RESIDENCE_DATA':
      return action.residenceData;
    case 'SHOW_SIMULATION':
      return parse(action.simulation.unitats_de_convivencia);
    default:
      return state;
  }
}
