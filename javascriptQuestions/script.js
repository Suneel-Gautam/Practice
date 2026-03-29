console.log("we are running")


let dropdown = [
    {
        title: "Home"
    },
    {
        title: "Contact"
    },
    {
        title: "DropDown Menu",
        dropdown: [
            "Section 1",
            "Section 2",
            "Section 3"
        ]
    }
]

const navbar = document.querySelector('ul')
let html = ``

dropdown.forEach((item) => {
    const li = document.createElement('li')
    li.innerHTML = `${item.title}`
    navbar.append(li)
    html += `<li>${item.title}</li>`
    if (item.dropdown) {
        let dropdownDiv = document.createElement('div')
        dropdownDiv.classList.add('dropDownSection')
        dropdownDiv.style.display = 'none'

        item.dropdown.forEach(element => {
            let divAnother = document.createElement('div')
            dropdownDiv.appendChild(divAnother)
            divAnother.innerHTML = `${element}`
        })
        li.append(dropdownDiv)
        li.addEventListener('mouseenter', function () {
            dropdownDiv.style.display = 'block'
        })

        li.addEventListener('mouseleave', function () {
            dropdownDiv.style.display = ' none'
        })


    }
})



const mainContainer = document.querySelector('#main-container')
const subContainer = document.querySelector('#sub-Section')


let isClicked = false
mainContainer.addEventListener('click', function () {
    if (!isClicked) {
        subContainer.classList.remove('hide')
        isClicked = true
    } else {
        subContainer.classList.add('hide')
        isClicked = false

    }

})


let data = [
    {
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwc2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Ram Hari Krishna"
    },
    {
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwc2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Sunil Gautam"
    },
    {
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwc2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Balen Sarkar"
    },
    {
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwc2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Mahesh Chor Basnet "
    }
]



const cardContainer = document.querySelector('#card-container')

function dispalyUser(arr) {
    let htmlData = ``

    if (arr.length === 0) {
        htmlData = `<div>No such data found </div>`
    }

    arr.forEach(element => {
        htmlData += `
     <div class="card">
        <img
          src="${element.image}"
          alt=""
        />
        <div>
          <p>${element.title}</p>
        </div>
      </div>
      `
    })
    cardContainer.innerHTML = htmlData
}

dispalyUser(data)

let search = document.querySelector('#search')

search.addEventListener('input', () => {

    let newUSers = data.filter((element) => {
        return element.title.includes(search.value)
    })

    cardContainer.innerHTML = ""

    dispalyUser(newUSers)
})


