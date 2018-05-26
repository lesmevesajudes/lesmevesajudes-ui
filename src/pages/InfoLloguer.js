import React from "react";
import "./InfoPage.css";
import AppHeader from "../components/AppHeader/AppHeader";
import Grid from '@material-ui/core/Grid';

class InfoLloguer extends React.Component {
  render() {
    return (
        <Grid container className="container-family">
          <AppHeader/>
          <Grid item sm={12} className="Main">
            <h1>
              Habitatge - Ajuda per pagament del lloguer (renovables, especial
              urgències, borsa i > 65 anys)
            </h1>
            <p>
              Les prestacions per al pagament del lloguer són ajuts a fons perdut
              per fer front al pagament del lloguer de les unitats de convivència
              que tinguin ingressos baixos o moderats, a qui el cost de
              l'habitatge pot situar en risc d'exclusió social residencial.
            </p>
            <p>
              S'entén que hi ha risc d'exclusió social quan la unitat de
              convivència a què pertany la persona que sol·licita l'ajut paga un
              lloguer superior al definit com a lloguer just. Únicament poden
              presentar la sol·licitud aquelles persones que renoven les
              prestacions per al pagament del lloguer. Actualment no hi ha
              convocatòria oberta per a nous sol·licitants, col·lectius
              específics.
            </p>

            <h2>Enllaços</h2>
            <ul>
              <li>
                <a href="http://habitatge.gencat.cat/ca/04_ambits_dactuacio/lloguer/ajuts_al_pagament_del_lloguer/prestacions_permanents_per_al_pagament_del_lloguer/">
                  Plana oficial de l'ajut
                </a>
              </li>
              <li>
                <a href="http://governacio.gencat.cat/ca/tramits/tramits-temes/Prestacions-permanents-per-al-pagament-del-lloguer">
                  Tramitació
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
    );
  }
}
export default InfoLloguer;
