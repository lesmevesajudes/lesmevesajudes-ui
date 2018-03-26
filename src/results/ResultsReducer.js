import {FETCH_SIMULATION} from './FetchSimulationAction';

export default function (state = {isError: false, isRequestDone: false, response: null}, action) {
    switch (action.type) {
        case FETCH_SIMULATION:
            console.log("Response: ",action);
            return {response: (action.error)?action.payload:action.payload.data, isError: action.error, isRequestDone: true};
        default:
            return state;
    }
}