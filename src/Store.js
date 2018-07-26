import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './RootReducer';
import isDevelopment from './shared/isDevelopment';
import reduxThunk from 'redux-thunk'

export default function configureStore(initialState) {
  console.log('Configure store...');
  const middlewares = applyMiddleware(reduxThunk);
  const store = isDevelopment
      ? createStore(rootReducer, initialState, composeWithDevTools(middlewares))
      : createStore(rootReducer, initialState, middlewares);

  if (module.hot && isDevelopment) {
    console.log('HRM enabled');
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./RootReducer', () => {
      console.log('Reloading reducers...');
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
