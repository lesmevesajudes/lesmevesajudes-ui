import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./RootReducer";
import isDevelopment from "./shared/isDevelopment";
import promise from "redux-promise";

export default function configureStore(initialState) {
  console.log("Configure store...");
  const middlewares = applyMiddleware(promise);
  const store = isDevelopment
      ? createStore(rootReducer, initialState, composeWithDevTools(middlewares))
      : createStore(rootReducer, initialState, middlewares);
  console.log("HRM: ", module.hot);
  if (module.hot) {
    console.log("HRM enabled");
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./RootReducer', () => {
      console.log("Reloading...");
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
