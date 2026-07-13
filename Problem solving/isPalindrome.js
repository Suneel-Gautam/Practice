function isPalindrome(n) {
    let checkingNumber = 0
    let num = n

    while (n > 0) {
        checkingNumber = (checkingNumber * 10) + (n % 10)
        n = Math.floor(n / 10)
    }

    if (checkingNumber === num) {
        console.log(`${num} is palindrome`)
    } else {
        console.log(`${num} isn't palindrome`)

    }
}
isPalindrome(121)