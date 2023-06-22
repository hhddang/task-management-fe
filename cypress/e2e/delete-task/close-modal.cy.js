describe('Close delete task modal', () => {
  const task = {
    name: "New task 2",
    project: "New project"
  }

  it('should be close when click outside the modal', () => {
    cy.visit('/')
    cy.visit(`/project/${task.project}`)
    cy.contains(task.name).parent('div').children('[alt="more"]').click()
    cy.contains(task.name).parent('div').children().children().contains('Delete').click()
    cy.contains('Delete Task').parent().parent().children('.blur').click('topRight', {force: true})
    cy.contains('Delete Task').parent().parent().children('.blur').should('not.be.visible')
  })
})