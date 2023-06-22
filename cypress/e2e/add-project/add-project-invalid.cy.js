describe('Add project with invalid data', () => {  
  it('should alert user to input project name', () => {
    cy.visit('/')
    cy.contains('New Project Invalid').click()
    cy.get('[placeholder="Enter your project name"]')
    cy.get('[placeholder="Enter your description"]')
    cy.get('button').contains('Add').click()
    cy.visit('/')
  })
})