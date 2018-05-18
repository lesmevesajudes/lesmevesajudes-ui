//@flow
import {nextStep, backStep} from './StepsTypes'

export type NextStep = {type: "NEXT_STEP",step: number};
export type BackStep = {type: "BACK_STEP",step: number};

export type StepActions =
    | NextStep
    | BackStep;
    
export type State = {
  ui: {
    counter: number,
  },
};


export function NextStepAction(value:number): NextStep {
  return {type: "NEXT_STEP",step: value};
}
export function BackStepAction(value:number): BackStep {
  return {type: "BACK_STEP",step: value};
}
