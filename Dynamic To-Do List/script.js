console.log("we are running");

const input = document.getElementById("input");
const addButton = document.getElementById("submitButton");
let displayTasks = document.getElementById("task");
const errorMessage = document.getElementById("error-id");
const TotalTask = document.getElementById('TotalTask')
const CompletedTaskCount = document.getElementById('CompletedTaskCount')
const taskFilter = document.getElementById('taskFilter')
const DateFilter = document.getElementById('DateFilter')

let arrayTask = JSON.parse(localStorage.getItem('tasks')) || [];
function handleMark(index) {
  arrayTask = JSON.parse(localStorage.getItem('tasks'))
  arrayTask[index].status = "Completed";
  localStorage.setItem('tasks', JSON.stringify(arrayTask))
  RenderTask(arrayTask);
}

function deleteTask(index) {
  arrayTask = JSON.parse(localStorage.getItem('tasks'))
  arrayTask = arrayTask.filter((item) => item !== arrayTask[index]);
  localStorage.setItem('tasks', JSON.stringify(arrayTask))
  RenderTask(arrayTask);
}

function uniqueNumber() {
  return Date.now() + Math.floor(Math.random() * 10000)
}

let date = new Date()


let realDate = new Date().toISOString()



function addTask() {
  let task = input.value;
  if (task.length === 0) {
    errorMessage.innerText = "Please enter task first";
  } else {
    arrayTask.push({ taskNO: uniqueNumber(), task, status: "Pending", date: realDate });
    let html = "";
    for (let i = 0; i < arrayTask.length; i++) {
      html =
        html +
        `<li>${arrayTask[i].task} </li>  <button onclick="handleMark(${i})"> Mark </button>   <button onclick="deleteTask(${i})"> delete </button> status : ${arrayTask[i].status} ${new Date(arrayTask[i].date).toLocaleDateString()}`;
    }
    displayTasks.innerHTML = html;

    localStorage.setItem('tasks', JSON.stringify(arrayTask))

    TotalTask.innerHTML = `Total Task = ${arrayTask.length}`
    CompletedTaskCount.innerHTML = `Total Completed Task = ${arrayTask.filter((t) => t.status === "Completed").length}`
    input.value = "";

  }
}

taskFilter.addEventListener('click', () => {
  console.log(taskFilter.value)
  if (taskFilter.value === 'All') {
    RenderTask(arrayTask)
  } else if (taskFilter.value === "Completed") {
    RenderTask(arrayTask.filter((t) => t.status === "Completed"))
  } else if (taskFilter.value === "Incompleted") {
    RenderTask(arrayTask.filter((t) => t.status === "Pending"))
  }
})

DateFilter.addEventListener('click', () => {
  if (DateFilter.value === Newest) {
    arrayTask.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
  } else {
    arrayTask.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })
  }

})



input.addEventListener("input", () => {
  errorMessage.innerText = "";
});

function RenderTask(array) {
  let html = "";
  for (let i = 0; i < array.length; i++) {
    html =
      html +
      `<li>${array[i].task} </li>  <button onclick="handleMark(${i})"> Mark </button>   <button onclick="deleteTask(${i})"> delete </button> status : ${array[i].status} ${new Date(array[i].date).toLocaleDateString()}`;
  }
  displayTasks.innerHTML = html;
  TotalTask.innerHTML = `Total Task = ${arrayTask.length}`


  CompletedTaskCount.innerHTML = `Total Completed Task = ${arrayTask.filter((t) => t.status === "Completed").length}`
}

RenderTask(arrayTask)



addButton.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
