import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import Link from 'react-router-dom/Link';
import ClearIcon from '@material-ui/icons/Clear';
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
          <Grid item sm={12}>
            <li className='ItemResult' key={benefit.ID}>
              <Grid container justify='center' alignItems='center' wrap='wrap'>
                <Grid id={benefit.ID} className='benefitText' item xs={12} sm={9}>
                  {benefit.name}
                </Grid>

                <Grid item className='Separator' xs={6} sm={3}>
                  <Link className={"linkBenefits"} to={benefit.url}>
                    <Button variant="contained" color="primary" key={benefit.ID}>
                      Més informació
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </li>
          </Grid>
        </Grid>
        : null;

const renderUnitatDeConvivenciaBenefitList = (unitatDeConvivencia, persons, period: string) =>
    <Grid container justify='space-between' alignItems='center'>
      <Grid item sm={12}>
        <li className='ItemResultOut'>
                <Typography className='ItemTitle'>
                  Ajudes per a la unitat de convivència:
                </Typography>
            <Grid container className='ResultPage' justify='space-between'>
              <Grid item xs sm={12}>
                <ul className='ItemList'>
                  {hasAnyBenefit(unitatDeConvivencia, period)
                      ? possibleBenefits.map((benefit) =>
                          renderABenefit(benefit, unitatDeConvivencia, period)
                      )
                      : <span className='ItemResult'><ClearIcon className="resultIconError"/>No opta a cap ajuda</span>}
                </ul>
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
