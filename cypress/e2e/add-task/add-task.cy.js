// import './add-project.cy'

describe('Add task with valid data', () => {
  const newTask = {
      name: "New task",
      content: "some content",
      project: "New project"
    };

  it('should show new tasks in panel named Ready', () => {
    cy.visit(`/project/${newTask.project}`)
    cy.contains('Ready').parent('div').children().children('[alt="plus"]').click()
    cy.get('[placeholder="Enter your new task"]').type(newTask.name)
    cy.get('[placeholder="Describe your new task"]').type(newTask.content)
    cy.get('button').contains('Create').click()
    cy.visit(`/project/${newTask.project}`)
    cy.contains("New task").should('exist')
  })
})