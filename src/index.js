import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import registerServiceWorker from './registerServiceWorker';


const render = () => {
  ReactDOM.render(
      <App/>,
      document.getElementById('root')
  );
};

registerServiceWorker();
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
