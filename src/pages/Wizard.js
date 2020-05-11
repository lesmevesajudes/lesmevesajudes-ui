import React from 'react';
import {Trans, withTranslation} from 'react-i18next';
import StepsComponent from '../components/Steps/StepsComponent';
import FamilyForm from '../family/FamilyForm';
import PersonsPage from '../persons/PersonsPage'
import ResidenceForm from '../residence/ResidenceForm';
import ResultsPage from '../results/ResultsPage';

export const areMenors = (persons) => {
	const menors = persons.valueSeq().toArray().filter((persona) => persona.edat <= 16);
	return menors.length > 0;
}

const shouldShowFamilyStep = (state) => {
	return areMenors(state.persons);
};

export const steps = [
  {
    id: 'person',
    label: <Trans i18nKey='persones_que_conviuen'>Persones que conviuen</Trans>,
    optional: false,
    component: <PersonsPage/>,
    icon: 'persona', //Icono de persona perfil

  },
  {
    id: 'family',
    label: <Trans i18nKey='families_amb_menors'>Families amb menors</Trans>,
    optional: true,
    shouldShowStep: shouldShowFamilyStep,
    validateFormToEnableNext: 'FamilyForm',
    component: <FamilyForm form="FamilyForm"/>,
    icon: 'familia' // Icono de familia, niños corriendo
  },
  {
    id: 'residence',
    label: <Trans i18nKey='domicili_habitual'>Domicili Habitual</Trans>,
    optional: false,
    validateFormToEnableNext: 'ResidenceForm',
    component: <ResidenceForm form='ResidenceForm'/>,
    icon: 'domicili' // Icono Casa
  },
  {
    id: 'results',
    label: <Trans i18nKey='resultats'>Resultats</Trans>,
    optional: false,
    component: <ResultsPage/>,
    icon: 'resultats' // Icono Billete
  }
];

export const isAdmin = (props) => {
	return props.location.pathname === '/admin';
}

const WizardPage = props => {
	return <StepsComponent steps={steps} isAdmin={isAdmin(props)}/>;
}

export default withTranslation('translations')(WizardPage);
