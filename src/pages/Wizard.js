import React from 'react';
import './Wizard.css';
import AppHeader from '../components/AppHeader/AppHeader';
import {Trans, translate} from 'react-i18next';
import {Grid} from '@material-ui/core';
import StepsComponent from '../components/Steps/StepsComponent';
import PersonsPage from '../persons/PersonsPage'
import FamilyForm from '../family/FamilyForm';
import ResidenceForm from '../residence/ResidenceForm';
import ResultsPage from '../results/ResultsPage';

const steps = [
  {
    label: <Trans>Persones que conviuen</Trans>,
    optional: false,
    component: <PersonsPage/>,
    icon: "pregnant_woman"
  },
  {
    label: <Trans>Families</Trans>,
    optional: true,
    component: <FamilyForm/>,
    icon: "accessibility"
  },
  {
    label: <Trans>Domicili Habitual</Trans>,
    optional: false,
    component: <ResidenceForm/>,
    icon: "accessible"
  },
  {
    label: <Trans>Resultats</Trans>,
    component: <ResultsPage/>,
    icon: "accessible_forward"
  }
];


const WizardPage = () =>
      <Grid>
        <AppHeader />
        <StepsComponent steps={steps}/>
      </Grid>;

export default translate('translations')(WizardPage);
