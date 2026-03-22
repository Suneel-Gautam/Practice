console.log("We are running");

const questionList = [
  {
    question: "What is the capital of Nepal?",
    options: ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar"],
    answer: "Kathmandu",
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
  {
    question: "Which is the largest desert in the world?",
    options: [
      "Sahara Desert",
      "Gobi Desert",
      "Arctic Desert",
      "Antarctic Desert",
    ],
    answer: "Antarctic Desert",
  }
];

/// flow of the app 

let isStarted = localStorage.getItem('isStarted') === "true"
console.log(isStarted)


const addQuestionButton = document.getElementById('Add-Questions');


const startQuizzContainer = document.getElementById('Start-quizz');
const questionSectionContainer = document.getElementById("Question-Section");
const resultContainer = document.getElementById('Result-Section')
const questionContainer = document.getElementById('Question-Container')


// add quizzz 

addQuestionButton.addEventListener('click', () => {
  questionContainer.classList.remove('hide')
  startQuizzContainer.classList.add('hide')
})





/// starting quizz
const startQuizz = document.getElementById('start-quizz')

if (isStarted) {
  questionSectionContainer.classList.remove('hide')
  startQuizzContainer.classList.add('hide')
  addQuestionButton.classList.add('hide')
}


startQuizz.addEventListener('click', () => {
  localStorage.setItem('isStarted', true)

  questionSectionContainer.classList.remove('hide')
  startQuizzContainer.classList.add('hide')
  addQuestionButton.classList.add('hide')


})


/// load questions 
const startSection = document.getElementById("Start-quizz");
const resultSection = document.getElementById("Result-Section");
const questionTitle = document.getElementById("Question-title");
const optionsListSection = document.getElementById("option-list");
const nextbutton = document.getElementById("next-btn");

let index = 0;
let ans;

function loadQuestion() {
  questionTitle.innerText = `${index + 1}. ${questionList[index].question}`

  let option = questionList[index].options;

  optionsListSection.innerHTML = "";

  option.forEach((element) => {
    optionsListSection.innerHTML += `<li class="default">${element}</li>`;
  });

  const optionList = document.querySelectorAll('#option-list li')

  optionList.forEach((opt) => {
    opt.addEventListener('click', () => {

      optionList.forEach((opt) => {
        opt.classList.remove('clicked')
        opt.classList.add('default')
      })

      ans = opt.innerHTML
      opt.classList.add('clicked')
      opt.classList.remove('default')
    })
  })
}

function checkAnswer(SelectedAnswer) {
  let correctAnswer = questionList[index].answer

  if (correctAnswer === SelectedAnswer) {

  }

}

nextbutton.addEventListener('click', () => {
  if (index < questionList.length - 1) {
    index++
    loadQuestion();
    if (index === questionList.length - 1) {
      nextbutton.innerText = "Submit"
    }
  } else {
    questionSectionContainer.classList.add("hide")
    resultContainer.classList.remove('hide')
    localStorage.setItem('isStarted', false)


  }


})

loadQuestion();



// add questions 



