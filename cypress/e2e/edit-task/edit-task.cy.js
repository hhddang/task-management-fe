// import './add-project.cy'

describe('Edit task with valid data', () => {
  const oldTask = {
    name: "New task",
    content: "some content",
    project: "New project"
  };
  const newTask = {
    name: "New task 2",
    content: "some content 2",
  };

  it('should show your task changes its data', () => {
    cy.visit(`/project/${oldTask.project}`)
    cy.contains(oldTask.name).parent('div').children('[alt="more"]').click()
    cy.contains(oldTask.name).parent('div').children().children().contains('Edit').click()
    cy.get('input').get(`[value="${oldTask.name}"]`).clear().type(newTask.name)
    cy.get('textarea').contains(oldTask.content).clear().type(newTask.content)
    cy.get('button').contains('Edit').click()
    cy.visit(`/project/${oldTask.project}`)
    cy.contains(newTask.name).should('exist')
  })
})