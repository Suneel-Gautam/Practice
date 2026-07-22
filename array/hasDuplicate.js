// [1, 2, 3, 2] we will take the array from the user and
// we need to check the if it have duplicate in the array


function hasDuplicate(arr) {
    // in this question we need to use two loops 
    // becasue we need to check the number like we need to check in this way
    /// first to rest of other number second number to rest of other number and continous 
    /// thats why we use both loop 
    /// so first loop we start from zero until the length of the array
    for (let i = 0; i < arr.length; i++) {
        /// second loop we start with the one number greater than i because
        // we need to skip the numbers that are check already so used i + 1
        // suppose i is zero then j will be 1 so like what will happen is 
        // i will be fist number and j will be second number and j start with second number so it doesnt 
        // check like firt number to firt number which will automatic shows true 

        for (let j = i + 1; j < arr.length; j++) {
            /// here we check if it matches then we just return true 
            if (arr[i] === arr[j]) {
                return true
            }
        }
    }
    // if nothing matches return false
    return false

}

console.log(hasDuplicate([1, 2, 3, 4, 2]))