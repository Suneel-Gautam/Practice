console.log("we are running");

const counter = document.getElementById("Counter");
const time = document.getElementById("time");

function updateTime() {
  const date = new Date();

  let Hr = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  const period = Hr >= 12 ? "pm" : "am";
  Hr = Hr % 12;
  if (Hr === 0) Hr = 12;

  time.innerHTML = `${Hr} : ${min} : ${sec} ${period}`;
}

setInterval(updateTime, 1000);

updateTime();

const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const stopWatch = document.getElementById("Stop-Watch");

let hour = 0
let minutes = 0 
let seconds = 0 
let miliseconds = 0 

function startStopwatch() {
    startBtn.addEventListener('click' , () =>{
        
    })


}
