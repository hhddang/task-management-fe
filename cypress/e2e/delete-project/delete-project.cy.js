// import '../add-project/add-project.cy'

describe('Delete project', () => {
  const newProject = {
    name: "New project",
    description: "Some desc"
  }

  it('should reduce 1 project card', () => {
    cy.visit('/')
    cy.contains(newProject.name).parents('.project-item').children('[alt="trash"]').invoke('show').click()
    cy.contains('Yes').click()
    cy.reload()
  })
})