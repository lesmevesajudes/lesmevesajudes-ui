// @flow
import type { HouseholdData } from './HouseholdDataTypes'
import type { HouseholdDataActions } from './HouseholdDataActions'

type HouseholdDataState = HouseholdData;

function addHouseholdData(state: HouseholdDataState, householdDataToBeAdded: HouseholdData): HouseholdDataState {
    return {...householdDataToBeAdded};
}

function initHouseholdDataState():HouseholdDataState {
    return {
        nivell_de_risc_d_exclusio_social: "No",
        tipus_familia_nombrosa: "No",
        tipus_familia_monoparental: "No",
        volum_del_negoci_familiar: 0,
        rendiments_del_patrimoni: 0,
        valor_cadastral_finques_rustiques: 0,
        valor_cadastral_finques_urbanes: 0
    }
}

export default function (state:HouseholdDataState = initHouseholdDataState() , action: HouseholdDataActions): HouseholdDataState {
    switch (action.type) {
        case 'ADD_HOUSEHOLD_DATA':
            return addHouseholdData(state, action.householdData);
        default:
            return state;
    }
}