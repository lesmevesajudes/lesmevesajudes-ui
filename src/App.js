import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineForms } from 'react-redux-form';

import SubjectForm from './subject/SubjectForm';

import logo from './logo.svg';
import './App.css';

const initialUser = { name: '' };

const store = createStore(combineForms({
        user: initialUser,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <Provider store={ store }>
                    <SubjectForm />
                </Provider>
            </div>
        );
    }
}

export default App;
