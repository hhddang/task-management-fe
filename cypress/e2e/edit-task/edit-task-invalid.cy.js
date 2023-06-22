// import './add-project.cy'

describe('Edit task with invalid data', () => {
  const oldTask = {
    name: "New task",
    content: "some content",
    project: "New project"
  };
  const newTask = {
    name: "New task 2",
    content: "some content 2",
  };

  it('should alert user to input task name', () => {
    cy.visit(`/project/${oldTask.project}`)
    cy.contains(oldTask.name).parent('div').children('[alt="more"]').click()
    cy.contains(oldTask.name).parent('div').children().children().contains('Edit').click()
    cy.get('input').get(`[value="${oldTask.name}"]`).clear()
    cy.get('button').contains('Edit').click()
  })
})