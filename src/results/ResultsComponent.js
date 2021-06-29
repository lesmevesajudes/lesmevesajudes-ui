import {Grid, Typography, withStyles} from '@material-ui/core';
import React from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import classNames from "classnames";
import {AppFormContainer, AppFormTitle} from '../components/AppForms';
import {styles} from '../styles/theme';
import PersonalBenefits from './PersonalBenefits';
import UnitatDeConvivenciaBenefits from './UnitatDeConvivenciaBenefits';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export const ResultsContainer = withStyles(styles)((props: AppFormProps) =>
	<Grid item xs={12} md={11} className={props.classes.resultsContainer}>
	  {props.children}
	</Grid>);

type Props = {
  classes: Boolean,
  resultData: string,
  persons: Object,
  simulationID: Object,
  initialSimulationId: string,
  period: string,
}

const ResultsComponent = (props: Props) => {
	const { t } = useTranslation();
	const {classes, resultsData, persons,simulationID,initialSimulationId, period} = props;
	return (
    <AppFormContainer >
	  <AppFormTitle iconName='resultats'>
	    <Trans i18nKey='a_partir_de_la_informacio_facilitada_linformem_que'>
	      A partir de la informació que ens ha facilitat, a continuació li informem que:
	    </Trans>
	  </AppFormTitle>
	  <ResultsContainer>
	    <Typography className={classes.ResultWarning} gutterBottom>
	      <Trans i18nKey='avis_variacio_ajuts'>
	        Li recordem que la concessió d’una d’aquestes ajudes pot fer variar els seus ingressos i/o
	        requisits
	        fent que algunes de les ajudes llistades no puguin ser concedides.
	        Per tant, a la pràctica, pot trobar ajudes incompatibles entre sí.
	        Informi-se’n clicant sobre cada ajut.
	      </Trans>
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
	    <Grid container justify='center' alignItems='center' className={classNames(classes.ItemResult, 'grid-flex-force')}>
	      <Grid item container xs={1} justify='center' alignItems='center' className={classNames('grid-flex-force')}>
	        <InfoOutlinedIcon className={classes.darkGrayText}>info</InfoOutlinedIcon>
	      </Grid>
	      <Grid item xs={7}>
	        <Typography className={classes.ResultsBenefitText}>
	          <Trans i18nKey='identificador_simulacio'>Identificador simulació</Trans>
	        </Typography>
	      </Grid>
	      <Grid item container className={classNames(classes.ResultsSeparator, 'grid-flex-force')} xs={4} alignItems='center' justify='center'>
	        <Typography className={classes.ResultsBenefitText}>
	          {simulationID ? simulationID : initialSimulationId}
	        </Typography>
	      </Grid>
	    </Grid>
	    {simulationID && initialSimulationId &&
	      <Grid container justify='center' alignItems='center' className={classNames(classes.ItemResult, 'grid-flex-force')}>
	        <Grid item container xs={1} justify='center' alignItems='center' className={classNames('grid-flex-force')}>
	          <InfoOutlinedIcon className={classes.darkGrayText}>info</InfoOutlinedIcon>
	        </Grid>
	        <Grid item xs={7}>
	          <Typography className={classes.ResultsBenefitText}>
	            <Trans i18nKey='identificador_simulacio_inicial'>Identificador simulació inicial</Trans>
	          </Typography>
	        </Grid>
	        <Grid item container className={classNames(classes.ResultsSeparator, 'grid-flex-force')} xs={4} alignItems='center' justify='center'>
	          <Typography className={classes.ResultsBenefitText}>
	            {initialSimulationId}
	          </Typography>
	        </Grid>
	      </Grid>}

				<Grid container justify='center' alignItems='center' className={classNames(classes.ItemResult, 'grid-flex-force')}>
				 <Grid item container xs={1} justify='center' alignItems='center' className={classNames('grid-flex-force')}>
					 <InfoOutlinedIcon className={classes.darkGrayText}>info</InfoOutlinedIcon>
				 </Grid>
				 <Grid item  xs={11}>
					 <Typography className={classes.ResultsBenefitText}>
						 <Trans i18nKey='nota_resultat'>
						 	Nota: Algunes de les ajudes publicades al simulador es poden sol·licitar tot l'any,
							però d'altres es convoquen en períodes limitats. Per conèixer en detall les característiques,
							els requisits i per obtenir més informació sobre les ajudes i la seva tramitació,
							et recomanem que consultis el <a href={t('link_llistat_ajudes')} target="_blank" rel="noopener noreferrer">llistat d'ajudes</a> i que visitis els webs a on es tramita cadascuna de les ajudes.
						 </Trans>
					 </Typography>
				 </Grid>
			 </Grid>

	    </ResultsContainer>
    </AppFormContainer>)
};

export default withStyles(styles)(connect(null)(ResultsComponent));
