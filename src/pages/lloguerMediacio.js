import React from 'react';
import './InfoPage.css';
import AppHeader from '../components/AppHeader/AppHeader';
import Grid from '@material-ui/core/Grid';

class InfoLloguerMediacio extends React.Component {
  render() {
    return (
        <Grid container className='container-family'>
          <AppHeader/>
          <Grid item sm={12} className='Main'>
            <h1>Prestacions econòmiques d'urgència social derivades de la mediació a Barcelona (Ajuntament)</h1>
            <ul>
              <li>Situació: Activa</li>
              <li>Període de sol.licitud: 12 de juny i el 7 de desembre de 2018</li>
            </ul>
            <h2>1. Descripció</h2>
            Són ajuts a fons perdut per fer front al pagament del lloguer de les unitats de convivència que tinguin
            ingressos baixos o moderats, a qui el cost de l'habitatge pot situar en risc d'exclusió social residencial.
            L’ajut municipal al lloguer és una prestació econòmica destinada als arrendataris amb dificultats
            econòmiques per fer front a les quotes del lloguer. Aquesta prestació, atorgada després d’una mediació entre
            les parts i l’Ajuntament, permet mantenir l’habitatge i evitar l’exclusió social.
            Aquests ajuts estan destinats a totes les persones que resideixin a la ciutat de Barcelona, titulars d’un
            contracte de lloguer i l’habitatge de lloguer de les quals sigui l’habitual i el permanent.
            L’ajut municipal per al pagament del lloguer té una durada màxima de dotze mesos.
            <h2>2. Requisits d’accés</h2>
            Per ser beneficiari del nou ajut municipal al lloguer cal complir els requisits següents:
            <ul>
              <li>Acreditar la residència legal a la ciutat de Barcelona. Per atendre situacions puntuals i urgents
                d'allotjament, n'hi ha prou d'acreditar sis mesos d'empadronament immediatament anteriors a la data de
                presentació de la sol·licitud per part de la persona sol·licitant.
              </li>
              <li>Estar empadronat a l'habitatge per al qual se sol·licita la prestació.</li>
              <li>L’habitatge ha d’estar destinat a residència habitual i permanent del sol·licitant.</li>
              <li>Ingressos de la Unitat de Convivència (UC): el límit màxim d’ingressos és de 2 vegades IRSC si es
                tracta de persones que viuen soles, 2,5 vegades l’IRSC si es tracta d’UC o 3 IRSC en cas de UC amb una
                persona discapacitada o amb gran dependència.
              </li>
              <table style={{border: '1px'}}>
                <tr>
                  <td>
                    2 IRSC, 1 membre
                  </td>
                  <td>
                    2,5 IRSC, 2 membres
                  </td>
                  <td>
                    2,5 IRSC, 3 membres
                  </td>
                  <td>
                    2,5 IRSC, 4 o més membres
                  </td>
                  <td>
                    3 IRSC, 1 membre
                  </td>
                  <td>
                    3 IRSC, 2 membres
                  </td>
                  <td>
                    3 IRSC, 3 membres
                  </td>
                  <td>
                    3 IRSC, 4 o més membres
                  </td>
                </tr>
                <tr>
                  <td>21.247,28 €</td>
                  <td>27.380,52 €</td>
                  <td>28.558,17 €</td>
                  <td>29.510,11 €</td>
                  <td>31.870,92 €</td>
                  <td>32.856,62 €</td>
                  <td>34.269,81 €</td>
                  <td>35.412,13 €</td>
                </tr>
              </table>

              <li>No pagar un lloguer mensual superior a 900 euros.</li>
              <li>Destinar més del 30% dels ingressos de la unitat de convivència al pagament del lloguer.</li>
              <li>Haver incorregut en impagament del lloguer o tenir dificultats per pagar-lo per manca de recursos
                econòmics.
              </li>
              <li>Garantir estar en condicions de continuar pagant el lloguer.</li>
              <li>Tenir domiciliat el cobrament de la prestació en una entitat financera.</li>
              <li>Pagar el lloguer mitjançant transferència bancària, rebut domiciliat, ingrés en compte o rebut emès
                per
                l’administrador de la finca com a mínim a partir del mes següent a la data de presentació de la
                sol·licitud.
              </li>
              <li>No tenir (cap membre de la unitat de convivència) cap habitatge en propietat, llevat que no en disposi
                de
                l’ús i gaudi.
              </li>
              <li>No tenir cap parentiu per vincle de matrimoni o una altra relació estable anàloga, per consanguinitat,
                adopció o afinitat fins al segon grau entre els llogaters i la persona o l'entitat arrendadora.
              </li>
              <li>La persona sol·licitant o la unitat de convivència no poden tenir una base imposable de l'estalvi de
                la
                declaració de l'IRPF superior a 500 euros.
              </li>
              <li>No ser persones llogateres d’habitatges propietat o gestionats per l’Agència de l’Habitatge de
                Catalunya o
                Institut Municipal de l’Habitatge i Rehabilitació de Barcelona així com dels habitatges subvencionats
                per
                programes públics.
              </li>
              Ajuts per a casos on ja hi ha hagut mediació:
              <li>Unitats de convivència que formalitzin un contracte de lloguer d’un habitatge un cop finalitzada la
                seva
                estada i procés d’inclusió en un recurs residencial de la Xarxa d’Habitatges d’Inclusió de Barcelona o
                en
                un recurs residencial per a dones víctimes de violència masclista en que el servei referent sigui el
                SARA
                (Servei d’Atenció, Recuperació i Acollida) o ABITS (Agència per l’abordatge Integral del Treball Sexual)
                de l’Ajuntament de Barcelona, així com les persones que a petició de la Mesa de Valoració per a
                l’adjudicació d’habitatges per emergència social hagin perdut el seu habitatge habitual i formalitzin un
                nou contracte de lloguer.</li>
              <li>Unitats de convivència que hagin estat ateses a través del servei de mediació de la Xarxa d’Oficines
                d’Habitatge de Barcelona i que:
              </li>
              <ul>
                <li>Hagin signat un contracte de lloguer a través de la Borsa d'Habitatge de Lloguer de Barcelona.
                  Hagin acordat una rebaixa mínima de 50€ mensuals en el rebut de lloguer i sempre que presentin la
                  sol·licitud en el termini màxim de 120 dies a comptar des de la data d'efectes de l'acord de rebaixa
                  signat amb la propietat. Excepcionalment el requisit de l'acord de rebaixa de lloguer no serà exigible
                  si
                  té iniciat un procediment judicial per impagament de les rendes de lloguer.
                </li>
                <li>Unitats de convivència que hagin estat beneficiàries de l’ajut temporal garantit i/o del servei de
                  suport
                  d’accés a l’habitatge que atorga l’Àrea de Drets Socials.
                </li>
                <li>Unitats de convivència que formalitzin un contracte de lloguer d’un habitatge un cop finalitzada la
                  seva
                  estada i procés d’inclusió en un recurs residencial de la Xarxa d’Habitatges d’Inclusió de Barcelona o
                  en
                  un recurs residencial per a dones víctimes de violència masclista en que el servei referent sigui el
                  SARA
                  (Servei d’Atenció, Recuperació i Acollida) o ABITS (Agència per l’abordatge Integral del Treball
                  Sexual)
                  de l’Ajuntament de Barcelona, així com les persones que a petició de la Mesa de Valoració per a
                  l’adjudicació d’habitatges per emergència social hagin perdut el seu habitatge habitual i formalitzin
                  un
                  nou contracte de lloguer.
                </li>
              </ul>
            </ul>
            <h2>3. Per més informació</h2>
            <a href='http://habitatge.barcelona/ca/serveis-habitatge/tens-problemes-pagar-habitatge/no-pots-pagar-lloguer'>Més
              informació</a>
          </Grid>
        </Grid>
    );
  }
}

export default InfoLloguerMediacio;
