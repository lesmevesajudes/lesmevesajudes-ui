import { Trans } from "react-i18next";
import React from "react";

export const anysEmpadronatInferiorAEdat = (value, allValues) =>
  value && value > parseInt(allValues.edat, 10)
    ? <Trans>Els anys d'empadronament han de ser iguals o inferiors a l'edat</Trans>
    : undefined;
export const required = value => value ? undefined : <Trans>Aquest camp és requerit</Trans>;
export const pncInclosAIngressosBruts = (value, allValues) =>
  value && value > parseInt(allValues.ingressos_bruts, 10)
    ? <Trans>Els ingressos per pensions no contributives has d'estar inclosos en els ingressos bruts</Trans>
    : undefined;
export const menorDe120 = (value) =>
  value && value >= 120
    ? <Trans>No es contemplen edats superiors als 120 anys</Trans>
    : undefined;