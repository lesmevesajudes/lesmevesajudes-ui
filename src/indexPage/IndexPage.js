import React from 'react';
import {Link} from 'react-router-dom';
import './IndexPage.css';
import AppHeader from '../components/AppHeader/AppHeader';
import {Trans, translate} from 'react-i18next';
import Button from '@material-ui/core/Button';

class IndexPage extends React.Component {
  render() {
    return (
        <div>
          <AppHeader/>
          <div className='BlockContainer'>
            <div className='Block'>
              <div className='AppLogo'/>
              <div className='BlockText'>
              <span>
                <Trans>Vols saber a quins ajuts públics pots accedir?</Trans>
              </span>
              </div>
            </div>
          </div>
          <div className='CTA'>
            <p className='PresentationText'>
              <Trans i18nKey='PresentationText'>
                Aquesta eina et permetrà consultar a quins ajuts i prestacions
                socials tens dret de manera àgil i precisa. Podràs trobar-hi
                ajudes gestionades per l’Ajuntament, la Generalitat i l’Estat. El
                simulador, que es troba en fase inicial, anirà incorporant nous
                ajuts.
              </Trans>
            </p>
            <Link className='CTALink' to='/wizard/'>
              <Button variant='raised' color='primary'>
                <b>
                  <Trans>Comença la simulació</Trans>
                </b>
              </Button>
            </Link>
          </div>
          <div className='Main'>
            <div className='Presentation'/>
            <div className='Row'>
              <div className='Cell'>
                <h1>
                  <Link className='IndexPageLink' to='/ajuts/fons_infancia'>
                    <Trans>Fons infància</Trans>
                  </Link>
                </h1>
                <p>
                  <Trans i18nKey='FonsInfanciaShortText'>
                    Fons infància Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </Trans>
                </p>
              </div>
              <div className='Cell'>
                <h1>
                  <Link className='IndexPageLink' to='/ajuts/menjador'>
                    <Trans>Ajuts individuals de menjador</Trans>
                  </Link>
                </h1>
                <p>
                  <Trans i18nKey='AjutsIndividualsShortText'>
                    Ajuts individuals de menjador Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </Trans>
                </p>
              </div>
              <div className='Cell'>
                <h1>
                  <Link className='IndexPageLink' to='/ajuts/lloguer'>
                    <Trans>Ajuts al pagament del lloguer</Trans>
                  </Link>
                </h1>
                <p>
                  <Trans i18nKey='AjutsAlPagamentLloguerShortText'>
                    Ajuts al pagament del lloguer Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </Trans>
                </p>
              </div>
            </div>
            <div className='Row'>
              <div className='Cell'>
                <h1>
                  <Link className='IndexPageLink' to='/ajuts/rai'>
                    <Trans>Renda activa d'inserció</Trans>
                  </Link>
                </h1>
                <p>
                  <Trans i18nKey='RendaActivaInsercioShortText'>
                    Renda activa d'inserció Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </Trans>
                </p>
              </div>
              <div className='Cell'>
                <h1>
                  <Link className='IndexPageLink' to='/ajuts/rgc'>
                    <Trans>Renda Garantida Ciutadana</Trans>
                  </Link>
                </h1>
                <p>
                  <Trans i18nKey='RendaGarantidaCiutadanaShortText'>
                    Renda Garantida Ciutadana Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </Trans>
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default translate('translations')(IndexPage);
