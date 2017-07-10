// @flow
import {Map} from 'immutable';
import type {FinancialData, FinancialDataId} from './FinancialDataTypes'
import type {FinancialDataActions} from './FinancialDataActions'

type FinancialDataState = Map<string, FinancialData>;

function removeFinancialData(state: FinancialDataState, financialDataIdToBeRemoved: FinancialDataId): FinancialDataState {
    return state.delete(financialDataIdToBeRemoved);
}
function addFinancialData(state: FinancialDataState, financialDataToBeAdded: FinancialData): FinancialDataState {
    return state.set(financialDataToBeAdded.id, financialDataToBeAdded);
}
function updateFinancialData(state: FinancialDataState, financialDataToBeUpdated: FinancialData): FinancialDataState {
    return addFinancialData(state, financialDataToBeUpdated);
}

export function serialize(state:FinancialDataState) {
    return state.toArray();
}

export function initFinancialDataState(initialValues: Array<Object>= []): FinancialDataState {
    const initialValuesAsObject: Object = initialValues.reduce(
        function(acc, cur) {
            acc[cur.id] = cur;
            return acc;
        },
        {});
    return Map (initialValuesAsObject);
}
export default function (state:FinancialDataState = initFinancialDataState() , action: FinancialDataActions): FinancialDataState {
    switch (action.type) {
        case 'ADD_FINANCIAL_DATA':
            return addFinancialData(state, action.financialData);
        case 'REMOVE_FINANCIAL_DATA':
            return removeFinancialData(state, action.financialDataId);
        case 'UPDATE_FINANCIAL_DATA':
            return updateFinancialData(state, action.financialData);
        default:
            return state;
    }
}