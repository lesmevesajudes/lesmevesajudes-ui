// @flow
import {Map} from 'immutable';

import type {IncomeData, IncomeDataId, IncomeDataState} from './IncomeTypes'
import type {IncomeDataActions} from './IncomeActions'

function removeIncomeData(state: IncomeDataState, incomeDataIdToBeRemoved: IncomeDataId): IncomeDataState {
    return state.delete(incomeDataIdToBeRemoved);
}
function addIncomeData(state: IncomeDataState, incomeDataToBeAdded: IncomeData): IncomeDataState {
    return state.set(incomeDataToBeAdded.id, incomeDataToBeAdded);
}
function updateIncomeData(state: IncomeDataState, incomeDataToBeUpdated: IncomeData): IncomeDataState {
    return addIncomeData(state, incomeDataToBeUpdated);
}

export function serialize(state:IncomeDataState): IncomeData[] {
    return state.toArray();
}
export function initIncomeDataState(initialValues: Array<Object>= []): IncomeDataState {
    const initialValuesAsObject: Object = initialValues.reduce(
        function(acc, cur) {
            acc[cur.id] = cur;
            return acc;
            },
        {});
    return Map (initialValuesAsObject);
}
export default function (state:IncomeDataState = initIncomeDataState() , action: IncomeDataActions): IncomeDataState {
    switch (action.type) {
        case 'ADD_INCOME_DATA':
            return addIncomeData(state, action.incomeData);
        case 'REMOVE_INCOME_DATA':
            return removeIncomeData(state, action.incomeDataId);
        case 'UPDATE_INCOME_DATA':
            return updateIncomeData(state, action.incomeData);
        default:
            return state;
    }
}