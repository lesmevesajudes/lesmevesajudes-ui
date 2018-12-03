//@flow
import {Button, Grid, Hidden, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import React from 'react';
import {Trans, withNamespaces} from 'react-i18next';
import {Link} from 'react-router-dom';
import AppHeader from '../components/AppHeader/AppHeader';
import Caroussel from '../components/Caroussel/Caroussel';
import {getCodeVersion, getReleaseDate} from '../shared/getCodeVersion';
import {styles} from '../styles/theme';
import './indexPage/IndexPage.css';

const content = [
  {
    title: <Trans i18nKey='016_titol'>Ajudes d’urgència social per a famílies amb infants de 0 a 16 anys</Trans>,
    body: <Trans i18nKey='016_resum'>Ajuda extraordinaria adreçada a famílies en situació de vulnerabilitat per cobrir
      les necessitats bàsiques de subsistència d'infants i adolescents de 0 a 16 anys.</Trans>,
    link: '/ajuts/fons_infancia'
  }, {
    title: <Trans i18nKey='menjador_titol'>Ajuts de menjador escolar</Trans>,
    body: <Trans i18nKey='menjador_resum'>Ajut individual orientat a cobrir el cost del servei de menjador de l'alumnat
      que pertany a famílies en situacions socioeconòmiques desafavorides.</Trans>,
    link: '/ajuts/menjador'
  }, {
    title: <Trans i18nKey='mediacio_titol'>Prestacions econòmiques d'urgència social derivades de la mediació a
      Barcelona</Trans>,
    body: <Trans i18nKey='mediacio_resum'>Prestació econòmica de caràcter temporal adreçada a persones residents a
      Barcelona amb dificultats per fer front al pagament del lloguer.</Trans>,
    link: '/ajuts/lloguer_mediacio'
  }, {
    title: <Trans i18nKey='deute_lloguer_titol'>Prestació econòmica per al pagament de deutes del lloguer</Trans>,
    body: <Trans i18nKey='deute_lloguer_resum'>
      Prestació econòmica que s’atorga a persones amb deutes contrets per rebuts impagats de rendes de lloguer.
    </Trans>,
    link: '/ajuts/lloguer_especial_urgencia'
  }, {
    title: <Trans i18nKey='deute_hipoteca_titol'>Prestació econòmica d’urgència per al pagament de deutes
      d’hipoteca</Trans>,
    body: <Trans i18nKey='deute_hipoteca_resum'>
      Prestació a fons perdut que s’atorga a persones amb deutes contrets per rebuts impagats de quotes d’amortització
      del préstec hipotecari.
    </Trans>,
    link: '/ajuts/hipoteca_especial_urgencia'
  }, {
    title: <Trans i18nKey='perdua_habitatge_titol'>Ajuda per pèrdua de l’habitatge</Trans>,
    body: <Trans i18nKey='perdua_habitatge_resum'>
      Prestació econòmica d’urgència que s’atorga a persones que han perdut
      l’habitatge com a conseqüència d’un procés de desnonament o d’execució
      hipotecària.
    </Trans>,
    link: '/ajuts/desnonament_especial_urgencia'
  }, {
    title: <Trans i18nKey='pagament_lloguer_titol'>Subvencions per al pagament de lloguer</Trans>,
    body: <Trans i18nKey='pagament_lloguer_resum'>
      Prestació a fons perdut que s’atorga a persones amb deutes contrets per rebuts impagats de quotes
      d’amortització del préstec hipotecari.
    </Trans>,
    link: '/ajuts/mifo'
  }, {
    title: <Trans i18nKey='rai_titol'>Renda activa d'inserció</Trans>,
    body: <Trans i18nKey='rai_resum'>
      Ajuda econòmica destinada a incrementar les oportunitats d’inserció en el
      mercat laboral a treballadors/es en atur amb necessitats econòmiques
      especials.
    </Trans>,
    link: '/ajuts/rai'
  }, {
    title: <Trans i18nKey='rgc_titol'>Renda garantida de ciutadania</Trans>,
    body: <Trans i18nKey='rgc_resum'>
      Renda destinada a garantir que tots els ciutadans i ciutadanes de Catalunya
      es puguin fer càrrec de les despeses essencials per al manteniment propi o
      de les persones que integren la unitat familiar o de convivència.
    </Trans>,
    link: '/ajuts/rgc'
  }
];

const IndexPage = (props) =>
    <div>
      <AppHeader/>
      <div className='BlockContainer'>
        <div className='logoContainer'>
          <Hidden smDown>
            <div className='AppLogo' style={{opacity: 0.5}}/>
          </Hidden>
          <div className='BlockText'>
                <span className='titleLogo'>
                  <Trans
                      i18nKey='vols_saber_a_quines_ajudes_pots_accedir'>Vols saber a quines ajudes pots accedir?</Trans>
                </span>
            <Link className='CTALink' to='/wizard/'>
              <Button variant='contained' color='primary' className={props.classes.button}>
                <b>
                  <Trans i18nKey='iniciar'>Iniciar</Trans>
                </b>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='CTA'>
        <p className='PresentationText' style={{textAlign: 'center'}}>
          <Trans i18nKey='disclaimer'>
            Aquesta eina et permetrà consultar a quins ajuts i prestacions socials pots optar.
            El simulador, que es troba en fase inicial, anirà incorporant noves ajudes, tant de l’Ajuntament de
            Barcelona com de la Generalitat i l’Estat.
          </Trans>
        </p>
      </div>
      <div className='sliderContainer'>
        <div className='Presentation'>
          <Typography variant='h4' align='center' className={props.classes.sliderContainerTitle} gutterBottom>
            <Trans i18nKey='ajudes_destacades'>AJUDES DESTACADES</Trans>
          </Typography>
          <Hidden smUp>
            {content.slice(0, 3).map((slideContent, index) =>
                <div key={index}>
                  <Grid container direction='column'>
                    <Grid item xs={12} className={props.classes.helpContainer}>
                      <Grid item>
                        <Typography variant='h6' className='sliderTitle' gutterBottom>
                          {slideContent.title}
                        </Typography>
                      </Grid>
                      <Grid item className={props.classes.helpContainerBody}>
                        <Typography className='sliderBody'>
                          {slideContent.body}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <Link to={slideContent.link}>
                          <Button color='primary' variant='contained' className='sliderButton'>
                            <Trans i18nKey='mes_info'>
                              Més informació
                            </Trans>
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
            )}
          </Hidden>
          <Hidden smDown>
            <Caroussel content={content}/>
          </Hidden>
        </div>
      </div>
      <div style={{float: 'right', color: '#bfbfbf', paddingTop: '30px', paddingRight: '30px'}}>
        Release Date: {getReleaseDate()} Code Version: {getCodeVersion().slice(-5)}
      </div>
    </div>;

export default withNamespaces('index')(withStyles(styles)(IndexPage));
