// @flow
import type {Rent} from './RentTypes'
import type {RentActions} from './RentActions'

type RentState = Rent;

function addRent(state: RentState, rentToBeAdded: Rent): RentState {
    return rentToBeAdded;
}

function initRentState(): RentState {
    return {
        LLOGMAXBCN: false,
        esta_al_corrent_del_pagament_de_lloguer: false,
        lloguer_domiciliat: false,
        import_del_lloguer: 0
    }
}
export default function (state:RentState = initRentState() , action: RentActions): RentState {
    switch (action.type) {
        case 'ADD_RENT':
            return addRent(state, action.rent);
        default:
            return state;
    }
}