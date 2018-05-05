function codiPostal(codi) {
    return this.waitForElementVisible('@postalCode').setValue('@postalCode', codi)
}
module.exports = {
  elements: {
      postalCode: 'input[name="codi_postal_habitatge"]',
  },
  commands: [{
      codiPostalHabitatge: codiPostal,
  }]

};
