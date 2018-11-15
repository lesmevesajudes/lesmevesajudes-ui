import React from "react";
import {Trans} from "react-i18next";

export const anysEmpadronatInferiorAEdat = (value, allValues) =>
  value && value > parseInt(allValues.edat, 10)
      ? <Trans i18nKey='anys_empadronament_inferiors_a_edat'>Els anys d'empadronament han de ser iguals o inferiors a
        l'edat</Trans>
    : undefined;
export const required = value => typeof value !== 'undefined' && value !== "" ? undefined :
    <Trans i18nKey='requerit'>Aquest camp és requerit</Trans>;
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        <Trans i18nKey='correu_electronic_invalid'>Correu electrònic invàlid</Trans> : undefined;
export const empadronamentABarcelonaInferiorAEmpadronamentACatalunya = (value, allValues) =>
    value && allValues.porta_dos_anys_o_mes_empadronat_a_catalunya === false && value > 2
        ? <Trans i18nKey='temps_empadronament_bcn_superior_a_cat'>El temps d'empadronament a Barcelona no pot ésser
          superior a l'empadronament a Catalunya</Trans>
        : undefined;
export const menorDe120 = (value) =>
  value && value >= 120
      ? <Trans i18nKey='no_es_contemplen_edats_superiors_a_120'>No es contemplen edats superiors als 120 anys</Trans>
    : undefined;
