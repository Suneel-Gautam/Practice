function patternReversePrinting(n) {

    for (let i = 0; i < n; i++) {
        let num = "*"
        for (let j = n - 1; j > i; j--) {
            num = num + "*"
        }
        console.log(num)
    }

}

patternReversePrinting(5)