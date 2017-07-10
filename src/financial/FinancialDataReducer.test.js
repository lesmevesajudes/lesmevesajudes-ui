/* global describe, it, toEqual */
import FinancialDataReducer, {initFinancialDataState, serialize} from './FinancialDataReducer';
import {addFinancialData, removeFinancialData} from './FinancialDataActions';

describe('FinancialDataReducer', () => {
    it('should add a financialData', () => {
        expect(
            serialize(
                FinancialDataReducer(
                    initFinancialDataState(),
                    addFinancialData(
                        {
                            id: '2j32j3l2jlj23',
                            description: 'wage',
                            amount: 1000
                        }
                    )
                )
            )
        ).toEqual(
            [{
                id: '2j32j3l2jlj23',
                description: 'wage',
                amount: 1000
            }]
        );
    }),
        it('should add a financialData to a preexisting financialData', () => {
            expect(
                serialize(
                    FinancialDataReducer(
                        initFinancialDataState([
                            {
                                id: '2j32j3l2jlj23',
                                description: 'wage',
                                amount: 1000
                            }]),
                        addFinancialData(
                            {
                                id: '982u382u3982u3',
                                description: 'rent',
                                amount: -100
                            }
                        )
                    )
                )
            ).toEqual(
                [
                    {
                        id: '2j32j3l2jlj23',
                        description: 'wage',
                        amount: 1000
                    },
                    {
                        id: '982u382u3982u3',
                        description: 'rent',
                        amount: -100
                    }
                ]
            );
        }),
        it('add should update a financialData to if id exists', () => {
            expect(
                serialize(
                    FinancialDataReducer(
                        initFinancialDataState([
                            {
                                id: '2j32j3l2jlj23',
                                description: 'wage',
                                amount: 1000
                            }]),
                        addFinancialData(
                            {
                                id: '2j32j3l2jlj23',
                                description: 'wage',
                                amount: 1300
                            }
                        )
                    ))
            ).toEqual(
                [
                    {
                        id: '2j32j3l2jlj23',
                        description: 'wage',
                        amount: 1300
                    }
                ]
            );
        }),
        it('add remove a financialData', () => {
            expect(
                serialize(
                    FinancialDataReducer(
                        initFinancialDataState([
                            {
                                id: '2j32j3l2jlj23',
                                description: 'wage',
                                amount: 1000
                            },
                            {
                                id: '982u382u3982u3',
                                description: 'rent',
                                amount: -100
                            }
                        ]),
                        removeFinancialData('2j32j3l2jlj23')
                    ))
            ).toEqual(
                [
                    {
                        id: '982u382u3982u3',
                        description: 'rent',
                        amount: -100
                    }
                ]
            );
        });
});
