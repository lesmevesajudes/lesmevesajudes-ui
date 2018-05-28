// @flow
import type {Action, State} from './StepsTypes';
import {nextStep, backStep,buttonsOkey, buttonsDisabled, buttonsHidden} from './StepsTypes';

const initial = {
  counter: 0,
  buttons_status: 'okey'
};

export default (state: State = initial, action: Action) => {
  switch (action.type) {
    case nextStep: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case backStep:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case buttonsOkey:
      return {
        ...state,
        buttons_status: 'okey'
      };
    case buttonsDisabled:
      return {
        ...state,
        buttons_status: 'disabled'
      };
    case buttonsHidden:
      return {
        ...state,
        buttons_status: 'hidden'
      };
    default:
      return state;
  }
};
