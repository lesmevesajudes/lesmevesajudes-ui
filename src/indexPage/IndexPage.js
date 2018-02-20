import React from 'react';
import { Link } from 'react-router-dom'
import './IndexPage.css';

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <div className="Main">
                    <div className="Block">
                        <div className='AppLogo'>
                        </div>
                        <div className="BlockText">
                            <span>Vols saber a quins ajuts públics pots optar?</span>
                        </div>
                    </div>
                    <div className='CTA'>
                        <Link className="CTALink" to="/wizard/">
                            <button className="CTAButton">
                                <b>Consultar</b>
                            </button>
                        </Link>
                    </div>


                    <div className="Presentation">
                        <p className="PresentationText">Benvolgut/da,<br/>
                            està accedint el simulador social de les meves ajudes de la Ciutat de Barcelona per comprovar
                            si és susceptible de poder veure quines ajudes pot assolir.
                            Aquest simulador no tramita cap sol·licitud. El simulador virtual farà unes preguntes amb la
                            intenció de determinar si pot arribar a optar de les prestacions implementades en el sistema.</p>

                    </div>
                    <div className="Row">
                        <div className="Cell">
                            <h1>Fons infància</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="Cell">
                            <h1>Ajuts individuals de menjador</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="Cell">
                            <h1>Ajuts al pagament del lloguer</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="Cell">
                            <h1>Renda activa d'inserció</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="Cell">
                            <h1>Renda Garantida Ciutadania</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="footer-content">
                            <ul>
                                <li className="city-council">© Ajuntament de Barcelona</li>
                                <li className="department"><a href="http://www.barcelona.cat/dretssocials/ca/">Drets Socials</a></li>
                                <li><a href="/ca/avis-legal">Avís legal</a></li>
                                <li><a href="/ca/accessibilitat">Accessibilitat</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexPage;