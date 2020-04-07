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

const period = Moment().format('YYYY-MM');

const ResultsContainer = withStyles(styles)((props: AppFormProps) =>
    <Grid item xs={12} md={11} className={props.classes.resultsContainer}>
      {props.children}
    </Grid>);

const SimulationSuccessComponent = ({resultsData, persons, classes, simulationID, initialSimulationId, isShowSimulation}) => (
  <AppFormContainer>
    {isShowSimulation &&
    <ShowMeOnceModal name='resultsModal'
                     title={<Trans i18nKey='ajudes_a_les_que_podria_optar'/>}>
      <Trans i18nKey='avis_ajudes_a_les_que_podria_optar'/>
    </ShowMeOnceModal>
  }
    <AppFormTitle iconName='resultats'>
      <Trans i18nKey='a_partir_de_la_informacio_facilitada_linformem_que'/>
    </AppFormTitle>
    <ResultsContainer>
      <Typography className={classes.ResultWarning} gutterBottom>
        <Trans i18nKey='avis_variacio_ajuts'/>
      </Typography>

      <Grid item xs={12}>
        <PersonalBenefits
            benefitsForPersons={resultsData.persones}
            persons={persons}
        />
      </Grid>
      <Grid item xs={12}>
        <UnitatDeConvivenciaBenefits
            unitatDeConvivencia={resultsData.unitats_de_convivencia}
            persons={persons}
            period={period}
        />
      </Grid>
      <Grid container justify='center' alignItems='center' className={classes.ItemResult}>
        <Grid item container xs={1} justify='center' alignItems='center'>
          <InfoOutlinedIcon className={classes.darkGrayText}>info</InfoOutlinedIcon>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.ResultsBenefitText}>
            <Trans i18nKey='identificador_simulacio'/>
          </Typography>
        </Grid>
        <Grid item container className={classes.ResultsSeparator} xs={4} alignItems='center' justify='center'>
          <Typography className={classes.ResultsBenefitText}>
            {simulationID}
          </Typography>
        </Grid>
      </Grid>
          {initialSimulationId &&
              <Grid container justify='center' alignItems='center' className={classes.ItemResult}>
                <Grid item container xs={1} justify='center' alignItems='center'>
                  <InfoOutlinedIcon className={classes.darkGrayText}>info</InfoOutlinedIcon>
                </Grid>
                <Grid item xs={7}>
                  <Typography className={classes.ResultsBenefitText}>
                    <Trans i18nKey='identificador_simulacio_inicial'>Identificador simulació inicial</Trans>
                  </Typography>
                </Grid>
                <Grid item container className={classes.ResultsSeparator} xs={4} alignItems='center' justify='center'>
                  <Typography className={classes.ResultsBenefitText}>
                    {initialSimulationId}
                  </Typography>
                </Grid>
              </Grid>

            }

      {SHOW_REPORT_BUG && <Grid item xs={12} className={classes.ItemResult}>
        <ReportBugForm initialValues={getReportBugDataFromLocalStorage()} onSubmit={this.submitReport}/>
      </Grid>}
    </ResultsContainer>
  </AppFormContainer>

);

export default withStyles(styles)(SimulationSuccessComponent);
