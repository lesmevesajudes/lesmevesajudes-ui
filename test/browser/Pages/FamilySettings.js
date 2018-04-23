
module.exports = {
  url: function() { 
		return this.api.launchUrl; 
	},
  elements: {
      socialServices: '[data-test="es_usuari_serveis_socials"]',
  },
  commands: [{
      serveisSocials: function() {
        return this.waitForElementVisible('@socialServices')
        .click('@socialServices')
      }
  }]

};
