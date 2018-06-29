//@flow

type ActionsTypes =
    'NEXT_STEP'
    | 'BACK_STEP'
    | 'BUTTONS_VISIBLE'
    | 'BUTTONS_DISABLED'
    | 'BUTTONS_ENABLED'
    | 'BUTTONS_HIDDEN'
    | 'SET_ACTUAL_STEP'
export type StepAction = {
  type: ActionsTypes,
  index?: number
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

export function setActualStep(index: number): StepAction {
  return {type: 'SET_ACTUAL_STEP', index};
}

export function nextStep(): StepAction {
  return {type: 'NEXT_STEP'};
}

export function backStep(): StepAction {
  return {type: 'BACK_STEP'};
}
