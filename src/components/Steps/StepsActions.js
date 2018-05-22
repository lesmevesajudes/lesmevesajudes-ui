//@flow
import {nextStep, backStep} from './StepsTypes'

export type NextStep = {type: "NEXT_STEP",step: number};
export type BackStep = {type: "BACK_STEP",step: number};
export type ActualStep = {type: "ACTUAL_STEP",step:number};
export type StepActions =
    | NextStep
    | BackStep;
    
export type State = {
  ui: {
    counter: number,
  },
};


export function NextStepAction(): NextStep {
  return {type: nextStep};
}
export function BackStepAction(): BackStep {
  return {type: backStep};
}
