import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import WizardPage from './pages/Wizard';
import isDevelopment from './shared/isDevelopment';
import './styles/styles.css';
import theme from './styles/theme.js';
import CorporateHeader from './components/Header/CorporateHeader';
import ReportBugPage from './reportBug/ReportBugPage';
import InfoRAI from './pages/InfoRAI';
import InfoRGC from './pages/InfoRGC';
import InfoMenjador from './pages/InfoMenjador';
import InfoFonsInfancia from './pages/InfoFonsInfancia';
import ScrollToTop from './components/Common/ScrollToTop';
import CssBaseline from '@material-ui/core/CssBaseline';
import configureStore from './Store';
import {MuiThemeProvider} from '@material-ui/core/styles';
import InfoLloguerMediacio from "./pages/lloguerMediacio";
import InfoEspecialUrgenciaPagamentLloguer from "./pages/HabitatgeEspecialUrgenciaPagamentLloguer";
import HabitatgeEspecialUrgenciaPagamentHipoteca from "./pages/HabitatgeEspecialUrgenciaPagamentHipoteca";
import HabitatgeEspecialUrgenciaDesnonaments from "./pages/HabitatgeEspecialUrgenciaDesnonaments";
import HabitatgeMIFO from "./pages/HabitatgeMIFO";
import getCodeVersion from "./shared/getCodeVersion";

if (isDevelopment) {
  console.log('Environment: ' + process.env.NODE_ENV);
}
console.log('App version: ', getCodeVersion());

const preloadedState = window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <CorporateHeader/>
          <CssBaseline/>
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <ScrollToTop>
                  <Route exact={true} path='/' component={IndexPage}/>
                  <Route path='/wizard' component={WizardPage}/>
                  <Route path='/reportBug' component={ReportBugPage}/>
                  <Route path='/ajuts/rai' component={InfoRAI}/>
                  <Route path='/ajuts/rgc' component={InfoRGC}/>
                  <Route path='/ajuts/lloguer_mediacio' component={InfoLloguerMediacio}/>
                  <Route path='/ajuts/lloguer_especial_urgencia' component={InfoEspecialUrgenciaPagamentLloguer}/>
                  <Route path='/ajuts/hipoteca_especial_urgencia'
                         component={HabitatgeEspecialUrgenciaPagamentHipoteca}/>
                  <Route path='/ajuts/desnonament_especial_urgencia' component={HabitatgeEspecialUrgenciaDesnonaments}/>
                  <Route path='/ajuts/mifo' component={HabitatgeMIFO}/>
                  <Route path='/ajuts/menjador' component={InfoMenjador}/>
                  <Route path='/ajuts/fons_infancia' component={InfoFonsInfancia}/>
                </ScrollToTop>
              </Switch>
            </BrowserRouter>
          </Provider>
        </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
