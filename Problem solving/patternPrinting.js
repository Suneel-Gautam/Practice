function patternPrinting(n) {
    for (let i = 0; i < n; i++) {
        let num = "*"
        for (let j = 0; j < i; j++) {
            num = num + "*"
        }
        console.log(num)
    }
}

patternPrinting(5) 