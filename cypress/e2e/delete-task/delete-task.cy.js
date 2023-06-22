describe('Delete task', () => {
  const task = {
    name: "New task",
    project: "New project"
  }

  it('should reduce 1 task', () => {
    cy.visit(`/project/${task.project}`)
    cy.contains(task.name).parent('div').children('[alt="more"]').click()
    cy.contains(task.name).parent('div').children().children().contains('Delete').click()
    cy.get('button').contains('Yes').click()
    cy.visit(`/project/${task.project}`)
  })
})