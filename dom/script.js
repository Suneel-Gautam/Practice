
const input = document.querySelector('input')

input.addEventListener('input', function (event) {
    if (event.data !== null) {
        console.log(event.data)
    }
})