import {Grid, Typography, withStyles} from '@material-ui/core';
import React from 'react';
import {Trans} from 'react-i18next';
import {newDate} from '../shared/dateUtils';
import styles from '../styles/theme';
import BenefitRow, {NoBenefitRow} from './BenefitRow';

const possibleBenefits = [
  {
    ID: 'HA_001',
    name: <Trans i18nKey='HA_001_title'>Prestacions econòmiques d'urgència social derivades de la mediació a
      Barcelona</Trans>,
    url: '/ajuts/lloguer_mediacio',
    amountText: <Trans i18nKey='HA_001_import'>Fins a 300 € /mes</Trans>,
    conditions: <Trans i18nKey='maxim_12_mesos'>Màxim 12 mesos</Trans>,
    from: newDate(2018, 6, 12),
    to: newDate(2018, 12, 7)
  },
  {
    ID: 'HA_002',
    name: <Trans i18nKey='HA_002_title'>Prestacions econòmiques d’especial urgència davant la pèrdua de l’habitatge per
      desnonament o execució hipotecària</Trans>,
    amountText: <Trans i18nKey='HA_002_import'>Fins a 200 € /mes</Trans>,
    conditions: <Trans i18nKey='maxim_12_mesos'>Màxim 12 mesos</Trans>,
    url: '/ajuts/desnonament_especial_urgencia',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_003',
    name: <Trans i18nKey='HA_003_title'>Prestacions econòmiques d’especial urgència per al pagament de quotes
      d'amortització
      hipotecària</Trans>,
    amountText: <Trans i18nKey='HA_003_import'>Fins a 3000 € /any</Trans>,
    conditions: <Trans i18nKey='pagament_unic'>pagament únic</Trans>,
    url: '/ajuts/hipoteca_especial_urgencia',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_004',
    name: <Trans i18nKey='HA_004_title'>Prestacions econòmiques d’especial urgència per al pagament de deutes del
      lloguer</Trans>,
    amountText: <Trans i18nKey='HA_004_import'>Fins a 3000 € /any</Trans>,
    conditions: <Trans i18nKey='pagament_unic'>pagament únic</Trans>,
    url: '/ajuts/lloguer_especial_urgencia',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_004_01',
    name: <Trans i18nKey='HA_004_01_title'>Ajut complementari a les prestacions econòmiques d’especial urgència per al
      pagament de deutes del lloguer</Trans>,
    amountText: <Trans i18nKey='HA_004_01_import'>Fins a 200 € /mes</Trans>,
    conditions: <Trans i18nKey='maxim_12_mesos'>Màxim 12 mesos</Trans>,
    url: '/ajuts/lloguer_especial_urgencia',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_005',
    name: <Trans i18nKey='HA_005_title'>Subvencions de pagament de lloguer</Trans>,
    amountText: <Trans i18nKey='HA_005_import'>Fins a 200 € /mes</Trans>,
    conditions: <Trans i18nKey='maxim_12_mesos'>Màxim 12 mesos</Trans>,
    url: '/ajuts/lloguer',
    from: newDate(2018, 5, 19),
    to: newDate(2018, 6, 29)
  },
];

const hasAnyBenefit = (unitatDeConvivencia, period) =>
    typeof unitatDeConvivencia === 'undefined'
        ? false
        : possibleBenefits.reduce((acc, benefit) => acc + unitatDeConvivencia[benefit.ID][period], 0) > 0;

const renderABenefit = (benefit, unitatDeConvivencia, period, classes: Object) =>
    unitatDeConvivencia[benefit.ID][period] > 0
        ? <Grid container className={classes.ResultPage} justify='center' alignItems='center' key={benefit.ID}>
          <BenefitRow benefit={benefit} subject={unitatDeConvivencia}/>
        </Grid>
        : null;

const renderUnitatDeConvivenciaBenefitList = (unitatDeConvivencia, persons, period: string, classes: Object) =>
    <Grid container justify='space-between' alignItems='center'>
      <Grid item xs={12} sm={12}>
        <Grid className={classes.ResultItemResultOut}>
          <Typography variant='subtitle1' gutterBottom>
            <Trans i18nKey='ajudes_a_les_que_opta_habitatge'>Ajudes per a l'habitatge:</Trans>
          </Typography>
          <Grid container justify='space-between'>
            {hasAnyBenefit(unitatDeConvivencia, period)
                ? possibleBenefits.map((benefit) => renderABenefit(benefit, unitatDeConvivencia, period, classes))
                : <NoBenefitRow/>}
          </Grid>
        </Grid>
      </Grid>
    </Grid>;

type UnitatDeConvivenciaBenefitsProps = {
  classes: Object,
  persons: Object,
  period: string,
  unitatDeConvivencia: Object,

};

const UnitatDeConvivenciaBenefits = (props: UnitatDeConvivenciaBenefitsProps) =>
    renderUnitatDeConvivenciaBenefitList(Object.values(props.unitatDeConvivencia)[0], props.persons, props.period, props.classes);

export default withStyles(styles)(UnitatDeConvivenciaBenefits);
