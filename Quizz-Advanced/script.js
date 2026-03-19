console.log("We are running");

const questionList = [
  {
    question: "What is the capital of Nepal?",
    options: ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar"],
    answer: "Kathmandu",
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    options: [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Subhas Chandra Bose",
      "B. R. Ambedkar",
    ],
    answer: "Mahatma Gandhi",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Won", "Dollar", "Yen", "Euro"],
    answer: "Yen",
  },
  {
    question: "Which is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Who was the first President of the United States?",
    options: [
      "Abraham Lincoln",
      "George Washington",
      "Thomas Jefferson",
      "John Adams",
    ],
    answer: "George Washington",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "South Korea"],
    answer: "Japan",
  },
  {
    question: "What is the smallest continent?",
    options: ["Europe", "Australia", "Antarctica", "South America"],
    answer: "Australia",
  },
  {
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Nile", "Ganges", "Yangtze"],
    answer: "Nile",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Iron"],
    answer: "Oxygen",
  },
  {
    question: "Who discovered gravity?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    answer: "Isaac Newton",
  },
  {
    question: "Which is the largest desert in the world?",
    options: [
      "Sahara Desert",
      "Gobi Desert",
      "Arctic Desert",
      "Antarctic Desert",
    ],
    answer: "Antarctic Desert",
  },
];

const startSection = document.getElementById("Start-quizz");
const questionSection = document.getElementById("Question-Section");
const resultSection = document.getElementById("Result-Section");
const questionTitle = document.getElementById("Question-title");
const optionsListSection = document.getElementById("option-list");
const nextbutton = document.getElementById("next-btn");

let index = 0;

function loadQuestion() {
  questionTitle.innerText = questionList[index].question;

  let option = questionList[index].options;

  optionsListSection.innerHTML = "";

  option.forEach((element) => {
    optionsListSection.innerHTML += `<li class="default">${element}</li>`;
  });
}

loadQuestion();
