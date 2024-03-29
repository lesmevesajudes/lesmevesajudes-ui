//@flow
import {API_URL, SIMULATION_STORE_URL} from "../config";
import type {FamilyData} from '../family/FamilyDataTypes';
import type {PersonsState} from '../persons/PersonTypes';
import type {ResidenceData} from '../residence/ResidenceTypes';
import OpenFiscaAPIClient from '../shared/OpenFiscaAPIClient/OpenFiscaAPIClient';
import SimulationStoreClient from '../shared/SimulationStoreAPIClient';

export const START_FETCH_SIMULATION = 'START_FETCH_SIMULATION';
export const FETCH_SIMULATION = 'FETCH_SIMULATION';
export const FETCH_SIMULATION_ERROR = 'FETCH_SIMULATION_ERROR';
export const SHOW_SIMULATION = 'SHOW_SIMULATION';
export const RETRIEVE_SIMULATION_ERROR = 'RETRIEVE_SIMULATION_ERROR';
export const TIMED_OUT_SIMULATION = 'TIMED_OUT_SIMULATION';

export type SimulationData = {
  persons: PersonsState,
  residence: ResidenceData,
  family: FamilyData,
  parelles: Object
};

const simulationStore = new SimulationStoreClient(SIMULATION_STORE_URL);

export const fetchSimulation = (simulationID: string, simulationData: SimulationData) => (dispatch: any) => {
  dispatch({
    type: START_FETCH_SIMULATION,
  });

  const openFisca = new OpenFiscaAPIClient(API_URL);
  return openFisca.makeSimulation(simulationData).then(result => {
  	saveSimulation(simulationID, simulationData, result, dispatch);
  }).catch(error => {
    console.log(JSON.stringify(error, null, 2));
    var simulation = {};
  	if (simulationData.results.initialSimulationId !== undefined) {
  		simulation.initial_simulation_id = simulationData.results.initialSimulationId;
  	}
  	simulation.result = error.message ? error.message : 'empty error message';
  	simulation.data = error.response ? error.response : 'empty response';
    simulationStore.uploadSimulationError(simulation)
    dispatch({
      type: FETCH_SIMULATION_ERROR,
      payload: error
    })
  });
};

export const saveSimulation = (id: string, simulationData: SimulationData, result: any, dispatch: any) =>  {
	var simulation = {};
	if (simulationData.results.initialSimulationId !== undefined) {
  		simulation.initial_simulation_id = simulationData.results.initialSimulationId;
  	}
	simulation.id = id;
  	simulation.result = result.data;
  	simulation.data = {};
  	simulation.data.family = simulationData.family;
  	simulation.data.persons = simulationData.persons;
  	simulation.data.residence = simulationData.residence;
	simulationStore.uploadSimulationResult(simulation).then(response => {
  	    result.data['id'] = response.data.id ? response.data.id : id;
  	    return dispatch({
  	        type: FETCH_SIMULATION,
  	        payload: result
  	    })
	}).catch(error => {
		console.log(JSON.stringify(error, null, 2));
		dispatch({
	      type: FETCH_SIMULATION_ERROR,
	      payload: error
	    })
	});
}

export const retrieveSimulation = (simulationId: string) =>  (dispatch: any) => {
	return simulationStore.getSimulation(simulationId.trim()).then(result => {
		if (result.status === 210) {
			return dispatch({
				type: RETRIEVE_SIMULATION_ERROR,
	      		payload: TIMED_OUT_SIMULATION,
			});
		}
		const simulationData = result.data.simulation;
		const simulationResult = result.data.result;
		const initialSimulationId = result.data.id_parent? result.data.id_parent : result.data.id;
		return dispatch({
			type: SHOW_SIMULATION,
			simulation: simulationData,
			initialSimulationId: initialSimulationId,
			result: simulationResult,
		});
	}).catch(error => {
    console.log(JSON.stringify(error, null, 2));
    dispatch({
      type: RETRIEVE_SIMULATION_ERROR,
      payload: RETRIEVE_SIMULATION_ERROR,
    });
  });
}

// pageable results
/*export const retrieveAllResults = (page = 1, limit = 12000, results = []) => async dispatch =>   {
    	simulationStore.getAllResults(page, limit).then(response => {
  		if (response.status === 210) {
  			return dispatch({
  				type: RETRIEVE_SIMULATION_ERROR,
  	      payload: TIMED_OUT_SIMULATION,
  			});
  		}
  		results = [...results, ...response.data.results];
      const page = response.data.page;
      if(response.data.results[0]) {
        dispatch(retrieveAllResults(page + 1, limit, results))
      }
  		return dispatch ({
        type: SHOW_ALL_SIMULATIONS,
        results: results,
  		});

  	}).catch(error => {
      console.log(JSON.stringify(error, null, 2));
      //dispatch({
      //  type: RETRIEVE_SIMULATION_ERROR,
      //  payload: RETRIEVE_SIMULATION_ERROR,
      //});
    });
}*/
