// @flow
import {nextStep, backStep} from './StepsTypes';
import type { State, Action } from './StepsTypes';

const initial = {
  counter: 0,
};

export default (state: State.ui = initial, action: Action) => {
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
    default:
      return state;
  }
};
