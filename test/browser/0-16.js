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
    browser.assert.urlContains("wizard");
  },
  "Add Family members": browser => {
    const utils = browser.page.UtilObject();
    browser.waitForElementVisible('#closeButtonModal')
    utils.closeModal();
    utils.howManyFamiliy(2);
    utils.nextPage();
  },
  "add father": browser => {
    const persona = browser.page.AddPerson();
    persona
        .deNom("Pare1")
        .ambDataDeNaixement("57")
        .esHome()
        .teDNI()
        .ambDataDeUltimaIncripcioAlPadro("Barcelona","3")
        .ingressosBruts(7000);
    browser
        .waitForElementVisible('button[name="ButtonValidar"]')
        .click('button[name="ButtonValidar"]')
        .pause(waitForModalAnimationsToFinishIGuess)
  },
  "add mother": browser => {
    const persona = browser.page.AddPerson();
    const utils = browser.page.UtilObject();
    persona

    utils
      .clickNewPerson();
    persona
      .deNom("Mare");
    utils.selectTypePerson("parella");
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
        .ambDataDeUltimaIncripcioAlPadro("15122015")
        .esDona()
        .escolaritzatEntreP3i4rtESO()
        .teDNI();
    browser
        .waitForElementVisible('button[name="ButtonValidar"]')
        .click('button[name="ButtonValidar"]')
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible('div.container-family');
  },
  "can set family settings": browser => {
    const utils = browser.page.UtilObject();
    const family = browser.page.FamilySettings();

    utils.nextPage();
    family.serveisSocials();
    utils.nextPage();
  },
  "rent settings": browser => {
    const rent = browser.page.RentSettings();

    rent.esLlogater()
        .codiPostalHabitatge("08003");
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
