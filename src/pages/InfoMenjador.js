import React from 'react';
import './InfoPage.css';
import AppHeader from "../components/AppHeader/AppHeader";

class InfoMenjador extends React.Component {
    render() {
        return (
            <div>
                <AppHeader/>
                <div className="Main">
                    <h1>Beques menjador</h1>
                    <p>És un ajut individual de menjador (que cobreix del tot o parcialment el cost del servei) a
                        l'alumnat que pertany a famílies en situacions socioeconòmiques desafavorides. Els destinataris
                        són l'alumnat de P-3 a 4t d'ESO escolaritzat en centres públics i concertats, de famílies amb
                        ingressos baixos.</p>
                    <p>Per sol·licitar un ajut, les famílies s'han d'adreçar al Consorci d’Educació de Barcelona si
                        els alumnes estan escolaritzats en centres de la ciutat de Barcelona o als consells
                        comarcals en cas de tractar-se de centres de fora de Barcelona.
                    </p>
                    <h2>Enllaços</h2>
                    <ul>
                        <li><a href="http://ensenyament.gencat.cat/ca/serveis-tramits/ajuts-subvencions/per-destinataris/families-alumnes/individuals-menjador/">Plana oficial de l'ajut</a></li>
                        <li><a href="http://www.edubcn.cat/ca/alumnat_i_familia/ajuts_beques_i_subvencions/convocatories_ceb/ajuts_de_menjador">Tramitació</a></li>
                    </ul>

                </div>
            </div>
        );
    }
}
export default InfoMenjador;
