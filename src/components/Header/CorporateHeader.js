import React, {Component} from "react";
import "./CorporateHeader.css";
import "./core.css";
import "./bcn-icon.css";
import LogoBCN from "./logo.png";
import AcceptCookiesBanner from "./AcceptCookiesBanner";

class CorporateHeader extends Component {
  render() {
    return (
        <header id="brand" className="v2017 lang-ca bcnbrand-legacy">
          <AcceptCookiesBanner/>
          <div className="bcnbrand-desktop">
            <div className="bcnbrand-navs-container">
              <nav
                  className="bcnbrand-shortcuts"
                  id="bcnbrand-shortcuts-nav"
                  aria-hidden="true"
                  style={{maxHeight: "0px", display: "none"}}
              >
                <ul className="bcnbrand-list" aria-expanded="false">
                  <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://ajuntament.barcelona.cat"
                        tabIndex="3"
                        title="ajuntament.barcelona.cat"
                        data-ga="Ajuntament"
                    >
                      <span className="bcnbrand-icon bcn-icon-ajuntament bcnbrand-circle bcnbrand-bg-purple"/>
                      <span className="bcnbrand-link">
                      ajuntament.barcelona.cat
                    </span>
                    </a>
                  </li>
                  <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://meet.barcelona.cat/ca"
                        tabIndex="3"
                        title="meet.barcelona.cat"
                        data-ga="Meet"
                    >
                      <span className="bcnbrand-icon bcn-icon-meet bcnbrand-circle bcnbrand-bg-yellow"/>
                      <span className="bcnbrand-link">meet.barcelona.cat</span>
                    </a>
                  </li>
                </ul>
                <ul className="bcnbrand-list" aria-expanded="false">
                  <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://eldigital.barcelona.cat/"
                        tabIndex="3"
                        title="Notícies BCN"
                        data-ga="Noticies"
                    >
                      <span className="bcnbrand-icon bcn-icon-noticies"/>
                      <span className="bcnbrand-link">Notícies BCN</span>
                    </a>
                  </li>
                  <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://guia.barcelona.cat/ca"
                        tabIndex="3"
                        title="Guia BCN"
                        data-ga="Guia"
                    >
                      <span className="bcnbrand-icon bcn-icon-guia"/>
                      <span className="bcnbrand-link">Guia BCN</span>
                    </a>
                  </li>
                  <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://w30.bcn.cat/APPS/portaltramits/portal/index/default.html?language=ca"
                        tabIndex="3"
                        title="Tràmits"
                        data-ga="Tramits"
                    >
                      <span className="bcnbrand-icon bcn-icon-tramits-o"/>
                      <span className="bcnbrand-link">Tràmits</span>
                    </a>
                  </li>
                  <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://barcelona.cat/planol/"
                        tabIndex="3"
                        title="Plànol BCN"
                        data-ga="Planol"
                    >
                      <span className="bcnbrand-icon bcn-icon-planol"/>
                      <span className="bcnbrand-link">Plànol BCN</span>
                    </a>
                  </li>
                  <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://ajuntament.barcelona.cat/canals-comunicacio-ciutadana/"
                        tabIndex="3"
                        title="Canals de comunicació"
                        data-ga="Canals"
                    >
                      <span className="bcnbrand-icon bcn-icon-relacio-ciutada"/>
                      <span className="bcnbrand-link">Canals de comunicació</span>
                    </a>
                  </li>
                  <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://com-shi-va.lameva.barcelona.cat/ca/"
                        tabIndex="3"
                        title="Com s'hi va"
                        data-ga="Com shi va"
                    >
                      <span className="bcnbrand-icon bcn-icon-comshiva"/>
                      <span className="bcnbrand-link">Com s'hi va</span>
                    </a>
                  </li>
                </ul>
                <a
                    className="bcnbrand-close"
                    tabIndex="4"
                    title="Tanca"
                    aria-label="Tanca"
                    aria-expanded="false"
                    aria-controls="bcnbrand-shortcuts-nav"
                    data-ga="Tanca-Drecera"
                >
                  <span className="bcnbrand-icon bcn-icon-tancar-light"/>
                </a>
              </nav>
              <nav
                  className="bcnbrand-lang lang bcnbrand-lang-extended"
                  id="bcnbrand-lang-nav"
                  aria-hidden="true"
                  style={{maxHeight: "0px", display: "none"}}
              >
                <ul className="bcnbrand-list" aria-expanded="false">
                  <li>
                    <a
                        href="https://vacances.barcelona.cat"
                        tabIndex="8"
                        className="active"
                        lang="ca"
                        title="Català"
                        data-ga="CA"
                    >
                      Català
                    </a>
                  </li>
                  <li>
                    <a
                        href="https://vacances.barcelona.cat/es/"
                        tabIndex="8"
                        lang="es"
                        title="Castellano"
                        data-ga="ES"
                    >
                      Castellano
                    </a>
                  </li>
                </ul>
                <a
                    className="bcnbrand-close"
                    tabIndex="9"
                    title="Tanca"
                    aria-label="Tanca"
                    aria-expanded="false"
                    aria-controls="bcnbrand-lang-nav"
                    data-ga="Tanca-Idioma"
                >
                  <span className="bcnbrand-icon bcn-icon-tancar-light"/>
                </a>
              </nav>
            </div>
            <div className="bcnbrand-main-container">
              <div className="bcnbrand-main">
                <ul className="bcnbrand-list">
                  <li>
                    <a
                        href="http://www.barcelona.cat/ca/"
                        className="bcnbrand-main-link"
                        tabIndex="1"
                        title="Barcelona"
                        data-ga="barcelona.cat"
                    >
                      www.barcelona.cat
                    </a>
                  </li>
                  <li>
                    <a
                        className="bcnbrand-nav-link bcnbrand-nav-link-squares"
                        data-target="bcnbrand-shortcuts"
                        tabIndex="2"
                        title="Dreceres de barcelona.cat"
                        aria-label="Dreceres de barcelona.cat"
                        aria-expanded="false"
                        aria-controls="bcnbrand-shortcuts-nav"
                        data-ga="Drecera"
                    >
                      <span className="bcnbrand-icon bcn-icon-menu-drecera"/>
                    </a>
                  </li>
                  <li>
                    <form action="https://cercador.barcelona.cat/ca">
                      <div className="bcnbrand-input">
                        <input
                            type="text"
                            name="query"
                            placeholder="Cerca a barcelona.cat..."
                            tabIndex="5"
                            title="Cerca a barcelona.cat"
                            data-ga="Cerca"
                        />
                        <button
                            type="submit"
                            tabIndex="6"
                            title="Cerca a barcelona.cat"
                            data-ga="Cerca"
                        >
                          <span className="bcnbrand-icon bcn-icon-cerca"/>
                        </button>
                      </div>
                    </form>
                  </li>
                  <li>
                    <a
                        className="bcnbrand-nav-link bcnbrand-nav-link-lang-selector"
                        data-target="bcnbrand-lang"
                        tabIndex="7"
                        title="Canviar idioma"
                        aria-label="Canviar idioma"
                        aria-expanded="false"
                        aria-controls="bcnbrand-lang-nav"
                        data-ga="Idioma"
                    >
                      <span className="bcnbrand-icon bcn-icon-idioma"/>
                      <span className="bcnbrand-select-lang">
                      <span className="bcnbrand-lang-text">Català</span>
                      <span className="bcnbrand-icon bcn-icon-baix-bold"/>
                      <span className="bcnbrand-icon bcn-icon-dalt-bold"/>
                    </span>
                    </a>
                  </li>
                  <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bcnbrand-logo-main"
                        href="http://ajuntament.barcelona.cat/ca/"
                        tabIndex="10"
                        data-ga="Llima"
                    >
                      <img src={LogoBCN} alt="Logo Ajuntament de Barcelona"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
    );
  }
}

export default CorporateHeader;
