// [1, 2, 3, 4, 5] we will be given different array from the input 
// our goal is to find if its sorted or not 

function isSorted(arr) {
    // here we will use the loop to run the array and we will keep i with 1 
    // because we will start loop with second number as i 
    for (let i = 1; i < arr.length; i++) {
        // and we will check first number to second number and if first number is 
        // bigger then it will return false
        if (arr[i - 1] > arr[i]) {
            return false
        }
    }
    // return true after all condition is true above
    return true
}
console.log(
    isSorted([1, 5, 3, 4, 5])
)