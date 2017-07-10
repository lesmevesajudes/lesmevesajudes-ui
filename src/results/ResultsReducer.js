import {FETCH_SIMULATION} from './FetchSimulationAction';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_SIMULATION:
            return action.payload.data;
        default:
            return state;
    }
}
