// [5, 8, 2, 9, 1]
// Our goal is to find the third largest number from the array


function thirdLargest(arr) {

    let height = arr[0]
    let secondHeight = -Infinity;
    let thirdHeight = -Infinity;
    for (let i = 1; i < arr.length; i++) {

        if (height === arr[i] || secondHeight === arr[i] || thirdHeight === arr[i]) continue
        if (height < arr[i]) {
            thirdHeight = secondHeight
            secondHeight = height
            height = arr[i]
        } else if (secondHeight < arr[i]) {
            thirdHeight = secondHeight
            secondHeight = arr[i]
        } else if (thirdHeight < arr[i]) {
            thirdHeight = arr[i]
        }

    }
    console.log(thirdHeight)


}

thirdLargest([1, 2, 3, 4, 5])