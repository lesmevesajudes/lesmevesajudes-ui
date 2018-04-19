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
      disability: '"input[name="grau_discapacitat"]',
      genderViolence: 'input[name="victima_violencia_de_genere"]',
      householdViolence:  'input[name="victima_violencia_domestica"]',
      divorced: 'input[name="es_divorciada_de_familia_reagrupada"]',
      totalOrphan: 'input[name="es_divorciada_de_familia_reagrupada"]',
      worked6MonthsAbroad: 'input[name="ha_treballat_a_l_estranger_6_mesos"]',
      worked6MonthsAbroadReturn12LastMonth: 'input[name="ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos"]',
      finishedBenefitForUnemployed: 'input[name="ha_esgotat_prestacio_de_desocupacio"]',
      occupationApplicantinput: '[name="inscrit_com_a_demandant_docupacio"]'
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
      Minusvalia: percentageDisability,
      victimaDeViolenciaDeGenera: () => {
       return this.click("@genderViolence") 
      },
      victimaDeViolenciaDomestica: () =>{
        return this.click("@householdViolence")
      }
      
  }]

};
