function patternPrinting(n) {
    for (let i = 0; i < n; i++) {
        let innerText = "*"
        for (let j = 0; j < i; j++) {
            innerText = innerText + "*"
        }
        console.log(innerText)
    }
    for (let i = 0; i < n; i++) {
        let innerText = "*"
        for (let j = n - 2; j > i; j--) {
            innerText = innerText + "*"
        }
        console.log(innerText)
    }
}
patternPrinting(5)

