/* global describe, it, toEqual */
import ChildrenReducer, {initChildState, serialize} from './ChildrenReducer';
import {addChild, removeChild} from './ChildrenActions';

describe('ChildrenReducer', () => {
    it('should add a child', () => {
        expect(
            serialize(
                ChildrenReducer(
                    initChildState(),
                    addChild(
                        {
                            id: '2j32j3l2jlj23',
                            dateBorn: '2010-12-12',
                            name: 'Maria'
                        }
                    )
                )
            )
        ).toEqual(
            [{
                id: '2j32j3l2jlj23',
                dateBorn: '2010-12-12',
                name: 'Maria'
            }]
        );
    }),
    it('should add a child to a preexisting child', () => {
        expect(
            serialize(
                ChildrenReducer(
                    initChildState([{
                        id: '2j32j3l2jlj23',
                        dateBorn: '2010-12-12',
                        name: 'Maria'
                    }]),
                    addChild(
                        {
                            id: 'de2e3ee233ede',
                            dateBorn: '2010-12-12',
                            name: 'Maria'
                        }
                    )
                )
            )
        ).toEqual(
            [
                {
                    id: '2j32j3l2jlj23',
                    dateBorn: '2010-12-12',
                    name: 'Maria'
                },
                {
                    id: 'de2e3ee233ede',
                    dateBorn: '2010-12-12',
                    name: 'Maria'
                }
            ]
        );
    }),
    it('add should update a child to if id exists', () => {
        expect(
            serialize(
                ChildrenReducer(
                    initChildState([{
                        id: 'de2e3ee233ede',
                        dateBorn: '2010-12-12',
                        name: 'Maria'
                    }]),
                    addChild(
                        {
                            id: 'de2e3ee233ede',
                            dateBorn: '2010-12-12',
                            name: 'Maria'
                        }
                    )
                ))
        ).toEqual(
            [
                {
                    id: 'de2e3ee233ede',
                    dateBorn: '2010-12-12',
                    name: 'Maria'
                }
            ]
        );
    }),
    it('add remove a child', () => {
        expect(
            serialize(
                ChildrenReducer(
                    initChildState([
                        {
                            id: 'de2e3ee233ede',
                            dateBorn: '2010-12-12',
                            name: 'Maria'
                        },
                        {
                            id: 'kjdhiwuehud',
                            dateBorn: '2010-10-12',
                            name: 'Pere'
                        }
                    ]),
                    removeChild('de2e3ee233ede')
                ))
        ).toEqual(
            [
                {
                    id: 'kjdhiwuehud',
                    dateBorn: '2010-10-12',
                    name: 'Pere'
                }
            ]
        );
    });
});
