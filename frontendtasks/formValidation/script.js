console.log("we are running");

const submitButton = document.getElementById("submitBtn");
const username = document.getElementById("username");
const message = document.getElementById("message");

// submitButton.addEventListener("click", () => {

username.addEventListener("input", () => {
  const isValid = username.value.length >= 5;

  if (isValid) {
    message.classList.add("success");
    message.classList.remove("neutral");
    message.classList.remove("error");
    username.classList.add("usernameSuccess");
    username.classList.remove("usernameError");
    message.innerHTML = "Username is Valid";
  } else {
    message.classList.add("error");
    message.classList.remove("neutral");
    message.classList.remove("success");
    username.classList.add("usernameError");
    username.classList.remove("usernameSuccess");
    message.innerHTML = "Username is Less than 5";
  }
});
