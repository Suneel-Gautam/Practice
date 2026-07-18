// [5, 8, 2, 9, 1]
// our goal is to find the largest number of the array

function findLargest(arr) {

    // we defining the heightNumber as first element so we can handle negative as well
    let heightNumber = arr[0]
    // here we are running the loop till length of the array why?
    // becasue we can check every element of the array 
    for (let i = 0; i < arr.length; i++) {

        // we are checking heightNumber with each element of array 
        // and if current element in which index the loop is ruuning if that is bigger than heightNumber 
        // it will update the current number as heightNumber as height number which we saved is smaller means
        // there is another heightNumber and it just update the heightNumber

        if (heightNumber < arr[i]) {
            heightNumber = arr[i]
        }


    }
    console.log(heightNumber)
}

findLargest([-5, -8, -2, -9, -5])