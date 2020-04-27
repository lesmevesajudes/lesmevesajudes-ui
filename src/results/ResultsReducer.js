import {FETCH_SIMULATION, FETCH_SIMULATION_ERROR, START_FETCH_SIMULATION, SHOW_SIMULATION} from './FetchSimulationAction';


export default function(
    state = {isError: false, isRequestDone: false, response: null, simulationID: null, initialSimulationID: null},
    action
) {
  switch (action.type) {
    case START_FETCH_SIMULATION:
      return {
    	...state,
        isError: false, 
        isRequestDone: false,
        response: null, 
        simulationID: action.simulation_id
      };
    case FETCH_SIMULATION:
      return {
    	...state,
        response: action.payload.data,
        isError: false,
        isRequestDone: true,
        simulationID: state.simulationID
      };
    case FETCH_SIMULATION_ERROR:
      console.log('error:', action.payload);
      console.log('error:', JSON.stringify(action.payload.response.data, null, 2));
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
        simulationID: action.result.id,
        response: action.result,
        initialSimulationId: action.initialSimulationId,
      };
    default:
      return state;
  }
}
