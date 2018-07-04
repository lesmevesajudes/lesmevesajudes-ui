import React from 'react';
import './InfoPage.css';
import AppHeader from '../components/AppHeader/AppHeader';
import Grid from '@material-ui/core/Grid';

class InfoRAI extends React.Component {
  render() {
    return (
        <Grid container className='container-family'>
          <AppHeader/>
          <Grid item sm={12} className='Main'>
            <h1>Renda activa d'inserció</h1>
            <h2>Descripció</h2>
            <p>
              L’objectiu de la Renda Activa d’Inserció (RAI) és la d’incrementar les oportunitats d’inserció en el
              mercat laboral als treballadors en atur amb especial necessitats econòmiques i dificultat per trobar
              feina, i atorgar un ajut econòmic.
              Els destinataris són persones menors de 65 anys i amb baixos ingressos. Alguns requisits varien segons la
              tipologia de l’ajuda:

            </p>
            <h3>Ajut per a desocupats de llarga durada</h3>
            <p>
              Els destinataris són les persones de 45 i més any d’edat, inscrits ininterrompudament en l’oficina de
              treball com demandant de feina durant 12 o més mesos.
            </p>
            <h3>Per a discapacitats</h3>
            <p>
              Els destinataris són les persones que tenen reconegudes el grau de discapacitat igual o superior al 33% o
              són pensionistes per incapacitat.

            </p>
            <h3>Per a emigrants retornats</h3>
            <p>
              Els destinataris són les persones que tenen 45 anys o més i han treballat almenys 6 mesos en l’estranger
              des de la darrera sortida d’Espanya i han retornat en els 12 mesos abans de la sol·licitud.

            </p>
            <h3>Víctimes de violència de gènere o domèstica</h3>
            <p>
              Els destinataris són les persones que puguin acreditar que són víctimes de violència de gènere o de
              violència domèstica.
            </p>

            <h2>Requisits d’accés</h2>
            <p>
              Poden sol·licitar la renda activa d’inserció (RAI) les persones que segueixen a l’atur i no tenen dret a
              la prestació contributiva ni al subsidi per desocupació. Les persones que vulguin optar per la RAI han de
              complir els següents requisits:
              <ul>
                <li>Estar aturat i inscrit com a demandant d'ocupació, mantenir aquesta inscripció durant tot el període
                  de percepció de la prestació i subscriure el compromís d'activitat.
                </li>
                <li>Ser menor de 65 anys.</li>
                <li>No tenir ingressos mensuals propis superiors al 75% del salari mínim interprofessional (SMI),
                  exclosa la part proporcional de dues pagues extraordinàries. (Quanties per a aquest any). Les rendes
                  es computen pel seu rendiment íntegre o brut. El rendiment que procedeixi d'activitats empresarials,
                  professionals, agrícoles, ramaderes o artístiques, es computarà per la diferència entre els ingressos
                  i despeses necessàries per a la seva obtenció. Els guanys patrimonials es computen per la diferència
                  entre els guanys i les pèrdues patrimonials.
                </li>
                <li>Si tens cònjuge i / o fills menors de 26 anys o majors discapacitats, o menors acollits, únicament
                  s'entendrà complert el requisit de carència de rendes quan la suma de les rendes de tots els
                  integrants de la teva unitat familiar així constituïda, incloent-te a tu, dividida pel nombre de
                  membres que la componen, no supera el 75% de l'SMI, exclosa la part proporcional de dues pagues
                  extraordinàries.
                </li>
                <li>No haver estat beneficiari de la RAI en els 365 dies naturals anteriors a la data de sol·licitud
                  d'admissió al programa, excepte en el cas de víctimes de violència de gènere o víctimes de violència
                  domèstica i persones amb discapacitat.
                </li>
                <li>No haver estat beneficiari de tres drets al programa de renda activa d'inserció anteriors.</li>
              </ul>
            </p>
            <h2>Per més informació</h2>
            <ul>
              <li>
                <a href='http://sepe.es/contenidos/personas/prestaciones/he_dejado_cobrar_paro/no_tengo_prestacion.html'>
                  Plana oficial de l'ajut al Servicio público de empleo estatal
                </a>
              </li>
              <li>
                <a href='https://sede.sepe.gob.es/portalSedeEstaticos/flows/gestorContenidos?page=sv01'>Tràmit</a>
              </li>
              <li>
                <a href='https://sede.sepe.gob.es/contenidosSede/generico.do?pagina=/proce_ciudadanos/autocalculo_prestacion.html'>Simulador
                  de prestació</a>
              </li>
            </ul>

          </Grid>
        </Grid>
    );
  }
}

export default InfoRAI;
