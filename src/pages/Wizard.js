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
import {styles} from '../styles/theme';
import {withStyles} from '@material-ui/core/styles';

const steps = [
  {
    label: <Trans>Persones que conviuen</Trans>,
    optional: false,
    component: <PersonsPage/>,
    icon: "face"
  },
  {
    label: <Trans>Families amb menors</Trans>,
    optional: true,
    component: <FamilyForm/>,
    icon: "perm_contact_calendar"
  },
  {
    label: <Trans>Domicili Habitual</Trans>,
    optional: false,
    component: <ResidenceForm/>,
    icon: "home"
  },
  {
    label: <Trans>Resultats</Trans>,
    component: <ResultsPage/>,
    icon: "help_outline"
  }
];


const WizardPage = () =>
      <Grid>
        <AppHeader />
        <StepsComponent steps={steps}/>
      </Grid>;

export default translate('translations')(withStyles(styles)(WizardPage));
