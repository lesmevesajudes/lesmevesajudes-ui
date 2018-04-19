const waitForModalAnimationsToFinishIGuess = 400;

module.exports = {
  '@tags': ['ci'],
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
        .waitForElementVisible("#AddParentButton", 100);
    browser.assert.urlContains("wizard");
  },
  "can add an parent": browser => {
    browser
        .click("#AddParentButton")
        .waitForElementVisible('input[name="nom"]')
        .setValue('input[name="nom"]', "Parent 1")
        .setValue('input[name="data_naixement"]', "15011978")
        .setValue('input[name="data_alta_padro"]', "15011978")
        .waitForElementVisible("[data-test='genere']")
        .click("[data-test='genere']")
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
  "housefold settings": browser => {
    browser
        .waitForElementVisible(
            'input[name="codi_postal_habitatge"]')
        .setValue('input[name="codi_postal_habitatge"]', "08004")
        .waitForElementVisible("[data-test='habitatge']")
        .click("[data-test='habitatge']")
        .waitForElementVisible("[data-test='llogater']")
        .click("[data-test='llogater']")
        .getLocationInView("#next-button")
        .click("#next-button")
  },
  after: function (browser) {
    browser.end();
  }
};
