import React from 'react';
import './InfoPage.css';
import AppHeader from '../components/AppHeader/AppHeader';
import Grid from '@material-ui/core/Grid';

class HabitatgeEspecialUrgenciaDesnonaments extends React.Component {
  render() {
    return (
        <Grid container className='container-family'>
          <AppHeader/>
          <Grid item sm={12} className='Main'>
            <h1>Prestacions econòmiques d’especial urgència davant la pèrdua de l’habitatge per desnonament o execució
              hipotecària (Generalitat)</h1>
            <ul>
              <li>Situació: Activa</li>
            </ul>
            <h2>1. Descripció</h2>
            Prestació econòmica d’urgència que s’atorga a persones que han perdut l’habitatge com a conseqüència d’un
            procés de desnonament o d’execució hipotecària i que són titulars d’un contracte de lloguer o estan cercant
            habitatge.

            <h2>2. Requisits d’accés</h2>
            <ul>
              <li>Residir a Catalunya</li>
              <li>Les persones sol·licitants han de trobar-se en situació de pèrdua de l'habitatge i han de ser titulars
                d'un contracte de lloguer o estar en procés de cerca d'habitatge.
              </li>
              <li>En aquest supòsit, es podrà dictar una resolució favorable de la sol·licitud de prestació,
                condicionada a la presentació del contracte d'arrendament en el termini de 60 dies, comptats a partir de
                l'endemà de la data de la seva notificació.
              </li>
              <li>No poden accedir a aquestes prestacions les persones ocupants d'habitatges gestionats per l'Agència de
                l'Habitatge de Catalunya, ni tampoc les que han rebut l'oferta per accedir a un habitatge del parc
                públic de lloguer i no l'han acceptat, llevat de causa justificada.
              </li>
              <li>Acreditar la urgència i l'especial necessitat de la unitat de convivència de la persona sol·licitant
                mitjançant l'aportació d'un informe socioeconòmic dels serveis socials d'atenció primària o
                especialitzada, en el qual es proposi l'atorgament de la prestació per aquests motius.
              </li>
              <li>Els ingressos de la unitat de convivència de la qual forma part la persona sol·licitant en el moment
                de presentar la sol·licitud (ingressos mensuals ponderats d'acord amb el nombre de membres que en formen
                part i de la zona on estigui ubicat l'habitatge), no poden ser superiors a 2 vegades l'IRSC (Indicador
                de Renda de Suficiència de Catalunya) ponderats, si es tracta d'una persona sola, no superiors a 2,5
                vegades a l'IRSC ponderat si es tracta d'unitats de convivència de dos membres o més, i no superiors a 3
                vegades l'IRSC ponderat, en el cas de persones amb discapacitats o amb gran dependència.
              </li>
              <li>S'entén per unitat de convivència el conjunt de persones empadronades en un domicili amb independència
                de si tenen relació de parentiu entre si.
              </li>
              <li>El termini entre la data en què es deixa l'habitatge i la data en què es sol·licita la prestació no
                pot ser superior a 24 mesos.
              </li>
              <li>La data d'entrada en vigor del nou contracte no pot ser anterior en 60 dies a la data en què es deixa
                l'habitatge, excepte en els casos de dació en pagament o altres processos jurídics en què el termini pot
                ser de 180 dies.
              </li>
              <li>L'habitatge ha d'estar destinat a residència habitual i permanent del sol·licitant, que és el que
                constitueix el seu domicili segons el padró municipal.
              </li>
              <li>La persona sol·licitant ni cap altre membre de la unitat de convivència no han de tenir cap habitatge
                en propietat, llevat que no en disposin de l'ús i gaudi.
              </li>
              <li>La persona sol·licitant ha de ser titular d'un contracte de lloguer, d'una cessió d'ús o
                excepcionalment, d'un contracte de sotsarrendament de l'habitatge que constitueix el seu domicili
                habitual i permanent.
              </li>
              <li>Les persones arrendatàries ni cap membre de la unitat de convivència no poden tenir vincles de
                parentiu amb l'arrendador (matrimoni, relació estable, consanguinitat, adopció o afinitat, fins a segon
                grau).
              </li>
              <li>L'import de les rendes de lloguer que ha de pagar la persona sol·licitant de la prestació no pot
                superar els imports mensuals màxims següents:
              </li>
              <ul>
                <li>750 euros si l'habitatge està situat a Barcelona ciutat.</li>
                <li>600 euros a la demarcació de Barcelona.</li>
                <li>450 euros a la demarcació de Tarragona.</li>
                <li>450 euros a la demarcació de Girona.</li>
                <li>400 euros a la demarcació de Lleida.</li>
                <li>350 euros a la demarcació de les Terres de l'Ebre.</li>
              </ul>
              <li>L'import de la prestació s'estableix en el 60% de la renda anual de l'habitatge, amb un límit màxim de
                2.400 euros per habitatge. Aquesta prestació només pot ser atorgada una vegada i per un període màxim de
                12 mesos.
              </li>
              <li>La prestació es reconeix a partir del mes següent a la data de presentació de la sol·licitud. En els
                casos en què s'ha dictat una resolució favorable, condicionada a l'aportació del contracte de lloguer,
                es reconeix el dret a partir del mes en què s'hagi aportat el contracte.
              </li>
              <li>L'import de la prestació complementària per a les despeses de fiança i d'accés a l'habitatge en règim
                de lloguer s'estableix sobre la base de la despesa acreditada, amb un import màxim de 600 euros, i només
                es pot atorgar una vegada. No poden haver transcorregut més de 3 mesos entre la data de la signatura del
                contracte d'arrendament i la presentació de la sol·licitud.
              </li>
            </ul>
            <h2>3. Per més informació</h2>
            <a href='https://web.gencat.cat/ca/tramits/tramits-temes/Prestacions-economiques-despecial-urgencia-per-a-lhabitatge?category=&moda=3'>Més
              informació i tràmits</a>
          </Grid>
        </Grid>
    );
  }
}

export default HabitatgeEspecialUrgenciaDesnonaments;
