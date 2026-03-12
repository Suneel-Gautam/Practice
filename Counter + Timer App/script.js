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

let hour = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let interval = null;

function startStopwatch() {
  miliseconds += 10;

  if (miliseconds >= 1000) {
    miliseconds = 0;
    seconds++;
  }

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes >= 60) {
    minutes = 0;
    hour++;
  }

  stopWatch.innerHTML = `${hour.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}:${miliseconds}`;
}

startBtn.addEventListener("click", () => {
  if (interval) return;
  interval = setInterval(startStopwatch, 10);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  hour = 0;
  minutes = 0;
  seconds = 0;
  miliseconds = 0;
  stopWatch.innerHTML = "00:00:00.000";
});
