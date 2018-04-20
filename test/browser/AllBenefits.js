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
    var parent = browser.page.AddPerson();
    browser
        .waitForElementVisible("#AddParentButton")
        .click("#AddParentButton")
        .waitForElementVisible('input[name="nom"]')
        .pause(waitForModalAnimationsToFinishIGuess)
    parent
        .elSeuNom("Parent 1")
        .ambDataDeNaixement("15011970")
        .ambDataDePadro("15012010")
        .waitForElementVisible("@gender")
        .esDona()
        .teDNI()
        .situacioLaboralDesocupat()
        .minusvaliaPercentatge(90)
        .victimaDeViolenciaDeGenere()
        .victimaDeViolenciaDomestica()
        .divorciadaFamiliaRegrupada()
        .orfeProgenitos()
        .treballatAlExtranger6Mesos()
        .treballatAlExtranger6MesosRetornatUltims12Mesos()
        .esgotatPrestacioDesocupacio()
        .InscritDemandantDesocupacio()
        .DemandantDesocupacioDurant12Mesos()
        .mesAnteriorSolicitudTreball()
    browser
        .waitForElementVisible('button[name="ButtonValidar"]')
        .click('button[name="ButtonValidar"]')
        .pause(waitForModalAnimationsToFinishIGuess)
        .waitForElementVisible('div.container-family')
        .assert.containsText('li[data-test=Parent 1"]', 'Parent 1')
        .end()
  },
  "can add an child": browser => {
    var child = browser.page.addPerson();
    browser
        .click("#AddChildButton")
    parent
        .elSeuNom("Child 1")
        .ambDataDeNaixement("15012010")
        .ambDataDePadro("15012010")
        .esHome()
        .teDNI()
        .escolaritzatEntreP3i4rtESO()
        .beneficiariFonsInfancia2017()
    browser
        .assert.containsText('li[data-test="Child 1"]', 'Child 1');
  },
  "can set family settings": browser => {
    var family = browser.page.FamiliySettings();
    browser
        .getLocationInView("#next-button")
        .click("#next-button")
    family.serveisSocials()
    browser
        .getLocationInView("#next-button")
        .click("#next-button")
  },
  "rent settings": browser => {
        var rent = browser.page.RentSettings();
        rent.codiPostalHabitatge("08004")
        browser
            .getLocationInView("#next-button")
            .waitForElementVisible("#next-button")
            .click("#next-button")
  },
  "results page": browser => {
    browser
        .waitForElementVisible(".ItemResult")
        .assert.containsText('#GE_051_00_mensual', "Renda activa d'inserció aturats de llarga durada")
        .assert.containsText('#GE_051_01_mensual', "Renda activa d'inserció discapacitat 33%")
        .assert.containsText('#GE_051_02_mensual', "Renda activa d'inserció per a emigrants retornats")
        .assert.containsText('#GE_051_03_mensual', "Renda activa d'inserció per a víctimes de violència de gènere o ")
  },
  after: function (browser) {
    browser.end();
  }
};
