import axios from 'axios';

export const FETCH_SIMULATION='fetch_simulation';

const ROOT_URL ='http://localhost:2000/api/2/formula/income_tax?salary=';

export default  function fetchSimulation(simulationData) {
    const request = axios.get(`${ROOT_URL}${simulationData}`);
    return {
        type: FETCH_SIMULATION,
        payload: request
    };
}