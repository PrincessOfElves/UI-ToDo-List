let tasks = Array.from(document.querySelectorAll(".task_container"));
let radioButton = Array.from(document.querySelectorAll(".task_input"));
let closeButton = Array.from(document.querySelectorAll(".close-button"));
let inputHigh = document.querySelector(".high_input");
let inputLow = document.querySelector(".low_input");
let addButtonOne = document.querySelector(".add-button-one");
let addButtonTwo = document.querySelector(".add-button-two");
let firstInput = document.querySelector(".first-input");
let secondInput = document.querySelector(".second-input");


addButtonOne.addEventListener("click", addTaskHigh);
addButtonTwo.addEventListener("click", addTaskLow);


inputHigh.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        addTaskHigh();
    }
});

inputLow.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        addTaskLow();
    }
});


function addTaskHigh(){
  let newDiv = document.createElement("div");
  newDiv.classList.add("task_container");
  newDiv.innerHTML = "<input class=\"task_input\" type=\"radio\"></input><p class = \"text\"></p><span class = \"close-button\" type=\"button\">✕</span>";
  let newInput = newDiv.querySelector(".text");
  newInput.textContent = inputHigh.value;
  inputHigh.value = "";
  firstInput.after(newDiv);
  tasks.push(newDiv);
  let newRadioButton = newDiv.querySelector(".task_input");
  let newCloseButton = newDiv.querySelector(".close-button");
  radioButton.push(newRadioButton);
  closeButton.push(newCloseButton);
  finishedTask();
  deletedTask();
}


function addTaskLow(){
  let newDiv = document.createElement("div");
  newDiv.classList.add("task_container");
  newDiv.innerHTML = "<input class=\"task_input\" type=\"radio\"></input><p class = \"text\"></p><span class = \"close-button\" type=\"button\">✕</span>";
  let newInput = newDiv.querySelector(".text");
  newInput.textContent = inputLow.value;
  inputLow.value = "";
  secondInput.after(newDiv);
  tasks.push(newDiv);
  let newRadioButton = newDiv.querySelector(".task_input");
  let newCloseButton = newDiv.querySelector(".close-button");
  radioButton.push(newRadioButton);
  closeButton.push(newCloseButton);
  finishedTask();
  deletedTask();
}


// Finished task
function finishedTask(){
    for (let i = 0; i < radioButton.length; i++){
        radioButton[i].addEventListener("click", function(){
            tasks[i].classList.add("finished_task");  
        });
    }  
}


// Delete task
function deletedTask(){
    for (let i = 0; i < closeButton.length; i++){
        closeButton[i].addEventListener("click", function(){
            tasks[i].classList.add("hide"); 
        });
    }
}
