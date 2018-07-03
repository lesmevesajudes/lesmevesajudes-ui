//@flow
import React from "react";
import { Link } from "react-router-dom";
import "./indexPage/IndexPage.css";
import AppHeader from "../components/AppHeader/AppHeader";
import { Trans, translate } from "react-i18next";
import Button from "@material-ui/core/Button";
import { styles } from "../styles/theme";
import { withStyles } from "@material-ui/core/styles";

const IndexPage = (props) =>
  <div>
    <AppHeader/>
    <div className='BlockContainer'>
      <div className='Block'>
        <div className='AppLogo'/>
        <div className='BlockText'>
              <span>
                <Trans>Vols saber a quins ajuts públics pots accedir?</Trans>
              </span>
          <Link className='CTALink' to='/wizard/'>
            <Button variant='contained' color='primary' className={props.classes.button}>
              <b>
                <Trans>CONEGUI LES SEVES AJUDES</Trans>
              </b>
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <div className='CTA'>
      <p className='PresentationText'>
        <Trans>
          Aquesta eina us permetrà consultar a quins ajuts i prestacions socials podeu arribar a optar. Heu de declarar,
          sota la vostra responsabilitat, que les respostes són certes.Podreu trobar-hi ajudes gestionades per
          l’Ajuntament, la Generalitat i l’Estat.<br/>
          El simulador, que es troba en fase inicial, anirà incorporant ajuts nous. <br/>Aquest assistent no tramita la
          sol·licitud.
        </Trans>
      </p>
    </div>
    <div className='Main'>
      <div className='Presentation'/>
      <div className='Row'>
        <div className='Cell'>
          <h1>
            <Link className='IndexPageLink' to='/ajuts/fons_infancia'>
              <Trans>Fons infància</Trans>
            </Link>
          </h1>
          <p>
            <Trans i18nKey='FonsInfanciaShortText'>
              Ajut extraordinari adreçat a famílies en situació de vulnerabilitat per cobrir les necessitats bàsiques de
              subsistència d'infants i adolescents de 0 a 16 anys.
            </Trans>
          </p>
        </div>
        <div className='Cell'>
          <h1>
            <Link className='IndexPageLink' to='/ajuts/menjador'>
              <Trans>Ajuts individuals de menjador</Trans>
            </Link>
          </h1>
          <p>
            <Trans i18nKey='AjutsIndividualsShortText'>
              Ajut individual orientat a cobrir el cost del servei de menjador de l'alumnat que pertany a famílies en
              situacions socioeconòmiques desafavorides.

            </Trans>
          </p>
        </div>
        <div className='Cell'>
          <h1>
            <Link className='IndexPageLink' to='/ajuts/lloguer'>
              <Trans>Prestacions econòmiques d'urgència social derivades de la mediació a Barcelona</Trans>
            </Link>
          </h1>
          <p>
            <Trans i18nKey='AjutsAlPagamentLloguerShortText'>
              Prestació econòmica de caràcter temporal adreçada a persones residents a Barcelona amb dificultats per fer
              front al pagament del lloguer.
            </Trans>
          </p>
        </div>
      </div>
      <div className='Row'>
        <div className='Cell'>
          <h1>
            <Link className='IndexPageLink' to='/ajuts/lloguer'>
              <Trans>Prestació econòmica per al pagament de deutes del lloguer</Trans>
            </Link>
          </h1>
          <p>
            <Trans i18nKey='AjutsAlPagamentLloguerShortText'>
              Prestació econòmica que s’atorga a persones amb deutes contrets per rebuts impagats de rendes de lloguer.
            </Trans>
          </p>
        </div>
        <div className='Cell'>
          <h1>
            <Link className='IndexPageLink' to='/ajuts/lloguer'>
              <Trans>Prestació econòmica d’urgència per al pagament de deutes d’hipoteca</Trans>
            </Link>
          </h1>
          <p>
            <Trans i18nKey='AjutsAlPagamentLloguerShortText'>
              Prestació a fons perdut que s’atorga a persones amb deutes contrets per rebuts impagats de quotes
              d’amortització del préstec hipotecari.
            </Trans>
          </p>
        </div>
        <div className='Cell'>
          <h1>
            <Link className='IndexPageLink' to='/ajuts/lloguer'>
              <Trans>Ajut per pèrdua de l’habitatge</Trans>
            </Link>
          </h1>
          <p>
            <Trans i18nKey='AjutsAlPagamentLloguerShortText'>
              Prestació econòmica d’urgència que s’atorga a persones que han perdut l’habitatge com a conseqüència d’un
              procés de desnonament o d’execució hipotecària.
            </Trans>
          </p>
        </div>
      </div>
      <div className='Row'>
        <div className='Cell'>
          <h1>
            <Link className='IndexPageLink' to='/ajuts/lloguer'>
              <Trans>Ajudes MIFO</Trans>
            </Link>
          </h1>
          <p>
            <Trans i18nKey='AjutsAlPagamentLloguerShortText'>
              Prestació a fons perdut que s’atorga a persones amb deutes contrets per rebuts impagats de quotes
              d’amortització del préstec hipotecari.
            </Trans>
          </p>
        </div>
        <div className='Cell'>
          <h1>
            <Link className='IndexPageLink' to='/ajuts/rai'>
              <Trans>Renda activa d'inserció</Trans>
            </Link>
          </h1>
          <p>
            <Trans i18nKey='RendaActivaInsercioShortText'>
              Ajut econòmic destinat a incrementar les oportunitats d’inserció en el mercat laboral a treballadors en
              atur amb necessitats econòmiques especials, com ara:
              Aturats de llarga durada
              Persones amb discapacitat
              Emigrants retornats
              Víctimes de violència de gènere o domèstica
            </Trans>
          </p>
        </div>
        <div className='Cell'>
          <h1>
            <Link className='IndexPageLink' to='/ajuts/rgc'>
              <Trans>Renda Garantida Ciutadana</Trans>
            </Link>
          </h1>
          <p>
            <Trans i18nKey='RendaGarantidaCiutadanaShortText'>
              Renda destinada a garantir que tots els ciutadans i ciutadanes de Catalunya es puguin fer càrrec de les
              despeses essencials per al manteniment propi o de les persones que integren la unitat familiar o de
              convivència.
            </Trans>
          </p>
        </div>
      </div>
    </div>
  </div>;

export default translate("translations")(withStyles(styles)(IndexPage));
