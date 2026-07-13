function isArmstrongNumber(n) {
    let checkingNumber = 0
    let num = n
    let forCount = n
    let count = 0
    while (forCount > 0) {
        count++
        forCount = Math.floor(forCount / 10)
    }

    while (n > 0) {
        checkingNumber = checkingNumber + (n % 10) ** count
        n = Math.floor(n / 10)
    }

    if (num === checkingNumber) {
        console.log(`${num} is ArmstrongNumber`)
    }
    else {
        console.log(`${num} isn't ArmstrongNumber`)
    }

}

isArmstrongNumber(153)