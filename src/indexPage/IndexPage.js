import React from 'react';
import { Link } from 'react-router-dom'
import './IndexPage.css';
import AppHeader from "../components/AppHeader/AppHeader";

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <AppHeader/>
                <div className="Block">
                    <div className='AppLogo'>
                    </div>
                    <div className="BlockText">
                        <span>Vols saber a quins ajuts públics pots optar?</span>
                    </div>
                </div>
                <div className='CTA'>
                    <p className="PresentationText">Aquesta eina et permetrà consultar a quins ajuts i prestacions
                        socials tens dret de manera àgil i precisa. Podràs trobar-hi ajudes gestionades per
                        l’Ajuntament, la Generalitat i l’Estat. El simulador, que es troba en fase inicial, anirà
                        incorporant nous ajuts.
                    </p>
                    <Link className="CTALink" to="/wizard/">
                        <button className="CTAButton">
                            <b>Comença la simulació</b>
                        </button>
                    </Link>
                </div>
                <div className="Main">
                    <div className="Presentation">

                    </div>
                    <div className="Row">
                        <div className="Cell">
                            <h1><Link className="IndexPageLink" to="/ajuts/fons_infancia">Fons infància</Link></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="Cell">
                            <h1><Link className="IndexPageLink" to="/ajuts/menjador">Ajuts individuals de menjador</Link></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="Cell">
                            <h1><Link className="IndexPageLink" to="/ajuts/lloguer">Ajuts al pagament del lloguer</Link></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="Row">
                        <div className="Cell">
                            <h1><Link className="IndexPageLink" to="/ajuts/rai">Renda activa d'inserció</Link></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="Cell">
                            <h1><Link className="IndexPageLink" to="/ajuts/rgc">Renda Garantida Ciutadana</Link></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexPage;