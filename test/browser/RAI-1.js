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
        .waitForElementVisible("#AddParentButton");
    browser.assert.urlContains("wizard");
  },
  "can add an parent": browser => {
    var parent = browser.page.AddPerson();
    browser
        .waitForElementVisible("#AddParentButton")
        .click("#AddParentButton")
        .waitForElementVisible('input[name="nom"]')
        .pause(waitForModalAnimationsToFinishIGuess)
    parent
        .elSeuNom("Adulto 1 RAI-1")
        .ambDataDeNaixement("15011961")
        .ambDataDePadro("15011961")
        .waitForElementVisible("@gender")
        .esDona()
    browser.pause(waitForModalAnimationsToFinishIGuess)
    parent.teDNI()
    browser.pause(waitForModalAnimationsToFinishIGuess)
    parent
        .situacioLaboralDesocupat()
        .minusvaliaPercentatge(34)
        .IngresosBruts(6000)
        .inscritDemandantDesocupacio()
        .esgotatPrestacioDesocupacio()
        .demandantDesocupacioDurant12Mesos()
        .mesAnteriorSolicitudTreball()
    browser.pause(waitForModalAnimationsToFinishIGuess)
    browser
        .waitForElementVisible('button[name="ButtonValidar"]')
        .click('button[name="ButtonValidar"]')
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible('div.container-family')
  },
  "can set family settings": browser => {
    browser
        .getLocationInView("#next-button")
        .click("#next-button")
    browser
        .getLocationInView("#next-button")
        .click("#next-button")
  },
  "rent settings": browser => {
    browser
        .getLocationInView("#next-button")
        .waitForElementVisible("#next-button")
        .click("#next-button")
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
