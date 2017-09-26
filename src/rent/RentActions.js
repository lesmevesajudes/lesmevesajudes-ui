// @flow
import type {Rent} from './RentTypes';

type AddRentAction = {
    type: 'ADD_RENT';
    rent: Rent;
};

export type RentActions = AddRentAction

export function addRent(rentRecord: Rent): AddRentAction {
    return {
        type: 'ADD_RENT',
        rent: rentRecord
    };
}