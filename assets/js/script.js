// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Get the <span> element that closes the modal
var span = document.querySelector(".close");
let model =document.getElementById('myModal')
$('#TaskForm').on('click',ToggleTaskModel)
  span.addEventListener('click',function() {
    model.style.display = "none";
  })

// will show the add Task Model
function ToggleTaskModel(){
    let Model =document.getElementById('myModal')
    Model.style.display='flex';
}




// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
