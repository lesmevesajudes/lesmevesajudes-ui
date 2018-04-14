const waitForModalAnimationsToFinishIGuess = 400;

module.exports = {
  "load index page": browser => {
    browser
    // Load the page at the launch URL
        .url(browser.launchUrl)
        // wait for page to load
        .waitForElementVisible(".CTA");
  },
  "load app": browser => {
    browser
        .click('a[href="/wizard/"]')
        .waitForElementVisible("#AddParentButton");
    browser.assert.urlContains("wizard");
  },
  "can add an parent": browser => {
    browser
        .click("#AddParentButton")
        .waitForElementVisible('input[name="nom"]')
        .setValue('input[name="nom"]', "Parent 1")
        .setValue('input[name="data_naixement"]', "15011970")
        .setValue('input[name="data_alta_padro"]', "15012010")
        .waitForElementVisible("div[data-test='genere']")
        .click("div[data-test='genere']")
        .waitForElementVisible("[data-test='genere_dona']")
        .click("[data-test='genere_dona']")
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible("[data-test='document_identitat']")
        .click("[data-test='document_identitat']")
        .waitForElementVisible("#menu-tipus_document_identitat")
        .waitForElementVisible("[data-test='di_dni']")
        .click("[data-test='di_dni']")
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible("[data-test='situacio_laboral']")
        .click("[data-test='situacio_laboral']")
        .waitForElementVisible("[data-test='desocupat']")
        .click("[data-test='desocupat']")
        .pause(waitForModalAnimationsToFinishIGuess)
        .setValue("input[name='grau_discapacitat']", 90)
        .click("input[name='victima_violencia_de_genere']")
        .click("input[name='victima_violencia_domestica']")
        .click("input[name='es_divorciada_de_familia_reagrupada']")
        .click("input[name='es_orfe_dels_dos_progenitors']")
        .click("input[name='ha_treballat_a_l_estranger_6_mesos']")
        .click("input[name='ha_treballat_a_l_estranger_6_mesos_i_ha_retornat_en_els_ultims_12_mesos']")
        .click("input[name='ha_esgotat_prestacio_de_desocupacio']")
        .click("input[name='inscrit_com_a_demandant_docupacio']")
        .pause(waitForModalAnimationsToFinishIGuess)
        .click("input[name='demandant_d_ocupacio_durant_12_mesos']")
        .click("input[name='durant_el_mes_anterior_ha_presentat_solicituds_recerca_de_feina']")
        .waitForElementVisible('button[name="ButtonValidar"]')
        .click('button[name="ButtonValidar"]')
        .waitForElementVisible('div.container-family')
        .assert.containsText('li[data-test="Parent 1"]', 'Parent 1');
  },
  "can add an child": browser => {
    browser
        .click("#AddChildButton")
        .waitForElementVisible('input[name="nom"]')
        .setValue('input[name="nom"]', "Child 1")
        .setValue('input[name="data_naixement"]', "15012010")
        .setValue('input[name="data_alta_padro"]', "15012010")
        .waitForElementVisible("[data-test='genere']")
        .click("[data-test='genere']")
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible("[data-test='genere_home']")
        .click("[data-test='genere_home']")
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible("[data-test='document_identitat']")
        .click("[data-test='document_identitat']")
        .waitForElementVisible("#menu-tipus_document_identitat")
        .waitForElementVisible("[data-test='di_dni']")
        .click("[data-test='di_dni']")
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible('button[name="ButtonValidar"]')
        .click('button[name="ButtonValidar"]')
        .waitForElementVisible('div.container-family')
        .assert.containsText('li[data-test="Child 1"]', 'Child 1');
  },
  "can set family settings": browser => {
    browser
        .getLocationInView("#next-button")
        .click("#next-button")
        .waitForElementVisible(
            '[data-test="es_usuari_serveis_socials"]')
        .click('[data-test="es_usuari_serveis_socials"')
        .getLocationInView("#next-button")
        .click("#next-button");
  },
  "rent settings": browser => {
    browser
        .waitForElementVisible(
            'input[name="codi_postal_habitatge"]')
        .setValue('input[name="codi_postal_habitatge"]', "08004")
        .getLocationInView("#next-button")
        .waitForElementVisible("#next-button")
        .click("#next-button")
  },
  "results page": browser => {
    browser
        .assert.containsText("p", "Renda activa d'inserció aturats de llarga durada")
        .assert.containsText("p", "Renda activa d'inserció discapacitat 33%")
        .assert.containsText("p", "Renda activa d'inserció per a emigrants retornats")
        .assert.containsText("p", "Renda activa d'inserció per a víctimes de violència de gènere o ")
  },
  after: function (browser) {
    browser.end();
  }
};
