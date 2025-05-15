const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject) => {
    const {name, dueDate, deleteBtn} = todoObject;
    const html = `
    <div>${name}</div> 
    <div>${dueDate}</div>
    <button class='js-delete-todo-btn'>${deleteBtn}</button>`;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-btn').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
    renderTodoList();
    localStorage.setItem('todoList', JSON.stringify(todoList));
    })
  });
}

document.querySelector('.js-add-todo-btn').addEventListener('click', () => addTodoList());

function addTodoList(){
  const inputEl = document.querySelector('.js-name-input');
 const name = inputEl.value;

 const dateInputEl = document.querySelector('.js-due-date-input');
 const dueDate = dateInputEl.value;
 const deleteBtn = document.createElement('button').textContent = 'Delete';

 todoList.push({name, dueDate, deleteBtn});

 inputEl.value = '';
 renderTodoList();
 localStorage.setItem('todoList', JSON.stringify(todoList));
}