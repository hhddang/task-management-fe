describe('Add task with invalid data', () => {
  const newTask = {
      // name: "New task",
      // content: "some content",
      project: "New project"
    };

  it('should alert user to input task name', () => {
    cy.visit(`/project/${newTask.project}`)
    cy.contains('Ready').parent('div').children().children('[alt="plus"]').click()
    cy.get('[placeholder="Enter your new task"]')
    cy.get('[placeholder="Describe your new task"]')
    cy.get('button').contains('Create').click()
  })
})