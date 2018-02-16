// @flow
import type {IncomeData, IncomeDataId} from './IncomeDataTypes';

type AddIncomeDataAction = {
    type: 'ADD_INCOME_DATA';
    incomelData: IncomeData;
};

type RemoveIncomeDataAction = {
    type: 'REMOVE_INCOME_DATA';
    incomeDataId: IncomeDataId;
};

type UpdateIncomeDataAction = {
    type: 'UPDATE_INCOME_DATA';
    incomeData: IncomeData;
};

export type IncomeDataActions = AddIncomeDataAction | RemoveIncomeDataAction | UpdateIncomeDataAction

export function addIncomeData(incomeDataRecord: IncomeData): AddIncomeDataAction {
    return {
        type: 'ADD_INCOME_DATA',
        incomeData: incomeDataRecord
    };
}
export function removeIncomeData(incomeDataId: IncomeDataId): RemoveIncomeDataAction {
    return {
        type: 'REMOVE_INCOME_DATA',
        incomeDataId: incomeDataId
    };
}
export function updateIncomeData(incomeDataRecord: IncomeData): UpdateIncomeDataAction {
    return {
        type: 'UPDATE_INCOME_DATA',
        incomeData: incomeDataRecord
    };
}