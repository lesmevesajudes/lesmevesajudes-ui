//@flow
import {serialize as serialize_adult} from "../persons/PersonsReducer";
import type {Person, PersonsState} from "../persons/PersonTypes";
import type {HouseholdData} from "../household/householdDataTypes";
import type {Rent} from "../rent/rentTypes";
import OpenFiscaAPIClient from "../shared/OpenFiscaAPIClient";
import {esFill, esInfantAcollit, esMonoparental, esSustentador, tipusCustodia} from "../shared/selectorUtils";
import {esBarcelonaCiutat} from "../shared/CodisPostals";

export const FETCH_SIMULATION = "fetch_simulation";

type SimulationData = {
  persons: PersonsState,
  rent: Rent,
  household: HouseholdData
};

const currentMonth = value => ({"2017-01": value});
const thisYear = value => ({"2017": value});
const lastYear = value => ({"2016": value});

function buildRequest(simulationData: SimulationData) {
  const personalData = simulationData.persons.reduce(
      (acc, person: Person) => {
        acc[person.id] = {
          beneficiari_fons_infancia: thisYear(person.beneficiari_fons_infancia),
          data_alta_padro: currentMonth(person.data_alta_padro),
          demandant_d_ocupacio_durant_12_mesos: currentMonth(person.demandant_d_ocupacio_durant_12_mesos),
          durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina: currentMonth(
              person.durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina
          ),
          es_divorciada_de_familia_reagrupada: currentMonth(person.es_divorciada_de_familia_reagrupada),
          en_acolliment: currentMonth(esInfantAcollit(person)),
          en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: currentMonth(
              person.en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina
          ),
          es_orfe_dels_dos_progenitors: currentMonth(person.es_orfe_dels_dos_progenitors),
          es_escolaritzat_entre_P3_i_4rt_ESO: currentMonth(person.es_escolaritzat_entre_P3_i_4rt_ESO),
          grau_discapacitat: currentMonth(person.grau_discapacitat),
          ha_esgotat_prestacio_de_desocupacio: currentMonth(person.ha_esgotat_prestacio_de_desocupacio),
          ha_estat_beneficiari_de_la_rai_en_els_ultims_12_mesos: currentMonth(person.ha_estat_beneficiari_de_la_rai_en_els_ultims_12_mesos),
          ha_estat_beneficiari_de_les_tres_rai_anteriors: currentMonth(person.ha_estat_beneficiari_de_les_tres_rai_anteriors),
          ha_treballat_a_l_estranger_6_mesos: currentMonth(person.ha_treballat_a_l_estranger_6_mesos),
          ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos: currentMonth(
              person.ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos
          ),
          ingressat_en_centre_penitenciari: currentMonth(person.ingressat_en_centre_penitenciari),
          ingressat_en_centre_penitenciari_pot_treballar: currentMonth(person.ingressat_en_centre_penitenciari_pot_treballar),
          ingressos_bruts: lastYear(person.ingressos_bruts),
          inscrit_com_a_demandant_docupacio: currentMonth(person.inscrit_com_a_demandant_docupacio),
          percep_prestacions_incompatibles_amb_la_feina: currentMonth(person.percep_prestacions_incompatibles_amb_la_feina),
          situacio_laboral: currentMonth(person.situacio_laboral),
          tipus_custodia: currentMonth(
              tipusCustodia(
                  person,
                  simulationData.household,
                  esMonoparental(simulationData.persons)
              ),
          ),
          tipus_document_identitat: currentMonth(person.tipus_document_identitat),
          victima_violencia_de_genere: currentMonth(person.victima_violencia_de_genere),
          victima_violencia_domestica: currentMonth(person.victima_violencia_domestica),
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

  if (typeof personalData[simulationData.rent.titular_contracte_de_lloguer_id] !== "undefined") {
    personalData[simulationData.rent.titular_contracte_de_lloguer_id].titular_contracte_de_lloguer = currentMonth(true);
  }

  return {
    families: {
      familia_1: {
        adults: serialize_adult(simulationData.persons)
            .filter(persona => esSustentador(persona))
            .map(persona => persona.id),
        menors: serialize_adult(simulationData.persons)
            .filter(persona => esFill(persona))
            .map(persona => persona.id),
        altres_adults: serialize_adult(simulationData.persons)
            .filter(persona => !esFill(persona) && !esSustentador(persona))
            .map(persona => persona.id),
        domicili_a_barcelona_ciutat: currentMonth(
            esBarcelonaCiutat(
                parseInt(simulationData.rent["codi_postal_habitatge"], 10)
            )
        ),
        es_usuari_serveis_socials: currentMonth(simulationData.household.es_usuari_serveis_socials),
        tipus_familia_monoparental: currentMonth(simulationData.household.tipus_familia_monoparental),
        tipus_familia_nombrosa: currentMonth(simulationData.household.tipus_familia_nombrosa),
        valor_cadastral_finques_rustiques: lastYear(simulationData.rent.valor_cadastral_finques_rustiques),
        valor_cadastral_finques_urbanes: lastYear(simulationData.rent.valor_cadastral_finques_urbanes)
      }
    },
    persones: {...personalData}
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
