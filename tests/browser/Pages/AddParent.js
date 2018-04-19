const waitForModalAnimationsToFinishIGuess = 400;

function setName(name) {
    return this.waitForElementVisible('@personName')
      .setValue('@personName', name)
}
function setBirth(birth) {
    return this.setValue('@dateBirth', birth)
}
function setPadro(padro){
    return this.setValue('@datePadro', padro)
}
function percentageDisability(percentage){
    return this.setValue("@disability", percentage)
}
function rawIncomeActual(money){
  return this.setValue("@")
}
module.exports = {
  url: function() { 
		return this.api.launchUrl; 
	},
  elements: {
      parentButton: "#AddParentButton",
      personName: 'input[name="nom"]',
      dateBirth: 'input[name="data_naixement"]',
      datePadro: 'input[name="data_alta_padro"]',
      gender: 'div[data-test="genere"]',
      genderW: '[data-test="genere_dona"]',
      genderM: '[data-test="genere_home"]',
      identity: '[data-test="document_identitat"]',
      identityMenu: '#menu-tipus_document_identitat',
      identityDNI: '[data-test="di_dni"]',
      identityNIE: '[data-test="di_nie"]',
      identityPassport: '[data-test="passport"]',
      laboralSituation: '[data-test="situacio_laboral"]',
      unemployed: '[data-test="desocupat"]',
      disability: 'input[name="grau_discapacitat"]',
      rawIncome: 'input[name="ingressos_bruts"]',
      genderViolence: 'input[name="victima_violencia_de_genere"]',
      householdViolence:  'input[name="victima_violencia_domestica"]',
      joinedJail: 'input[name="ingressat_en_centre_penitenciari"]',
      joinedJailCanWork: 'input[name="ingressat_en_centre_penitenciari_pot_treballar"]',
      divorced: 'input[name="es_divorciada_de_familia_reagrupada"]',
      totalOrphan: 'input[name="es_divorciada_de_familia_reagrupada"]',
      worked6MonthsAbroad: 'input[name="ha_treballat_a_l_estranger_6_mesos"]',
      offWorkVolunteer12Months: 'input[name="en_els_ultims_12_mesos_ha_fet_baixa_voluntaria_de_la_feina"]',
      raiBenefit12Months: 'input[name="ha_estat_beneficiari_de_la_rai_en_els_ultims_12_mesos"]',
      before3RaiBefore: 'input[name="ha_estat_beneficiari_de_les_tres_rai_anteriors"]'
      worked6MonthsAbroadReturn12LastMonth: 'input[name="ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos"]',
      finishedBenefitForUnemployed: 'input[name="ha_esgotat_prestacio_de_desocupacio"]',
      occupationApplicant: 'input[name="inscrit_com_a_demandant_docupacio"]',
      occupationApplicant12Month: 'input[name="demandant_d_ocupacio_durant_12_mesos"]',
      recentSearchingOfWork: 'input[name="durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina"]',
      
  },
  commands: [{
      elSeuNom: setName,
      ambDataDeNaixement: setBirth,
      ambDataDePadro: setPadro,
      esDona: () => {
        return this.waitForElementVisible("@gender")
        .click("@gender")
        .waitForElementVisible("@genderW")
        .click("@genderW")
        .waitForElementVisible("@genderM")
        .click("@genderM")
      },
      esHome: () => {
        return this.waitForElementVisible("@gender")
        .click("@gender")
        .waitForElementVisible("@genderM")
        .click("@genderM")
      },
      identificacioDNI: () => {
        return this.waitForElementVisible("@identity")
        .click("@identity")
        .waitForElementVisible("@identityMenu")
        .waitForElementVisible("@identityDNI")
        .click("@identityDNI")
      },
      identificacioNIE: () => {
        return this.waitForElementVisible("@identity")
        .click("@identity")
        .waitForElementVisible("@identityMenu")
        .waitForElementVisible("@identityNIE")
        .click("@identityNIE")
      },
      identificacioPasaport: () => {
        return this.waitForElementVisible("@identity")
        .click("@identity")
        .waitForElementVisible("@identityMenu")
        .waitForElementVisible("@identityPassport")
        .click("@identityPassport")
      },
      IngresosBruts: rawIncomeActual,
      minusvaliaPercentatge: percentageDisability,
      IngeresatACentrePeninteciari: () => {
        return this.click("@joinedJail")
      },
      IngeresatACentrePeninteciari: () => {
        return this.click("@joinedJailCanWork")
      },
      victimaDeViolenciaDeGenera: () => {
       return this.click("@genderViolence") 
      },
      
      victimaDeViolenciaDomestica: () =>{
        return this.click("@householdViolence")
      },
      divorciadaFamiliaRegrupada: () => {
        return this.click("@divorced")
      },
      orfeProgenitos: () => {
        return this.click("@totalOrphan")
      },
      treballatAlExtranger6Mesos: () => {
        return this.click("@worked6MonthsAbroad")
      },
      treballatAlExtranger6MesosRetornatUltims12Mesos: () => {
        return this.click("@worked6MonthsAbroadReturn12LastMonth")
      },
      esgotatPrestacioDesocupacio: () => {
        return this.click("@finishedBenefitForUnemployed")
      },
      DemandantDesocupacio: () => {
        return this.click("2occupationApplicant")
      },
      DemandantDesocupacioDurant12Mesos: () => {
        return this.click("@occupationApplicant12Month")
      },
      mesAnteriorSolicitudTreball: () => {
        return this.click("@recentSearchingOfWork")
      }
  }]

};
