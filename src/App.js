import React, {Component} from 'react';
import {applyMiddleware, createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import {createForms} from 'react-redux-form';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import IndexPage from './indexPage/IndexPage';
import SubjectForm from './subject/SubjectForm';
import ChildrenPage from './children/ChildrenPage';
import ChildrenUpdater from './children/ChildrenUpdater';
import ChildrenAdder from './children/ChildrenAdder';
import ChildrenReducer from './children/ChildrenReducer';
import AdultsPage from './adults/AdultsPage';
import AdultsUpdater from './adults/AdultsUpdater';
import AdultsAdder from './adults/AdultsAdder';
import AdultsReducer from './adults/AdultsReducer';
import FinancialDataPage from './financial/FinancialDataPage';
import FinancialDataUpdater from './financial/FinancialDataUpdater';
import FinancialDataAdder from './financial/FinancialDataAdder';
import FinancialDataReducer from "./financial/FinancialDataReducer";
import ResultsPage from './results/ResultsPage';
import ResultsReducer from './results/ResultsReducer';
import logo from './logo.svg';
import './App.css';

function isDevelopment() {
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
}

if (isDevelopment()) {
    //module.hot.accept();
    console.log("Environment: " + process.env.NODE_ENV);
}

const reducersCombined =combineReducers({
    results: ResultsReducer,
    children: ChildrenReducer,
    adults: AdultsReducer,
    financialData: FinancialDataReducer,
    ...createForms({
        user: null
    })
});

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const extensions = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = isDevelopment()?
    createStoreWithMiddleware(reducersCombined, extensions):
    createStoreWithMiddleware(reducersCombined);

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Social benefits simulator</h2>
                </div>
                <Provider store={ store }>
                    <BrowserRouter>
                        <Switch>
                            <Route exact={true} path="/" component={IndexPage}/>
                            <Route path="/subject/" component={SubjectForm}/>
                            <Route path="/adults/new" component={AdultsAdder}/>
                            <Route path="/adults/:id" component={AdultsUpdater}/>
                            <Route path="/adults/" component={AdultsPage}/>
                            <Route path="/children/new" component={ChildrenAdder}/>
                            <Route path="/children/:id" component={ChildrenUpdater}/>
                            <Route path="/children/" component={ChildrenPage}/>
                            <Route path="/financial/new" component={FinancialDataAdder}/>
                            <Route path="/financial/:id" component={FinancialDataUpdater}/>
                            <Route path="/financial/" component={FinancialDataPage}/>
                            <Route path="/results/" component={ResultsPage}/>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
