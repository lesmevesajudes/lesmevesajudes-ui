// @flow
import type {AdminState} from './StepsTypes';


const initial: AdminState = {
  retrieveSimulationError: '',
};

export default (state: AdminState = initial, action): AdminsState => {
  switch (action.type) {
    case 'RETRIEVE_SIMULATION_ERROR':
      console.log('step reducer sim error')
      return {
        ...state,
        retrieveSimulationError: action.payload,
      }
    default:
      return state;
  }
};
