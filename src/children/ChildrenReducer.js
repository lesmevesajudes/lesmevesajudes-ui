// @flow
import {Map} from 'immutable';
import type {Child, ChildId, ChildState} from './ChildrenTypes'
import type {ChildActions} from './ChildrenActions'

function removeChild(state: ChildState, childIdToBeRemoved: ChildId): ChildState {
    return state.delete(childIdToBeRemoved);
}
function addChild(state: ChildState, childToBeAdded: Child): ChildState {
    return state.set(childToBeAdded.id, childToBeAdded);
}
function updateChild(state: ChildState, childToBeUpdated: Child): ChildState {
    return addChild(state, childToBeUpdated);
}

export function serialize(state: ChildState) {
    return state.toArray();
}
export function initChildState(initialValues: Array<Object>= []): ChildState {
    const initialValuesAsObject: Object = initialValues.reduce(
        function(acc, cur) {
            acc[cur.id] = cur;
            return acc;
            },
        {});
    return Map (initialValuesAsObject);
}
export default function (state:ChildState = initChildState() , action: ChildActions): ChildState {
    switch (action.type) {
        case 'ADD_CHILD':
            return addChild(state, action.child);
        case 'REMOVE_CHILD':
            return removeChild(state, action.childId);
        case 'UPDATE_CHILD':
            return updateChild(state, action.child);
        default:
            return state;
    }
}