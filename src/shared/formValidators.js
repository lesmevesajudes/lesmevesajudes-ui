import React from "react";
import {Trans} from "react-i18next";

export const anysEmpadronatInferiorAEdat = (value, allValues) =>
  value && value > parseInt(allValues.edat, 10)
    ? <Trans>Els anys d'empadronament han de ser iguals o inferiors a l'edat</Trans>
    : undefined;
export const required = value => typeof value !== 'undefined' && value !== "" ? undefined : <Trans>Aquest camp és requerit</Trans>;
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        <Trans>Correu electrònic invàlid</Trans> : undefined;
export const pncInclosAIngressosBruts = (value, allValues) =>
  value && value > parseInt(allValues.ingressos_bruts, 10)
    ? <Trans>Els ingressos per pensions no contributives has d'estar inclosos en els ingressos bruts</Trans>
    : undefined;
export const empadronamentABarcelonaInferiorAEmpadronamentACatalunya = (value, allValues) =>
    value && allValues.porta_dos_anys_o_mes_empadronat_a_catalunya === false && value > 2
        ? <Trans>El temps d'empadronament a Barcelona no pot ésser superior a l'empadronament a Catalunya</Trans>
        : undefined;
export const menorDe120 = (value) =>
  value && value >= 120
    ? <Trans>No es contemplen edats superiors als 120 anys</Trans>
    : undefined;
