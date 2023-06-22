describe('Cancel delete task', () => {
  const task = {
    name: "New task",
    project: "New project"
  }

  it('should change nothing', () => {
    cy.visit('/')
    cy.visit(`/project/${task.project}`)
    cy.contains(task.name).parent('div').children('[alt="more"]').click()
    cy.contains(task.name).parent('div').children().children().contains('Delete').click()
    cy.get('button').contains('Cancel').click()
    cy.contains(task.name).should('exist')
  })
})