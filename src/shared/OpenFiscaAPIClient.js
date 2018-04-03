import axios from "axios/index";
import { API_URL } from "../config"

class OpenFiscaAPIClient {
  makeSimulation(simulationData: any) {
    return axios.post(API_URL + "/calculate", simulationData);
  }
}
export default OpenFiscaAPIClient;
