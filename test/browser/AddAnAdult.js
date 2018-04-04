const DEFAULT_TIMEOUT = 2000;
module.exports = {
	"load index page": browser => {
		browser
			// Load the page at the launch URL
			.url(browser.launchUrl)
			// wait for page to load
			.waitForElementVisible(".CTA", 1000);
	},
	"load app": browser => {
		browser
			.click('a[href="/wizard/"]')
			.waitForElementVisible("#AddParentButton", 100);
		browser.assert.urlContains("wizard");
	},
	"add an parent": browser => {
		browser
			.click("#AddParentButton")
			.waitForElementVisible('input[name="nom"]', DEFAULT_TIMEOUT)
			.setValue('input[name="nom"]', "Joan")
			.setValue('input[name="data_naixement"]', "15011978")
			.setValue('input[name="data_alta_padro"]', "15011978")
			.setValue('input[name="sexe"]', "home")
			.waitForElementVisible("[data-test='sexe']", DEFAULT_TIMEOUT)
			.click("[data-test='sexe']")
			.waitForElementVisible("[data-test='sexe_home']", DEFAULT_TIMEOUT)
			.click("[data-test='sexe_home']")
			.pause(200) // La salsa secreta
			.waitForElementVisible(
				"[data-test='document_identitat']",
				DEFAULT_TIMEOUT
			)
			.click("[data-test='document_identitat']")
			.waitForElementVisible("#menu-tipus_document_identitat", DEFAULT_TIMEOUT)
			.waitForElementVisible("[data-test='di_dni']", DEFAULT_TIMEOUT)
			.click("[data-test='di_dni']")
			.waitForElementVisible(
				"[data-test='es_usuari_serveis_socials']",
				DEFAULT_TIMEOUT
			)
			.click('[data-test="es_usuari_serveis_socials"')
			.click('button[name="ButtonValidar"]')
			.pause(3000);
	},
	"add an child": browser => {
		browser
			.click("#AddChildButton")
			.waitForElementVisible('input[name="nom"]', DEFAULT_TIMEOUT)
			.setValue('input[name="nom"]', "Rick")
			.setValue('input[name="data_naixement"]', "15011998")
			.setValue('input[name="data_alta_padro"]', "15011998")
			.setValue('input[name="sexe"]', "home")
			.waitForElementVisible("[data-test='sexe']", DEFAULT_TIMEOUT)
			.click("[data-test='sexe']")
			.waitForElementVisible("[data-test='sexe_home']", DEFAULT_TIMEOUT)
			.click("[data-test='sexe_home']")
			.pause(200) // La salsa secreta
			.waitForElementVisible(
				"[data-test='document_identitat']",
				DEFAULT_TIMEOUT
			)
			.click("[data-test='document_identitat']")
			.waitForElementVisible("#menu-tipus_document_identitat", DEFAULT_TIMEOUT)
			.waitForElementVisible("[data-test='di_dni']", DEFAULT_TIMEOUT)
			.click("[data-test='di_dni']")
			.click('button[name="ButtonValidar"]')
			.pause(3000)
			.click("#next-button");
	},
	"family settings": browser => {
		browser
			.waitForElementVisible(
				'[data-test="es_usuari_serveis_socials"]',
				DEFAULT_TIMEOUT
			)
			.click('[data-test="es_usuari_serveis_socials"')
			.pause(3000)
			.click("#next-button");
	},
	"housefold settings": browser => {
		browser
			.waitForElementVisible(
				'input[name="codi_postal_habitatge"]',
				DEFAULT_TIMEOUT
			)
			.setValue('input[name="codi_postal_habitatge"]', "08004")
			.waitForElementVisible("[data-test='habitatge']", DEFAULT_TIMEOUT)
			.click("[data-test='habitatge']")
			.waitForElementVisible("[data-test='llogater']", DEFAULT_TIMEOUT)
			.click("[data-test='llogater']")
			.pause(3000)
			.click("#next-button")
			.pause(30000);
	},
	after: function(browser) {
		browser.end();
	}
};
