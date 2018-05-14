// @flow
import {NEXTSTEP, BACKSTEP} from './StepsTypes';
import type { State, Action } from './StepsTypes';

const initial = {
  counter: 0,
};

export default (state: State.ui = initial, action: Action) => {
  switch (action.type) {
    case NEXTSTEP: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case BACKSTEP:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
