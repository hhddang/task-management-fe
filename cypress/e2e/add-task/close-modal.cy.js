describe('Close add project modal', () => {  
  const newTask = {
    name: "New task",
    content: "some content",
    project: "New project"
  };

  it('should close modal when clicking outside', () => {
    cy.visit(`/project/${newTask.project}`)
    cy.contains('Ready').parent('div').children().children('[alt="plus"]').click()
    cy.contains('Create New Task').parent().parent().children('.blur').click('topRight', {force: true})
    cy.contains('Create New Task').parent().parent().children('.blur').should('not.be.visible')
  })
})