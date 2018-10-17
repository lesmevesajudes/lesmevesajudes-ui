import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import ModalReducer from './components/Modals/ModalReducer';
import {ShowMeOnceReducer} from './components/ShowMeOnceModal/ShowMeOnceReducer';
import StepReducer from './components/Steps/StepsReducer'
import FamilyReducer from './family/FamilyReducer';
import PersonsReducer from './persons/PersonsReducer';
import ReportBugReducer from "./reportBug/ReportBugReducer";
import ResidenceReducer from './residence/ResidenceReducer';
import ResultsReducer from './results/ResultsReducer';

const rootReducer = combineReducers({
  results: ResultsReducer,
  persons: PersonsReducer,
  family: FamilyReducer,
  residence: ResidenceReducer,
  step: StepReducer,
  modals: ModalReducer,
  reportBug: ReportBugReducer,
  showMeOnceModals: ShowMeOnceReducer,
  form: reduxFormReducer
});

export default rootReducer;
