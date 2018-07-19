import axios from 'axios/index';
import {buildRequest} from "./RequestBuilder";

class OpenFiscaAPIClient {
  url: ?string = undefined;

  constructor(url: string) {
    this.url = url;
  }

  makeSimulation(simulationData: any) {
    const requestBody = buildRequest(simulationData);
    console.log('Request: ', requestBody);
    return axios.post(this.url + '/calculate', requestBody);
  }
}

export default OpenFiscaAPIClient;
