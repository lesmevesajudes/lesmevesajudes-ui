//@flow
import {serialize as serialize_adult} from "../persons/PersonsReducer";
import type {Person, PersonsState} from "../persons/PersonTypes";
import type {FamilyData} from "../family/FamilyDataTypes";
import type {ResidenceData} from "../residence/ResidenceTypes";
import OpenFiscaAPIClient from "../shared/OpenFiscaAPIClient";
import {esFill, esInfantAcollit, esMonoparental, esSustentador, tipusCustodia} from "../shared/selectorUtils";
import {esBarcelonaCiutat} from "../shared/CodisPostals";

export const FETCH_SIMULATION = "fetch_simulation";

type SimulationData = {
  persons: PersonsState,
  residence: ResidenceData,
  family: FamilyData
};

const currentMonth = value => ({"2017-01": value});
const lastYear = value => ({"2016": value});

function buildRequest(simulationData: SimulationData) {
  const personalData = simulationData.persons.reduce(
      (acc, person: Person) => {
        acc[person.id] = {
          anys_empadronat_a_barcelona: currentMonth(person.anys_empadronat_a_barcelona),
          edat: currentMonth(person.edat),
          en_acolliment: currentMonth(esInfantAcollit(person)),
          en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina: currentMonth(
              person.en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina
          ),
          es_escolaritzat_entre_P3_i_4rt_ESO: currentMonth(person.es_escolaritzat_entre_P3_i_4rt_ESO),
          es_orfe_dels_dos_progenitors: currentMonth(person.es_orfe_dels_dos_progenitors),
          es_divorciada_de_familia_reagrupada: currentMonth(person.es_una_persona_divorciada && person.membre_de_familia_reagrupada),
          gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio: currentMonth(person.gaudeix_de_prestacio_contributiva_o_subsidi_desocupacio),
          grau_discapacitat: currentMonth(person.grau_discapacitat),
          ha_treballat_a_l_estranger_6_mesos: currentMonth(person.ha_treballat_a_l_estranger_6_mesos),
          ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos: currentMonth(
              person.ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos
          ),
          ingressos_bruts: lastYear(person.ingressos_bruts),
          ingressos_per_pnc: lastYear(person.ingressos_per_pnc),
          inscrit_com_a_demandant_docupacio: currentMonth(person.inscrit_com_a_demandant_docupacio),
          municipi_empadronament: currentMonth(person.municipi_empadronament),
          percep_prestacions_incompatibles_amb_la_feina: currentMonth(person.percep_prestacions_incompatibles_amb_la_feina),
          porta_dos_anys_o_mes_empadronat_a_catalunya: currentMonth(person.porta_dos_anys_o_mes_empadronat_a_catalunya),
          sexe: currentMonth(person.sexe),
          situacio_laboral: currentMonth(person.situacio_laboral),
          tipus_custodia: currentMonth(
              tipusCustodia(
                  person,
                  simulationData.family,
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

  if (typeof simulationData.residence.titular_contracte_de_lloguer_id === "string" && typeof personalData[simulationData.residence.titular_contracte_de_lloguer_id] === "object") {
    personalData[simulationData.residence.titular_contracte_de_lloguer_id].titular_contracte_de_lloguer = currentMonth(true);
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
                parseInt(simulationData.residence["codi_postal_habitatge"], 10)
            )
        ),
        es_usuari_serveis_socials: currentMonth(simulationData.family.es_usuari_serveis_socials),
        tipus_familia_monoparental: currentMonth(simulationData.family.tipus_familia_monoparental),
        tipus_familia_nombrosa: currentMonth(simulationData.family.tipus_familia_nombrosa)
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
