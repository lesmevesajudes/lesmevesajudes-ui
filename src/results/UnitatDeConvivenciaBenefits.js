import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import BenefitRow, {NoBenefitRow} from './BenefitRow';

const possibleBenefits = [
  {
    ID: 'HA_001',
    name: 'AJUTS LLOGUER ESPECIAL URGÈNCIA PER A PERSONES BENEFICIÀRIES DE PRESTACIONS DERIVADES DE LA MEDIACIÓ A BARCELONA',
    periode: 'mes',
    url: '/ajuts/lloguer'
  },
  {
    ID: 'HA_002',
    name: 'AJUTS PER PÈRDUA D’HABITATGE PER DESNONAMENT O EXECUCIÓ HIPOTECÀRIA',
    periode: 'mes',
    url: '/ajuts/lloguer'
  },
  {
    ID: 'HA_003',
    name: 'AJUTS ESPECIAL URGÈNCIA AMORTITZACIÓ HIPOTECÀRIA',
    periode: 'mes',
    url: '/ajuts/lloguer'
  },
  {
    ID: 'HA_004',
    name: 'AJUTS LLOGUER ESPECIAL URGÈNCIA',
    periode: 'mes',
    url: '/ajuts/lloguer'
  },
  {
    ID: 'HA_005',
    name: 'SUBVENCIONS HABITATGE DE TIPUS MIFO',
    periode: 'mes',
    url: '/ajuts/lloguer'
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
          <BenefitRow benefit={benefit}/>
        </Grid>
        : null;

const renderUnitatDeConvivenciaBenefitList = (unitatDeConvivencia, persons, period: string) =>
    <Grid container justify='space-between' alignItems='center'>
      <Grid item sm={12}>
        <li className='ItemResultOut'>
          <Typography variant='headline' gutterBottom>
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
