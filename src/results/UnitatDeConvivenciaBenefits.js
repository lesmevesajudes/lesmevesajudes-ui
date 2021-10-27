import {Grid, Typography, withStyles} from '@material-ui/core';
import React from 'react';
import {Trans, withTranslation} from 'react-i18next';
import {styles} from '../styles/theme';
import BenefitRow, {NoBenefitRow} from './BenefitRow';
import {getBenefits} from "../shared/benefits";

type UnitatDeConvivenciaBenefitsProps = {
  classes: Object,
  persons: Object,
  period: string,
  unitatDeConvivencia: Object,
};

const UnitatDeConvivenciaBenefits = (props: UnitatDeConvivenciaBenefitsProps) => {

    const possibleBenefits = getBenefits('household');

  function hasAnyBenefit(unitatDeConvivencia, period) {
    return typeof unitatDeConvivencia === 'undefined'
        ? false
        : possibleBenefits.reduce((acc, benefit) => acc + unitatDeConvivencia[benefit.ID][period], 0) > 0;
  }

  function renderSingleBenefit(benefit, unitatDeConvivencia, period, classes: Object) {
    return unitatDeConvivencia[benefit.ID][period] > 0
        ? <Grid container className={classes.ResultPage} justify='center' alignItems='center' key={benefit.ID}>
          <BenefitRow benefit={benefit} subject={unitatDeConvivencia}/>
        </Grid>
        : null;
  }

  function renderUnitatDeConvivenciaBenefitList(unitatDeConvivencia, persons, period: string, classes: Object) {
    return (
          <Grid container justify='space-between'>
            {(hasAnyBenefit(unitatDeConvivencia, period))
                ? possibleBenefits.map((benefit) => renderSingleBenefit(benefit, unitatDeConvivencia, period, classes))
                : <NoBenefitRow/>}
          </Grid>
        );
  }

  return (
    <Grid container justify='space-between' alignItems='center'>
      <Grid item xs={12} sm={12}>
        <Grid className={props.classes.ResultItemResultOut}>
          <Typography variant='subtitle1' gutterBottom>
            <Trans i18nKey='ajudes_a_les_que_opta_habitatge'>Ajudes per a l'habitatge:</Trans>
          </Typography>
            {renderUnitatDeConvivenciaBenefitList(Object.values(props.unitatDeConvivencia)[0], props.persons, props.period, props.classes)}
        </Grid>
      </Grid>
    </Grid>
  )

}


export default withTranslation("translations")(withStyles(styles)(UnitatDeConvivenciaBenefits));
