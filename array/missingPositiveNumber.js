// [1,2,4,5]
// our goal is to find the missing positive number from the array

function missingNumber(arr) {
    /// we are running the loop till the length of array
    for (let i = 0; i < arr.length - 1; i++) {
        /// here we just checking the condition to run the condition on postive numbers only
        if (arr[i] > 0) {
            // here if first number isnt 1 then we will return 1 because we need to return first postive number
            if (arr[0] !== 1) {
                return 1
            }
            // and if any number is missing like + 1 than previous number then that means okay one number is missing 
            // and we will return that missing number from here 
            if (arr[i] + 1 !== arr[i + 1]) {
                return arr[i] + 1
            }
        }
    }
}
console.log(
    missingNumber([1, 2, 3, 4, 5, 6, 8])
)
