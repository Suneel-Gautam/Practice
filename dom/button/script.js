
// const input = document.querySelector('input')

// input.addEventListener('input', function (event) {
//     if (event.data !== null) {
//         console.log(event.data)
//     }
// })


const title = document.querySelector('h1')
const select = document.querySelector('select')

select.addEventListener('change', function (event) {
    title.innerText = `${event.target.value} is Selected`

})