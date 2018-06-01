import React from "react";
import "./Wizard.css";
import AppHeader from "../components/AppHeader/AppHeader";
import {translate} from "react-i18next";
import Grid from '@material-ui/core/Grid';
import StepsComponent from '../components/Steps/StepsComponent';
import PersonsPage from '../persons/PersonsPage'
import HouseholdForm from '../household/HouseholdForm';
import RentForm from '../rent/RentForm';
import ResultsPage from '../results/ResultsPage';

const steps = [
  {
    label: 'Persones que conviuen',
    component: <PersonsPage/>
  },
  {
    label: 'Families',
    component: <HouseholdForm/>
  },
  {
    label: 'Domicili Habitual',
    component: <RentForm/>
  },
  {
    label: 'Resultats',
    component: <ResultsPage/>
  }
];


const WizardPage = () =>
      <Grid>
        <AppHeader />
        <StepsComponent steps={steps}/>
      </Grid>;

export default translate("translations")(WizardPage);
