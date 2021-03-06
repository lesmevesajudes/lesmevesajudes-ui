import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import HelpSystemReducer from './components/HelpSystem/HelpSystemReducer';
import ModalReducer from './components/Modals/ModalReducer';
import {ShowMeOnceReducer} from './components/ShowMeOnceModal/ShowMeOnceReducer';
import StepReducer from './components/Steps/StepsReducer'
import FamilyReducer from './family/FamilyReducer';
import PersonsReducer from './persons/PersonsReducer';
import ReportBugReducer from "./reportBug/ReportBugReducer";
import ResidenceReducer from './residence/ResidenceReducer';
import ResultsReducer from './results/ResultsReducer';
import AdminReducer from './admin/AdminReducer';

const rootReducer = combineReducers({
  family: FamilyReducer,
  form: reduxFormReducer,
  helpSystem: HelpSystemReducer,
  modals: ModalReducer,
  persons: PersonsReducer,
  results: ResultsReducer,
  residence: ResidenceReducer,
  showMeOnceModals: ShowMeOnceReducer,
  step: StepReducer,
  reportBug: ReportBugReducer,
  admin: AdminReducer,
});

export default rootReducer;
