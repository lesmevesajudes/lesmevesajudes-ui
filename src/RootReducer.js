import ResultsReducer from "./results/ResultsReducer";
import {combineReducers} from "redux";
import {reducer as reduxFormReducer} from "redux-form";
import PersonsReducer from "./persons/PersonsReducer";
import HouseholdReducer from "./household/HouseholdReducer";
import RentReducer from "./rent/RentReducer";
import StepReducer from "./components/Steps/StepsReducer"
import ModalReducer from "./components/Modals/ModalReducer";

export const rootReducer = combineReducers({
  results: ResultsReducer,
  persons: PersonsReducer,
  household: HouseholdReducer,
  rent: RentReducer,
  step: StepReducer,
  modals: ModalReducer,
  form: reduxFormReducer

});
