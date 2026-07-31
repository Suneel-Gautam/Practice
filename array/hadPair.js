// hasPair([2, 7, 11, 15], 9)
// our goal is to find if any two pair sum to the result 
// find we should return true otherwise false


function hasPair(arr, result) {

    /// using the first loop until the arr.length - 1 to run the loop until the second number
    for (let i = 0; i < arr.length - 1; i++) {
        // we will use the second loop as well because we need to check 
        // all the element of the array to each other for example 
        // 4 should be checked with 3 , 10 , 6 and so on thats why
        for (let j = i + 1; j < arr.length; j++) {
            // now we will check if sum == result then we will return true
            if (arr[i] + arr[j] === result) {
                return true
            }
        }
    }
    // otherwise just false if we didnt found our match 
    return false
}
console.log(
    hasPair([4, 3, 10, 6], 9)
)