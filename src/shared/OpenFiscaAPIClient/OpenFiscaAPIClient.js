import axios from 'axios/index';
import isDevelopment from '../isDevelopment';
import {buildRequest} from "./RequestBuilder";

class OpenFiscaAPIClient {
  url: ?string = undefined;
  productionURL: string = 'https://lesmevesajudes-api.herokuapp.com';
  developmentURL: string = 'http://localhost:2000';

  constructor(isDevel: boolean) {
    if (typeof isDevel === 'undefined') {
      isDevel = isDevelopment;
    }
    if (isDevel) {
      this.url = this.productionURL;
    } else {
      this.url = this.productionURL;
    }
  }

  makeSimulation(simulationData: any) {
    const requestBody = buildRequest(simulationData);
    console.log('Request: ', requestBody);
    return axios.post(this.url + '/calculate', requestBody);
  }
}

export default OpenFiscaAPIClient;
