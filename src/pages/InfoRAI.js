import React from "react";
import "./InfoPage.css";
import AppHeader from "../components/AppHeader/AppHeader";
import {Grid} from 'material-ui'
class InfoRAI extends React.Component {
  render() {
    return (
        <Grid container className="container-family">
          <AppHeader/>
          <Grid item sm={12} className="Main">
            <h1>Renda activa d'inserció</h1>
            <span>
            L’objectiu de la renda activa d’inserció (RAI) és incrementar les
            oportunitats d’inserció en el mercat laboral als treballadors en
            atur amb especial necessitats econòmiques i dificultat per trobar
            feina, atorgant-los també un ajut econòmic per a aquest efecte. Els
            destinataris són persones menors de 65 anys i amb baixos ingressos.
            Alguns requisits varien segons la tipologia de l’ajuda:
          </span>
            <h2>Ajut per a desocupats de llarga durada</h2>
            <p>
              Es destina a persones de 45 i més anys, inscrits ininterrompudament
              en l’oficina de treball com a demandants de feina durant almenys 12
              mesos.
            </p>
            <h2>Per a discapacitats</h2>
            <p>
              Els destinataris són totes aquelles persones que tenen reconegudes
              un grau de discapacitat igual o superior al 33% o són pensionistes
              per incapacitat.
            </p>
            <h2>Per a emigrants retornats</h2>
            <p>
              Els destinataris són les persones que tenen 45 anys o més i han
              treballat almenys 6 mesos a l’estranger des de la darrera sortida
              d’Espanya i han retornat durant els 12 mesos la anteriors a la
              sol·licitud.
            </p>
            <h2>Víctimes de violència de gènere o domèstica</h2>
            <p>
              Es destina a tota persona que pugui acreditar que és víctima de
              violència de gènere o de violència domèstica.
            </p>

            <h2>Enllaços</h2>
            <ul>
              <li>
                <a href="http://sepe.es/contenidos/personas/prestaciones/he_dejado_cobrar_paro/no_tengo_prestacion.html">
                  Plana oficial de l'ajut al Servicio público de empleo estatal
                </a>
              </li>
              <li>
                <a href="https://sede.sepe.gob.es/portalSedeEstaticos/flows/gestorContenidos?page=sv01">
                  Tramitació
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
    );
  }
}
export default InfoRAI;
