const waitForModalAnimationsToFinishIGuess = 400;

module.exports = {
  "@tags": ['0-16'],
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
  "add father": browser => {
    const persona = browser.page.AddPerson();
    browser
        .waitForElementVisible("#AddParentButton")
        .click("#AddParentButton")
        .waitForElementVisible('input[name="nom"]')
        .pause(waitForModalAnimationsToFinishIGuess);
    persona
        .deNom("Pare1")
        .ambDataDeNaixement("15011961")
        .ambDataDeUltimaIncripcioAlPadro("31122015")
        .waitForElementVisible("@gender")
        .esHome()
        .teDNI()
        .ingressosBruts(7000)
    browser.pause(waitForModalAnimationsToFinishIGuess);
    browser
        .waitForElementVisible('button[name="ButtonValidar"]')
        .click('button[name="ButtonValidar"]')
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible('div.container-family')
  },
  "add mother": browser => {
    const persona = browser.page.AddPerson();
    browser
        .waitForElementVisible("#AddParentButton")
        .click("#AddParentButton")
        .waitForElementVisible('input[name="nom"]')
        .pause(waitForModalAnimationsToFinishIGuess);
    persona
        .deNom("Mare")
        .ambDataDeNaixement("15011961")
        .ambDataDeUltimaIncripcioAlPadro("31122015")
        .waitForElementVisible("@gender")
        .esDona()
        .teDNI()
        .ingressosBruts(0)
    browser.pause(waitForModalAnimationsToFinishIGuess);
    browser
        .waitForElementVisible('button[name="ButtonValidar"]')
        .click('button[name="ButtonValidar"]')
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible('div.container-family')
  },
  "add child": browser => {
    const persona = browser.page.AddPerson();
    browser
        .waitForElementVisible("#AddChildButton")
        .click("#AddChildButton")
        .waitForElementVisible('input[name="nom"]')
        .pause(waitForModalAnimationsToFinishIGuess);
    persona
        .deNom("Filla")
        .ambDataDeNaixement("15012002")
        .ambDataDeUltimaIncripcioAlPadro("31122015")
        .waitForElementVisible("@gender")
        .esDona()
        .teDNI()
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
    const family = browser.page.FamilySettings();
    browser.pause(1000);
    family.serveisSocials();
    utils.nextPage();
  },
  "rent settings": browser => {
    const utils = browser.page.UtilObject();
    utils.nextPage();
  },
  "results page": browser => {
    browser
        .waitForElementVisible(".ItemResult")
        .assert.containsText('#AE_230_mensual', "Renda activa d'inserció aturats de llarga durada")
  },
  after: function (browser) {
    browser.end();
  }
};
