console.log("Task 1 is running");

document.addEventListener("DOMContentLoaded", () => {
  const buttonInc = document.getElementById("buttonInc");
  const buttonDes = document.getElementById("buttonDes");
  let number = document.getElementById("addNumber");
  let count = 0;

  buttonInc.addEventListener("click", () => {
    count = count + 1;
    number.innerHTML = count;
  });

  buttonDes.addEventListener("click", () => {
    if (count > 0) {
      count = count - 1;
      number.innerHTML = count;
    }
  });
});
