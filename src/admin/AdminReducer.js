// @flow
import type {AdminState} from './AdminTypes';


const initial: AdminState = {
  retrieveSimulationError: '',
  isAdmin: true,
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
