// @flow
import type {Properties} from './PropertiesTypes'
import type {PropertiesActions} from './PropertiesActions'

type PropertiesState = Properties;

function addProperties(state: PropertiesState, rentToBeAdded: Properties): PropertiesState {
    return rentToBeAdded;
}

function initPropertiesState(): PropertiesState {
    return {
        volum_del_negoci_familiar: 0,
        rendiments_del_patrimoni: 0,
        valor_cadastral_finques_rustiques: 0,
        valor_cadastral_finques_urbanes: 0
    }
}
export default function (state:PropertiesState = initPropertiesState() , action: PropertiesActions): PropertiesState {
    switch (action.type) {
        case 'ADD_PROPERTIES':
            return addProperties(state, action.properties);
        default:
            return state;
    }
}