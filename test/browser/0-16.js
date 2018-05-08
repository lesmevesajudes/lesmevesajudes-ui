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
        .click("#AddParentButton");
    persona
        .deNom("Pare1")
        .ambDataDeNaixement("15011961")
        .ambDataDeUltimaIncripcioAlPadro("31122015")
        .esHome()
        .teDNI()
        .ingressosBruts(7000);
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
        .click("#AddParentButton");
    persona
        .deNom("Mare")
        .ambDataDeNaixement("15011961")
        .ambDataDeUltimaIncripcioAlPadro("31122015")
        .esDona()
        .teDNI()
        .ingressosBruts(0);
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
        .ambDataDeNaixement("15012005")
        .ambDataDeUltimaIncripcioAlPadro("31122015")
        .esDona()
        .escolaritzatEntreP3i4rtESO()
        .teDNI();
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
    const rent = browser.page.RentSettings();
    rent.codiPostalHabitatge("08003");
    rent.nextPage();
  },
  "results page": browser => {
    browser
        .waitForElementVisible(".ItemResult")
        .assert.containsText('#AE_230_mensual', "Fons infància")
  },
  after: function (browser) {
    browser.end();
  }
};
