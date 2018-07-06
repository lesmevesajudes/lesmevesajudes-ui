import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import BenefitRow, {NoBenefitRow} from './BenefitRow';

const possibleBenefits = [
  {
    ID: 'HA_001',
    name: 'Ajuts lloguer especial urgència per a persones beneficiàries de prestacions derivades de la mediació a barcelona',
    periode: 'mes',
    url: '/ajuts/lloguer',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_002',
    name: 'Ajuts per pèrdua d’habitatge per desnonament o execució hipotecària',
    periode: 'mes',
    url: '/ajuts/lloguer',
    from: new Date(2018, 5, 16),
    to: new Date(2018, 10, 31)
  },
  {
    ID: 'HA_003',
    name: 'Ajuts especial urgència amortització hipotecària',
    periode: 'mes',
    url: '/ajuts/lloguer',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_004',
    name: 'Ajuts lloguer especial urgència',
    periode: 'mes',
    url: '/ajuts/lloguer',
    from: undefined,
    to: undefined
  },
  {
    ID: 'HA_005',
    name: 'Subvencions habitatge de tipus mifo',
    periode: 'mes',
    url: '/ajuts/lloguer',
    from: undefined,
    to: undefined
  },
];

const hasAnyBenefit = (unitatDeConvivencia, period) =>
    typeof unitatDeConvivencia === 'undefined'
        ? false
        : possibleBenefits.reduce((acc, benefit) => {
      return acc + unitatDeConvivencia[benefit.ID][period];
    }, 0) > 0;

const renderABenefit = (benefit, unitatDeConvivencia, period) =>
    unitatDeConvivencia[benefit.ID][period] > 0
        ? <Grid container className='ResultPage' justify='center' alignItems='center' key={benefit.ID}>
          <BenefitRow benefit={benefit} subject={unitatDeConvivencia}/>
        </Grid>
        : null;

const renderUnitatDeConvivenciaBenefitList = (unitatDeConvivencia, persons, period: string) =>
    <Grid container justify='space-between' alignItems='center'>
      <Grid item sm={12}>
        <li className='ItemResultOut'>
          <Typography variant='subheading' gutterBottom className="titleResultPerson">
            Ajudes per a la unitat de convivència:
          </Typography>
          <Grid container className='ResultPage' justify='space-between'>
            <Grid item xs sm={12}>
              <Grid className='ItemList'>
                {hasAnyBenefit(unitatDeConvivencia, period)
                    ? possibleBenefits.map((benefit) =>
                        renderABenefit(benefit, unitatDeConvivencia, period)
                    )
                    : <NoBenefitRow/>}
              </Grid>
            </Grid>
          </Grid>
        </li>
      </Grid>
    </Grid>;


type Props = {
  persons: Object,
  unitatDeConvivencia: Object,
  period: string

};

const UnitatDeConvivenciaBenefits = (props: Props) =>
    renderUnitatDeConvivenciaBenefitList(Object.values(props.unitatDeConvivencia)[0], props.persons, props.period);

export default UnitatDeConvivenciaBenefits;
