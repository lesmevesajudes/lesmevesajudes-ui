// @flow
export type FinancialDataId = string;

export type FinancialData = {
    id: FinancialDataId;
    receptorId: string;
    amount: number;
    type: string;
}
