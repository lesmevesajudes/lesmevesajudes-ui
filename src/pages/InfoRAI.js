import React from 'react';
import './InfoPage.css';
import AppHeader from "../components/AppHeader/AppHeader";

class InfoRAI extends React.Component {
    render() {
        return (
            <div>
                <AppHeader/>
                <div className="Main">
                    <h1>Renda activa d'inserció</h1>
                    <span>
                    L’objectiu de la Renda Activa d’Inserció (RAI) és la d’incrementar les oportunitats d’inserció en el mercat laboral als treballadors en atur amb especial necessitats econòmiques i dificultat per trobar feina, i atorgar un ajut econòmic.
                        Els destinataris són persones menors de 65 anys i amb baixos ingressos.  Alguns requisits varien segons la tipologia de l’ajuda:</span>
                    <h2>Ajut per desocupats de llarga durada</h2>
                    <span>Els destinataris són les persones de 45 i més any d’edat, inscrits ininterrompudament en l’oficina de treball com demandant de feina durant 12 o més mesos.</span>
                    <h2>Per discapacitats</h2>
                    <span>Els destinataris són les persones que tenen reconegudes el grau de discapacitat igual o superior al 33% o són pensionistes per incapacitat.</span>
                    <h2>Per emigrants retornats</h2>
                    <span>Els destinataris són les persones que tenen 45 anys o més i han treballat almenys 6 mesos en l’estranger des de la darrera sortida d’Espanya i han retornat en els 12 mesos abans de la sol·licitud.</span>
                    <h2>Víctimes de violència de gènere o domèstica</h2>
                    <span>Els destinataris són les persones que puguin acreditar que són víctimes de violència de gènere o de violència domèstica.</span>

                    <h2>Enllaços</h2>
                    <ul>
                        <li><a href="http://sepe.es/contenidos/personas/prestaciones/he_dejado_cobrar_paro/no_tengo_prestacion.html">Plana oficial de l'ajut al Servicio público de empleo estatal</a></li>
                        <li><a href="https://sede.sepe.gob.es/portalSedeEstaticos/flows/gestorContenidos?page=sv01">Tramitació</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default InfoRAI;
