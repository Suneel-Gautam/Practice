console.log("We are running");

document.addEventListener("DOMContentLoaded", () => {
  const switchButton = document.getElementById("btn");
  const mainBody = document.getElementById("body");
  let currentMode = 1;

  switchButton.addEventListener("click", () => {
    if (currentMode == 1) {
      mainBody.className = "dark";
      currentMode = currentMode - 1;
      switchButton.innerText = "Switch to Light Theme";
    } else {
      mainBody.className = "light";
      currentMode = currentMode + 1;
      switchButton.innerText = "Switch to Dark Theme";
    }
  });
});
