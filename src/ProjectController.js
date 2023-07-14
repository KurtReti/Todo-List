import Project from './Project'

function setCurrentProject (e) {
  const index = e.currentTarget.getAttribute('data-item')
  currentProject = listOfProjects[index]
  console.log(currentProject)
}

function addToProject (Item, Project) {
  Project.list.push(Item)
}

function addProject (Project, array) {
  array.push(Project)
}

const listOfProjects = []
const project1 = new Project('Daily tasks', [])
const project2 = new Project('Daily tasks 2', [])

let currentProject = project1

addProject(project1, listOfProjects)
addProject(project2, listOfProjects)

export { addToProject, setCurrentProject, listOfProjects, currentProject }
