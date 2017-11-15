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
            .click('')
    },
    'close': (browser) => {},
};