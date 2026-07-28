// [1, 2, 3, 4, 5] so what we need to reverse the array without making the new array

function reverseArray(arr) {
    // we will start writeIndex with zero why we need this ?
    // because we want to replace array so we will write our array with this index
    let writeIndex = 0
    // here we store the starting number in tempNumbers to store them for examaple
    // we will overwrite the last letter with first so where does that first go 
    // we will store here in temp
    let tempNumber = 0
    // so we defining this to run the loop half to the size of the array because 
    // reverse process will complete in until we come to half of array
    let loopRun = Math.floor(arr.length / 2)
    // we ware running the array start from the last index of the array 
    // until it come to the mid of the array and loop will end
    for (let i = arr.length - 1; i >= loopRun; i--) {
        // saving the number that will be replaced in temp
        tempNumber = arr[writeIndex]
        // we will replace from last index elemet
        arr[writeIndex] = arr[i]
        // and last element wil be updated as first 
        arr[i] = tempNumber
        // increase the writeIndex to move forward
        writeIndex++
    }
    console.log(arr)
}


reverseArray([1, 2, 3, 4])