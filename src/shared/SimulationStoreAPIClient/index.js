import axios from 'axios/index';

class SimulationStoreaAPIClient {
  url: ?string = undefined;

  constructor(url: string) {
    this.url = url;
  }

  uploadSimulation(id: string, simulation: any) {
    return axios.post(this.url, {id, simulation});
  }
}

export default SimulationStoreaAPIClient;
