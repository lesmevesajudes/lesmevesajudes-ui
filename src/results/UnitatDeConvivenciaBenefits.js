import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import BenefitRow, {NoBenefitRow} from './BenefitRow';
import {Trans} from "react-i18next";
import {newDate} from "../shared/dateUtils";

const possibleBenefits = [
  {
    ID: 'HA_001',
    name: <Trans>Prestacions econòmiques d'urgència social derivades de la mediació a Barcelona</Trans>,
    url: '/ajuts/lloguer_mediacio',
    amountText: 'Fins a 300 € /mes màxim 12 mesos',
    from: newDate(2018, 6, 12),
    to: newDate(2018, 12, 7)
  },
  {
    ID: 'HA_002',
    name: <Trans>Prestacions econòmiques d’especial urgència davant la pèrdua de l’habitatge per desnonament o execució
      hipotecària</Trans>,
    amountText: 'Fins a 200 € /mes màxim 12 mesos',
    url: '/ajuts/desnonament_especial_urgencia',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_003',
    name: <Trans>Prestacions econòmiques d’especial urgència per al pagament de quotes d'amortització
      hipotecària</Trans>,
    amountText: 'Fins a 3000 € /any pagament únic',
    url: '/ajuts/hipoteca_especial_urgencia',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_004',
    name: <Trans>Prestacions econòmiques d’especial urgència per al pagament de deutes del lloguer</Trans>,
    amountText: 'Fins a 3000 € /any pagament únic',
    url: '/ajuts/lloguer_especial_urgencia',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_004-1',
    name: <Trans>Ajut complementari a les prestacions econòmiques d’especial urgència per al pagament de deutes del lloguer</Trans>,
    amountText: 'Fins a 200 € /mes màxim 12 mesos',
    url: '/ajuts/lloguer_especial_urgencia',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_005',
    name: <Trans>Subvencions de pagament de lloguer (MIFO)</Trans>,
    amountText: 'Fins a 200 € /mes màxim 12 mesos',
    url: '/ajuts/lloguer',
    from: newDate(2018, 5, 19),
    to: newDate(2018, 6, 29)
  },
];

const hasAnyBenefit = (unitatDeConvivencia, period) =>
    typeof unitatDeConvivencia === 'undefined'
        ? false
        : possibleBenefits.reduce((acc, benefit) => acc + unitatDeConvivencia[benefit.ID][period], 0) > 0;

const renderABenefit = (benefit, unitatDeConvivencia, period) =>
    unitatDeConvivencia[benefit.ID][period] > 0
        ? <Grid container className='ResultPage' justify='center' alignItems='center' key={benefit.ID}>
          <BenefitRow benefit={benefit} subject={unitatDeConvivencia}/>
        </Grid>
        : null;

const renderUnitatDeConvivenciaBenefitList = (unitatDeConvivencia, persons, period: string) =>
    <Grid container justify='space-between' alignItems='center'>
      <Grid item xs={12} sm={12}>
        <Grid className='ItemResultOut'>
          <Typography variant='subheading' gutterBottom className="titleResultPerson">
            Ajudes per a l'habitatge:
          </Typography>
          <Grid container className='ResultPage' justify='space-between'>
            <Grid item xs={12} sm={12}>
              <Grid className='ItemList'>
                {hasAnyBenefit(unitatDeConvivencia, period)
                    ? possibleBenefits.map((benefit) => renderABenefit(benefit, unitatDeConvivencia, period))
                    : <NoBenefitRow/>}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>;

type UnitatDeConvivenciaBenefitsProps = {
  persons: Object,
  unitatDeConvivencia: Object,
  period: string

};

const UnitatDeConvivenciaBenefits = (props: UnitatDeConvivenciaBenefitsProps) =>
    renderUnitatDeConvivenciaBenefitList(Object.values(props.unitatDeConvivencia)[0], props.persons, props.period);

export default UnitatDeConvivenciaBenefits;
