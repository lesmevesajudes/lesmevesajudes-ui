import React from 'react';
import './InfoPage.css';
import AppHeader from '../components/AppHeader/AppHeader';
import Grid from '@material-ui/core/Grid';

class HabitatgeMIFO extends React.Component {
  render() {
    return (
        <Grid container className='container-family'>
          <AppHeader/>
          <Grid item sm={12} className='Main'>
            <h1>Subvencions per al pagament de lloguer (MIFO) (Agència de l’Habitatge / Ministeri de Foment)</h1>
            <ul>
              <li>Situació: Inactiva</li>
              <li>Període de sol.licitud :19 de maig de 2018 i finalitza el 29 de juny de 2018</li>
            </ul>
            <h2>1. Descripció</h2>
            El Ministerio de Fomento, per mitjà de l'Agència de l'Habitatge de Catalunya, ha obert convocatòria d'ajudes
            per al 2018 per facilitar l'accés i la permanència en un habitatge en règim de lloguer a sectors de població
            en risc d'exclusió social.

            <h2>2. Requisits d’accés</h2>
            <ul>
              <li>Tenir la residència legal a Catalunya</li>
              <li>Que la unitat de convivència tingui uns ingressos suficients per poder pagar el lloguer i que no
                sobrepassin els límits establerts a les bases de la convocatòria (vegeu la base 5). Aquest límit no
                s'aplica als supòsits de víctimes de terrorisme. Per a més informació sobre el límit d'ingressos, podeu
                consultar el simulador publicat en aquest mateix tràmit o bé adreçar-vos a l'Oficina d'habitatge
                corresponent.
              </li>
              <li>Ser titular d'un contracte de lloguer de l'habitatge que sigui el seu domicili habitual i permanent.
                Cal estar-hi empadronat.
              </li>
              <li>No pagar un lloguer mensual per l'habitatge superior a:</li>
              <ul>
                <li>Barcelona ciutat: 600 euros.</li>
                <li>Demarcació de Barcelona: 600 euros.</li>
                <li>Demarcació de Girona: 500 euros</li>
                <li>Demarcació de Tarragona: 450 euros.</li>
                <li>Demarcació de Lleida: 400 euros.</li>
                <li>Demarcació de les Terres de l'Ebre: 350 euros</li>
              </ul>
              <li>Per a famílies nombroses l’import màxim de lloguer mensual pot arribar a 900 euros</li>
              <li>Tenir domiciliat el cobrament de la subvenció en una entitat financera.</li>
              <li>Estar al corrent de pagament de les rendes de en el moment de presentar la sol·licitud.</li>
              <li>Pagar el lloguer de l’habitatge per mitjà de transferència bancària, rebut domiciliat, ingrés en
                compte o rebut emès per la persona administradora de la finca, com a mínim a partir del mes següent a la
                data de presentació de la sol·licitud.
              </li>
              <li>No estar sotmès a cap dels supòsits de prohibició per ser beneficiari de subvencions de conformitat
                amb el que estableix la Llei 38/2003, de 17 de novembre, general de subvencions, i no haver estat
                objecte d'un procediment de revocació d'algun dels ajuts establerts pel Reial decret 106/2018, de 9 de
                març, o per l'anterior Pla estatal d'habitatge, per incompliment o causa imputable a la persona
                sol·licitant..
              </li>
              <li>Complir les obligacions tributàries davant l'Estat, la Generalitat i les obligacions amb la Seguretat
                Social. (Es comprovarà d'ofici abans de la proposta de la resolució)
              </li>
            </ul>


            No poden ser perceptores de les subvencions:
            <ul>
              <li>Les unitats de convivència en què la persona titular del contracte d'arrendament, o qualsevol altre
                membre de la unitat de convivència tingui parentiu per vincle de matrimoni o una altra relació estable
                anàloga, per consanguinitat, adopció o afinitat fins al segon grau, amb les persones arrendadores.
                Aquest criteri també s'aplicarà a la relació entre la persona arrendadora i la persona arrendatària,
                quan la primera sigui una persona jurídica respecte de qualsevol dels seus socis, sòcies o partícips.
              </li>
              <li>Les unitats de convivència en què la persona titular del contracte d'arrendament, o qualsevol altre
                membre sigui propietari o usufructuari d'un habitatge, llevat que no en disposin de l'ús i gaudi.
              </li>
              <li>Les unitats de convivència que acreditin un import de la base imposable de l'estalvi que consta a la
                declaració de l'IRPF (casella 405) superior a 500 €.
              </li>
              <li>Les persones arrendatàries d'habitatges gestionats o administrats per l'Agència de l'Habitatge de
                Catalunya.
              </li>
              <li>Incompatibilitats</li>
              <li>Aquestes subvencions són incompatibles, per les mateixes mensualitats del mateix any, amb el cobrament
                d'altres ajuts provinents de qualsevol administració pública o d'entitats privades, que tinguin la
                mateixa finalitat.
              </li>
              <li>Són incompatibles per a tot l'any amb les subvencions atorgades pel Consorci de l'Habitatge de
                Barcelona per a la mateixa finalitat.
              </li>
            </ul>
            <h2>3. Per més informació</h2>
            <a href='https://web.gencat.cat/ca/tramits/tramits-temes/20246_Subvencions-per-al-pagament-del-lloguer'>Més
              informació i tràmit</a>


          </Grid>
        </Grid>
    );
  }
}

export default HabitatgeMIFO;
