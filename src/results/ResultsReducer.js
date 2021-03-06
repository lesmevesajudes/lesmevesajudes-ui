import {FETCH_SIMULATION, FETCH_SIMULATION_ERROR, START_FETCH_SIMULATION, SHOW_SIMULATION, RETRIEVE_SIMULATION_ERROR} from './FetchSimulationAction';


export const PRINT_SIMULATION = 'PRINT_SIMULATION';
export const PRINTED_SIMULATION = 'PRINTED_SIMULATION';

export default function(
    state = {isError: false, isRequestDone: false, response: null, simulationID: null, initialSimulationID: null, printSimulation: false},
    action
) {
  switch (action.type) {
    case START_FETCH_SIMULATION:
      return {
    	...state,
        isError: false,
        isRequestDone: false,
        response: null,
//        simulationID: action.simulation_id
      };
    case FETCH_SIMULATION:
      console.log('Response: ', action);
      return {
    	...state,
        response: action.payload.data,
        isError: false,
        isRequestDone: true,
        simulationID: action.payload.data.id,
//        simulationID: state.simulationID
      };
    case FETCH_SIMULATION_ERROR:
      console.log('error:', action.payload);
      console.log('error:', JSON.stringify(action.payload.response ? action.payload.response.data : 'error response data is empty', null, 2));
      return {
      	...state,
        response: action.payload,
        isError: true,
        isRequestDone: true,
        simulationID: state.simulationID
      };
    case SHOW_SIMULATION:
      return {
        isRequestDone: true,
        response: action.result,
        initialSimulationId: action.initialSimulationId,
      };
    case RETRIEVE_SIMULATION_ERROR:
        console.log('step reducer sim error')
        return {
          ...state,
          retrieveSimulationError: action.payload,
        };
    default:
      return state;
  }
}
