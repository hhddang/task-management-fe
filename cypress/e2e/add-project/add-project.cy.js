describe('Add project with valid data', () => {
  const newProject = {
    name: "New project",
    description: "Some desc"
  }
  
  it('should render new project card', () => {
    cy.visit('/')
    cy.contains('New Project').click()
    cy.get('[placeholder="Enter your project name"]').type(newProject.name)
    cy.get('[placeholder="Enter your description"]').type(newProject.description)
    cy.get('button').contains('Add').click()
    cy.visit('/')
    cy.contains("New Project").should('exist')
  })
})