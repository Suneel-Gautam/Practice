function count() {
    let count = 0

    return function () {
        count++
        console.log(count)
    }
}

let cnt = count()

cnt()
cnt()
cnt()
cnt()
cnt()
cnt()
cnt()
cnt()
cnt()
cnt()

let count1 = count()

count1()
count1()
count1()
count1()