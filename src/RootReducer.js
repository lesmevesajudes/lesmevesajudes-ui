import ResultsReducer from "./results/ResultsReducer";
import {combineReducers} from "redux";
import {reducer as reduxFormReducer} from "redux-form";
import PersonsReducer from "./persons/PersonsReducer";
import FamilyReducer from "./family/FamilyReducer";
import ResidenceReducer from "./residence/ResidenceReducer";
import StepReducer from "./components/Steps/StepsReducer"
import ModalReducer from "./components/Modals/ModalReducer";

export const rootReducer = combineReducers({
  results: ResultsReducer,
  persons: PersonsReducer,
  family: FamilyReducer,
  residence: ResidenceReducer,
  step: StepReducer,
  modals: ModalReducer,
  form: reduxFormReducer

});
