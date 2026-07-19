// [5, 8, 2, 9, 1, 6, 10]
// here we need to count the even number count of the array

function countEven(arr) {
    // we are defining count to zero first will increase when we found even number
    let count = 0
    // running the loop 
    for (let i = 0; i < arr.length; i++) {
        /// we will check array each number and if its divisble by 2 and get 0 reminder then its even number and we will add count everytime 
        // number is the if statement is correct
        if (arr[i] % 2 == 0) {
            count += 1
        }
    }
    console.log(count)
}
countEven([5, 8, 2, 9, 1, 6, 10])
