describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

it('displays an empty title', () => {
  cy.get('h2')
    .should('be.empty');
})
