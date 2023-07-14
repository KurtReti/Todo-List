import { addToProject, currentProject } from './ProjectController'
import TodoItem from './TodoItem'
import { showTasksForCurrentProject, scrollOnAdd } from './UI'

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
  console.log(currentProject)
}

function addItem () {
  const itemFormTitle = document.querySelector('.item-title')
  const itemFormDueDate = document.querySelector('.item-duedate')
  const itemFormDescription = document.querySelector('.item-description')

  const itemTitle = itemFormTitle.value
  const itemDueDate = itemFormDueDate.value
  const itemDescription = itemFormDescription.value

  const item = new TodoItem(itemTitle, itemDescription, itemDueDate)

  addToProject(item, currentProject)
  console.log(currentProject)
  closeItemForm()
  showTasksForCurrentProject(currentProject)
  scrollOnAdd()
}

function removeItem (e) {
  const index = e.currentTarget.parentNode.getAttribute('data-item')
  currentProject.list.splice(index, 1)
  showTasksForCurrentProject(currentProject)
}

export { eventListeners, removeItem }
