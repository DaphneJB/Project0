//Daphne Jonkers Both

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo(){
  var todo = prompt("What do you need to do?", )
  const item = addTodo(todo)
  list.insertBefore(item, list.firstChild);
}

function addTodo(todo) {
  const checkbox = document.createElement("INPUT")
  checkbox.className = classNames.TODO_CHECKBOX
  checkbox.setAttribute("type", "checkbox")
  checkbox.setAttribute("name", "item")
  checkbox.onchange = updateCheckCount
  const label = document.createElement("Label")
  label.append(checkbox)
  label.append(todo)
  itemCountSpan.innerHTML++
  uncheckedCountSpan.innerHTML++

  const todoItem = document.createElement('li')
  todoItem.className = classNames.TODO_ITEM
  todoItem.append(label)

  return todoItem
}

function updateCheckCount() {
  uncheckedCountSpan.innerHTML = 0
  const checkboxes = document.getElementsByClassName('todo-checkbox')
  var i
  for (i = 0; i < checkboxes.length; i++) {
    console.log(checkboxes[i].checked)
    if(!checkboxes[i].checked) uncheckedCountSpan.innerHTML++
  }

}
