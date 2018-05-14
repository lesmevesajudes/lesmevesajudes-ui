import {nextStep, backStep, actualStep} from './StepsTypes'

type NextStep = {
  type: "NEXT_STEP",
  step: nextStep
};
type BackStep = {
  type: "BACK_STEP",
  step: backStep
};
type getActualStep = {
  type: "ACTUAL_STEP",
  step: actualStep
}
export type StepActions =
    | NextStep
    | getActualStep
    | BackStep;
    
export type State = {
  ui: {
    counter: number,
  },
};

export type Action =
    { type: 'NEXT_STEP' }
  | { type: 'BACK_STEP' }
  ;

export function NextStepAction(index): NextStep {
  return {
    type: "NEXT_STEP",
    step: nextStep
  };
}
¡
