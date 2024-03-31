// Retrieve tasks and nextId from localStorage
// let taskList = JSON.parse(localStorage.getItem("tasks"));
// let nextId = JSON.parse(localStorage.getItem("nextId"));

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


$('.TaskCard').draggable({
    zIndex:100,
    revert:true
})

$('#in-progress-cards ,#done-cards, #todo-cards ').droppable({
    // accept:'.TaskCard',
    drop:function(dropEvent,ui){
        let Box=dropEvent.target;
        const destination =Box.dataset.storage
        let item=ui.draggable[0]
        let itemObjectID=item.dataset.objectid
        let Lastlocation=item.dataset.storage;

        $(item).detach().css({top:0,left:0}).appendTo(Box)
        // Box.remove()   
        // console.log(item)
        let OBJ=removeObject(itemObjectID,Lastlocation)
        pushItemToStorage(OBJ,destination)
        item.dataset.storage=destination
        //console.log(destination)
        
    }
})

renderTaskList()

function removeObject(itemObjectID,Lastlocation){
    let Storage=JSON.parse( localStorage.getItem(Lastlocation));
    let poppedOBJ;
    // this should not work 
    Storage= Storage.filter(element => {
            if(itemObjectID !=element.TaskID){
                    return true;
            }else{
                
                poppedOBJ=element
                return false
            }
        //return itemObjectID !=element.TaskID
    });
  
    //console.log(Storage)
    //console.log(poppedOBJ)
    Storage=JSON.stringify(Storage)
    localStorage.setItem(Lastlocation,Storage)
    return poppedOBJ
    // Storage.filter()
}



// will show the add Task Model
function ToggleTaskModel() {
    // let Model = document.getElementById('myModal')
    model.style.display = 'flex';
}
// Todo: create a function to generate a unique task id
function generateTaskId(Title) {
    const max=1000;
return Title+Math.floor(Math.random() * max)
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    task.preventDefault()
    //console.log('Created task')
    let Title = document.getElementById('Title')
    let DueDate = document.getElementById('Due')
    let Description = document.getElementById('Description')

    let newOBJ={ 
        TaskID:generateTaskId(Title.value),
        TitleRender:Title.value,
        DueDateRender:DueDate.value,
        DescriptionRender:Description.value
    }
    pushItemToStorage(newOBJ,"ToDoList")
    renderSingleTask(newOBJ,"ToDoList")
    // console.log(Title.value)
    // console.log(DueDate.value)
    // console.log(Description.value)
}


function pushItemToStorage(OBJ,location){
   let Storage=JSON.parse( localStorage.getItem(location))||[]
    Storage.push(OBJ)
    //console.log(Storage)
    Storage=JSON.stringify(Storage)
    //console.log(Storage)
    localStorage.setItem(location,Storage)

//    console.log(Storage)
}


//will render a single task to the screen
function renderSingleTask(OBJ,location){
    let DivLocationID;
    if(location=='ToDoList'){
        DivLocationID='todo-cards'
    }else if(location=='ProgressList'){
        DivLocationID='in-progress-cards'
    }else if(location=='Done'){
        DivLocationID='done-cards'
    }


let TodoCards=document.getElementById(DivLocationID)
    let newColor=PickColor(OBJ)
let Box =document.createElement('div')
Box.classList='TaskCard';
Box.dataset.objectid=OBJ.TaskID;
Box.dataset.storage=location
Box.style.backgroundColor=newColor
Box.insertAdjacentHTML('beforeend',`
    
        <h3>${OBJ.TitleRender}</h3>
        <div> ${OBJ.DueDateRender} </div>
        <p> ${OBJ.DescriptionRender}</p>
        <button class="btn btn-danger">
        remove
      </button>

`)
// console.log(Box.querySelector('button') )
Box.querySelector('button').addEventListener('click',function (eventOBJ){
   // console.log(eventOBJ.target.parentNode.dataset.storage)
    eventOBJ.target.parentNode.remove()

    removeObject(OBJ.TaskID,eventOBJ.target.parentNode.dataset.storage)
})
TodoCards.appendChild(Box)

$(Box).draggable({
    zIndex:100,
    revert:true})
}

function PickColor(OBJ){
    let dueDate=OBJ.DueDateRender
    let currentDate=new Date();
    dueDate=new Date(dueDate)
    let timeRemaining= ((((dueDate.getTime()/1000)/60)/60)/24) -((((currentDate.getTime()/1000)/60)/60)/24)
    // console.log("Due Date",dueDate)
    // console.log("Current Date",currentDate)
    // console.log("Time remaining in days",  timeRemaining  )

    if(timeRemaining>8){
     //   console.log('green')
        return 'rgb(120, 255, 96)'
    }else if(timeRemaining>3){
      //  console.log('yellow')
       return 'rgb(255, 230, 0)'
    }else{
      //  console.log("red")
        return ' rgb(253, 60, 60)'
    }
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    let ToDoList=JSON.parse(localStorage.getItem('ToDoList')) || []
    let ProgressList=JSON.parse(localStorage.getItem('ProgressList')) || []
    let DoneList=JSON.parse(localStorage.getItem('Done')) || []
    // todo-cards
    //in-progress-cards
    //done-cards
    ToDoList.forEach(element => {
        renderSingleTask(element,'ToDoList')
    });
    ProgressList.forEach(element => {
        renderSingleTask(element,'ProgressList')
    });
    DoneList.forEach(element => {
        renderSingleTask(element,'Done')
    });

    // console.log(ToDoList)
    // console.log(ProgressList)
    // console.log(DoneList)
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
