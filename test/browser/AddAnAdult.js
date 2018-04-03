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
            .click('input[name="sexeform"]')
            .pause(1000)
            .setValue('input[name="sexeform"]', 'dona')
            .pause(100000)
            .click('button[name="ButtonValidar"]');
        browser.waitForElementVisible('li.ItemParent',100);
    },
    after : function(browser) {
        browser.end();
    }
};