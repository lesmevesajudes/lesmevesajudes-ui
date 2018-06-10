import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './i18n';
import {AppContainer} from 'react-hot-loader';


const render = () => {
  ReactDOM.render(
      <AppContainer>
        <App/>
      </AppContainer>,
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
