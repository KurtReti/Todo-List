import { removeItem } from './TodoItemController'
import {
  currentProject,
  listOfProjects,
  setCurrentProject
} from './ProjectController'

const itemContainer = document.querySelector('.content-container')
const projectContainer = document.querySelector('.list-of-projects')

function showTasksForCurrentProject (Project) {
  itemContainer.innerHTML = ''
  for (let i = 0; i < Project.list.length; i++) {
    const itemDiv = document.createElement('div')
    itemDiv.classList.add('item')
    itemContainer.appendChild(itemDiv)
    itemDiv.setAttribute('data-item', i)

    const itemTitle = document.createTextNode(Project.list[i].title)
    itemDiv.appendChild(itemTitle)

    const closeItem = document.createElement('button')
    closeItem.innerHTML = 'x'
    closeItem.classList.add('close-item-button')
    itemDiv.appendChild(closeItem)
    closeItem.addEventListener('click', removeItem)

    console.log(itemDiv.getAttribute('data-item'))
  }
}

function ShowProjects (Projects) {
  projectContainer.innerHTML = ''
  for (let i = 0; i < Projects.length; i++) {
    const projectDiv = document.createElement('div')
    projectDiv.classList.add('project')
    projectContainer.appendChild(projectDiv)
    projectDiv.setAttribute('data-item', i)

    const projectTitle = document.createTextNode(Projects[i].title)
    projectDiv.appendChild(projectTitle)

    projectDiv.addEventListener('click', setCurrentProject)
    projectDiv.addEventListener('click', function () {
      showTasksForCurrentProject(currentProject)
    })
    projectDiv.addEventListener('click', setActive)
  }
}

function setActive (e) {
  const active = document.querySelectorAll('.active')
  active.forEach((project) => {
    project.classList.remove('active')
  })

  e.currentTarget.classList.add('active')
}
ShowProjects(listOfProjects)

function updateProjects () {
  const createProject = document.querySelector('.project-form')
  createProject.addEventListener('click', function () {
    ShowProjects(listOfProjects)
  })
}

updateProjects()

function scrollOnAdd () {
  itemContainer.scrollTop = itemContainer.scrollHeight
}

export { scrollOnAdd, showTasksForCurrentProject, itemContainer }
