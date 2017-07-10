// @flow
import type {FinancialData, FinancialDataId} from './FinancialDataTypes';

type AddFinancialDataAction = {
    type: 'ADD_FINANCIAL_DATA';
    financialData: FinancialData;
};

type RemoveFinancialDataAction = {
    type: 'REMOVE_FINANCIAL_DATA';
    financialDataId: FinancialDataId;
};

type UpdateFinancialDataAction = {
    type: 'UPDATE_FINANCIAL_DATA';
    financialData: FinancialData;
};

export type FinancialDataActions = AddFinancialDataAction | RemoveFinancialDataAction | UpdateFinancialDataAction

export function addFinancialData(financialDataRecord: FinancialData): AddFinancialDataAction {
    return {
        type: 'ADD_FINANCIAL_DATA',
        financialData: financialDataRecord
    };
}
export function removeFinancialData(financialDataId: FinancialDataId): RemoveFinancialDataAction {
    return {
        type: 'REMOVE_FINANCIAL_DATA',
        financialDataId: financialDataId
    };
}