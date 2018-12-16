import {FETCH_SIMULATION, FETCH_SIMULATION_ERROR, START_FETCH_SIMULATION} from './FetchSimulationAction';


export default function(
    state = {isError: false, isRequestDone: false, response: null, simulationID: null},
    action
) {
  switch (action.type) {
    case START_FETCH_SIMULATION:
      return {
        isError: false, isRequestDone: false, response: null, simulationID: action.simulation_id
      };
    case FETCH_SIMULATION:
      console.log('Response: ', action);
      return {
        response: action.payload.data,
        isError: false,
        isRequestDone: true,
        simulationID: state.simulationID
      };
    case FETCH_SIMULATION_ERROR:
      console.log('error:', action.payload);
      console.log('error:', JSON.stringify(action.payload.response.data, null, 2));
      return {
        response: action.payload,
        isError: true,
        isRequestDone: true,
        simulationID: state.simulationID
      };

    default:
      return state;
  }
}
