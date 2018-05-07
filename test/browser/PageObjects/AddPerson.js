const waitForModalAnimationsToFinishIGuess = 400;

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
    householdViolence: 'input[name="victima_violencia_domestica"]',
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
    childhoodBenefits2017: 'input[name="beneficiari_fons_infancia"]'
  },
  commands: [{
    deNom: function (name) {
      return this.waitForElementVisible('@personName').setValue('@personName', name)
    },
    ambDataDeNaixement: function (birth) {
      return this.waitForElementVisible("@dateBirth").setValue('@dateBirth', birth)
    },
    ambDataDeUltimaIncripcioAlPadro: function (padro) {
      return this.waitForElementVisible("@datePadro").setValue('@datePadro', padro)
    },
    esDona: function () {
      this.waitForElementVisible("@gender")
          .click("@gender")
          .api.pause(waitForModalAnimationsToFinishIGuess);
      this
          .waitForElementVisible("@genderW")
          .click("@genderW")
          .api.pause(waitForModalAnimationsToFinishIGuess);
      return this;
    },
    esHome: function () {
      this.waitForElementVisible("@gender")
          .click("@gender")
          .api.pause(waitForModalAnimationsToFinishIGuess);
      this
          .waitForElementVisible("@genderM")
          .click("@genderM")
          .api.pause(waitForModalAnimationsToFinishIGuess);
      return this;
    },
    teDNI: function () {
      // This procedure is extremely fragile as it has an animation. I've added some pauses to improve
      // reliability
      this.waitForElementVisible("@identity")
          .click("@identity");
      this.api.pause(waitForModalAnimationsToFinishIGuess);
      this
          .waitForElementVisible("@identityDNI")
          .click("@identityDNI")
          .api.pause(waitForModalAnimationsToFinishIGuess);
      return this;
    },
    situacioLaboralDesocupat: function () {
      // This procedure is extremely fragile as it has an animation. I've added some pauses to improve
      // reliability
      this.waitForElementVisible("@laboralSituation")
          .click("@laboralSituation")
          .waitForElementVisible("@unemployed")
          .api.pause(waitForModalAnimationsToFinishIGuess);
      this
          .click("@unemployed")
          .api.pause(waitForModalAnimationsToFinishIGuess);
      return this;
    },
    ingressosBruts: function (amount) {
      return this.waitForElementVisible("@rawIncome").setValue("@rawIncome", amount)
    },
    teUnPercentatgeDeMinusvaliaDel: function (percent) {
      this.waitForElementVisible("@disability").setValue("@disability", percent);
      return this;
    },
    victimaDeViolenciaDeGenere: function () {
      return this.click("@genderViolence")
    },

    victimaDeViolenciaDomestica: function () {
      return this.click("@householdViolence")
    },
    divorciadaFamiliaRegrupada: function () {
      return this.click("@divorced")
    },
    orfeProgenitos: function () {
      return this.click("@totalOrphan")
    },
    treballatAlExtranger6Mesos: function () {
      return this.click("@worked6MonthsAbroad")
    },
    treballatAlExtranger6MesosRetornatUltims12Mesos: function () {
      return this.click("@worked6MonthsAbroadReturn12LastMonth")
    },
    esgotatPrestacioDesocupacio: function () {
      return this.click("@finishedBenefitForUnemployed")
    },
    inscritComADemanadantDOcupacio: function () {
      return this.click("@occupationApplicant")
    },
    demandantDesocupacioDurant12Mesos: function () {
      return this.click("@occupationApplicant12Month")
    },
    haRealitzatAccionsDeRecercaActivaDeFeinaEnElMesAnterior: function () {
      return this.click("@recentSearchingOfWork")
    },
    escolaritzatEntreP3i4rtESO: function () {
      return this.click("@schooledBeetwenP3and4thESO");
    },
    beneficiariFonsInfancia2017: function () {
      return this.click("@childhoodBenefits2017");
    }
  }]

};
