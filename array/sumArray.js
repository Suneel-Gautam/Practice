// [5, 8, 2, 9, 1]
// our goal is to print the sum of this array sooo

function sumArray(arr) {
    // here we first define the count as zero
    let count = 0
    // running the loop as per the length of the arr 
    for (let i = 0; i < arr.length; i++) {
        /// adding the array each index number in every loop until it complete the array thats how every number will be added from the array
        count = count + arr[i]
    }
    // printing the count
    console.log(count)
}
sumArray([5, 8, 2, 9, 1])