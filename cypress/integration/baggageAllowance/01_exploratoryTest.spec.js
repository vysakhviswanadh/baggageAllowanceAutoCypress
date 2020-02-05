import * as viewPortSize from '../../utils/viewportsize'

describe('Baggage Allowance Exploratory tests', () => {
  beforeEach(() => {
    cy.goToBaggagePage();
  })

  viewPortSize.sizes.forEach(size => {
    it(`Performing some exploratory tests on the baggage allowance form ${size}`, () => {
      cy.contains('Baggage information');
      cy.contains('Do you have an existing booking?');
      cy.get('#PNRSearch').should('exist');
      cy.get('#ItinerarySearch').should('exist');
      cy.contains('Booking reference');
      cy.contains('Last name');
      cy.contains('SEE BAGGAGE ALLOWANCE').click();
      cy.get('.form-validation-summary').should('be.visible');
    })
    
  })
})
