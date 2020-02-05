import * as viewPortSize from '../../utils/viewportsize'
const testData = require('../../fixtures/testData.json')

viewPortSize.sizes.forEach(size => {
describe(`Baggage Allowance for International flights from Sydney to Dubai for Non-Economy classes ${size}`, () => {
  before(() => {
    cy.goToBaggagePage();
    cy.get('#ItinerarySearch').click({force:true});
    cy.get('#typeahead-input-from').clear().type(testData.origin).type('{downarrow}').type('{enter}');
    cy.get('#ItinerarySearch').click({force:true});
    cy.get('#typeahead-input-to').clear().type(testData.internationalDestination).type('{downarrow}').type('{enter}');
  })
  
   it('Validate baggage allowance for Premium Economy Class (Sydney to Dubai)', () => {
      cy.get('#select-input-travelClass').click();
      cy.get('#select-picker-select-input-travelClass1').click();
      cy.get('.qfa1-submit-button__container-right>.widget-form__group>.qfa1-submit-button__button').click({force:true});
      cy.contains(testData.baggageInternationalNonEconomy);
    })

    it('Validate baggage allowance for Business Class (Sydney to Dubai)', () => {
      cy.get('#select-input-travelClass').click();
      cy.get('#select-picker-select-input-travelClass2').click();
      cy.get('.qfa1-submit-button__container-right>.widget-form__group>.qfa1-submit-button__button').click({force:true});
      cy.contains(testData.baggageInternationalNonEconomy);
    })

    it('Validate baggage allowance for First Class (Sydney to Dubai)', () => {
      cy.get('#select-input-travelClass').click();
      cy.get('#select-picker-select-input-travelClass3').click();
      cy.get('.qfa1-submit-button__container-right>.widget-form__group>.qfa1-submit-button__button').click({force:true});
      cy.contains(testData.baggageInternationalNonEconomy);
    })

  })
})
