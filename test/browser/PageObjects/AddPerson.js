const waitForModalAnimationsToFinishIGuess = 400;

function Name(name) {
    return this.waitForElementVisible('@personName').setValue('@personName', name)
}
function dataDeNaixement(birth) {
    return this.waitForElementVisible("@dateBirth").setValue('@dateBirth', birth)
}
function ultimaInscripcioEnElPadro(padro){
    return this.waitForElementVisible("@datePadro").setValue('@datePadro', padro)
}
function percentageDisability(percentage){
    return this.waitForElementVisible("@disability").setValue("@disability", percentage)
}
function rawIncomeActual(money){
  return this.waitForElementVisible("@rawIncome").setValue("@rawIncome", money)
}
module.exports = {
  elements: {
      parentButton: "#AddParentButton",
      personName: 'input[name="nom"]',
      dateBirth: 'input[name="data_naixement"]',
      datePadro: 'input[name="data_alta_padro"]',
      gender: 'div[data-test="genere"]',
      genderW: '[data-test="genere_dona"]',
      genderM: '[data-test="genere_home"]',
      identity: '[data-test="document_identitat"]',
      identityDNI: '[data-test="di_dni"]',
      identityNIE: '[data-test="di_nie"]',
      identityPassport: '[data-test="passport"]',
      identityOther: '[data-test="di_altres"]',
      laboralSituation: '[data-test="situacio_laboral"]',
      unemployed: '[data-test="desocupat"]',
      workFullTime: '[data-test="treball_compte_daltri_jornada_complerta"]',
      workParcialTime: '[data-test="treball_compte_alie_jornada_parcial"]',
      workFreelance: '[data-test="treball_compte_propi"]',
      workRetiree: '[data-test="jubilat"]',
      isStudent: '[data-test="estudiant"]',
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
      before3RaiBefore: 'input[name="ha_estat_beneficiari_de_les_tres_rai_anteriors"]',
      worked6MonthsAbroadReturn12LastMonth: 'input[name="ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos"]',
      finishedBenefitForUnemployed: 'input[name="ha_esgotat_prestacio_de_desocupacio"]',
      occupationApplicant: 'input[name="inscrit_com_a_demandant_docupacio"]',
      occupationApplicant12Month: 'input[name="demandant_d_ocupacio_durant_12_mesos"]',
      recentSearchingOfWork: 'input[name="durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina"]',
      schooledBeetwenP3and4thESO: 'input[name="es_escolaritzat_entre_P3_i_4rt_ESO"]',
      childhoodBenefits2017: 'input[name="beneficiari_fons_infancia_2017"]'
  },
  commands: [{
      elSeuNom: Name,
      ambDataDeNaixement: dataDeNaixement,
      ambDataDePadro: ultimaInscripcioEnElPadro,
      esDona: function() {
        return this.waitForElementVisible("@gender")
        .click("@gender")
        .waitForElementVisible("@genderW")
        .click("@genderW")
      },
      esHome: function() {
        return this.waitForElementVisible("@gender")
        .click("@gender")
        .waitForElementVisible("@genderM")
        .click("@genderM")
      },
      teDNI: function() {
        return this.waitForElementVisible("@identity")
        .click("@identity") 
        .waitForElementVisible("@identityDNI")
        .click("@identityDNI")
      },
      teNIE: function() {
        return this.waitForElementVisible("@identity")
        .click("@identity")
        .waitForElementVisible("@identityNIE")
        .click("@identityNIE")
      },
      tePasaport: function() {
        return this.waitForElementVisible("@identity")
        .click("@identity")
        .waitForElementVisible("@identityPassport")
        .click("@identityPassport")
      },
      situacioLaboralDesocupat:function() {
        return this.waitForElementVisible("@laboralSituation")
        .click("@laboralSituation")
        .waitForElementVisible("@unemployed")
        .click("@unemployed")
      },
      situacioLaboralEstudiant: function() {
        return this.waitForElementVisible("@laboralSituation")
        .click("@laboralSituation")
        .waitForElementVisible("@isStudent")
        .click("@isStudent")
      },
      situacioLaboralJubilat: function() {
        return this.waitForElementVisible("@laboralSituation")
        .click("@laboralSituation")
        .waitForElementVisible("[data-test='jubilat']")
        .click("@workRetiree")
      },
      situacioLaboralAutonom: function() {
        return this.waitForElementVisible("@laboralSituation")
        .click("@laboralSituation")
        .waitForElementVisible("@workFreelance")
        .click("@workFreelance")
      },
      situacioLaboralJornadaParcial: function() {
        return this.waitForElementVisible("@laboralSituation")
        .click("@laboralSituation")
        .waitForElementVisible("@workParcialTime")
        .click("@workParcialTime")
      },
      situacioLaboralJornadaCompleta: function() {
        return this.waitForElementVisible("@laboralSituation")
        .click("@laboralSituation")
        .waitForElementVisible("@workFullTime")
        .click("@workFullTime")
      },
      IngresosBruts: rawIncomeActual,
      teUnPercentatgeDeMinusvaliaDel: percentageDisability,
      IngeresatACentrePeninteciari: function() {
        return this.click("@joinedJail")
      },
      IngeresatACentrePenitenciari: function() {
        return this.click("@joinedJailCanWork")
      },
      victimaDeViolenciaDeGenere: function() {
       return this.click("@genderViolence") 
      },
      
      victimaDeViolenciaDomestica: function() {
        return this.click("@householdViolence")
      },
      divorciadaFamiliaRegrupada: function() {
        return this.click("@divorced")
      },
      orfeProgenitos: function() {
        return this.click("@totalOrphan")
      },
      treballatAlExtranger6Mesos: function() {
        return this.click("@worked6MonthsAbroad")
      },
      treballatAlExtranger6MesosRetornatUltims12Mesos: function() {
        return this.click("@worked6MonthsAbroadReturn12LastMonth")
      },
      esgotatPrestacioDesocupacio: function() {
        return this.click("@finishedBenefitForUnemployed")
      },
      beneficiariRaiUltims12Mesos: function() {
        return this.click("@raiBenefit12Months")
      },
      InscritComADemanadantDOcupacio: function() {
        return this.click("@occupationApplicant")
      },
      demandantDesocupacioDurant12Mesos: function() {
        return this.click("@occupationApplicant12Month")
      },
      HaRealitzatAccionsDeRecercaActivaDeFeinaEnElMesAnterior: function() {
        return this.click("@recentSearchingOfWork")
      },
      escolaritzatEntreP3i4rtESO: function() {
        return this.click("@schooledBeetwenP3and4thESO");
      },
      beneficiariFonsInfancia2017: function() {
        return this.click("@childhoodBenefits2017");
      }
  }]

};
