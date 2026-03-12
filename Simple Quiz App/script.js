console.log("we are running");

const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Transfer Machine Language",
      "Hyper Tool Multi Language",
      "Hyper Text Machine Logic",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Python", "SQL"],
    answer: "CSS",
  },
  {
    question: "Which JavaScript method is used to select an element by its ID?",
    options: [
      "querySelectorAll",
      "getElementById",
      "getElementsByClassName",
      "selectElement",
    ],
    answer: "getElementById",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape",
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!-- -->", "//", "##", "**"],
    answer: "//",
  },
];

const questionDisplay = document.getElementById("questions");
const options = document.getElementById("options");
const result = document.getElementById("result");
const nextButton = document.getElementById("nextButton");
const countDisplay = document.getElementById("total-correct");
const totalDisplay = document.getElementById("questionNo");

let index = 0;
let isCorrect;
let correctAnswer = 0;
let answered = false;
function checkCorrectAnswer(e) {
  if (answered) {
    return;
  }
  answered = true;
  let answer = e.currentTarget.innerText;
  if (quizQuestions[index].answer === answer) {
    isCorrect = true;
  } else {
    isCorrect = false;
  }
  if (isCorrect) {
    correctAnswer = correctAnswer + 1;
    countDisplay.innerText = `Score : ${correctAnswer} out of ${index + 1}`;
    result.innerText = "Correct Answer";
  } else {
    result.innerHTML = `Incorrect Answer`;
    countDisplay.innerText = `Score : ${correctAnswer} out of ${index + 1}`;
    answered = false;
  }
}

nextButton.addEventListener("click", () => {
  result.innerHTML = ``;
  index += 1;
  if (quizQuestions.length > index) {
    answered = false;
    loadQuestion();
  } else {
    result.innerText = `Quiz finished , you scored ${correctAnswer}`;
    answered = true;
  }
});

function loadQuestion() {
  questionDisplay.innerHTML = `${quizQuestions[index].question}`;
  let option = quizQuestions[index].options;

  let hmtl = "";

  for (let i = 0; i < option.length; i++) {
    hmtl += `<li onclick='checkCorrectAnswer(event)'>${option[i]}</li>`;
  }

  options.innerHTML = hmtl;
}
loadQuestion();
