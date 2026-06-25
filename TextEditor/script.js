const textArea = document.querySelector('#textArea')

const boldButton = document.querySelector('#bold')
const italicButton = document.querySelector('#italic')
const UnderlineButton = document.querySelector('#Underline')

let boldClicked = false
let italicClicked = false
let underline = false
boldButton.addEventListener('click', () => {
    if (!boldClicked) {
        textArea.style.fontWeight = 'bold'
        boldClicked = true
    } else {
        textArea.style.fontWeight = 'normal'
        boldClicked = false
    }
    console.log(boldClicked)
})
italicButton.addEventListener('click', () => {
    if (italicClicked) {
        textArea.style.fontStyle = 'normal'
        italicClicked = false
    } else {
        textArea.style.fontStyle = 'italic'
        italicClicked = true
    }
})
UnderlineButton.addEventListener('click', () => {
    if (underline) {
        textArea.style.textDecoration = 'none'
        underline = false
    } else {
        textArea.style.textDecoration = 'underline'
        underline = true
    }
})

const options = document.querySelector('#options')

let optionList = [{ name: "Header 1", css: "header1" }, { name: 'Header 2', css: 'header2' }, { name: 'Normal', css: 'normal' }]

optionList.map((item) => {
    const option = document.createElement('option')
   
    option.innerHTML = item.name
    option.classList.add(item.css)
    options.append(option)

    item.addEventListener('onchange', () => {
        textArea.classList.add(item.css)

    })





})












