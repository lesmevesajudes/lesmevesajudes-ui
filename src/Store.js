import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./RootReducer";
import isDevelopment from "./shared/isDevelopment";
import promise from "redux-promise";

export default function configureStore(initialState) {
  const middlewares = applyMiddleware(promise);
  const store = isDevelopment
      ? createStore(rootReducer, initialState, composeWithDevTools(middlewares))
      : createStore(rootReducer, initialState, middlewares);

  if (module.hot && isDevelopment) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./RootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
