// @flow
import type {Child, ChildId} from './ChildrenTypes';

type AddChildAction = {
    type: 'ADD_CHILD';
    child: Child;
};

type RemoveChildAction = {
    type: 'REMOVE_CHILD';
    childId: ChildId;
};

type UpdateChildAction = {
    type: 'UPDATE_CHILD';
    child: Child;
};

export type ChildActions = AddChildAction | RemoveChildAction | UpdateChildAction

export function addChild(child: Child): AddChildAction {
    return {
        type: 'ADD_CHILD',
        child: child
    };
}
export function updateChild(child: Child): UpdateChildAction {
    return {
        type: 'UPDATE_CHILD',
        child: child
    };
}
export function removeChild(childId: ChildId): RemoveChildAction {
    return {
        type: 'REMOVE_CHILD',
        childId: childId
    };
}