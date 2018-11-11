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

export type SimulationData = {
  persons: PersonsState,
  residence: ResidenceData,
  family: FamilyData,
  parelles: Object
};

export const fetchSimulation = (simulationData: SimulationData) => (dispatch: any) => {
  dispatch({
    type: START_FETCH_SIMULATION
  });

  const openFisca = new OpenFiscaAPIClient(API_URL);
  const simulationStore = new SimulationStoreClient(SIMULATION_STORE_URL);
  return openFisca.makeSimulation(simulationData).then(result => {
    const id = createUUID();
    simulationStore.uploadSimulation(id, result.data);
    result.data['id'] = id;
    return dispatch({
      type: FETCH_SIMULATION,
      payload: result
    })
  }).catch(error => dispatch({
    type: FETCH_SIMULATION_ERROR,
    payload: error
  }));
};
