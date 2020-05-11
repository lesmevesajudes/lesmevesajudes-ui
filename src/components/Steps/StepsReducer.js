// @flow
import type {StepAction} from './StepsActions';
import type {StepsState} from './StepsTypes';


const initial: StepsState = {
  button_enabled: false,
  button_visible: false,
  is_show_simulation: false,
  show_resum: false,
  step:'NumberOfPersonsLivingTogether',
  number_of_persons_living_together: 0,
  retrieveSimulationError: '',
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
      return {
    	...state,
    	button_enabled: true,
    	button_visible: true,
    	number_of_persons_living_together: Object.keys(action.simulation.persons).length,
    	state: 'personsList',
    	is_show_simulation: true,
    }
    case 'SHOW_RESUM':
      return {
    	...state,
    	show_resum: true,
    }
    default:
      return state;
  }
};
