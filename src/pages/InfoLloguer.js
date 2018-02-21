import React from 'react';
import './InfoPage.css';
import AppHeader from "../components/AppHeader/AppHeader";

class InfoLloguer extends React.Component {
    render() {
        return (
            <div>
                <AppHeader/>
                <div className="Main">
                    <h1>Habitatge - Ajuda per pagament del lloguer (renovables, especial urgències, borsa i > 65 anys)</h1>
                    <p>Les prestacions per al pagament del lloguer són ajuts a fons perdut per fer front al pagament del
                        lloguer de les unitats de convivència que tinguin ingressos baixos o moderats, a qui el cost
                        de l'habitatge pot situar en risc d'exclusió social residencial.</p>
                    <p>Els destinataris són els titulars de contractes de lloguer obtinguts a través de les borses de
                        mediació per al lloguer social, o gestionats per entitats sense ànim de lucre. També
                        beneficiaris de les prestacions econòmiques d’especial urgència (adreçades a persones que han
                        perdut l’habitatge a conseqüència d’un procés de desnonament o d’execució hipotecària),
                        beneficiaris de les prestacions complementàries per donar continuïtat al pagament del lloguer.
                        També poden accedir les persones que ja van ser beneficiàries el darrer any (renovació) que no
                        rebessin les subvencions per al  per al pagament del lloguer segons la resolució
                        Resolució GAH/939/2016, de 5 d'abril.</p>


                    <h2>Enllaços</h2>
                    <ul>
                        <li><a href="http://habitatge.gencat.cat/ca/04_ambits_dactuacio/lloguer/ajuts_al_pagament_del_lloguer/prestacions_permanents_per_al_pagament_del_lloguer/">Plana oficial de l'ajut</a></li>
                        <li><a href="http://governacio.gencat.cat/ca/tramits/tramits-temes/Prestacions-permanents-per-al-pagament-del-lloguer">Tramitació</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default InfoLloguer;
