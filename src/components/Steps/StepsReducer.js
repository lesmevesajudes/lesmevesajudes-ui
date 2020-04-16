// @flow
import type {StepAction} from './StepsActions';
import type {StepsState} from './StepsTypes';


const initial: StepsState = {
  button_enabled: false,
  button_visible: false,
  step:'NumberOfPersonsLivingTogether',
  numberOfPersonsLivingTogether: 0,
};

export default (state: StepsState = initial, action: StepAction): StepsState => {
  switch (action.type) {
    case 'BUTTONS_VISIBLE':
      return {
        ...state,
        button_visible: true,
        state: '',
      };
    case 'BUTTONS_DISABLED':
      return {
        ...state,
        button_enabled: false,
        state: '',
      };
    case 'BUTTONS_ENABLED':
      return {
        ...state,
        button_enabled: true,
        state: '',
      };
    case 'BUTTONS_HIDDEN':
      return {
        ...state,
        button_visible: false,
        state: '',
        
      };
    case 'SHOW_SIMULATION':
      var personList= action.simulation.persones;
      return {
    	...state,
    	button_enabled: true,
    	button_visible: true,
    	numberOfPersonsLivingTogether: Object.keys(personList).length,
    	state: 'personsList',
    }
    default:
      return state;
  }
};
