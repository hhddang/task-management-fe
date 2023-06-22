describe('Search task', () => {
  const project = 'New project'
  const text = 'New'

  it('should show tasks have word "New" in name', () => {
    cy.visit(`/project/${project}`)
    cy.get('[placeholder="Find some tasks"]').type(text)
  })
})