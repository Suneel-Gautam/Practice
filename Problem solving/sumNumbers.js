function sumNumbers(n) {
    let count = 0

    for (let i = 1; i <= n; i++) {
        count = count + i
    }
    console.log(count)
}

sumNumbers(5)