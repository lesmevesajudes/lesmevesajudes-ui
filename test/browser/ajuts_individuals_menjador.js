const waitForModalAnimationsToFinishIGuess = 400;

module.exports = {
  "@tags": ['menjador'],
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
        .click("#AddParentButton");
    persona
        .deNom("Pare1")
        .ambDataDeNaixement("15011961")
        .ambDataDeUltimaIncripcioAlPadro("15122015")
        .esHome()
        .teDNI()
        .ingressosBruts(5799);
    browser
        .waitForElementVisible('button[name="ButtonValidar"]')
        .click('button[name="ButtonValidar"]')
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible('div.container-family');
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
        .ambDataDeUltimaIncripcioAlPadro("15122015")
        .esDona()
        .teDNI()
        .ingressosBruts(2899);
    browser
        .waitForElementVisible('button[name="ButtonValidar"]')
        .click('button[name="ButtonValidar"]')
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible('div.container-family');
  },
  "add grandparent": browser => {
    const persona = browser.page.AddPerson();
    browser
        .waitForElementVisible("#AddOtherFamilyButton")
        .click("#AddOtherFamilyButton");
    persona
        .deNom("Grandparent")
        .ambDataDeNaixement("15011961")
        .ambDataDeUltimaIncripcioAlPadro("15122015")
        .waitForElementVisible("@gender")
        .esDona()
        .teDNI()
        .ingressosBruts(1449);
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
        .click("#AddChildButton");
    persona
        .deNom("Filla")
        .ambDataDeNaixement("15012002")
        .ambDataDeUltimaIncripcioAlPadro("15122015")
        .waitForElementVisible("@gender")
        .esDona()
        .teDNI()
        .escolaritzatEntreP3i4rtESO();
    browser
        .waitForElementVisible('button[name="ButtonValidar"]')
        .click('button[name="ButtonValidar"]')
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible('div.container-family')
  },
  "can set family settings": browser => {
    const utils = browser.page.UtilObject();
    const family = browser.page.FamilySettings();

    utils.nextPage();
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
        .assert.containsText('#EG_233_mensual', "Ajuts individuals de menjador")
  },
  after: function (browser) {
    browser.end();
  }
};
