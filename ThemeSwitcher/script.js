console.log("we are running");

const changeButton = document.getElementById("change-theme");
const mainBody = document.getElementById("main-container");
let isLight = true;

const inputBox = document.getElementById("input-box");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phonenumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const submitBtn = document.getElementById("submit-btn");
const inputs = Array.from(document.querySelectorAll(".form-boxes input"));

console.log(inputs);

changeButton.addEventListener("click", () => {
  if (isLight) {
    mainBody.classList.add("dark");
    mainBody.classList.remove("light");
    isLight = false;
  } else {
    mainBody.classList.add("light");
    mainBody.classList.remove("dark");
    isLight = true;
  }
});

function showError(input, message) {
  let error = input.nextElementSibling;

  if (!error || !error.classList.contains("error")) {
    error = document.createElement("span");
    error.classList.add("error");
    input.after(error);
  }
  error.innerText = message;
}

function formValidation(input) {
  if (input.value.trim() === "") {
    showError(input, "cant be the empty feild");
    return false;
  } else {
    showError(input, "");
    return true;
  }
}

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const valid = formValidation(input);

      if (valid) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    }
  });
  input.addEventListener("input", () => {
    showError(input, "");
  });
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let allValid = true;
  inputs.forEach((input) => {
    if (!formValidation(input)) {
      allValid = false;
    }
  });

  if (allValid) {
    alert("form submitted");
  }
});
