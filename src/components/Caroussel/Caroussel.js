import React from 'react';
import {ButtonBack, ButtonNext, CarouselProvider, Slide, Slider} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Link} from 'react-router-dom';
import {Trans} from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import {Button, Grid} from '@material-ui/core/';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


const content = [
  {
    title: <Trans>Fons d'ajut d'emergència social per a infants</Trans>,
    body: <Trans>Ajut extraordinari adreçat a famílies en situació de vulnerabilitat per cobrir les necessitats bàsiques
      de subsistència d\'infants i adolescents de 0 a 16 anys.</Trans>,
    link: '/ajuts/fons_infancia'
  }, {
    title: <Trans>Ajuts individuals de menjador</Trans>,
    body: <Trans>Ajut individual orientat a cobrir el cost del servei de menjador de l'alumnat que pertany a famílies en
      situacions socioeconòmiques desafavorides.</Trans>,
    link: '/ajuts/menjador'
  }, {
    title: <Trans>Prestacions econòmiques d'urgència social derivades de la mediació a Barcelona</Trans>,
    body: <Trans>Prestació econòmica de caràcter temporal adreçada a persones residents a Barcelona amb dificultats per
      fer front al pagament del lloguer.</Trans>,
    link: '/ajuts/lloguer'
  }, {
    title: <Trans>Prestació econòmica per al pagament de deutes del lloguer</Trans>,
    body: <Trans>
      Prestació econòmica que s’atorga a persones amb deutes contrets per rebuts impagats de rendes de
      lloguer.
    </Trans>,
    link: '/ajuts/lloguer'
  }, {
    title: <Trans>Prestació econòmica d’urgència per al pagament de deutes d’hipoteca</Trans>,
    body: <Trans>
      Prestació a fons perdut que s’atorga a persones amb deutes contrets per rebuts impagats de quotes
      d’amortització del préstec hipotecari.
    </Trans>,
    link: '/ajuts/lloguer'
  }, {
    title: <Trans>Ajut per pèrdua de l’habitatge</Trans>,
    body: <Trans>
      Prestació econòmica d’urgència que s’atorga a persones que han perdut l’habitatge com a
      conseqüència d’un
      procés de desnonament o d’execució hipotecària.
    </Trans>,
    link: '/ajuts/lloguer'
  }, {
    title: <Trans>Ajudes al lloguer MIFO</Trans>,
    body: <Trans>
      Prestació a fons perdut que s’atorga a persones amb deutes contrets per rebuts impagats de quotes
      d’amortització del préstec hipotecari.
    </Trans>,
    link: '/ajuts/lloguer'
  }, {
    title: <Trans>Renda activa d'inserció</Trans>,
    body: <Trans>
      Ajut econòmic destinat a incrementar les oportunitats d’inserció en el mercat laboral a
      treballadors en
      atur amb necessitats econòmiques especials, com ara:
      Aturats de llarga durada
      Persones amb discapacitat
      Emigrants retornats
      Víctimes de violència de gènere o domèstica
    </Trans>,
    link: '/ajuts/rai'
  }, {
    title: <Trans>Renda Garantida Ciutadana</Trans>,
    body: <Trans>
      Renda destinada a garantir que tots els ciutadans i ciutadanes de Catalunya es puguin fer càrrec
      de les
      despeses essencials per al manteniment propi o de les persones que integren la unitat familiar o
      de
      convivència.
    </Trans>,
    link: '/ajuts/rgc'
  }
];

export default class extends React.Component {
  render() {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={75}
            totalSlides={content.length}
            visibleSlides={3}
        >
          <Slider>
            {content.map((slideContent, index) =>
                <Slide key={index} index={index}>
                  <Grid container direction='column' className='sliderItem'>
                    <Grid item justify='flex-start' style={{height: 90}}>
                      <Typography variant='title' className='sliderTitle' gutterBottom>
                        {slideContent.title}
                      </Typography>
                    </Grid>
                    <Grid item justify='flex-start' style={{height: 120}}>
                      <Typography className='sliderBody'>
                        {slideContent.body}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Link to={slideContent.link}>
                        <Button color='primary' variant='contained' className='sliderButton'> Més informació</Button>
                      </Link>
                    </Grid>
                  </Grid>
                </Slide>
            )}
          </Slider>
          <ButtonBack><KeyboardArrowLeftIcon/></ButtonBack>
          <ButtonNext><KeyboardArrowRightIcon/></ButtonNext>
        </CarouselProvider>
    );
  }
}
