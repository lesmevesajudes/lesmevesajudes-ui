import React from 'react';
import { Link } from 'react-router-dom'
import AppFooter from "../components/Footer/Footer";

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <div className="IndexPageImage">
                        <Link className="CTALink" to="/wizard/">
                            <button className="CTA">
                                <b>Troba a quines ajudes pots optar!</b>
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
                <div className="Main">
                    <div className="Row">
                        <div className="Cell">
                            <h1>Ajudes RAI</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="Cell">
                            <h1>Ajuda 0-16</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="Cell">
                            <h1>Ajudes al lloguer</h1>
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
                            <h1>Ajudes RAI</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <AppFooter/>
            </div>
        );
    }
}

export default IndexPage;