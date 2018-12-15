import {withStyles} from '@material-ui/core/styles';
import React from 'react';
import {Trans, withNamespaces} from 'react-i18next';
import StepsComponent from '../components/Steps/StepsComponent';
import FamilyForm from '../family/FamilyForm';
import PersonsPage from '../persons/PersonsPage'
import ResidenceForm from '../residence/ResidenceForm';
import ResultsPage from '../results/ResultsPage';
import {styles} from '../styles/theme';

const shouldShowFamilyStep = (state) => {
  const menors = state.persons.valueSeq().toArray().filter((persona) => persona.edat <= 16);
  return menors.length > 0
};

const steps = [
  {
    label: <Trans i18nKey='persones_que_conviuen'>Persones que conviuen</Trans>,
    optional: false,
    component: <PersonsPage/>,
    icon: 'persona', //Icono de persona perfil

  },
  {
    label: <Trans i18nKey='families_amb_menors'>Families amb menors</Trans>,
    optional: true,
    shouldShowStep: shouldShowFamilyStep,
    validateFormToEnableNext: 'FamilyForm',
    component: <FamilyForm/>,
    icon: 'familia' // Icono de familia, niños corriendo
  },
  {
    label: <Trans i18nKey='domicili_habitual'>Domicili Habitual</Trans>,
    optional: false,
    validateFormToEnableNext: 'ResidenceForm',
    component: <ResidenceForm/>,
    icon: 'domicili' // Icono Casa
  },
  {
    label: <Trans i18nKey='resultats'>Resultats</Trans>,
    optional: false,
    component: <ResultsPage/>,
    icon: 'resultats' // Icono Billete
  }
];


const WizardPage = () =>
    <StepsComponent steps={steps}/>;

export default withNamespaces('translations')(withStyles(styles)(WizardPage));
