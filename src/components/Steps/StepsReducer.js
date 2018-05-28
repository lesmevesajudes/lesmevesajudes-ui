import type {Action, State} from './StepsTypes';
// @flow
import {backStep, nextStep} from './StepsTypes';

const initial = {
  counter: 0,
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
    default:
      return state;
  }
};
