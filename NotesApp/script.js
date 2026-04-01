
let addNote = document.querySelector('#addnote')
let formContainer = document.querySelector("#form-container")
let container = document.querySelector('#container-id')
let closeform = document.querySelector('#closeForm')
let form = document.querySelector('form')


addNote.addEventListener('click', () => {
    formContainer.style.display = 'block'
    container.style.display = 'none'
})

const imageUrl = document.querySelector("#imageurl")
const fullName = document.querySelector('#fullname')
const homeTown = document.querySelector('#hometown')
const purpose = document.querySelector('#Purpose')
const radio = document.querySelectorAll('input[type="radio"]')
const errorMessage = document.querySelector("#error-message")
const inputBoxes = document.querySelectorAll('input[type="text"]')

function saveToLocalStorage(obj) {
    if (localStorage.getItem('data') === null) {
        let oldData = []
        oldData.push(obj)
        localStorage.setItem('data', JSON.stringify(oldData))
    } else {
        let oldData = JSON.parse(localStorage.getItem('data'))
        oldData.push(obj)
        localStorage.setItem('data', JSON.stringify(oldData))
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault()

    let imageData = imageUrl.value
    let fullnameData = fullName.value
    let homeTownData = homeTown.value
    let purposeData = purpose.value

    let selectedData = false
    radio.forEach(element => {
        if (element.checked) {
            selectedData = element.value
        }
    })
    if (imageData === '') {
        errorMessage.innerHTML = 'ImageUrl cannot be empty '
        return
    } else if (fullnameData === '') {
        errorMessage.innerHTML = 'Fullname cannot be empty '
        return
    } else if (homeTownData === '') {
        errorMessage.innerHTML = 'HomeTown cannot be empty '
        return
    } else if (purposeData === '') {
        errorMessage.innerHTML = 'Purpose cannot be empty '
        return
    } else if (!selectedData) {
        errorMessage.innerHTML = 'Please select Catagory '
        return
    }

    saveToLocalStorage(
        {
            imageData,
            fullnameData,
            homeTownData,
            purposeData,
            selectedData
        }
    )
    inputBoxes.forEach((e) => {
        e.value = ''
    })
    radio.forEach((e) => {
        e.value = ''
    })

    container.style.display = 'flex'
    formContainer.style.display = 'none'

    DisplayCard()


})


inputBoxes.forEach((element, index) => {
    element.addEventListener('input', () => {
        errorMessage.innerHTML = ""
    })
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            inputBoxes[index + 1].focus()
        }
    })
})
radio.forEach(element => {
    element.addEventListener('click', () => {
        errorMessage.innerHTML = ""

    })
})

const cards = document.querySelector('#cards')

function DisplayCard() {

    cards.innerHTML = ''

    let array = JSON.parse(localStorage.getItem('data'))
    console.log(array)

    array.forEach((_, index) => {


        let cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
        cards.append(cardDiv)

        let profileDiv = document.createElement('div')
        profileDiv.classList.add('profile')



        cardDiv.append(profileDiv)


        let avatarDiv = document.createElement('div')
        avatarDiv.classList.add('avatar')

        profileDiv.append(avatarDiv)
        let img = document.createElement('img')
        img.src = `${array[index].imageData}`
        avatarDiv.append(img)
        let h2 = document.createElement('h2')
        h2.innerHTML = `${array[index].fullnameData}`
        profileDiv.append(h2)
        let button = document.createElement('button')
        button.innerHTML = 'delete'
        button.classList.add('delete')
        profileDiv.append(button)

        let infoDiv = document.createElement('div')
        infoDiv.classList.add('info')
        cardDiv.append(infoDiv)

        let leftDiv = document.createElement('div')
        leftDiv.classList.add('left')
        infoDiv.append(leftDiv)

        let firstP = document.createElement('p')
        firstP.innerHTML = 'Home town'
        leftDiv.append(firstP)

        let secondP = document.createElement('p')
        secondP.innerHTML = 'Bookings'
        leftDiv.append(secondP)

        let rightDiv = document.createElement('div')
        rightDiv.classList.add('right')
        infoDiv.append(rightDiv)

        let p1 = document.createElement('p')
        p1.innerHTML = `${array[index].homeTownData}`
        rightDiv.append(p1)
        let p2 = document.createElement('p')
        p2.innerHTML = `${array[index].selectedData}`
        rightDiv.append(p2)

        let span = document.createElement('span')
        span.innerText = `${array[index].purposeData}`
        cardDiv.append(span)


        button.addEventListener('click', () => {
            let array = JSON.parse(localStorage.getItem('data'))

            array.splice(index, 1)
            localStorage.setItem('data', JSON.stringify(array))
            DisplayCard()


        })
    })
}

DisplayCard()




closeform.addEventListener('click', () => {
    formContainer.style.display = 'none'
    container.style.display = 'flex'
})



