// [5, 8, 2, 9, 1]
// Our goal is to find the smallest number

function findSmallest(arr) {
    // we will declare the first Number as smallestNumber first so we can check this first number with other elements in array
    let smallestNumber = arr[0]
    // here just using loop to run through every element in array
    for (let i = 0; i < arr.length; i++) {
        // so here checking condition if smallestnumber find another smallestNumber than that then we will just update the smallestNumber
        if (smallestNumber > arr[i]) {
            smallestNumber = arr[i]
        }
    }
    console.log(smallestNumber)
}
findSmallest([5, 8, 2, 9, 1])