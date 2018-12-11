import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core/styles';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import HashRouter from 'react-router-dom/HashRouter';
import ScrollToTop from './components/Common/ScrollToTop';
import {dev} from './components/Dev';
import {API_URL, ENVIRONMENT, REPORT_BUG_URL} from "./config";
import WizardPage from './pages/Wizard';
import ReportBugPage from './reportBug/ReportBugPage';
import {getCodeVersion, getReleaseDate} from "./shared/getCodeVersion";
import isDevelopment from './shared/isDevelopment';
import configureStore from './Store';
import './styles/main.css';
import theme from './styles/theme.js';

if (isDevelopment) {
  console.log('Environment: ' + ENVIRONMENT);
}
console.log(`Code version: ${getCodeVersion()} Release Date: ${getReleaseDate()}`);
console.log('API: ', API_URL);
console.log('Simulation Report API: ', REPORT_BUG_URL);

const preloadedState = window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);


class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Provider store={store}>
              <HashRouter>
                <ScrollToTop>
                  <Switch>
                    <Route exact={true} path='/' component={WizardPage}/>
                    <Route path='/wizard' component={WizardPage}/>
                    <Route path='/reportBug' component={ReportBugPage}/>
                    {isDevelopment &&
                    <Route path='/wizard_dev' component={dev(WizardPage)}/>
                    }
                  </Switch>
                </ScrollToTop>
              </HashRouter>
            </Provider>
        </MuiThemeProvider>
    );
  }
}

export default App;
