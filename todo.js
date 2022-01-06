// Create UI variables - New Vairables
const todo = document.querySelector("#todo");
const submitBtn = document.querySelector(".submit");
const clearListBtn = document.querySelector(".clear-list");
const items = document.querySelector(".todo-items");
const itemCount = document.getElementById("#olCount");
const itemArr = [];


// Listen to the "click" evens and call functions
submitBtn.addEventListener('click', addTodoFn);
clearListBtn.addEventListener("click", clearListFn);
// Create the functions
  
function addTodoFn(){
// Build a todo array to track counts
  if (itemArr !=[]) {
    itemArr.splice(0,0, todo.value);
  }
  
// Build to-do item list

  if(todo.value === ''){
    alert('Add a To-Do!');
  } else {
  const newli = document.createElement("li");
  newli.appendChild(document.createTextNode(todo.value));
  
  const link1 = document.createElement('a');
  link1.className='delete-item secondary-content';
  link1.innerHTML = '<button class="button" id="delete">delete</button>';
 
  const link2 = document.createElement('a');
  link2.className='complete-item secondary-content';
  link2.innerHTML = '<button class="button" id="done">done</button>';

  newli.appendChild(link1);
  newli.appendChild(link2);
  items.appendChild(newli);
  todo.value='';

  //  Limit list to 5 items
    if (itemArr.length > 5){
      alert('To-Do List Is Full. Five Items is the limit.');
      items.removeChild(items.lastChild);
    }
  }
}

// This function runs when the "clear list" button is clicked.  It clears the action list and alert if list is empty.
function clearListFn(){
  let flag = false;
  while(items.firstChild){
    items.removeChild(items.firstChild);
    flag = true;
  }

  if ((!items.firstChild)& (flag === false)){
    alert('List Is Empty!');
  }
}

// Add styling to the action item list
const style = document.createElement('style');
style.innerHTML = `
      a {
        padding: 5px;
        align-items: center;
      }
      li {
        padding-top: 5px;
        padding-bottom: 15px;
        text-align: left;
        button-align: right;
        align-items: center;
        color: black;
      }
    `;
document.head.appendChild(style);


// This will remove indivisual action item when the "delete" button is clicked.
items.addEventListener('click', deleteTodo);
function deleteTodo(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove()
  }
}

// This will "strike-through" indivisual action item when the "done" button is clicked.
items.addEventListener('click', todoCompleted);
function todoCompleted(e){
  if(e.target.parentElement.classList.contains('complete-item')){
    e.target.parentElement.parentElement.style.textDecoration = 'line-through';
  }
}