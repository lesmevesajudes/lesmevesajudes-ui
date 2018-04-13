//@flow
import {serialize as serialize_adult} from "../persons/AdultsReducer";
import type {Person, PersonsState} from "../persons/PersonTypes";
import type {HouseholdData} from "../household/householdDataTypes";
import type {Rent} from "../rent/rentTypes";
import OpenFiscaAPIClient from "../shared/OpenFiscaAPIClient";
import {esFill, esInfantAcollit, esMonoparental, esSustentador, tipusCustodia} from "../shared/selectorUtils";
import {esBarcelonaCiutat} from "../shared/CodisPostals";

export const FETCH_SIMULATION = "fetch_simulation";

type SimulationData = {
  adults: PersonsState,
  rent: Rent,
  household: HouseholdData
};

const currentMonth = value => ({"2017-01": value});
const lastYear = value => ({"2016": value});

function buildRequest(simulationData: SimulationData) {
  const adultsPersonalData = simulationData.adults.reduce(
      (acc, adult: Person) => {
      acc[adult.id] = {
        data_naixement: currentMonth(adult.data_naixement),
        tipus_document_identitat: currentMonth(adult.tipus_document_identitat),
        situacio_laboral: currentMonth(adult.situacio_laboral),
        data_alta_padro: currentMonth(adult.data_alta_padro),
        grau_discapacitat: currentMonth(adult.grau_discapacitat),
        ingressos_bruts: lastYear(adult.ingressos_bruts),
        victima_violencia_de_genere: currentMonth(adult.victima_violencia_de_genere),
        es_divorciada_de_familia_reagrupada: currentMonth(adult.es_divorciada_de_familia_reagrupada),
        ingressat_en_centre_penitenciari: currentMonth(adult.ingressat_en_centre_penitenciari),
        ingressat_en_centre_penitenciari_pot_treballar: currentMonth(adult.ingressat_en_centre_penitenciari_pot_treballar),
        es_orfe_dels_dos_progenitors: currentMonth(adult.es_orfe_dels_dos_progenitors),
        ha_treballat_a_l_estranger_6_mesos: currentMonth(adult.ha_treballat_a_l_estranger_6_mesos),
        ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos: currentMonth(
            adult.ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos
        ),
        en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: currentMonth(
          adult.en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina
        ),
        ha_estat_beneficiari_de_la_rai_en_els_ultims_12_mesos: currentMonth(adult.ha_estat_beneficiari_de_la_rai_en_els_ultims_12_mesos),
        ha_estat_beneficiari_de_les_tres_rai_anteriors: currentMonth(adult.ha_estat_beneficiari_de_les_tres_rai_anteriors),
        ha_esgotat_prestacio_de_desocupacio: currentMonth(adult.ha_esgotat_prestacio_de_desocupacio),
        inscrit_com_a_demandant_docupacio: currentMonth(adult.inscrit_com_a_demandant_docupacio),
        demandant_d_ocupacio_durant_12_mesos: currentMonth(adult.demandant_d_ocupacio_durant_12_mesos),
        durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina: currentMonth(
          adult.durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina
        ),
        es_escolaritzat_entre_P3_i_4rt_ESO: currentMonth(adult.es_escolaritzat_entre_P3_i_4rt_ESO),
        en_acolliment: currentMonth(esInfantAcollit(adult)),
        tipus_custodia: currentMonth(
          tipusCustodia(
            adult,
            simulationData.household,
            esMonoparental(simulationData.adults)
          ),
        ),
        percep_prestacions_incompatibles_amb_la_feina: currentMonth(adult.percep_prestacions_incompatibles_amb_la_feina),
        victima_violencia_domestica: currentMonth(adult.victima_violencia_domestica),
        AE_230_mensual: currentMonth(null),
        AE_230_01_mensual: currentMonth(null),
        EG_233_mensual: currentMonth(null),
        GE_051_00_mensual: currentMonth(null),
        GE_051_01_mensual: currentMonth(null),
        GE_051_02_mensual: currentMonth(null),
        GE_051_03_mensual: currentMonth(null),
        /*GG_270_mensual: currentMonth(null)*/
      };
      return acc;
    },
    {}
  );

  if (
    typeof adultsPersonalData[
      simulationData.rent.titular_contracte_de_lloguer_id
    ] !== "undefined"
  ) {
    adultsPersonalData[
      simulationData.rent.titular_contracte_de_lloguer_id
        ].titular_contracte_de_lloguer = currentMonth(true);
  }

  return {
    families: {
      familia_1: {
        adults: serialize_adult(simulationData.adults)
          .filter(persona => esSustentador(persona))
          .map(persona => persona.id),
        menors: serialize_adult(simulationData.adults)
          .filter(persona => esFill(persona))
          .map(persona => persona.id),
        altres_adults: serialize_adult(simulationData.adults)
            .filter(persona => !esFill(persona) && !esSustentador(persona))
          .map(persona => persona.id),
        valor_cadastral_finques_rustiques: lastYear(simulationData.rent.valor_cadastral_finques_rustiques),
        valor_cadastral_finques_urbanes: lastYear(simulationData.rent.valor_cadastral_finques_urbanes),
        tipus_familia_monoparental: currentMonth(simulationData.household.tipus_familia_monoparental),
        tipus_familia_nombrosa: currentMonth(simulationData.household.tipus_familia_nombrosa),
        es_usuari_serveis_socials: currentMonth(simulationData.household.es_usuari_serveis_socials),
        domicili_a_barcelona_ciutat: currentMonth(
            esBarcelonaCiutat(
                parseInt(simulationData.rent["codi_postal_habitatge"], 10)
            )
        )
      }
    },
    persones: { ...adultsPersonalData }
  };
}

export function fetchSimulation(simulationData: SimulationData) {
  let requestBody = buildRequest(simulationData);
  console.log("Request: ", requestBody);
  let client = new OpenFiscaAPIClient();
  return {
    type: FETCH_SIMULATION,
    payload: client.makeSimulation(requestBody)
  };
}
