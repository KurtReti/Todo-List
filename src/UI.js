
const itemContainer = document.querySelector('.content-container')

function showTasksForCurrentProject (Project) {
  itemContainer.innerHTML = ''
  for (let i = 0; i < Project.list.length; i++) {
    const itemDiv = document.createElement('div')
    itemDiv.classList.add('item')
    itemContainer.appendChild(itemDiv)
    itemDiv.setAttribute('data-item', i)

    const itemTitle = document.createTextNode(Project.list[i].title)
    itemDiv.appendChild(itemTitle)

    console.log(itemDiv.getAttribute('data-item'))
  }
}

function scrollOnAdd () {
  itemContainer.scrollTop = itemContainer.scrollHeight
}
export { scrollOnAdd, showTasksForCurrentProject }
