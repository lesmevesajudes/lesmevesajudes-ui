import React, {Component} from 'react';
import {applyMiddleware, createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import IndexPage from './indexPage/IndexPage';
import ChildrenPage from './children/ChildrenPage';
import ChildrenAdder from './children/ChildrenForm';
import AdultsPage from './adults/AdultsPage';
import AdultsAdder from './adults/AdultsForm';
import FinancialDataPage from './financial/FinancialDataPage';
import FinancialDataAdder from './financial/FinancialDataForm';
import ResultsPage from './results/ResultsPage';
import HouseholdForm from "./household/HouseholdForm";
import AdminPage from './pages/Admin';
import WizardPage from './pages/Wizard';
import ChildrenReducer from './children/ChildrenReducer';
import AdultsReducer from './adults/AdultsReducer';
import FinancialDataReducer from "./financial/FinancialDataReducer";
import ResultsReducer from './results/ResultsReducer';
import HouseholdReducer from './household/HouseholdReducer';
import RentAdder from "./rent/RentForm";
import RentReducer from "./rent/RentReducer";
import PropertiesAdder from "./properties/PropertiesForm";
import BackButtonHOC from "./pages/BackButtonHOC";
import isDevelopment from './shared/isDevelopment';

import logo from './logo.svg';
import './App.css';
import PropertiesReducer from "./properties/PropertiesReducer";


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
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Simulador d'ajudes socials</h2>
                </div>
                <Provider store={ store }>
                    <BrowserRouter>
                        <Switch>
                            <Route exact={true} path="/" component={IndexPage}/>
                            <Route path="/admin/" component={AdminPage}/>
                            <Route path="/household/" component={BackButtonHOC(HouseholdForm, "/admin", "Tornar")}/>
                            <Route path="/adults/new" component={AdultsAdder}/>
                            <Route path="/adults/" component={BackButtonHOC(AdultsPage, "/admin", "Tornar")}/>
                            <Route path="/children/new" component={ChildrenAdder}/>
                            <Route path="/children/" component={BackButtonHOC(ChildrenPage, "/admin", "Tornar")}/>
                            <Route path="/financial/new" component={FinancialDataAdder}/>
                            <Route path="/financial/" component={BackButtonHOC(FinancialDataPage, "/admin", "Tornar")}/>
                            <Route path="/rent/" component={BackButtonHOC(RentAdder, "/admin", "Tornar")}/>
                            <Route path="/properties/" component={BackButtonHOC(PropertiesAdder, "/admin", "Tornar")}/>
                            <Route path="/results/" component={BackButtonHOC(ResultsPage, "/admin", "Tornar")}/>
                            <Route path="/wizard" component={WizardPage}/>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
