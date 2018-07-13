const waitForModalAnimationsToFinishIGuess = 400;

module.exports = {
  elements: {
    postalCode: 'input[name="codi_postal_habitatge"]',
    relacioAmbLHabitatge: 'div[data-test="relacio_habitatge"]',
    itemLlogater: '[data-test="llogater"]',
    nextButtonPage: '#next-button',
    clickSituacioHabitatge: 'relacio_habitatge',
  },

  commands: [{
    codiPostalHabitatge: function (codi) {
      return this.waitForElementVisible('@postalCode').setValue('@postalCode', codi)
    },
    clickSituacioHabitatge: function() {
      return this.waitForElementVisible('@clickSituacioHabitatge').click('@clickSituacioHabitatge')
    },
    esLlogater: function () {
      this.waitForElementVisible("@relacioAmbLHabitatge")
          .click("@relacioAmbLHabitatge")
          .api.pause(waitForModalAnimationsToFinishIGuess);
      this
          .waitForElementVisible("@itemLlogater")
          .click("@itemLlogater")
          .api.pause(waitForModalAnimationsToFinishIGuess);
      return this;
    },
    nextPage: function () {
      return this.getLocationInView('@nextButtonPage')
          .click("@nextButtonPage")
    }
  }]
};
