
module.exports = {
  url: function() { 
		return this.api.launchUrl; 
	},
  elements: {
      socialServices: '[data-test="es_usuari_serveis_socials"]',
      dateBirth: 'input[name="data_naixement"]',
  },
  commands: [{
      serveisSocials: () => {
        return this.waitForElementVisible('@socialServices')
        .click('@socialServices')
      }
  }]

};
