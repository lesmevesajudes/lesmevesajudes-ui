//@flow

export type OpenModal = {
  type: 'OPEN_MODAL',
  modalName: string,
  top: number,
  left: number
};

export type CloseModal = {
  type: 'CLOSE_MODAL',
  modalName: string
};

export type ModalActions =
    | OpenModal
    | CloseModal

export function openModal(modalName: string, top: number, left: number): ModalActions {
  return {
    type: 'OPEN_MODAL',
    modalName: modalName,
    top: top,
    left: left
  }
}

export function closeModal(modalName: string): ModalActions {
  return {
    type: 'CLOSE_MODAL',
    modalName: modalName
  }
}
