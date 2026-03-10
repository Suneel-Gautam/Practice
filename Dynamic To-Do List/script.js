console.log("we are running");

const input = document.getElementById("input");
const addButton = document.getElementById("submitButton");
let displayTasks = document.getElementById("task");
const errorMessage = document.getElementById("error-id");

let arrayTask = [];
function handleMark(index) {
  arrayTask[index].status = "Completed";
  RenderTask();
}

function deleteTask(index) {
  arrayTask = arrayTask.filter((item) => item !== arrayTask[index]);
  RenderTask();
}

function addTask() {
  let task = input.value;

  if (task.length === 0) {
    errorMessage.innerText = "Please enter task first";
  } else {
    arrayTask.push({ task, status: "Pending" });
    let html = "";
    for (let i = 0; i < arrayTask.length; i++) {
      html =
        html +
        `<li>${arrayTask[i].task} </li>  <button onclick="handleMark(${i})"> Mark </button>   <button onclick="deleteTask(${i})"> delete </button> status : ${arrayTask[i].status} `;
    }
    displayTasks.innerHTML = html;

    input.value = "";
  }
}

input.addEventListener("input", () => {
  errorMessage.innerText = "";
});

function RenderTask() {
  let html = "";
  for (let i = 0; i < arrayTask.length; i++) {
    html =
      html +
      `<li>${arrayTask[i].task} </li>  <button onclick="handleMark(${i})"> Mark </button>   <button onclick="deleteTask(${i})"> delete </button> status : ${arrayTask[i].status} `;
  }
  displayTasks.innerHTML = html;
}

addButton.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
