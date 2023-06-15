import { addToProject } from './ProjectController'
import TodoItem from './TodoItem'
import Project from './Project'
import { showTasksForCurrentProject, scrollOnAdd } from './UI'

const project1 = new Project('Daily tasks', [])

function eventListeners () {
  const newItem = document.querySelector('.new-item')
  newItem.addEventListener('click', newItems)

  const itemFormClose = document.querySelector('.item-form-close')
  itemFormClose.addEventListener('click', closeItemForm)

  const itemFormSubmit = document.querySelector('.item-form-submit')
  itemFormSubmit.addEventListener('click', addItem)
}

function closeItemForm () {
  const itemForm = document.querySelector('.item-form')
  const itemFormTitle = document.querySelector('.item-title')
  const itemFormDueDate = document.querySelector('.item-duedate')
  const itemFormDescription = document.querySelector('.item-description')

  itemFormTitle.value = ''
  itemFormDueDate.value = ''
  itemFormDescription.value = ''

  itemForm.classList.add('hidden')
}

function newItems (Project) {
  const itemForm = document.querySelector('.item-form')
  itemForm.classList.remove('hidden')
}

function addItem () {
  const itemFormTitle = document.querySelector('.item-title')
  const itemFormDueDate = document.querySelector('.item-duedate')
  const itemFormDescription = document.querySelector('.item-description')

  const itemTitle = itemFormTitle.value
  const itemDueDate = itemFormDueDate.value
  const itemDescription = itemFormDescription.value

  const item = new TodoItem(itemTitle, itemDescription, itemDueDate)

  addToProject(item, project1)
  console.log(project1)
  closeItemForm()
  showTasksForCurrentProject(project1)
  scrollOnAdd()
}

export { eventListeners }
// function newItem () {
//   alert('hi')
// }
