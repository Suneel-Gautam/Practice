/// we will be getting the array array from the user 
// our goal is to keep the zero of the array at the end of the array 
/// without making the new array 
/// [1, 0, 2, 0, 3, 4]

function moveZeros(arr) {
    let writeIndex = 0
    // count the number of zeros in the array and then we will push the zeros at the end of the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[writeIndex] = arr[i]
            writeIndex++
        }
    }
    for (let j = writeIndex; j < arr.length; j++) {
        arr[writeIndex] = 0
        writeIndex++

    }
    console.log(arr)
}

moveZeros([0, 1, 0, 2, 3])
