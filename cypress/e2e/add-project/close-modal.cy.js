describe('Close add project modal', () => {  
  it('should clsoe modal when clicking outside', () => {
    cy.visit('/')
    cy.contains('New Project').click()
    cy.contains('Add New Project').parent().parent().children('.blur').click('topRight', {force: true})
    cy.contains('Add New Project').parent().parent().children('.blur').should('not.be.visible')
  })
})