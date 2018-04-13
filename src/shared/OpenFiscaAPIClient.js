import axios from "axios/index";
import isDevelopment from "./isDevelopment";

class OpenFiscaAPIClient {
  url: ?string = undefined;
  productionURL: string = "https://lesmevesajudes-api.herokuapp.com";
  developmentURL: string = "http://localhost:2000";

  constructor(isDevel: boolean) {
    if (typeof isDevel === "undefined") {
      isDevel = isDevelopment;
    }
    if (isDevel) {
      this.url = this.developmentURL;
    } else {
      this.url = this.productionURL;
    }
  }
  makeSimulation(simulationData: any) {
    return axios.post(this.url + "/calculate", simulationData);
  }
}
export default OpenFiscaAPIClient;
