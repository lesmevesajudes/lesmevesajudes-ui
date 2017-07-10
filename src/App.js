import React, {Component} from 'react';
import {applyMiddleware, createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import {createForms} from 'react-redux-form';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import IndexPage from './indexPage/IndexPage';
import SubjectForm from './subject/SubjectForm';
import ChildrenPage from './children/ChildrenPage';
import ChildrenUpdater from './children/ChildrenUpdater';
import ChildrenAdder from './children/ChildrenAdder';
import Results from './results/ResultsPage';

import ResultsReducer from './results/ResultsReducer';


import promise from 'redux-promise';

import logo from './logo.svg';
import './App.css';
import ChildrenReducer from "./children/ChildrenReducer";

const initialUserState = {
    name: '',
    income: 0,
    children: []
};

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const store = createStoreWithMiddleware(
    combineReducers({
        results: ResultsReducer,
        children: ChildrenReducer,
        ...createForms({
                         user: initialUserState
                     })
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
                            <Route path="/children/new" component={ChildrenAdder}/>
                            <Route path="/children/:id" component={ChildrenUpdater}/>
                            <Route path="/children/" component={ChildrenPage}/>
                            <Route path="/results/" component={Results}/>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
