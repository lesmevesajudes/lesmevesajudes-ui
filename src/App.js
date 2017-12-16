import React, {Component} from 'react';
import {applyMiddleware, createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import IndexPage from './indexPage/IndexPage';
import WizardPage from './pages/Wizard';
import ChildrenReducer from './children/ChildrenReducer';
import AdultsReducer from './adults/AdultsReducer';
import FinancialDataReducer from "./financial/FinancialDataReducer";
import ResultsReducer from './results/ResultsReducer';
import HouseholdReducer from './household/HouseholdReducer';
import RentReducer from "./rent/RentReducer";
import isDevelopment from './shared/isDevelopment';
import './App.css';
import './select-css.css';
import PropertiesReducer from "./properties/PropertiesReducer";
import AppHeader from "./components/header/AppHeader";
import ReportBugPage from "./reportBug/ReportBugPage";


if (isDevelopment) {
    //module.hot.accept();
    console.log("Environment: " + process.env.NODE_ENV);
}

const reducersCombined =combineReducers({
    results: ResultsReducer,
    children: ChildrenReducer,
    adults: AdultsReducer,
    rent: RentReducer,
    properties: PropertiesReducer,
    financialData: FinancialDataReducer,
    householdData: HouseholdReducer
});

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const extensions = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = isDevelopment?
    createStoreWithMiddleware(reducersCombined, extensions):
    createStoreWithMiddleware(reducersCombined);


class App extends Component {
    render() {
        return (
            <div className="App">
                <AppHeader/>
                <div className="content">
                    <Provider store={ store }>
                        <BrowserRouter>
                            <Switch>
                                <Route exact={true} path="/" component={IndexPage}/>
                                <Route path="/wizard" component={WizardPage}/>
                                <Route path="/reportBug" component={ReportBugPage}/>
                            </Switch>
                        </BrowserRouter>
                    </Provider>
                </div>
            </div>
        );
    }
}

export default App;
