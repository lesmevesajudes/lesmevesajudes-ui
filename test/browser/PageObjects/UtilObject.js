module.exports = {
  elements: {
      nextButtonPage: '#next-button',
  },
  commands: [{
      nextPage: function() {
        return this.getLocationInView('@nextButtonPage')
        .click("@nextButtonPage")
      }
  }]
};
