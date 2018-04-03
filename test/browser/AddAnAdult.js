module.exports = {
    'load index page': (browser) => {
        browser
            // Load the page at the launch URL
            .url(browser.launchUrl)
            // wait for page to load
            .waitForElementVisible('.CTA', 1000);
    },
    'load app': (browser) => {
        browser
            .click('a[href="/wizard/"]')
            .waitForElementVisible('#AddParentButton', 100);
        browser.assert.urlContains('wizard');
    },
    'add an parent': (browser) => {
        browser
            .click('#AddParentButton')
            .waitForElementVisible('input[name="nom"]', 1000)
            .setValue('input[name="nom"]', 'Joan')
            .setValue('input[name="data_naixement"]', '15-01-1978')
            .click('#sexeform')
            .setValue('input[name="sexeform"]', 'dona')
            .pause(10000)
            .setValue('select[name="tipus_document_identitat"]', "DNI")
            .setValue('input[name="data_alta_padro"]', '15-01-1978')
            .setValue('select[name="situacio_laboral"]', "treball_compte_alie")
            .setValue('input[name="codi_postal_empadronament"]', "08001")
            .setValue('input[name=".social_services_user"]', true)
            .setValue('input[name="victima_de_terrorisme"]', true)
            .setValue('input[name="es_orfe_dels_dos_progenitors"]', true)
            .setValue('input[name="ha_treballat_a_l_estranger_6_mesos"]', true)
            .setValue('input[name="al_corrent_de_les_obligacions_tributaries"]', true)
            .click('button[name="ButtonValidar"]');
        browser.waitForElementVisible('li.ItemParent',100);
    },
    after : function(browser) {
        browser.end();
    }
};