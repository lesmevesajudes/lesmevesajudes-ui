//@flow
import type {ModalActions} from './ModalActions';
import type {ModalState} from './ModalTypes';

export default function (
    state: ModalState = {},
    action: ModalActions
): ModalState {
  switch (action.type) {
    case 'OPEN_MODAL':
      if (typeof state.currentModalName !== 'undefined') throw new Error(`A modal is already open: ${state.currentModalName}`);
      return {currentModalName: action.modalName, top: action.top, left: action.left};
    case 'CLOSE_MODAL':
      return {};
    default:
      return state;
  }
}
