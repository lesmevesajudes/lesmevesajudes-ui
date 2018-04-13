import React, {Component} from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import promise from "redux-promise";

import IndexPage from "./indexPage/IndexPage";
import WizardPage from "./pages/Wizard";
import AdultsReducer from "./adults/AdultsReducer";
import ResultsReducer from "./results/ResultsReducer";
import RentReducer from "./rent/RentReducer";
import isDevelopment from "./shared/isDevelopment";
import "./styles/styles.css";
import CorporateHeader from "./components/Header/CorporateHeader";
import ReportBugPage from "./reportBug/ReportBugPage";
import InfoRAI from "./pages/InfoRAI";
import InfoRGC from "./pages/InfoRGC";
import InfoLloguer from "./pages/InfoLloguer";
import InfoMenjador from "./pages/InfoMenjador";
import InfoFonsInfancia from "./pages/InfoFonsInfancia";
import ScrollToTop from "./components/Common/ScrollToTop";
<<<<<<< HEAD
import {CssBaseline} from "material-ui";
import {reducer as reduxFormReducer} from "redux-form";
=======
import { reducer as reduxFormReducer } from "redux-form";
>>>>>>> Update buttons. temp fix
import HouseholdReducer from "./household/HouseholdReducer";
import {composeWithDevTools} from "redux-devtools-extension";

if (isDevelopment) {
  //module.hot.accept();
  console.log("Environment: " + process.env.NODE_ENV);
}

const reducersCombined = combineReducers({
  results: ResultsReducer,
  adults: AdultsReducer,
  household: HouseholdReducer,
  rent: RentReducer,
  form: reduxFormReducer // mounted under "form"
});

const middlewares = applyMiddleware(promise);

const store = isDevelopment
    ? createStore(reducersCombined, composeWithDevTools(middlewares))
    : createStore(reducersCombined, middlewares);

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
        <div>
          <CorporateHeader/>
          <CssBaseline/>
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <ScrollToTop>
                  <Route exact={true} path="/" component={IndexPage}/>
                  <Route path="/wizard" component={WizardPage}/>
                  <Route path="/reportBug" component={ReportBugPage}/>
                  <Route path="/ajuts/rai" component={InfoRAI}/>
                  <Route path="/ajuts/rgc" component={InfoRGC}/>
                  <Route path="/ajuts/lloguer" component={InfoLloguer}/>
                  <Route path="/ajuts/menjador" component={InfoMenjador}/>
                  <Route path="/ajuts/fons_infancia" component={InfoFonsInfancia}/>
                </ScrollToTop>
              </Switch>
            </BrowserRouter>
          </Provider>
        </div>
=======
      <div>
        <CorporateHeader />
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <ScrollToTop>
                <Route exact={true} path="/" component={IndexPage} />
                <Route path="/wizard" component={WizardPage} />
                <Route path="/reportBug" component={ReportBugPage} />
                <Route path="/ajuts/rai" component={InfoRAI} />
                <Route path="/ajuts/rgc" component={InfoRGC} />
                <Route path="/ajuts/lloguer" component={InfoLloguer} />
                <Route path="/ajuts/menjador" component={InfoMenjador} />
                <Route
                  path="/ajuts/fons_infancia"
                  component={InfoFonsInfancia}
                />
              </ScrollToTop>
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
>>>>>>> Update buttons. temp fix
    );
  }
}

export default App;
