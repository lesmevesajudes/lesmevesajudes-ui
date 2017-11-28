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
            .waitForElementVisible('#AddAdultButton', 100);
        browser.assert.urlContains('wizard');
    },
    'add an adult': (browser) => {
        browser
            .click('#AddAdultButton')
            .waitForElementVisible('input[name="local.nom"]', 1000)
            .setValue('input[name="local.nom"]', 'Joan')
            .setValue('input[name="local.data_naixement"]', '15-01-1978')
            .setValue('select[name="local.sexe"]', 'Home')
            .setValue('select[name="local.nacionalitat"]', "Espanyola")
            .setValue('select[name="local.situacio_laboral"]', "treball_compte_alie")
            .setValue('input[name="local.codi_postal_empadronament"]', "08001")
            .setValue('input[name="local.social_services_user"]', true)
            .setValue('input[name="local.victima_de_terrorisme"]', true)
            .setValue('input[name="local.es_orfe_dels_dos_progenitors"]', true)
            .setValue('input[name="local.ha_treballat_a_l_estranger_6_mesos"]', true)
            .setValue('input[name="local.al_corrent_de_les_obligacions_tributaries"]', true)
            .click('button[type="submit"]');
        browser.waitForElementVisible('li.Item',100);
    },
    after : function(browser) {
        browser.end();
    }
};