//@flow

type ActionsTypes =
    'BUTTONS_VISIBLE'
    | 'BUTTONS_DISABLED'
    | 'BUTTONS_ENABLED'
    | 'BUTTONS_HIDDEN'

export type StepAction = {
  type: ActionsTypes,
  index?: number,
  steps?: Object
};

export function showButtons(): StepAction {
  return {type: 'BUTTONS_VISIBLE'};
}

export function hideButtons(): StepAction {
  return {type: 'BUTTONS_HIDDEN'};
}

export function disableButtons(): StepAction {
  return {type: 'BUTTONS_DISABLED'};
}

export function enableButtons(): StepAction {
  return {type: 'BUTTONS_ENABLED'};
}
