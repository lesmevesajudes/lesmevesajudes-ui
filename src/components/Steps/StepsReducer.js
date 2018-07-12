// @flow
import type {StepAction} from './StepsActions';
import type {StepsState} from './StepsTypes';


const initial: StepsState = {
  button_enabled: false,
  button_visible: false
};

export default (state: StepsState = initial, action: StepAction): StepsState => {
  switch (action.type) {
    case 'BUTTONS_VISIBLE':
      return {
        ...state,
        button_visible: true
      };
    case 'BUTTONS_DISABLED':
      return {
        ...state,
        button_enabled: false
      };
    case 'BUTTONS_ENABLED':
      return {
        ...state,
        button_enabled: true
      };
    case 'BUTTONS_HIDDEN':
      return {
        ...state,
        button_visible: false
      };
    default:
      return state;
  }
};
