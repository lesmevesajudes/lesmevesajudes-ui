import React from 'react';
import './InfoPage.css';

class InfoFonsInfancia extends React.Component {
    render() {
        return (
            <div className="Main">
                <h1>Fons extraordinari d’ajuts d’emergència social per a infants de 0 a 16 anys</h1>
                <span><p>És un ajut extraordinari que concedeix l'Ajuntament de Barcelona per cobrir les necessitats bàsiques
                    de subsistència d'infants de 0 a 16 anys. </p>
                    <p>L'import és de 100€ mensuals per fill/a fins a un màxim de 900€ anuals per infant. En el cas de
                        les famílies monoparentals que siguin perceptores d'aquest fons, s’afegeix un ajut complementari
                        de 900€/any.</p>
                    <p>Els destinataris dels ajuts són els infants menors de 16 anys, empadronats a Barcelona, que visquin
                    en unitats familiars amb rendes baixes i que siguin usuaris de Serveis Socials i disposin de
                    valoració social que acrediti la necessitat de l’ajut. Si compleixen els 16 anys durant l’any en
                        curs, s'abonarà la part proporcional de l'ajut.</p></span>

                <h2>Enllaços</h2>
                <ul>
                    <li><a href="http://w110.bcn.cat/portal/site/ServeisSocials/menuitem.931633495bcd6167b4f7b4f7a2ef8a0c/index974dd.html">Plana oficial de l'ajut</a></li>
                    <li><a href="https://w30.bcn.cat/APPS/portaltramits/portal/channel/default.html?&stpid=20150001184&style=ciudadano&language=ca">Tramitació</a></li>
                </ul>
            </div>
        );
    }
}
export default InfoFonsInfancia;
