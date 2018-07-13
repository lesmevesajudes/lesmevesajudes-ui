const waitForModalAnimationsToFinishIGuess = 400;
module.exports = {
  elements: {
      nextButtonPage: '#next-button',
      nextButtonHowMany: 'input[name="ButtonValidar"]',
      closeButtonModal: '#closeButtonModal',

      howMany: 'input[name="how_many_persons_live_together"]',
      personNotDefined: 'div[name="personNotDefined"]',
      divPerson: '#relacio_parentiu',
      typePersonParella: '[data-test="parella"]',
      typePersonFill: '[data-test="fill"]',
      typePersonFillastre: '[data-test="fillastre"]',
      typePersonNet: '[data-test="net"]',
      typePersonInfantAcollit: '[data-test="infant_acollit"]',
      typePersonPare: '[data-test="pare"]',
      typePersonAvi: '[data-test="avi"]',
      typePersonSogre: '[data-test="sogre"]',
      typePersonGerma: '[data-test="germa"]',
      typePersonCunyat: '[data-test="cunyat"]',
      typePersonGendre: '[data-test="gendre"]',
      typePersonAltres: '[data-test="altres"]',
      typePersonCap: '[data-test="cap"]',
  },
  commands: [{
      nextPage: function() {
        return this.getLocationInView('@nextButtonPage')
        .click("@nextButtonPage")
      },
      nextPageHowMany: function(){
        return this.getLocationInView('@nextButtonHowMany')
        .click("@nextButtonHowMany")
      },
      closeModal: function() {
        return this.getLocationInView('@closeButtonModal')
        .click('@closeButtonModal')
      },
      howManyFamiliy: function (numbers) {
        return this.waitForElementVisible('@howMany')
        .setValue('@howMany', numbers)
      },
      clickNewPerson: function(){
        return this.getLocationInView('@personNotDefined')
        .click('@personNotDefined')
      },
      selectTypePerson: function(typePersona){
        this.getLocationInView('@divPerson').api.pause(3000)
        .click('@divPerson')
        switch(typePersona){
          case 'parella':
          this.getLocationInView('@typePersonParella').click('@typePersonParella')
          break;
          case 'fill':
          this.getLocationInView('@typePersonFill').click('@typePersonFill')
          break;
          case 'fillastre':
          this.getLocationInView('@typePersonFillastre').click('@typePersonFillastre')
          break;
          case 'net':
          this.getLocationInView('@typePersonNet').click('@typePersonNet')
          break;
          case 'infantAcolliment':
          this.getLocationInView('@typePersonInfantAcollit').click('@typePersonInfantAcollit')
          break;
          case 'pare':
          this.getLocationInView('@typePersonPare').click('@typePersonPare')
          break;
          case 'avi':
          this.getLocationInView('@typePersonAvi').click('@typePersonAvi')
          break;
          case 'sogre':
          this.getLocationInView('@typePersonSogre').click('@typePersonSogre')
          break;
          case 'germa':
          this.getLocationInView('@typePersonGerma').click('@typePersonGerma')
          break;
          case 'cunyat':
          this.getLocationInView('@typePersonCunyat').click('@typePersonCunyat')
          break;
          case 'gendre':
          this.getLocationInView('@typePersonGendre').click('@typePersonGendre')
          break;
          case 'altres':
          this.getLocationInView('@typePersonAltres').click('@typePersonAltres')
          break;
          case 'senseParentatiu':
          this.getLocationInView('@typePersonCap').click('@typePersonCap')
          break;
          default:
          break;
        }
        return this
      }
  }]
};
