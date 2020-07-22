import React from 'react';
import {Trans} from 'react-i18next';
import Moment from 'moment';
import {Grid, Typography, withStyles} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {SHOW_REPORT_BUG} from '../config';
import ReportBugForm from '../reportBug/ReportBugForm';
import {getReportBugDataFromLocalStorage} from '../reportBug/ReportBugPage';
import {AppFormContainer, AppFormTitle} from '../components/AppForms';
import {styles} from '../styles/theme';
import ShowMeOnceModal from '../components/ShowMeOnceModal'
import PersonalBenefits from './PersonalBenefits';
import UnitatDeConvivenciaBenefits from './UnitatDeConvivenciaBenefits';
import ResumePage from "./ResumePage";
import ResultsComponent from "./ResultsComponent";

const period = Moment().format('YYYY-MM');

const ResultsContainer = withStyles(styles)((props: AppFormProps) =>
    <Grid item xs={12} md={11} className={props.classes.resultsContainer}>
      {props.children}
    </Grid>);

const SimulationSuccessComponent = ({resultsData, persons, classes, simulationID, initialSimulationId, isShowSimulation, printSimulation, simulationData}) => (
  <AppFormContainer>
    {printSimulation &&
    <ResumePage persons={persons} residence={simulationData.residence} family={simulationData.family}/>}

    {isShowSimulation &&
    <ShowMeOnceModal name='resultsModal'
                     title={<Trans i18nKey='ajudes_a_les_que_podria_optar'/>}>
      <Trans i18nKey='avis_ajudes_a_les_que_podria_optar'/>
    </ShowMeOnceModal>
  }

  <ResultsComponent classes={classes} resultsData={resultsData} persons={persons} simulationID={simulationID} initialSimulationId={initialSimulationId} period={period}/>


  </AppFormContainer>

);

export default withStyles(styles)(SimulationSuccessComponent);
