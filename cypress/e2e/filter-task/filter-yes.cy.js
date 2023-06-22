describe('Filter task with priority', () => {
  const project = 'New project'
  
  it('should show tasks are prioritized', () => {
    cy.visit(`/project/${project}`)
    cy.contains('Yes').click()
  })
})