//@flow

import React from 'react';
import {Trans} from 'react-i18next';
import Typography from "@material-ui/core/Typography";

const Title = (props) => <Typography variant='title' gutterBottom
                                     component='span' {...props}>{props.children}</Typography>;
const HelpTextMap = {
  'edat': <Trans>Si té menys d’un any indiqui 0</Trans>,
  'nom': <Trans>Aquesta dada es farà servir només per a que la aplicació es pugui referir a la persona, no ha de
    permetre'n la identificació</Trans>,
  'sexe': <Trans>Es refereix al sexe que s'indica al seu Document Nacional d'Identitat</Trans>,
  'membre_de_familia_reagrupada': <Trans>REAGRUPAMENT FAMILIAR
    Segons l'article 16 de la Llei d'estrangeria, els estrangers residents tenen dret a la vida en família i a la
    intimitat familiar. És en exercici d'aquest dret que els estrangers residents poden reagrupar determinats familiars.
    Els familiars reagrupables són:
    El cònjuge de la persona reagrupant sempre que no estiguin separats legalment o separats de fet, o la persona amb la
    qual mantingui una relació d’anàloga afectivitat a la conjugal.
    Els fills i filles de la persona reagrupant i/o del seu cònjuge, menors de 18 anys que no estiguin casats ni
    incapacitats, quan la persona reagrupant sigui el seu representant legal.
    Si són fills de només un dels cònjuges, és necessari que la persona reagrupant tingui la pàtria potestat en
    exclusiva o li hagin atorgat la guarda i custòdia i estiguin efectivament al seu càrrec.
    Els ascendents de la persona reagrupant o del seu cònjuge quan estiguin al seu càrrec, siguin majors de 65 anys i es
    justifiqui la necessitat d'autoritzar la seva residència a Espanya. Només es podrà reagrupar ascendents quan el
    reagrupant tingui una autorització de residència de llarga durada (5 anys continuats de residència legal).
    Per sol·licitar un reagrupament familiar hem de disposar d'una autorització de residència renovada i tenir
    autorització per residir a Espanya almenys 1 any més; caldrà que acreditem que disposem de prou ingressos econòmics
    pel manteniment de la nostra família i d'un allotjament adequat (mitjançant un informe d’estrangeria d’adequació de
    l’habitatge o, mitjançant una acta notarial si no ens emeten l’informe municipal en 30 dies) a més de la dependència
    econòmica i raons que justifiquin la necessitat de dur a terme el reagrupament en els casos dels ascendents. Una
    vegada l'Oficina d'Estrangers hagi autoritzat el reagrupament, el familiar resident a l'estranger podrà sol·licitar
    un visat de residència al consolat espanyol del país de procedència que li permetrà entrar al territori espanyol i
    tramitar la targeta d'identitat d'estranger corresponent.
  </Trans>,
  'inscrit_com_a_demandant_docupacio': <Trans>Persona inscrita a les oficines de Treball.
    La inscripció com a demandant d’ocupació és el pas previ per accedir a tots els serveis del SOC.
    Aquesta inscripció és gratuïta i voluntària, amb l’excepció de les persones perceptores de prestacions per
    desocupació, per a les quals és un tràmit obligatori.
    La poden realitzar les persones en situació d’atur i les que, tot i estar treballant, volen millorar la feina.
    Un cop feta la inscripció com a demandant d’ocupació la persona rep el document d'alta i de renovació de la demanda
    d'ocupació (denominat DARDO).</Trans>,
  'ha_treballat_a_l_estranger_6_mesos': <Trans>Si ha treballat a l’estranger un mínim de 6 mesos haurà d’acreditar-ho
    aportant la següent documentació
    Si torna d’un país membre de la Unió Europea o de l’Espai Econòmic Europeu, formulari U1 o E-301.
    En el cas dels emigrants de Suïssa cal aportar certificat de l'Agregaduría Laboral d’aquell país o formulari U1.
    Si retorna d'Austràlia, formulari d'enllaç.
    Si torna d'un país que no sigui membre de la Unió Europea o de l'Espai Econòmic Europeu o amb el qual no hi hagi
    conveni sobre protecció per atur: Certificació emesa per les àrees i dependències provincials de Treball i Afers
    Socials de les delegacions o subdelegacions de Govern en què consti la data de retorn i el temps treballat al país
    d'emigració.</Trans>,
  'ingressos_bruts': <Trans>Es consideren ingressos propis, abans de pagar impostos generats per:
    Rendiment del treball
    Pensions o prestacions socials
    Guanys patrimonials
    Rendiment del capital mobiliari i immobiliari
    Plusvàlues
    rendiments procedents de qualsevol activitat econòmica
    patrimoni a excepció de l’habitatge habitual</Trans>,
  'cobra_algun_tipus_de_pensio_no_contributiva': <Trans>Les pensions no contributives són uns ingressos econòmics
    mensuals que l'Estat garanteix a aquelles persones que no tenen recursos suficients per la seva subsistència i no
    poden acollir-se -per manca de cotització a la Seguretat Social- a les pensions contributives.

    Les pensions no contributives van entrar en vigor l'any 1990 i són de caràcter universal. És a dir, totes les
    persones que compleixen els requisits tenen garantit per llei aquest tipus de pensió.

    Els beneficiaris d'aquestes pensions gaudeixen de la condició de pensionistes de la Seguretat Social. El
    reconeixement del dret d'accés a una pensió no contributiva comporta l'accés a l'assistència mèdica i farmacèutica
    de la Seguretat Social.

    Les pensions no contributives, atenen dos col·lectius: persones grans i persones amb discapacitat. El que dona lloc
    a dues modalitats de pensions no contributives:
    Jubilació
    Invalidesa</Trans>,
  'gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio': <Trans>PRESTACIÓ CONTRIBUTIVA

    Són prestacions econòmiques la concessió de les quals està generalment supeditada a una prèvia relació jurídica amb
    la Seguretat Social (acreditar un període mínim de cotització en determinats casos), sempre que es compleixin els
    altres requisits exigits.
    La quantia es determina en funció de les aportacions efectuades pel treballador i per l'empresari, si es tracta de
    treballadors per compte d'altri, durant el període considerat a l'efecte de la base reguladora de la pensió de què
    es tracti.
    Dins de l'acció protectora del Règim General i dels Règims Especials de la Seguretat Social, amb les excepcions que
    en cada cas i per a cada modalitat s'indiquen en el respectiu règim especial, s'inclouen les pensions següents:
    Per jubilació: jubilació ordinària, jubilació anticipada pel fet de tenir la condició de mutualista, jubilació
    anticipada sense tenir la condició de mutualista, jubilació anticipada derivada del cessament no voluntari en el
    treball, jubilació anticipada per voluntat del treballador, jubilació anticipada per reducció de l'edat mínima a
    causa de la realització d'activitats penoses, tòxiques i insalubres, jubilació anticipada de treballadors amb
    discapacitat, jubilació parcial, jubilació flexible i jubilació especial als 64 anys.
    Per incapacitat permanent: total, absoluta i gran invalidesa.
    Per defunció: viduïtat, orfandat i a favor de familiars.

    Dins l'acció protectora de l'Assegurança Obligatòria de Vellesa i Invalidesa (SOVI) s'inclouen les pensions de:
    Vellesa
    Invalidesa.
    Viduïtat.</Trans>,
  'te_algun_grau_de_discapacitat_reconegut': <Trans><Title>GRAU DE DISCAPACITAT</Title>

    El grau de discapacitat acredita la condició de discapacitat i l'accés a les ajudes derivades d'aquesta. Respon a
    uns criteris tècnics unificats, fixats mitjançant els barems aprovats pel Reial Decret 1971/1999 de 23 de desembre,
    que seran objecte de valoració tant les discapacitats que presenti la persona, com els factors socials
    complementaris relatius, entre d'altres, al seu entorn familiar i situació laboral, educativa i cultural que
    dificultin la integració social.
    El grau de discapacitat cal acreditar-lo mitjançant el Certificat de reconeixement de la discapacitat. És un
    document administratiu que acredita legalment el grau de discapacitat i facilita l'accés a diversos drets, serveis,
    programes i prestacions que tenen com a objecte compensar els desavantatges socials derivats de la discapacitat o de
    les barreres socials que limiten la participació plena i efectiva en la societat.
    La condició de persona con discapacitat de grau igual o superior al 33% s’acredita amb algun dels següents
    documents:
    <ul>
      <li>Resolució o certificat expedit per “ Instituto de Mayores y Servicios Sociales” (IMSERSO) u òrgan competent de
        la
        comunitat autònoma.
      </li>
      <li>Resolució de l’Institut Nacional de la Seguretat Social (INSS) on es reconegui la condició de pensionista per
        incapacitat permanent total, absoluta o gran invalidesa.
      </li>
      <li>Resolució del Ministeri d’Hisenda i Administracions Públiques o del Ministeri de defensa on es reconegui una
        pensió
        de jubilació per incapacitat permanent per al servei o inutilitat.
      </li>
    </ul>
  </Trans>,
  'victima_violencia_de_genere': <Trans><Title>VÍCTIMA DE VIOLÈNCIA DE GÈNERE O DOMÈSTICA</Title>
    Es considera víctima de violència de gènere la dona que és o ha estat objecte d'actes de violència física o
    psicològica, agressions a la llibertat sexual, amenaces, coacció o privació de llibertat exercida pel seu cònjuge,
    excònjuge, parella de fet o exparella, encara que no hagin conviscut.
    És víctima de violència domèstica l'home que pateixi violència exercida pel seu cònjuge, excònjuge, parella o
    exparella, pares o fills, i la dona que pateixi violència exercida pels seus pares o fills.
    Per acreditar la condició de víctima s’ha d’aportar sentència judicial, ordre de protecció judicial, informe del
    Ministeri Fiscal o informe dels serveis socials de l'administració pública competent (autonòmica o local) o casa
    d'acollida, on s'indiqui que s’està rebent assistència per aquesta circumstància.
  </Trans>,
  'victima_violencia_domestica': <Trans><Title>VÍCTIMA DE VIOLÈNCIA DE GÈNERE O DOMÈSTICA</Title>
    Es considera víctima de violència de gènere la dona que és o ha estat objecte d'actes de violència física o
    psicològica, agressions a la llibertat sexual, amenaces, coacció o privació de llibertat exercida pel seu cònjuge,
    excònjuge, parella de fet o exparella, encara que no hagin conviscut.
    És víctima de violència domèstica l'home que pateixi violència exercida pel seu cònjuge, excònjuge, parella o
    exparella, pares o fills, i la dona que pateixi violència exercida pels seus pares o fills.
    Per acreditar la condició de víctima s’ha d’aportar sentència judicial, ordre de protecció judicial, informe del
    Ministeri Fiscal o informe dels serveis socials de l'administració pública competent (autonòmica o local) o casa
    d'acollida, on s'indiqui que s’està rebent assistència per aquesta circumstància.
  </Trans>,
};

export default HelpTextMap;
