// import '../add-project/add-project.cy'

describe('Cancel delete project', () => {
  const newProject = {
    name: "New project",
    description: "Some desc"
  }

  it('should change nothing', () => {
    cy.visit('/')
    cy.contains(newProject.name).parents('.project-item').children('[alt="trash"]').invoke('show').click()
    cy.contains('Cancel').click()
    cy.contains(newProject.name).should('exist')
  })
})