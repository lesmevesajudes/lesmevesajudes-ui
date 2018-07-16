import React from 'react';
import './InfoPage.css';
import AppHeader from '../components/AppHeader/AppHeader';
import Grid from '@material-ui/core/Grid';

class HabitatgeEspecialUrgenciaPagamentHipoteca extends React.Component {
  render() {
    return (
        <Grid container className='container-family'>
          <AppHeader/>
          <Grid item sm={12} className='Main'>
            <h1>Prestacions econòmiques d’especial urgència per al pagament de quotes d'amortització hipotecària
              (Generalitat)</h1>
            <ul>
              <li>Situació: Activa</li>
            </ul>
            <h2>1. Descripció</h2>
            Les prestacions d’emergència de l'ajut per pagar les quotes hipotecàries tenen l’objectiu d’ajudar les
            persones a fer front als impagaments de les quotes del préstec hipotecari per motius sobrevinguts.
            Les finalitats d’aquestes prestacions són:
            <ul>
              <li>Deixar sense efecte l’embargament de l’habitatge per impagament de quotes hipotecàries, possibilitant
                la permanència a l’habitatge de la persona sol·licitant i de la seva unitat de convivència.
              </li>
              <li>Prevenir l’exclusió social com a conseqüència de la pèrdua de l’habitatge.</li>
              <li>En els expedients de quotes hipotecàries, si durant la gestió de la prestació el sol·licitant deixa o
                perd per via judicial l’habitatge, es denegarà la prestació ja que deixa de ser el seu domicili habitual
                i permanent. En els casos que perdi l’habitatge com a conseqüència d’un procediment judicial, podrà
                demanar l’ajut de la pèrdua de l’habitatge.
              </li>
            </ul>
            <h2>2. Requisits d’accés</h2>
            <ul>
              <li>Residir a Catalunya</li>
              <li>La persona sol·licitant ha de tenir deutes de quotes d'amortització hipotecària per circumstàncies
                sobrevingudes no previsibles.
              </li>
              <li>Acreditar la urgència i l'especial necessitat de la unitat de convivència de la persona sol·licitant
                mitjançant l'aportació d'un informe socioeconòmic dels serveis socials d'atenció primària o
                especialitzada, en el qual es proposi l'atorgament de la prestació per aquests motius.
              </li>
              <li>Els ingressos de la unitat de convivència de la qual forma part la persona sol·licitant en el moment
                de presentar la sol·licitud (ingressos mensuals ponderats d'acord amb el nombre de membres que en
                formen part i de la zona on estigui ubicat l'habitatge), no poden ser superiors a 2 vegades l'IRSC
                (Indicador de Renda de Suficiència de Catalunya) ponderats, si es tracta d'una persona sola, no
                superiors a 2,5 vegades a l'IRSC ponderat si es tracta d'unitats de convivència de dos membres o més,
                i no superiors a 3 vegades l'IRSC ponderat, en el cas de persones amb discapacitats o amb gran
                dependència.
              </li>
              <li>S'entén per unitat de convivència el conjunt de persones empadronades en un domicili amb
                independència de si tenen relació de parentiu entre si.
              </li>
              <li>L'habitatge ha d'estar destinat a residència habitual i permanent del sol·licitant, que és el que
                constitueix el seu domicili segons el padró municipal (ocupat de manera permanent durant un mínim de 9
                mesos seguits a l'any).
              </li>
              <li>Si, en el moment de resoldre la sol·licitud, la persona sol·licitant ja no viu a l'habitatge pel
                qual ha demanat la prestació, es dictarà una resolució desfavorable, per incompliment de la finalitat
                de la prestació urgent, que és la de possibilitar la permanència en l'habitatge.
              </li>
              <li>La persona sol·licitant ni cap altre membre de la unitat de convivència no han de tenir cap
                habitatge en propietat, llevat que no en disposin de l'ús i gaudi.
              </li>
              <li>La persona sol·licitant ha de ser titular d'un préstec hipotecari sobre l'habitatge que constitueix
                el seu domicili habitual i permanent.
              </li>
              <li>Ha d'haver pagat les quotes d'amortització hipotecària del préstec com a mínim durant els 12 mesos
                anteriors al període per al qual es sol•licita la prestació.
              </li>
              <li>L'import de les quotes d'amortització del préstec hipotecari que ha de pagar la persona sol•licitant
                de la prestació no pot superar els imports mensuals màxims següents:
              </li>
              <ul>
                <li>900 euros si l'habitatge està situat a la ciutat de Barcelona.</li>
                <li>800 euros a la demarcació de Barcelona.</li>
                <li>600 euros a la demarcació de Tarragona.</li>
                <li>600 euros a la demarcació de Girona.</li>
                <li>550 euros a la demarcació de Lleida.</li>
                <li>500 euros a la demarcació de les Terres de l'Ebre.</li>
              </ul>
              <li>La quantia de la prestació es fixa d'acord amb el deute acreditat, i l'import màxim és de 3.000 €
                anuals. La prestació es pot atorgar per un període màxim de deute de 12 mesos, encara que l'import
                concedit no arribi a la quantia màxima anterior.
              </li>
              <li>Amb l'import de la prestació sol·licitada, cal garantir la liquidació del deute existent i estar en
                condicions de continuar pagant les quotes d'amortització des del moment en què es presenti la
                sol·licitud de la prestació.
              </li>
              <li>Si durant la tramitació es continua acumulant deute, els serveis socials poden proposar l'ampliació
                de l'import sol·licitat mitjançant un nou informe social que ho justifiqui. L'ampliació proposada es
                valorarà i, si s'escau, es podrà resoldre favorablement sempre que el total de l'ajut no superi la
                quantia màxima de 3.000 € anuals.
              </li>
              <li>Quan la quantia de la prestació concedida hagi estat inferior a l'import màxim de 3.000 € anuals, es
                podrà concedir una nova prestació, fins a aquest import màxim, sempre que s'acrediti el pagament de
                tres mensualitats, com a mínim, incloses entre l'última mensualitat de la prestació inicialment
                atorgada i la data de la nova sol·licitud.
              </li>
              <li>Les persones que hagin estat beneficiàries d'aquesta prestació fins a la quantia màxima no poden
                sol·licitar una altra prestació econòmica amb caràcter urgent i especial per al pagament de les quotes
                d'amortització hipotecària de l'habitatge, fins que no hagi transcorregut un mínim d'un any entre
                l'últim mes concedit i la data de la nova sol·licitud.
              </li>
            </ul>
            <h2>3. Per més informació</h2>
            <a href='https://web.gencat.cat/ca/tramits/tramits-temes/Prestacions-economiques-despecial-urgencia-per-a-lhabitatge?moda=2'>Més
              informació i tràmits</a>

          </Grid>
        </Grid>
    );
  }
}

export default HabitatgeEspecialUrgenciaPagamentHipoteca;
