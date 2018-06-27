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
import FaceIcon from '@material-ui/icons/Face';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import HomeIcon from '@material-ui/icons/Home';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const steps = [
  {
    label: <Trans>Persones que conviuen</Trans>,
    optional: false,
    component: <PersonsPage/>,
    icon: FaceIcon,
    
  },
  {
    label: <Trans>Families amb menors</Trans>,
    optional: true,
    component: <FamilyForm/>,
    icon: PermContactCalendarIcon
  },
  {
    label: <Trans>Domicili Habitual</Trans>,
    optional: false,
    component: <ResidenceForm/>,
    icon: HomeIcon
  },
  {
    label: <Trans>Resultats</Trans>,
    component: <ResultsPage/>,
    icon: HelpOutlineIcon
  }
];


const WizardPage = () =>
      <Grid>
        <AppHeader />
        <StepsComponent steps={steps}/>
      </Grid>;

export default translate('translations')(withStyles(styles)(WizardPage));
