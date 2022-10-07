// Selectors
const todoInput = document.querySelector(".input");
const todoButton = document.querySelector(".add");
const todoClear = document.querySelector(".clear");
const todoList = document.querySelector(".todo-items");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
todoClear.addEventListener("click", clearCheck);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(event) {
    
    if (todoInput.value === ""){
        alert("Please enter the TODO...!");
    }else{

event.preventDefault();
// Todo Div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

//Check Button
const completedButton = document.createElement("button");
completedButton.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
completedButton.classList.add("completed-button");
todoDiv.appendChild(completedButton);

//Create LI
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-items");
todoDiv.appendChild(newTodo);

//Add todo to Local storage
saveLocalTodos(todoInput.value);

//Edit button

const editButton = document.createElement("button");
editButton.classList.add("edit-button");
todoDiv.appendChild(editButton);
editButton.innerHTML = '<i class="fa-sharp fa-solid fa-pen-to-square"></i>';
editButton.onclick = function()
    {
        editWorking(newTodo);
    }


// Trash Button
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
trashButton.classList.add("trash-button");
todoDiv.appendChild(trashButton);

//Append to list
todoList.appendChild(todoDiv);

//Clear Todo Input value
todoInput.value= "";
}
 }

function editWorking(e){
    
    var editValue = prompt('Edit the value here', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
    
//console.log(value);
}


// Delete 
function deleteCheck(event) {

    //console.log(e.target);
    
    const item = event.target;
    
    // Delete Todo
    if(item.classList[0] === "trash-button")
    {
        const todo = item.parentElement;
        todo.classList.toggle("delete");
        removeLocalTodods(todo);
        // todo.classList.add("drop");
        // todo.addEventListener(
        //     'transitionend', 
        //     function()
        //     {
        //         todo.remove();
        //     });
    }
    if(item.classList[0] === "completed-button")
    {
        const todo = item.parentElement;
        todo.classList.toggle("complete");   
    }
    
    }

//Filter Todo
function filterTodo(e) {
    const todos = todoList.childNodes;
//console.log(todos);
    todos.forEach(function(todo)
    {
        switch(e.target.value){
            
            case "all":
                todo.style.display ="flex";
            break;

            case "completed":
                if (todo.classList.contains("complete"))
                {
                    todo.style.display ="flex";
                } else {
                    todo.style.display ="none";
                }
                
            break;
            case "deleted":
                if (todo.classList.contains("delete"))
                {
                    todo.style.display ="flex";
                } else {
                    todo.style.display ="none";
                }
            break;
            case "pending":
                if (!todo.classList.contains("delete") && !todo.classList.contains("complete"))
                {
                    todo.style.display ="flex";
                } else {
                    todo.style.display ="none";
                }
            break;
        }
    })
}
    
    function clearCheck(){
        alert("Are you OK to clear all TODO...!");
        todoList.innerHTML='';
    }

    function saveLocalTodos(todo){
//Check for existing Todo

    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    }

function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){

const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

//Check Button
const completedButton = document.createElement("button");
completedButton.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
completedButton.classList.add("completed-button");
todoDiv.appendChild(completedButton);

//Create LI
const newTodo = document.createElement("li");
newTodo.innerText = todo;
newTodo.classList.add("todo-items");
todoDiv.appendChild(newTodo);

const editButton = document.createElement("button");
editButton.classList.add("edit-button");
todoDiv.appendChild(editButton);
editButton.innerHTML = '<i class="fa-sharp fa-solid fa-pen-to-square"></i>';
editButton.onclick = function()
    {
        editWorking(newTodo);
    }


// Trash Button
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
trashButton.classList.add("trash-button");
todoDiv.appendChild(trashButton);

//Append to list
todoList.appendChild(todoDiv);

    })
}    

function removeLocalTodods(todo){
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innertext;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function saveEditTodos(todo){
    //Check for existing Todo
    
        let todos;
        if(localStorage.getItem('todos') === null) {
            todos = [];
        }else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        
        todos.push(todos.indexOf(todoIndex), 1);
        localStorage.getItem("todos", JSON.stringify(todos));
        }

        // function editWorking(e){
        //     saveEditTodos(todoInput.value);
        //     var editValue = prompt('Edit the value here', e.firstChild.nodeValue);
        //     e.firstChild.nodeValue = editValue;
        // //console.log(value);
        // }



// const edit_button = document.getElementsByClassName("edit-button");
// const edit_container = document.getElementById("edit-container");
// const close = document.getElementById("close");

// close_button.addEventListener("click", () => {
//     edit_container.classList.remove("show");
// });

function editCheck(e){


    todoList.innerHTML+=`

<div class="edit-container" id="edit-container">
<div class="popup">

<div class="popup-head">
<button class="close" onclick="closeEdit()" >&times;</button>
</div>

<div class="popup-container">
<label for="popup-input">Edit:</label><br>
<input type="text" id="myfield" class="popup-input" placeholder="Enter the changes..." value=""/>

</div>

<div class="popup-footer">    
<button class="save" onclick="closeEdit()">Save Changes</button>
</div>
</div>
    
</div>`
document.getElementById('edit-container').style.display='block';
}

function closeEdit(){
    var exit = document.querySelector('#edit-container');
    exit.style.display='none';
}











