// @flow
import {Map} from 'immutable';
export type FinancialDataId = string;

export type FinancialData = {
    id: FinancialDataId;
    receptorId: string;
    amount: number;
    type: string;
    extra: string;
}

export type FinancialDataState = Map<string, FinancialData>;