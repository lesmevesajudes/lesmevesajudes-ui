const waitForModalAnimationsToFinishIGuess = 400;

module.exports = {
  "@tags": ['Benefits'],
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
    browser.assert.urlContains("wizard");
  },
  "Add family members": browser => {
    const utils = browser.page.UtilObject();
    browser.waitForElementVisible('#closeButtonModal')
    utils.closeModal();
    utils.howManyFamiliy(1);
    utils.nextPage();
  },
  "can add an parent": browser => {
    const persona = browser.page.AddPerson();
    persona
        .deNom("Woman RAI-0")
        .ambDataDeNaixement("57")
        .ambDataDeUltimaIncripcioAlPadro("Barcelona","3")
        .waitForElementVisible("@gender")
        .esDona()
        .teDNI()
        .situacioLaboralDesocupat()
        //.teUnPercentatgeDeMinusvaliaDel(34)
        .ingressosBruts(6000)
        //.inscritComADemanadantDOcupacio()
        //.esgotatPrestacioDesocupacio()
        //.demandantDesocupacioDurant12Mesos()
        //.haRealitzatAccionsDeRecercaActivaDeFeinaEnElMesAnterior();
    browser.pause(waitForModalAnimationsToFinishIGuess);
    browser
        .waitForElementVisible('button[name="ButtonValidar"]')
        .click('button[name="ButtonValidar"]')
  },
  "can set family settings": browser => {
    const utils = browser.page.UtilObject();
    utils.nextPage();
  },
  "rent settings": browser => {
    const utils = browser.page.UtilObject();
    utils.nextPage()
  },
  "results page": browser => {
    browser
        .waitForElementVisible(".ItemResult")
        .assert.containsText('#GE_051_00_mensual', "Renda activa d'inserció aturats de llarga durada")
  },
  after: function (browser) {
    browser.end();
  }
};
