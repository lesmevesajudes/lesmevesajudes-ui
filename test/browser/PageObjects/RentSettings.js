module.exports = {
  elements: {
    postalCode: 'input[name="codi_postal_habitatge"]',
    nextButtonPage: '#next-button'
  },

  commands: [{
    codiPostalHabitatge: function (codi) {
      return this.waitForElementVisible('@postalCode').setValue('@postalCode', codi)
    },
    nextPage: function () {
      return this.getLocationInView('@nextButtonPage')
          .click("@nextButtonPage")
    }
  }]

};
