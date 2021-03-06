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
    const parent = browser.page.AddPerson();
    browser
        .waitForElementVisible("#AddParentButton")
        .click("#AddParentButton")
        .waitForElementVisible('input[name="nom"]')
        .pause(waitForModalAnimationsToFinishIGuess);
    parent
        .deNom("Adulto 1 RAI-2")
        .ambDataDeNaixement("01011960")
        .ambDataDeUltimaIncripcioAlPadro("01011960")
        .waitForElementVisible("@gender")
        .esHome()
        .teDNI()
        .situacioLaboralDesocupat()
        .ingressosBruts(6000)
        .inscritComADemanadantDOcupacio()
        .treballatAlExtranger6Mesos()
        .treballatAlExtranger6MesosRetornatUltims12Mesos();
    browser.pause(waitForModalAnimationsToFinishIGuess);
    browser
        .waitForElementVisible('button[name="ButtonValidar"]')
        .click('button[name="ButtonValidar"]')
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible('div.container-family')
  },
  "can set family settings": browser => {
    const utils = browser.page.UtilObject();
    utils.nextPage();
    utils.nextPage()
  },
  "rent settings": browser => {
    const utils = browser.page.UtilObject();
    utils.nextPage()
  },
  "results page": browser => {
    browser
        .waitForElementVisible(".ItemResult")
        .assert.containsText('#GE_051_02_mensual', "Renda activa d'inserció per a emigrants retornats")
  },
  after: function (browser) {
    browser.end();
  }
};
