import React from 'react';
import { Link } from 'react-router-dom'
import AppFooter from "../components/Footer/Footer";
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
                            <p>Vols saber a quines ajudes públiques pots optar?</p>
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
                            <h1>Ajudes RAI</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="Cell">
                            <h1>Ajudes al lloguer</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="Cell">
                            <h1>Beques menjador</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="Cell">
                            <h1>Ajudes B-MINCOME</h1>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                        <div className="Cell">
                            <h1>Renda Garantida Ciutadania</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="Cell">
                            <h1>Ajuda a menors de 0 a 16 anys</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="footer-content">
                            <ul>
                                <li class="city-council">© Ajuntament de Barcelona</li>
                                <li class="department"><a href="http://www.barcelona.cat/dretssocials/ca/">Drets Socials</a></li>
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