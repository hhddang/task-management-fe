describe('Delete project', () => {
  const newProject = {
    name: "New project",
    description: "Some desc"
  }

  it('should be close when click outside the modal', () => {
    cy.visit('/')
    cy.contains(newProject.name).parents('.project-item').children('[alt="trash"]').invoke('show').click()
    cy.contains('Delete Project').parent().parent().children('.blur').click('topRight', {force: true})
    cy.contains('Delete Project').parent().parent().children('.blur').should('not.be.visible')
  })
})