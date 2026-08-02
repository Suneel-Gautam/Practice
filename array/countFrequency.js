// [1, 2, 1, 3, 2, 1]

function countFrequency(arr) {

    let newArr = [];
    let countArr = []
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    count++
                }
            }
            countArr.push([arr[i], count])
        }
    }
    for (let i = 0; i < countArr.length; i++) {
        console.log(`${countArr[i][0]} -> ${countArr[i][1]}`)
    }
}

countFrequency([1, 2, 1, 3, 2, 1, 4])