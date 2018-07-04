import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from 'react-router-dom';
import {Trans} from 'react-i18next';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import type {Person} from "../persons/PersonTypes";

type Props = {
  benefit: Object,
  person: Person
};
const dateFormat = (date: Date) => `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
const Period = (props) => {
  const benefit = props.benefit;
  const now = Date.now();

  if (typeof benefit.from === 'undefined') {
    return <Typography variant='caption'><Trans>Convocatòria permanent</Trans></Typography>
  } else if (now >= benefit.from && now <= benefit.to) {
    return <Typography variant='caption'><Trans>Convocatòria
      entre {dateFormat(benefit.from)} i {dateFormat(benefit.to)}</Trans></Typography>
  } else if (now > benefit.to) {
    return <Typography variant='caption'><Trans>Convocatòria finalitzada</Trans></Typography>
  } else if (now < benefit.from) {
    return <Typography variant='caption'><Trans>Propera convocatòria
      entre {dateFormat(benefit.from)} i {dateFormat(benefit.to)}</Trans></Typography>
  }
};

export const BenefitRow = ({benefit, subject}: Props) =>
    <Grid
        className='ResultPage'
        container
        justify='center'
        alignItems='center'
        key={benefit.ID}
    >
      {console.log(benefit)}
      {console.log(subject)}
      <Grid container direction='row' justify='center' alignItems='center' key={benefit.ID} className='ItemResult'>
        <Grid item style={{margin: 'auto'}} xs={1}>
          <DoneIcon className='resultIconSuccess'/>
        </Grid>
        <Grid item xs={7}>
          <Typography style={{color: '#004a8e', fontSize: '1rem'}}>{benefit.name}</Typography>
          <Period benefit={benefit}/>
        </Grid>
        <Grid item className='Separator' xs={2}>
          <Typography style={{color: '#004a8e', fontSize: '1rem', paddingTop: '1rem'}}>
            {subject[benefit.ID][Object.keys(subject[benefit.ID])[0]]} € / {benefit.periode}
          </Typography>
        </Grid>
        <Grid item className='Separator' xs={2}>
          <Link className={'linkBenefits'} to={benefit.url}>
            <Tooltip id='mes-info-tooltip'
                     title='Si vol saber si reuneix tots els requisits necessaris per accedir a aquest ajut, cliqui aquí'
                     placement='right'>
              <Button variant='contained' color='primary' key={benefit.ID}>
                <Typography style={{color: '#ffffff'}}>
                  <Trans>
                    Més informació
                  </Trans>
                </Typography>
              </Button>
            </Tooltip>
          </Link>
        </Grid>
      </Grid>
    </Grid>;

export const NoBenefitRow = () =>
    <Grid container justify='center' alignItems='center' className='ItemResult'>
      <Grid item xs={1}>
        <ClearIcon className='resultIconError'/>
      </Grid>
      <Grid item xs={11}>
        <Typography style={{color: '#004a8e', fontSize: '1rem'}}>
          <Trans>No opta a cap ajuda</Trans>
        </Typography>
      </Grid>
    </Grid>;

export default BenefitRow;
