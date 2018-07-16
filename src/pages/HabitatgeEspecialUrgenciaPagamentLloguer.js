import React from 'react';
import './InfoPage.css';
import AppHeader from '../components/AppHeader/AppHeader';
import Grid from '@material-ui/core/Grid';

class InfoEspecialUrgenciaPagamentLloguer extends React.Component {
  render() {
    return (
        <Grid container className='container-family'>
          <AppHeader/>
          <Grid item sm={12} className='Main'>
            <h1>Prestacions econòmiques d’especial urgència per al pagament de deutes del lloguer (Generalitat)</h1>
            <ul>
              <li>Situació: Activa</li>
            </ul>
            <h2>1. Descripció</h2>
            Aquesta prestació té l’objectiu d’atendre els impagaments de les quotes del lloguer. Es destina a persones
            que siguin titulars d'un contracte de lloguer d'un habitatge.
            L’ajut té dos objectius principals. En primer lloc, permet que les persones beneficiàries conservin
            l’habitatge habitual, la qual cosa garanteix que romanguin en un entorn conegut, alhora que evita que
            visquin el procés traumàtic de perdre la llar. I en segon lloc, en els casos de pèrdua de l’habitatge
            habitual per desnonaments i execucions hipotecàries, aquesta prestació posa a disposició dels titulars un
            nou contracte de lloguer i una ajuda econòmica.

            <h2>2. Requisits d’accés</h2>
            <ul>
              <li>Residir a Catalunya</li>
              <li>La persona sol·licitant ha de tenir deutes de rendes de lloguer per circumstàncies sobrevingudes no
                previsibles.
              </li>
              <li>No poden accedir a aquestes prestacions les persones ocupants d'habitatges gestionats per l'Agència
                de l'Habitatge de Catalunya, ni tampoc les que han rebut l'oferta per accedir a un habitatge del parc
                públic de lloguer i no l'han acceptat, llevat de causa justificada.
              </li>
              <li>Acreditar la urgència i l'especial necessitat de la unitat de convivència de la persona sol·licitant
                mitjançant l'aportació d'un informe socioeconòmic dels serveis socials d'atenció primària o
                especialitzada, en el qual es proposi l'atorgament de la prestació per aquests motius.
              </li>
              <li>Els ingressos de la unitat de convivència de la qual forma part la persona sol·licitant en el moment
                de presentar la sol·licitud (ingressos mensuals ponderats d'acord amb el nombre de membres que en
                formen part i de la zona on estigui ubicat l'habitatge), no poden ser superiors a 2 vegades l'IRSC
                (Indicador de Renda de Suficiència de Catalunya) ponderat, si es tracta d'una persona sola, no
                superiors a 2,5 vegades a l'IRSC ponderat si es tracta d'unitats de convivència de dos membres o més,
                i no superiors a 3 vegades l'IRSC ponderat, en el cas de persones amb discapacitats o amb gran
                dependència. S'entén per unitat de convivència el conjunt de persones empadronades en un domicili amb
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
              <li>La persona sol·licitant ha de ser titular d'un contracte de lloguer, d'una cessió d'ús o
                excepcionalment, d'un contracte de sotsarrendament de l'habitatge que constitueix el seu domicili
                habitual i permanent.
              </li>
              <li>Les persones arrendatàries ni cap membre de la unitat de convivència no poden tenir vincles de
                parentiu amb l'arrendador (matrimoni, relació estable, consanguinitat, adopció o afinitat, fins a
                segon grau).
              </li>
              <li>Ha d'haver pagat la renda de lloguer durant un període mínim de 3 mesos, comptats des de la
                signatura del contracte fins a l'inici del període per al qual es sol·licita la prestació.
              </li>
              <li>La data del primer rebut de lloguer impagat no pot ser superior a 12 mesos comptats des de la data
                de presentació de la sol·licitud, excepte en els casos en què s'hagi iniciat un procés de desnonament.
              </li>
              <li>L'import de les quotes de lloguer que ha de pagar la persona sol·licitant de la prestació no pot
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
              <li>La quantia de la prestació es fixa d'acord amb el deute acreditat, i l'import màxim és de 3.000 €
                anuals. La prestació es pot atorgar per un període màxim de deute de 12 mesos, encara que l'import
                concedit no arribi a la quantia màxima anterior.
              </li>
              <li>Amb l'import de la prestació sol·licitada, cal garantir la liquidació del deute existent i estar en
                condicions de continuar pagant les rendes de lloguer des del moment en què es presenti la sol·licitud
                de la prestació. Es considera que es compleixen aquestes condicions quan s'acrediten, com a mínim, uns
                ingressos mensuals de la unitat de convivència iguals a l'import del lloguer.
              </li>
              <li>Si durant la tramitació es continua acumulant deute, els serveis socials poden proposar l'ampliació
                de l'import sol·licitat mitjançant un nou informe social que ho justifiqui. L'ampliació proposada es
                valorarà i, si s'escau, es podrà resoldre favorablement sempre que el total de l'ajut no superi la
                quantia màxima de 3.000 € anuals.
              </li>
              <li>
                Excepcionalment, quan el deute acumulat superi el límit dels 3.000 € anuals, i sempre que es
                justifiqui
                documentalment que s'ha arribat a un acord entre la persona que sol·licita la prestació i la persona
                propietària o administradora de l'habitatge per pagar l'excés de deute, es podrà valorar i resoldre
                favorablement la sol·licitud.
              </li>
              <li>Quan la quantia de la prestació concedida hagi estat inferior a l'import màxim de 3.000 € anuals, es
                podrà concedir una nova prestació, fins a aquest import màxim, sempre que s'acrediti el pagament de
                tres
                mensualitats, com a mínim, incloses entre l'última mensualitat de la prestació inicialment atorgada i
                la
                data de la nova sol·licitud.
              </li>
              <li>Les persones que hagin estat beneficiàries d'aquesta prestació fins a la quantia màxima no poden
                sol·licitar una altra prestació econòmica amb caràcter urgent i especial per al pagament de les rendes
                de lloguer de l'habitatge, fins que no hagi transcorregut un mínim d'un any entre de la data de la
                resolució i la data de la nova sol·licitud.
              </li>
              <li>En el moment que s'hagi d'emetre la resolució, el contracte de lloguer ha de tenir un termini de
                vigència igual o superior a 12 mesos i, en cas contrari, la persona arrendadora ha de garantir
                documentalment la renovació del contracte.
              </li>
            </ul>
            Requisits de la prestació complementària per al pagament de deutes de lloguer
            <ul>
              <li>Les persones sol·licitants beneficiàries de la prestació per al pagament de deutes de lloguer
                subjectes d'un procés judicial de desnonament, se'ls podrà concedir la prestació complementària.
                d'aquesta prestació complementària han de provenir d'un procés judicial de desnonament.
              </li>
              <li>En el moment que s'hagi d'emetre la resolució de concessió de la prestació complementària, el
                termini
                de vigència del contracte de lloguer ha de ser igual o superior a 12 mesos. En cas contrari, la
                persona
                arrendadora ha de garantir documentalment la renovació del contracte.
              </li>
              <li>En la data de la resolució de concessió han d'estar pagant el lloguer per mitjà de transferència
                bancària, rebut domiciliat, ingrés en compte o rebut emès per l'administrador de la finca.
              </li>
            </ul>
            <h2>3. Per més informació</h2>
            <a href='https://web.gencat.cat/ca/tramits/tramits-temes/Prestacions-economiques-despecial-urgencia-per-a-lhabitatge?moda=1'>Més
              informació i tràmits</a>
          </Grid>
        </Grid>
    );
  }
}

export default InfoEspecialUrgenciaPagamentLloguer;
