// @flow
import {Map} from 'immutable';

import type {Adult, AdultId, AdultState} from './AdultsTypes'
import type {AdultActions} from './AdultsActions'

function removeAdult(state: AdultState, adultIdToBeRemoved: AdultId): AdultState {
    return state.delete(adultIdToBeRemoved);
}
function addAdult(state: AdultState, adultToBeAdded: Adult): AdultState {
    return state.set(adultToBeAdded.id, adultToBeAdded);
}
function updateAdult(state: AdultState, adultToBeUpdated: Adult): AdultState {
    return addAdult(state, adultToBeUpdated);
}

export function serialize(state:AdultState): Adult[] {
    return state.toArray();
}
export function initAdultState(initialValues: Array<Object>= []): AdultState {
    /*const initialValuesAsObject: Object = initialValues.reduce(
        function(acc, cur) {
            acc[cur.id] = cur;
            return acc;
            },
        {});
    return Map (initialValuesAsObject);*/
    return Map({
        'e4f16155-1bb6-4f9b-8d01-4ec7e2cff021': (({
            nom: 'Joan',
            data_naixement: '1978-01-15',
            rol: 'pares',
            sexe: 'dona',
            tipus_document_identitat: 'DNI',
            data_alta_padro: '2010-10-29',
            situacio_laboral: 'treball_compte_alie',
            id: 'e4f16155-1bb6-4f9b-8d01-4ec7e2cff021'
        }: any): Adult),
        '4efdb18c-e5a6-42cd-81ec-b81be8467da2': (({
            nom: 'Maria',
            data_naixement: '2010-10-10',
            rol: 'fill',
            sexe: 'dona',
            tipus_document_identitat: 'DNI',
            data_alta_padro: '2010-10-10',
            id: '4efdb18c-e5a6-42cd-81ec-b81be8467da2'
        }: any): Adult)
    });
}
export default function (state:AdultState = initAdultState() , action: AdultActions): AdultState {
    switch (action.type) {
        case 'ADD_ADULT':
            return addAdult(state, action.adult);
        case 'REMOVE_ADULT':
            return removeAdult(state, action.adultId);
        case 'UPDATE_ADULT':
            return updateAdult(state, action.adult);
        case 'ADD_INCOME_DATA':
            return updateAdult(state, Object.assign(state.get(action.adultId), {ingressos_bruts: action.ingressos_bruts}));
        default:
            return state;
    }
}