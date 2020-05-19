import {Grid, Typography, withStyles} from '@material-ui/core';
import React from 'react';
import {Trans, withTranslation} from 'react-i18next';
import {newDate} from '../shared/dateUtils';
import {styles} from '../styles/theme';
import BenefitRow, {NoBenefitRow} from './BenefitRow';

type UnitatDeConvivenciaBenefitsProps = {
  classes: Object,
  persons: Object,
  period: string,
  unitatDeConvivencia: Object,
  t: Function,
};

class UnitatDeConvivenciaBenefits extends React.Component<UnitatDeConvivenciaBenefitsProps> {
  componentWillMount(): void {
    const {t} = this.props;
    this.possibleBenefits = [
      {
        ID: 'HA_001',
        name: <Trans i18nKey='HA_001_title'>Prestacions econòmiques d'urgència social derivades de la mediació a
          Barcelona</Trans>,
        url: t('link_HA_001'),
        amountText: <Trans i18nKey='HA_001_import'>Fins a 300 € /mes</Trans>,
        conditions: <Trans i18nKey='maxim_12_mesos'>Màxim 12 mesos</Trans>,
        from: newDate(2019, 2, 20),
        to: newDate(2019, 12, 5)
      },
      {
        ID: 'HA_002',
        name: <Trans i18nKey='HA_002_title'>Prestacions econòmiques d’especial urgència davant la pèrdua de l’habitatge
          per desnonament o execució hipotecària</Trans>,
        amountText: <Trans i18nKey='HA_002_import'>Fins a 200 € /mes</Trans>,
        conditions: <Trans i18nKey='maxim_12_mesos'>Màxim 12 mesos</Trans>,
        url: t('link_HA_002'),
        from: undefined,
        to: undefined
      },
      {
        ID: 'HA_003',
        name: <Trans i18nKey='HA_003_title'>Prestacions econòmiques d’especial urgència per al pagament de quotes
          d'amortització hipotecària</Trans>,
        amountText: <Trans i18nKey='HA_003_import'>Fins a 3000 € /any</Trans>,
        conditions: <Trans i18nKey='pagament_unic'>pagament únic</Trans>,
        url: t('link_HA_003'),
        from: undefined,
        to: undefined
      },
      {
        ID: 'HA_004',
        name: <Trans i18nKey='HA_004_title'>Prestacions econòmiques d’especial urgència per al pagament de deutes del
          lloguer</Trans>,
        amountText: <Trans i18nKey='HA_004_import'>Fins a 3000 € /any</Trans>,
        conditions: <Trans i18nKey='pagament_unic'>pagament únic</Trans>,
        url: t('link_HA_004'),
        from: undefined,
        to: undefined
      },
      {
        ID: 'HA_004_01',
        name: <Trans i18nKey='HA_004_01_title'>Ajut complementari a les prestacions econòmiques d’especial urgència per
          al pagament de deutes del lloguer</Trans>,
        amountText: <Trans i18nKey='HA_004_01_import'>Fins a 200 € /mes</Trans>,
        conditions: <Trans i18nKey='maxim_12_mesos'>Màxim 12 mesos</Trans>,
        url: t('link_HA_004'),
        from: undefined,
        to: undefined
      },
      {
        ID: 'HA_005',
        name: <Trans i18nKey='HA_005_title'>Subvencions de pagament de lloguer</Trans>,
        amountText: <Trans i18nKey='HA_005_import'>Fins a 200 € /mes</Trans>,
        conditions: <Trans i18nKey='maxim_12_mesos'>Màxim 12 mesos</Trans>,
        url: t('link_HA_005'),
        from: newDate(2018, 5, 19),
        to: newDate(2018, 6, 29)
      },
    ];
  }

  hasAnyBenefit(unitatDeConvivencia, period) {
    return typeof unitatDeConvivencia === 'undefined'
        ? false
        : this.possibleBenefits.reduce((acc, benefit) => acc + unitatDeConvivencia[benefit.ID][period], 0) > 0;
  }

  renderSingleBenefit(benefit, unitatDeConvivencia, period, classes: Object) {
    return unitatDeConvivencia[benefit.ID][period] > 0
        ? <Grid container className={classes.ResultPage} justify='center' alignItems='center' key={benefit.ID}>
          <BenefitRow benefit={benefit} subject={unitatDeConvivencia}/>
        </Grid>
        : null;
  }

  renderUnitatDeConvivenciaBenefitList(unitatDeConvivencia, persons, period: string, classes: Object) {
    return <Grid container justify='space-between' alignItems='center'>
      <Grid item xs={12} sm={12}>
        <Grid className={classes.ResultItemResultOut}>
          <Typography variant='subtitle1' gutterBottom>
            <Trans i18nKey='ajudes_a_les_que_opta_habitatge'>Ajudes per a l'habitatge:</Trans>
          </Typography>
          <Grid container justify='space-between'>
            {this.hasAnyBenefit(unitatDeConvivencia, period)
                ? this.possibleBenefits.map((benefit) => this.renderSingleBenefit(benefit, unitatDeConvivencia, period, classes))
                : <NoBenefitRow/>}
          </Grid>
        </Grid>
      </Grid>
    </Grid>;
  }

  render() {
    const {unitatDeConvivencia, persons, period, classes} = this.props;
    return this.renderUnitatDeConvivenciaBenefitList(Object.values(unitatDeConvivencia)[0], persons, period, classes);
  }
}


export default withTranslation("translations")(withStyles(styles)(UnitatDeConvivenciaBenefits));
