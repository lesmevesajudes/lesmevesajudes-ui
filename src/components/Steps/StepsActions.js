//@flow
import {nextStep, backStep,buttonsOkey, buttonsDisabled, buttonsHidden} from './StepsTypes'

export type NextStep = {type: "NEXT_STEP",step: number};
export type BackStep = {type: "BACK_STEP",step: number};
export type ButtonsOkey = {type: 'BUTTONS_OKEY', buttons_status: string};
export type ButtonsDisabled = {type: 'BUTTONS_DISABLED', buttons_status: string};
export type ButtonsHidden = {type: 'BUTTONS_HIDDEN', buttons_status: string};


export type StepActions =
    | NextStep
    | BackStep;
export type ButtonActions =
    | ButtonsOkey
    | ButtonsDisabled
    | ButtonsHidden;
    
export type State = {
  ui: {
    counter: number,
    buttons_status: string,
  },
};
export function ButtonOkeyAction(): ButtonsOkey {
  return {type: buttonsOkey};
}
export function ButtonsHiddenAction(): ButtonsOkey {
  return {type: buttonsHidden};
}
export function ButtonsDisabledAction(): ButtonsOkey {
  return {type: buttonsDisabled};
}
export function NextStepAction(): NextStep {
  return {type: nextStep};
}
export function BackStepAction(): BackStep {
  return {type: backStep};
}
