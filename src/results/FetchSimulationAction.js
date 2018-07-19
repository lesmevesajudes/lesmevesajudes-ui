//@flow
import type {PersonsState} from '../persons/PersonTypes';
import type {FamilyData} from '../family/FamilyDataTypes';
import type {ResidenceData} from '../residence/ResidenceTypes';
import OpenFiscaAPIClient from '../shared/OpenFiscaAPIClient/OpenFiscaAPIClient';
import {API_URL} from "../config";

export const FETCH_SIMULATION = 'fetch_simulation';

export type SimulationData = {
  persons: PersonsState,
  residence: ResidenceData,
  family: FamilyData,
  parelles: Object
};

export function fetchSimulation(simulationData: SimulationData) {
  let client = new OpenFiscaAPIClient(API_URL);
  return {
    type: FETCH_SIMULATION,
    payload: client.makeSimulation(simulationData)
  };
}
