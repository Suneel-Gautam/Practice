function sumDigits(n) {
    let sum = 0;

    while (n > 0) {
        let remainder = n % 10
        n = Math.floor(n / 10)
        sum = sum + remainder
    }

    console.log(`Sum of the digits : ${sum}`)
}


sumDigits(12)