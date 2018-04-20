function codiPostal(codi) {
    return this.waitForElementVisible('@postalCode').setValue('@postalCode', codi)
}
module.exports = {
  url: function() { 
		return this.api.launchUrl; 
	},
  elements: {
      postalCode: 'input[name="codi_postal_habitatge"]',
  },
  commands: [{
      codiPostalHabitatge: codiPostal,
  }]

};
