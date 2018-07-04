//@flow
import React from 'react';
import {Link} from 'react-router-dom';
import './indexPage/IndexPage.css';
import AppHeader from '../components/AppHeader/AppHeader';
import {Trans, translate} from 'react-i18next';
import {Button, Typography} from '@material-ui/core';
import {styles} from '../styles/theme';
import {withStyles} from '@material-ui/core/styles';
import Caroussel from '../components/Caroussel/Caroussel';

const IndexPage = (props) =>
  <div>
    <AppHeader/>
    <div className='BlockContainer'>
      <div className='Block'>
        <div className='AppLogo' style={{opacity: 0.5}}/>
        <div className='BlockText'>
              <span className='titleLogo'>
                <Trans>Vols saber a quins ajuts públics pots accedir?</Trans>
              </span>
          <Link className='CTALink' to='/wizard/'>
            <Button variant='contained' color='primary' className={props.classes.button}>
              <b>
                <Trans>CONEGUI LES SEVES AJUDES</Trans>
              </b>
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <div className='CTA'>
      <p className='PresentationText' style={{textAlign: 'center'}}>
        <Trans>
          Aquesta eina us permetrà consultar a quins ajuts i prestacions socials podeu arribar a optar. Heu de declarar,
          sota la vostra responsabilitat, que les respostes són certes.Podreu trobar-hi ajudes gestionades per
          l’Ajuntament, la Generalitat i l’Estat.<br/>
          El simulador, que es troba en fase inicial, anirà incorporant ajuts nous. <br/>Aquest assistent no tramita la
          sol·licitud.
        </Trans>
      </p>
    </div>
    <div className='sliderContainer'>
      <div className='Presentation'>
        <Typography variant='title' align='center' className='sliderContainerTitle' gutterBottom>Ajudes
          destacades</Typography>
      <Caroussel/>
      </div>
    </div>
  </div>;

export default translate('translations')(withStyles(styles)(IndexPage));
