console.log("this task is running!!!");

document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("loginBtn");
  let errorMessage = document.getElementById("errorMessage");
  let count = 3;

  btn.addEventListener("click", () => {
    if (count > 1) {
      count = count - 1;
      errorMessage.innerHTML = `Attempt left ${count}`;
    } else {
      errorMessage.innerHTML = `Account Locked`;
      btn.disabled = true;
    }
  });
});
