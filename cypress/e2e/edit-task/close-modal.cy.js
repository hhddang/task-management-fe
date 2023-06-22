// import './add-project.cy'

describe('Close edit task modal', () => {
  const oldTask = {
    name: "New task",
    content: "some content",
    project: "New project"
  };
  const newTask = {
    name: "New task 2",
    content: "some content 2",
  };

  it('should close the modal when clicking outside', () => {
    cy.visit(`/project/${oldTask.project}`)
    cy.contains(oldTask.name).parent('div').children('[alt="more"]').click()
    cy.contains(oldTask.name).parent('div').children().children().contains('Edit').click()
    cy.contains('Edit Task').parent().parent().children('.blur').click('topRight', {force: true})
    cy.contains('Edit Task').parent().parent().children('.blur').should('not.be.visible')
  })
})