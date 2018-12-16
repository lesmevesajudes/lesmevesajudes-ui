import axios from 'axios/index';

class SimulationStoreaAPIClient {
  url: ?string = undefined;

  constructor(url: string) {
    this.url = url;
  }

  uploadSimulationResult(id: string, simulation_result: any) {
    return axios.post(this.url, {id, outcome: "success", simulation: simulation_result});
  }

  uploadSimulationError(simulation_id: string, error: any) {
    return axios.post(this.url, {id: simulation_id, outcome: "simulation_error", simulation_error: error});
  }
}

export default SimulationStoreaAPIClient;
