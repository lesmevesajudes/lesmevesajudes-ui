//@flow

import React from 'react';
import {Trans} from 'react-i18next';
import Typography from '@material-ui/core/Typography';

const HelpTextMap = {
  'edat': {
    title: <Trans>Edat</Trans>,
    body: <Trans>Si té menys d’un any indiqui 0</Trans>
  },
  'nom': {
    title: <Trans>Nom</Trans>,
    body: <Trans>Aquesta dada es farà servir només perquè l'aplicació es pugui referir a la persona. No
      ha de permetre'n la identificació, per tant no cal que escrigui cognoms, DNI, ...</Trans>
  },
  'beneficiari_de_prestacio_residencial': {
    title: <Trans>Beneficiari de prestació residencial</Trans>,
    body: <Trans>S’ha de trobar amb la situació d’estar ingressat en un centre
      sociosanitari, comunitat terapèutica, geriàtrica o similars</Trans>
  },
  'cobra_algun_tipus_de_pensio_no_contributiva': {
    title: <Trans> Perstacions no contributives</Trans>,
    body: <Trans>Les pensions no contributives són uns ingressos econòmics
      mensuals que l'Estat garanteix a les persones que no tenen recursos suficients per subsistir i no poden acollir-se
      —perquè no cotitzen a la Seguretat Social— a les pensions contributives.
      Les persones beneficiàries d'aquestes pensions gaudeixen de la condició de pensionistes de la Seguretat Social. El
      reconeixement del dret d'accés a una pensió no contributiva comporta l'accés a l'assistència mèdica i farmacèutica
      de la Seguretat Social.
      Les pensions no contributives atenen dos col·lectius: persones grans i persones amb discapacitat, fet que dona
      lloc
      a dues modalitats de pensions no contributives:
      <ul>
        <li>Jubilació</li>
        <li>Invalidesa</li>
      </ul>
    </Trans>
  },
  'custodies': {
    title: <Trans>Tipus de custòdia</Trans>,
    body: <Trans>
      <Typography variant='subheading' className='subtitle' gutterBottom>Guarda i custòdia</Typography>

      Com a guarda i custòdia s’entén viure amb els fills o filles, cuidar-los i assistir-los. Es pot atribuir a una
        de les persones progenitores, compartida entre ambdues o a una tercera persona. Abans d’acordar el règim de
        guarda i custòdia, el jutge ha de considerar l’informe del Ministeri Fiscal i escoltar els menors que tinguin
        suficient judici quan s’estimi necessari.
        Cal un document acreditatiu.

      <Typography variant='subheading' className='subtitle' gutterBottom>Tutela legal</Typography>
      La tutela és la institució principal en la protecció de les persones incapacitades, a les quals ha d'assegurar
        la protecció, l'administració i la guarda de drets i béns. Normalment, és l'autoritat conferida a una persona
        física o jurídica, anomenada tutor o tutora, per tenir cura d'una persona i els seus béns pel fet que sigui
        menor d'edat o hagi estat declarada incapaç. Les funcions que se li confereixen són: atenció personal,
        administració dels béns i representació legal.
      Cal un document acreditatiu.
      Les persones que s’han de posar en tutela són:
      <ul>
        <li> Les persones menors no emancipades que no estiguin en potestat parental.</li>
        <li> Les persones incapacitades, si ho determina una sentència.</li>
      </ul>
    </Trans>
  },
  'disposa_de_carnet_familia_monoparental': {
    title: <Trans>Família monoparental</Trans>,
    body: <Trans>
      S'entén per família monoparental (tant de categoria especial com de categoria general) la família formada per un
      fill o filla o més, menors de 21 anys, o de 26 anys, si estudien, que conviuen i depenen econòmicament d'una sola
      persona.
      Títol de família monoparental
      El títol de família monoparental atorga diversos beneficis, avantatges fiscals i bonificacions.
      Juntament amb el títol col·lectiu per a tota la família, també dona dret a la possessió d’un títol individual per
      a
      cada una de les persones membres que en són beneficiàries.
    </Trans>
  },
  'gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio': {
    title: <Trans>Prestacions contributives</Trans>,
    body: <Trans>
      La concessió de les prestacions econòmiques generalment està supeditada a una relació jurídica prèvia amb la
      Seguretat Social (acreditar un període mínim de cotització en determinats casos), sempre que es compleixin els
      altres requisits exigits.
      Dins de l'acció protectora del règim general i dels règims especials de la Seguretat Social,, s'inclouen les
      pensions
      següents:
      <ul>
        <li>Per jubilació: jubilació ordinària i jubilació anticipada .</li>
        <li>Per incapacitat permanent: total, absoluta i gran invalidesa.</li>
        <li>Per defunció: viduïtat, orfandat i a favor de familiars.</li>
      </ul>
      Dins de l'acció protectora de l'assegurança obligatòria de vellesa i invalidesa (SOVI), s'inclouen les pensions
      següents:
      <ul>
        <li>Vellesa.</li>
        <li>Invalidesa.</li>
        <li>Viduïtat.</li>
      </ul>
    </Trans>
  },
  'ha_participat_en_un_proces_de_mediacio': {
    title: <Trans>Procés de mediació en l’habitatge</Trans>,
    body: <Trans>
      L'Ajuntament de Barcelona i la Generalitat de Catalunya, mitjançant el Consorci de l’Habitatge de Barcelona, posen
      al servei de la ciutadania unes eines de mediació i assessorament amb l’objectiu de garantir un ús digne de
      l’habitatge per a tothom.
      Aquests serveis d’informació permeten a la ciutadania conèixer i comprendre la situació en què es troba i també
      rebre l’assessorament i l’acompanyament que requereix. Les oficines de l’habitatge ofereixen un servei de mediació
      entre la persona propietària (arrendadora) i la persona inquilina (arrendatària) en casos en què, per dificultats
      econòmiques (impagament, deute, demanda, etcètera), la darrera es pugui veure exposada a un desnonament.
      La finalitat de la mediació és plantejar una sèrie d’acords entre les parts que permetin, d’una banda, fer front
      als
      deutes pendents i, de l’altra, prevenir i evitar un endeutament futur. Sempre que sigui possible, s’intentarà que
      la
      persona arrendatària mantingui el mateix habitatge. L’èxit de la mediació rau en la capacitat d’adoptar, en cada
      cas
      concret, una solució òptima per a les dues parts.
    </Trans>
  },
  'ha_treballat_a_l_estranger_6_mesos': {
    title: <Trans>Treball a l'extranger</Trans>,
    body: <Trans>S’haurà d’acreditar aportant la documentació següent:
      <ul>
        <li>Si torna d’un país membre de la Unió Europea o de l’Espai Econòmic Europeu, el formulari U1 o E-301.</li>
        <li>En el cas dels emigrants de Suïssa, el certificat de l'Agregadoria Laboral d’aquell país o el formulari U1.
        </li>
        <li>Si torna d'Austràlia, el formulari d'enllaç.</li>
        <li>Si torna d'un país que no sigui membre de la Unió Europea o de l'Espai Econòmic Europeu o amb el qual no hi
          hagi conveni sobre protecció per atur, la certificació emesa per les àrees i les dependències provincials de
          Treball i Afers Socials de les delegacions o subdelegacions de Govern en què consti la data de retorn i el
          temps
          treballat al país d'emigració.
        </li>
      </ul>
    </Trans>
  },
  'ingressos_bruts': {
    title: <Trans>Ingressos</Trans>,
    body: <Trans>Es consideren ingressos propis els que es generen per:
      <ul>
        <li>Rendiment del treball</li>
        <li>Pensions o prestacions socials</li>
        <li>Guanys patrimonials</li>
        <li>Rendiment del capital mobiliari i immobiliari</li>
        <li>Plusvàlues</li>
        <li>Rendiments procedents de qualsevol activitat econòmica</li>
        <li>Patrimoni, a excepció de l’habitatge habitual</li>
      </ul>
    </Trans>
  },
  'inscrit_com_a_demandant_docupacio': {
    title: <Trans>Inscrit/a com a demandant d'ocupació</Trans>,
    body: <Trans>Persona inscrita a les
      oficines de Treball.
      La inscripció com a demandant d’ocupació és el pas previ per accedir a tots els serveis del Servei d'Ocupació
      de Catalunya.
      Aquesta inscripció és gratuïta i voluntària, amb l’excepció de les persones perceptores de prestacions per
      desocupació, per a les quals és un tràmit obligatori.
      La poden fer les persones en situació d’atur i les que, tot i estar treballant, volen millorar la feina.
      Un cop feta la inscripció com a demandant d’ocupació, la persona rep el document d'alta i de renovació de la
      demanda d'ocupació (denominat DARDO).</Trans>
  },
  'membre_de_familia_reagrupada': {
    title: <Trans>Famílies reagrupades</Trans>,
    body: <Trans>Segons l'article 16 de la Llei d'estrangeria, les persones estrangeres
      residents
      tenen dret a la vida en família i a la intimitat familiar. En exercici d'aquest dret que les persones estrangeres
      residents poden reagrupar determinats familiars.
      Els familiars reagrupats per part de persones estrangeres residents a l’estat espanyol constitueixen una unitat
      familiar reagrupada.
      Cal documentació acreditativa per la seva sol.licitud i la seva obtenció.
    </Trans>
  },
  'relacio_habitatge': {
    title: <Trans>Situacions respecte a l’habitatge</Trans>,
    body: <Trans>
      <Typography variant='subheading' className='subtitle' gutterBottom>Cessió d’ús</Typography>
      És un contracte pel qual se cedeix l’ús d’un habitatge per un temps determinat a canvi del pagament d’un preu
      equiparable a un lloguer tou.</Trans>
  },
  'relacio_parentiu': {
    title: <Trans>Relacions familiars</Trans>,
    body: <Trans>
      <Typography variant='subheading' className='subtitle' gutterBottom>Infant en acolliment</Typography>
      L'acolliment familiar d'un infant comporta confiar temporalment la guarda d'una persona menor a una família o
        persona sola, sense que hi hagi finalitat adoptiva.
        És una mesura temporal per oferir als infants el millor entorn possible per créixer fins que la seva família
        resolgui els problemes que li impedeixen d'ocupar-se'n
      Cal un document acreditatiu.
    </Trans>
  },
  'relacio_de_parentiu_amb_el_propietari': {
    title: <Trans>Vincle de parentiu per consanguinitat</Trans>,
    body: <Trans>
      El parentiu per consanguinitat, o simplement la consanguinitat, és la relació entre persones unides per un
      vincle de
      sang, és a dir, que tenen almenys un ascendent en comú. En el parentiu per consanguinitat, la proximitat es
      determina pel nombre de generacions que separen dos parents i es mesura en graus. Cada grau correspon a la
      separació
      entre una persona i els seus pares o mares, fills o filles.
      Aquests vincles de parentiu consanguini s'organitzen en graus de parentiu. .
      Vincle de parentiu d'afinitat
      L'afinitat és el vincle que s'estableix entre un dels cònjuges i els parents consanguinis de l'altre o,
      recíprocament, entre una persona i els cònjuges dels seus parents consanguinis. El grau i la línia de l'afinitat
      es
      determinen segons el grau i la línia de la consanguinitat. És a dir, una persona és parent per afinitat de tots
      els
      parents consanguinis del o la cònjuge en la mateixa línia i grau que el o la cònjuge ho és d'aquests parents per
      consanguinitat. Recíprocament, els cònjuges dels parents consanguinis d'una persona són parents per afinitat
      d'aquesta persona en la mateixa línia i grau que el parent consanguini del qual són cònjuges.
    </Trans>
  },
  'sexe': {
    title: <Trans>Sexe</Trans>,
    body: <Trans>Per al càlcul dels diferents ajuts, i segons marca la normativa vigent, cal que a l'apartat 'SEXE'
      seleccioneu el que consta oficialment en el vostre DNI en vigor. L'Ajuntament de Barcelona, atenent a la
      diversitat
      sexual i de gènere, està treballant perquè cada persona pugui expressar, si així ho desitja, el seu gènere i
      “nom sentit” en tots els documents d’àmbit municipal en els quals calgui informar del sexe</Trans>
  },
  'te_algun_grau_de_discapacitat_reconegut': {
    title: <Trans>Grau de discapacitat</Trans>,
    body: <Trans>
      El grau de discapacitat acredita la condició de discapacitat i l'accés a les ajudes que se'n deriven.
      Cal acreditar el grau de discapacitat mitjançant el certificat de reconeixement de la discapacitat. La condició
      de
      persona amb una discapacitat de grau igual o superior al 33% s’acredita amb algun dels documents següents:
      <ul>
        <li>Resolució o certificat expedit per l'Institut de Gent Gran i Serveis Socials (IMSERSO) o l'òrgan competent
          de la comunitat autònoma.
        </li>
        <li>Resolució de l’Institut Nacional de la Seguretat Social (INSS) on es reconegui la condició de pensionista
          per incapacitat permanent total, absoluta o gran invalidesa.
        </li>
        <li>Resolució del Ministeri d’Hisenda i Administracions Públiques o del Ministeri de Defensa on es reconegui
          una pensió de jubilació per incapacitat permanent per al servei o inutilitat.
        </li>
      </ul>
    </Trans>
  },
  'tinc_alguna_propietat_a_part_habitatge_habitual_i_disposo_dusdefruit': {
    title: <Trans>Usdefruit</Trans>,
    body: <Trans>
      Dret real de gaudi sobre una cosa d'altri, que atorga a la persona usufructuària les facultats d’usar-la i
      percebre'n tots els fruits, si bé amb les limitacions d'haver de conservar-ne la forma i la substància.
      L'usdefruit és un dret real, la qual cosa implica que és independent de qui en tingui la nua propietat. La
      persona
      propietària pot vendre la cosa i la usufructuària continuarà en la seva posició, encara que l'amo o mestressa
      canviï.
      L'usdefruit sempre és temporal, tant si és vitalici com si té un termini exacte. És un dret molt habitual en
      herències, atès que té la característica que dona protecció al cònjuge (té l'ús i gaudi per a tota la vida)
      sense
      afectar els drets hereditaris de les persones descendents, que amb el temps acabaran adquirint la seva herència.
    </Trans>
  },
  'titular_contracte_de_lloguer_id': {
    title: <Trans>Titular del contracte de lloguer</Trans>,
    body: <Trans>En cas que hi hagi més d'un titular escolliu-ne només un, prefentment aquell que visqui a
      l'habitatge.</Trans>
  },
  'titular_hipoteca_id': {
    title: <Trans>Titular del contracte de hipoteca</Trans>,
    body: <Trans>En cas que hi hagi més d'un titular escolliu-ne només un, prefentment aquell que visqui a
      l'habitatge.</Trans>
  },
  'victima_violencia_de_genere': {
    title: <Trans>Víctima de violència de gènere o domèstica</Trans>,
    body: <Trans>Es considera víctima de violència de gènere la dona que és o ha estat objecte d'actes de violència
      física o
      psicològica, agressions a la llibertat sexual, amenaces, coacció o privació de llibertat exercida pel seu
      cònjuge,
      excònjuge, parella de fet o exparella, encara que no hagin conviscut.
      És víctima de violència domèstica l'home que pateixi violència exercida pel seu cònjuge, excònjuge, parella o
      exparella, pares o fills, i la dona que pateixi violència exercida pels seus pares o fills.
      Per acreditar la condició de víctima s’ha d’aportar una sentència judicial, una ordre de protecció judicial, un
      informe del Ministeri Fiscal o un informe dels serveis socials de l'Administració pública competent (autonòmica
      o
      local) o la casa d'acollida, on s'indiqui que es rep assistència per aquesta circumstància.
    </Trans>
  },
  'victima_violencia_domestica': {
    title: <Trans>Víctima de violència de gènere o domèstica</Trans>,
    body: <Trans>
      Es considera víctima de violència de gènere la dona que és o ha estat objecte d'actes de violència física o
      psicològica, agressions a la llibertat sexual, amenaces, coacció o privació de llibertat exercida pel seu
      cònjuge,
      excònjuge, parella de fet o exparella, encara que no hagin conviscut.
      És víctima de violència domèstica l'home que pateixi violència exercida pel seu cònjuge, excònjuge, parella o
      exparella, pares o fills, i la dona que pateixi violència exercida pels seus pares o fills.
      Per acreditar la condició de víctima s’ha d’aportar una sentència judicial, una ordre de protecció judicial, un
      informe del Ministeri Fiscal o un informe dels serveis socials de l'Administració pública competent (autonòmica
      o
      local) o la casa d'acollida, on s'indiqui que es rep assistència per aquesta circumstància.
    </Trans>
  }
};

export default HelpTextMap;
