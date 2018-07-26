import {FETCH_SIMULATION, FETCH_SIMULATION_ERROR, START_FETCH_SIMULATION} from './FetchSimulationAction';

export default function(
  state = { isError: false, isRequestDone: false, response: null },
  action
) {
  switch (action.type) {
    case START_FETCH_SIMULATION:
      return {
        isError: false, isRequestDone: false, response: null
      };
    case FETCH_SIMULATION:
      console.log('Response: ', action);
      return {
        response: action.payload.data,
        isError: false,
        isRequestDone: true
      };
    case FETCH_SIMULATION_ERROR:
      console.log('error:', action.payload);
      return {
        errorData: action.payload,
        isError: true,
        isRequestDone: true
      };

    default:
      return state;
  }
}
