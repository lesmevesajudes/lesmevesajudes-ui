import React from 'react';
import './InfoPage.css';
import AppHeader from "../components/AppHeader/AppHeader";

class InfoRGC extends React.Component {
    render() {
        return (
            <div>
                <AppHeader/>
                <div className="Main">
                    <h1>Renda Garantida de Ciutadania</h1>
                    <p>La Renda garantida de ciutadania (RGC) és la prestació social a través de la qual s’asseguren els
                        mínims d'una vida digna a les persones i unitats familiars que es troben en situació de pobresa,
                        per tal de promoure la seva autonomia i participació activa en la societat. Es tracta d’una
                        prestació social de naturalesa econòmica i percepció periòdica.  La Renda garantida de ciutadania
                        (RGC) és un dret subjectiu i,  consta de dues prestacions econòmiques: a) prestació garantida, no
                        condicionada, subjecta als requisits que estableix la llei; b) prestació complementària d'activació
                        i inserció, condicionada al compromís d’un pla d'inclusió social o d'inserció laboral.</p>
                    <p>
                        Els destinataris han de ser persones majors de 23 anys, empadronats a Catalunya i residents durant
                        vint-i-quatre mesos anteriors,  no ser beneficiàries d'una prestació pública o privada de servei
                        residencial permanent de tipus social, sanitari o sociosanitari, i no disposar d’ingressos, rendes
                        o recursos mínims, durant els sis mesos anteriors a la sol·licitud.
                    </p>


                    <h2>Enllaços</h2>
                    <ul>
                        <li><a href="http://treballiaferssocials.gencat.cat/ca/ambits_tematics/pobresa_i_inclusio_social/renda_garantida_ciutadania/rendagarantida_/">Plana oficial de l'ajut</a></li>
                        <li><a href="https://web.gencat.cat/ca/tramits/tramits-temes/rgc_complement_estatal_activable?evolutiuTramit=1&moda=1">Tramitació</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default InfoRGC;
