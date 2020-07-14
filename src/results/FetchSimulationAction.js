//@flow
import {API_URL, SIMULATION_STORE_URL} from "../config";
import type {FamilyData} from '../family/FamilyDataTypes';
import type {PersonsState} from '../persons/PersonTypes';
import type {ResidenceData} from '../residence/ResidenceTypes';
import OpenFiscaAPIClient from '../shared/OpenFiscaAPIClient/OpenFiscaAPIClient';
import SimulationStoreClient from '../shared/SimulationStoreAPIClient';
import {create as createUUID} from '../shared/UUID';

export const START_FETCH_SIMULATION = 'START_FETCH_SIMULATION';
export const FETCH_SIMULATION = 'FETCH_SIMULATION';
export const FETCH_SIMULATION_ERROR = 'FETCH_SIMULATION_ERROR';
export const SHOW_SIMULATION = 'SHOW_SIMULATION';
export const RETRIEVE_SIMULATION_ERROR = 'RETRIEVE_SIMULATION_ERROR';

export type SimulationData = {
  persons: PersonsState,
  residence: ResidenceData,
  family: FamilyData,
  parelles: Object
};

const simulationStore = new SimulationStoreClient(SIMULATION_STORE_URL);

export const fetchSimulation = (simulationData: SimulationData) => (dispatch: any) => {
  const id = simulationData.results.simulationID ? simulationData.results.simulationID : createUUID();
  dispatch({
    type: START_FETCH_SIMULATION,
    simulation_id: id
  });

  const openFisca = new OpenFiscaAPIClient(API_URL);
  return openFisca.makeSimulation(simulationData).then(result => {
  	var simulation = {};
  	if (simulationData.results.initialSimulationId !== undefined) {
  		simulation.initial_simulation_id = simulationData.results.initialSimulationId;
  	}
  	simulation.result = result.data;
  	simulation.data = {};
  	simulation.data.family = simulationData.family;
  	simulation.data.persons = simulationData.persons;
  	simulation.data.residence = simulationData.residence;
  	if (simulationData.results.simulationID) {
  		simulationStore.uploadSimulationResultUpdate(id, simulation);
  	} else {
  		simulationStore.uploadSimulationResult(id, simulation);
  	}
    result.data['id'] = id;
    return dispatch({
        type: FETCH_SIMULATION,
        payload: result
    })
  }).catch(error => {
    console.log(JSON.stringify(error, null, 2));
    var simulation = {};
  	if (simulationData.results.initialSimulationId !== undefined) {
  		simulation.initial_simulation_id = simulationData.results.initialSimulationId;
  	}
  	simulation.result = error.message ? error.message : 'empty error message';
  	simulation.data = error.response ? error.response : 'empty response';
    simulationStore.uploadSimulationError(id, simulation)
    dispatch({
      type: FETCH_SIMULATION_ERROR,
      payload: error
    })
  });
};

export const retrieveSimulation = (simulationId: string) =>  (dispatch: any) => {
	return simulationStore.getSimulation(simulationId).then(result => {
//		console.log(result.data);
		const simulationData = JSON.parse(result.data.simulation);
		const simulationResult = JSON.parse(result.data.result);
		const initialSimulationId = result.data.id_parent !== 'null' ? result.data.id_parent : result.data.id;
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
      payload: error
    });
  });
}
