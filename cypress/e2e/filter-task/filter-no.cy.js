describe('Filter task with no priority', () => {
  const project = 'New project'

  it('should show tasks are not prioritized', () => {
    cy.visit(`/project/${project}`)
    cy.contains('No').click()
  })
})