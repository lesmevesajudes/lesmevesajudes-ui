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

const shouldShowFamilyStep = (state) => {
  const menors = state.persons.valueSeq().toArray().filter((persona) => persona.edat <= 16);
  return menors.length > 0
};

const steps = [
  {
    label: <Trans>Persones que conviuen</Trans>,
    optional: false,
    component: <PersonsPage/>,
    icon: 'persona', //Icono de persona perfil

  },
  {
    label: <Trans>Families amb menors</Trans>,
    optional: true,
    shouldShowStep: shouldShowFamilyStep,
    component: <FamilyForm/>,
    icon: 'familia' // Icono de familia, niños corriendo
  },
  {
    label: <Trans>Domicili Habitual</Trans>,
    optional: false,
    component: <ResidenceForm/>,
    icon: 'domicili' // Icono Casa
  },
  {
    label: <Trans>Resultats</Trans>,
    optional: false,
    component: <ResultsPage/>,
    icon: 'resultats' // Icono Billete
  }
];


const WizardPage = () =>
    <Grid>
      <AppHeader/>
      <StepsComponent steps={steps}/>
    </Grid>;

export default translate('translations')(withStyles(styles)(WizardPage));
