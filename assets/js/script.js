// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Get the <span> element that closes the modal
var span = document.querySelector(".close");
let model = document.getElementById('myModal')
$('#TaskForm').on('click', ToggleTaskModel)
span.addEventListener('click', function () {
    model.style.display = "none";
})

const form = document.querySelector('form')
form.addEventListener('submit', createTaskCard)

//let MakeTaskBtn=document.getElementById('MakeTaskBtn');
//MakeTaskBtn.addEventListener('submit',createTaskCard)

// renderSingleTask()

$('.TaskCard').draggable({
    zIndex:100,
    revert:true
})

$('#in-progress-cards ,#done-cards, #todo-cards ').droppable({
    // accept:'.TaskCard',
    drop:function(dropEvent,ui){
        let Box=dropEvent.target;
        //  let Box = document.getElementById('in-progress-cards')
        let item=ui.draggable[0]
        $(item).detach().css({top:0,left:0}).appendTo(Box)
        // Box.remove()   
        // console.log(item)
        console.log(Box)
    }
})







// will show the add Task Model
function ToggleTaskModel() {
    let Model = document.getElementById('myModal')
    Model.style.display = 'flex';
}
// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
    task.preventDefault()
    console.log('Created task')
    let Title = document.getElementById('Title')
    let DueDate = document.getElementById('Due')
    let Description = document.getElementById('Description')

    let newOBJ={ 
        TitleRender:Title.value,
        DueDateRender:DueDate.value,
        DescriptionRender:Description.value
    }
    renderSingleTask(newOBJ)
        
    

    // console.log(Title.value)
    // console.log(DueDate.value)
    // console.log(Description.value)


}

//will render a single task to the screen
function renderSingleTask(OBJ){
let TodoCards=document.getElementById('todo-cards')
// console.log(OBJ)
let Box =document.createElement('div')
Box.classList='TaskCard'
Box.insertAdjacentHTML('beforeend',`
    
        <h3>${OBJ.TitleRender}</h3>
        <div> ${OBJ.DueDateRender} </div>
        <p> ${OBJ.DescriptionRender}</p>
    

`)
TodoCards.appendChild(Box)
$(Box).draggable({
    zIndex:100,
    revert:true})
}


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
