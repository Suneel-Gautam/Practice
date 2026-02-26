console.log("We are running");

const startButton = document.getElementById("start-quizz");
const startQuizz = document.getElementById("start-screen");
const questionContainer = document.getElementById("Quizz-Container");
const resultContainer = document.getElementById("Quizz-result");

startButton.addEventListener("click", () => {
  startQuizz.classList.replace("show", "hide");
  questionContainer.classList.replace("hide", "show");
});

const questionList = [
  {
    id: 1,
    question: "What is the capital city of Nepal?",
    options: ["Pokhara", "Lalitpur", "Kathmandu", "Biratnagar"],
    answer: "Kathmandu",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    id: 3,
    question: "Who wrote the play Romeo and Juliet?",
    options: [
      "Charles Dickens",
      "William Wordsworth",
      "William Shakespeare",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    id: 4,
    question: "Which is the largest ocean in the world?",
    options: [
      "Indian Ocean",
      "Arctic Ocean",
      "Atlantic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    id: 5,
    question: "Which country is home to Mount Everest?",
    options: ["India", "Nepal", "China", "Bhutan"],
    answer: "Nepal",
  },
];

const question = document.getElementById("question");
const nextQuestion = document.getElementById("nextButton");
const options = document.getElementById("optionBox");

let index = 0;
let firstQuestion = questionList[index].question;
let optionsList = questionList[index].options;
let correctAnswer = questionList[index].answer;

question.innerHTML = firstQuestion;

for (let i = 0; i < optionsList.length; i++) {
  const option = document.createElement("span");
  option.classList.add("option");
  option.innerHTML = optionsList[i];
  options.appendChild(option);

  option.classList.remove("optionIncorrect");
  option.classList.remove("optionCorrect");

  option.addEventListener("click", () => {
    if (optionsList[i] === correctAnswer) {
      option.classList.add("optionCorrect");
      option.classList.remove("option");
    } else {
      option.classList.add("optionIncorrect");
      option.classList.remove("option");
    }
  });
}
