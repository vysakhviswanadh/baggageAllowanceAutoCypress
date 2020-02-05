import * as viewPortSize from '../../utils/viewportsize'
const testData = require('../../fixtures/testData.json')

viewPortSize.sizes.forEach(size => {
describe(`Baggage Allowance for Domestic flights from Sydney to Brisbane for all classes ${size}`, () => {
  before(() => {
    cy.goToBaggagePage();
    cy.get('#ItinerarySearch').click({force:true});
    cy.get('#typeahead-input-from').clear().type(testData.origin).type('{downarrow}').type('{enter}');
    cy.get('#ItinerarySearch').click({force:true});
    cy.get('#typeahead-input-to').clear().type(testData.domesticDestination).type('{downarrow}').type('{enter}');
  })
  
    it('Validate baggage allowance for Economy Class (Sydney to Brisbane)', () => {
      cy.get('#select-input-travelClass').click();
      cy.get('#select-picker-select-input-travelClass0').click();
      cy.get('.qfa1-submit-button__container-right>.widget-form__group>.qfa1-submit-button__button').click({force:true});
      cy.contains(testData.baggageDomesticAll);
    })

    it('Validate baggage allowance for Premium Economy Class (Sydney to Brisbane)', () => {
      cy.get('#select-input-travelClass').click();
      cy.get('#select-picker-select-input-travelClass1').click();
      cy.get('.qfa1-submit-button__container-right>.widget-form__group>.qfa1-submit-button__button').click({force:true});
      cy.contains(testData.baggageDomesticAll);
    })

    it('Validate baggage allowance for Business Class (Sydney to Brisbane)', () => {
      cy.get('#select-input-travelClass').click();
      cy.get('#select-picker-select-input-travelClass2').click();
      cy.get('.qfa1-submit-button__container-right>.widget-form__group>.qfa1-submit-button__button').click({force:true});
      cy.contains(testData.baggageDomesticAll);
    })

    it('Validate baggage allowance for First Class (Sydney to Brisbane)', () => {
      cy.get('#select-input-travelClass').click();
      cy.get('#select-picker-select-input-travelClass3').click();
      cy.get('.qfa1-submit-button__container-right>.widget-form__group>.qfa1-submit-button__button').click({force:true});
      cy.contains(testData.baggageDomesticAll);
    })
    
  })
})
