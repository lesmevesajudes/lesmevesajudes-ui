type ShowMeOnceModalState = {
  seenModals: Array<string>
}

export type ModalSeenAction = {
  type: 'MODAL_SEEN',
  name: string
};

export const modalSeenAction = (name: string): ModalSeenAction =>
    ({type: 'MODAL_SEEN', name: name});
export const ShowMeOnceReducer = (state: ShowMeOnceModalState = {seenModals: []}, action: ModalSeenAction) => {
  switch (action.type) {
    case 'MODAL_SEEN':
      return {seenModals: [...state.seenModals, action.name]};
    default:
      return state;
  }
};
