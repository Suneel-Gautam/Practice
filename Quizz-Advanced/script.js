console.log("We are running");

let questionList = JSON.parse(localStorage.getItem('questions')) || [];

/// flow of the app 

let isStarted = localStorage.getItem('isStarted') === "true"
let isQuestion = localStorage.getItem('isQuestion') === 'true'


const addQuestionButton = document.getElementById('Add-Questions');
const startQuizzContainer = document.getElementById('Start-quizz');
const questionSectionContainer = document.getElementById("Question-Section");
const resultContainer = document.getElementById('Result-Section')
const questionContainer = document.getElementById('Question-Container')
const closeQuestionConatiner = document.getElementById('close-btn')


// add quizzz 


addQuestionButton.addEventListener('click', () => {
  questionContainer.classList.remove('hide')
  startQuizzContainer.classList.add('hide')
  localStorage.setItem('isQuestion', true)
})

/// starting quizz
const startQuizz = document.getElementById('start-quizz')

function starting() {
  isStarted = localStorage.getItem('isStarted') === "true"
  isQuestion = localStorage.getItem('isQuestion') === 'true'

  if (isStarted) {
    questionSectionContainer.classList.remove('hide')
    startQuizzContainer.classList.add('hide')
    addQuestionButton.classList.add('hide')
  } else if (isQuestion) {
    questionSectionContainer.classList.add('hide')
    startQuizzContainer.classList.add('hide')
    addQuestionButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    startQuizzContainer.classList.add('hide')
  } else {
    questionSectionContainer.classList.add('hide')
    startQuizzContainer.classList.remove('hide')
    addQuestionButton.classList.remove('hide')
  }
}

closeQuestionConatiner.addEventListener('click', () => {
  localStorage.setItem('isQuestion', false)
  startQuizzContainer.classList.remove('hide')
  addQuestionButton.classList.remove('hide')
  questionContainer.classList.add('hide')
  starting()
})


/// add questions starts here 
const question = document.getElementById('question')
const inputOptions = document.getElementById('OptionsList')
const optionsBoxList = document.getElementById('options-inputs')
const submitButton = document.getElementById('submit-button')
inputOptions.addEventListener("change", () => {
  let inputValue = Number(inputOptions.value)
  optionsBoxList.innerText = ""

  for (let i = 0; i < inputValue; i++) {
    let div = document.createElement('div')
    div.classList.add('option-box')
    div.innerHTML = `<label>Option ${i + 1} </label>
              <input type="text" placeholder='Enter option ${i + 1}'/>
              <div class="flex">
              <div class='text'> Correct Answer</div>
              <input type="radio" name="correctOption" />
              </div>
              `
    optionsBoxList.appendChild(div)
  }



})

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  let options = [];
  const optionsValue = document.querySelectorAll('#options-inputs input[type="text"]');
  const radioButtons = document.querySelectorAll('#options-inputs input[name="correctOption"]');

  // collect options
  optionsValue.forEach((opt) => {
    options.push(opt.value.trim());
  });

  // find correct answer index
  let correctIndex = -1;
  radioButtons.forEach((item, index) => {
    if (item.checked) {
      correctIndex = index;
    }
  });

  // ✅ validation
  if (question.value.trim() === "") {
    alert("Enter question");
    return;
  }

  if (options.includes("")) {
    alert("Fill all options");
    return;
  }

  if (correctIndex === -1) {
    alert("Select correct answer");
    return;
  }

  // ✅ push question
  questionList.push({
    question: question.value,
    options: options,
    correctAnswer: options[correctIndex]
  });

  // ✅ store properly
  localStorage.setItem('questions', JSON.stringify(questionList));

  alert('Sumitted Sucessfully')

  console.log("Saved:", questionList);
});





// start quizz start here 

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
const backButton = document.getElementById('Back-Buttton')

let index = 0;
let ans;



backButton.addEventListener('click', () => {
  localStorage.setItem('isStarted', false)
  starting()

})

function loadQuestion() {

  questionList = JSON.parse(localStorage.getItem('questions'))
  questionTitle.innerText = `${index + 1
    }. ${questionList[index].question} `
  let option = questionList[index].options;
  optionsListSection.innerHTML = "";
  option.forEach((element) => {
    optionsListSection.innerHTML += `<li class="default" > ${element}</li > `;
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


starting()
loadQuestion();



// add questions 



