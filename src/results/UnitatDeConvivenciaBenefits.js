import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import BenefitRow, {NoBenefitRow} from './BenefitRow';
import {Trans} from "react-i18next";

const possibleBenefits = [
  {
    ID: 'HA_001',
    name: <Trans>Prestacions econòmiques d'urgència social derivades de la mediació a Barcelona</Trans>,
    periode: 'mes',
    url: '/ajuts/lloguer_mediacio',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_002',
    name: <Trans>Prestacions econòmiques d’especial urgència davant la pèrdua de l’habitatge per desnonament o execució
      hipotecària</Trans>,
    periode: 'mes',
    url: '/ajuts/desnonament_especial_urgencia',
    from: new Date(2018, 5, 16),
    to: new Date(2018, 10, 31)
  },
  {
    ID: 'HA_003',
    name: <Trans>Prestacions econòmiques d’especial urgència per al pagament de quotes d'amortització
      hipotecària</Trans>,
    amountText: <Trans>Mínim: XXX - Màxim: 3000 € / anuals</Trans>,
    url: '/ajuts/hipoteca_especial_urgencia',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_004',
    name: <Trans>Prestacions econòmiques d’especial urgència per al pagament de deutes del lloguer</Trans>,
    amountText: <Trans>Mínim: XXX - Màxim: 3000 € / anuals</Trans>,
    url: '/ajuts/lloguer_especial_urgencia',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_005',
    name: <Trans>Subvencions de pagament de lloguer (MIFO)</Trans>,
    periode: 'mes',
    url: '/ajuts/lloguer',
    from: undefined,
    to: undefined
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
        <li className='ItemResultOut'>
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
        </li>
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
