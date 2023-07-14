import Project from './Project'

function projectListeners () {
  const newProjectButton = document.querySelector('.new-project')
  newProjectButton.addEventListener('click', newProject)

  const projectFormClose = document.querySelector('.project-form-close')
  projectFormClose.addEventListener('click', closeProjectForm)

  const projectFormSubmit = document.querySelector('.project-form-submit')
  projectFormSubmit.addEventListener('click', submitProjectForm)
}

function setCurrentProject (e) {
  const index = e.currentTarget.getAttribute('data-item')
  currentProject = listOfProjects[index]
}

function addToProject (Item, Project) {
  Project.list.push(Item)
}

function addProject (Project, array) {
  array.push(Project)
}

function submitProjectForm () {
  const projectFormTitle = document.querySelector('.project-title')

  const projectTitle = projectFormTitle.value

  const project = new Project(projectTitle, [])

  addProject(project, listOfProjects)
  closeProjectForm()
}

function newProject () {
  const projectForm = document.querySelector('.project-form')
  projectForm.classList.remove('hidden')
}

function closeProjectForm () {
  const projectForm = document.querySelector('.project-form')
  const projectFormTitle = document.querySelector('.project-title')

  projectFormTitle.value = ''

  projectForm.classList.add('hidden')
}

const listOfProjects = []
const project1 = new Project('Daily tasks', [])

let currentProject = project1

addProject(project1, listOfProjects)

export {
  addToProject,
  setCurrentProject,
  projectListeners,
  listOfProjects,
  currentProject
}
