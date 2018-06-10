//@flow

type NextStepAction = { type: 'NEXT_STEP' };
type BackStepAction = { type: 'BACK_STEP' };
type ButtonsShowAction = { type: 'BUTTONS_VISIBLE' };
type ButtonsDisabledAction = { type: 'BUTTONS_DISABLED' };
type ButtonsEnabledAction = { type: 'BUTTONS_ENABLED' };
type ButtonsHiddenAction = { type: 'BUTTONS_HIDDEN' };

export type StepsActions =
    | ButtonsShowAction
    | ButtonsHiddenAction
    | ButtonsDisabledAction
    | ButtonsEnabledAction
    | NextStepAction
    | BackStepAction;

export function showButtons(): StepsActions {
  return {type: 'BUTTONS_VISIBLE'};
}

export function hideButtons(): StepsActions {
  return {type: 'BUTTONS_HIDDEN'};
}

export function disableButtons(): StepsActions {
  return {type: 'BUTTONS_DISABLED'};
}

export function enableButtons(): StepsActions {
  return {type: 'BUTTONS_ENABLED'};
}

export function nextStep(): StepsActions {
  return {type: 'NEXT_STEP'};
}

export function backStep(): StepsActions {
  return {type: 'BACK_STEP'};
}
