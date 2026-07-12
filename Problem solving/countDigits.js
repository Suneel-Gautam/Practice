function countDigits(n) {
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10)
        count = count + 1
    }
    console.log("Total Count", count)

}

countDigits(12123123123)