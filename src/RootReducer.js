import ResultsReducer from "./results/ResultsReducer";
import {combineReducers} from "redux";
import {reducer as reduxFormReducer} from "redux-form";
import PersonsReducer from "./persons/PersonsReducer";
import HouseholdReducer from "./household/HouseholdReducer";
import RentReducer from "./rent/RentReducer";

export const rootReducer = combineReducers({
  results: ResultsReducer,
  persons: PersonsReducer,
  household: HouseholdReducer,
  rent: RentReducer,
  form: reduxFormReducer // mounted under "form"
});
