// @flow
import type {Adult, AdultId} from './AdultsTypes';

type AddAdultAction = {
    type: 'ADD_ADULT';
    adult: Adult;
};

type RemoveAdultAction = {
    type: 'REMOVE_ADULT';
    adultId: AdultId;
};

type UpdateAdultAction = {
    type: 'UPDATE_ADULT';
    adult: Adult;
};

export type AdultActions = AddAdultAction | RemoveAdultAction | UpdateAdultAction

export function addAdult(adult: Adult): AddAdultAction {
    return {
        type: 'ADD_ADULT',
        adult: adult
    };
}
export function removeAdult(adultId: AdultId): RemoveAdultAction {
    return {
        type: 'REMOVE_ADULT',
        adultId: adultId
    };
}