//@flow
import type {PersonsState} from '../persons/PersonTypes';
import type {FamilyData} from '../family/FamilyDataTypes';
import type {ResidenceData} from '../residence/ResidenceTypes';
import OpenFiscaAPIClient from '../shared/OpenFiscaAPIClient/OpenFiscaAPIClient';
import {API_URL} from "../config";

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

  let client = new OpenFiscaAPIClient(API_URL);

  return client.makeSimulation(simulationData).then(result => dispatch({
    type: FETCH_SIMULATION,
    payload: result
  })).catch(error => dispatch({
    type: FETCH_SIMULATION_ERROR,
    payload: error
  }));
};
