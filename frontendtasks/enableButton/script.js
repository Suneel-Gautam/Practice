console.log("we are running")

const username = document.getElementById('username')
const submitButton = document.getElementById('submitBtn')


username.addEventListener('input', () => {
    isValid = username.value.length >= 5

    if(isValid){
        submitButton.disabled = false
    } else {
        submitButton.disabled = true

    }

})