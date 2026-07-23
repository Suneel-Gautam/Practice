// [5, 8, 2, 9, 1] So we will be getting the array from the user 
// and we need to find the second largest number from the array

function secondLargest(arr) {

    // lets define first number as largest number
    let larget = arr[0]
    // lets set secondLargest number as zero
    let secondLarge = -Infinity
    /// we will use one loop only which we will start with one until the array length
    // why using i = 1 ? becasue we will be checking from second number as we define first number as largest number already
    for (let i = 1; i < arr.length; i++) {

        // first condition if array have first element isnt largest than second
        if (larget < arr[i]) {
            // we will just check if largest number is smaller than other number
            // we will update the first element as secondlargest number 
            secondLarge = larget
            // and that index element as largest 
            larget = arr[i]
        }
        // now second condition if first element is largest than second
        else if (secondLarge < arr[i] && arr[i] !== larget) {
            // first we will check secondlargest number should be smaller than other number that will come 
            // next if the correct is correct seconlargest largest number will arr[i] like current index 
            // to update the second largest number
            secondLarge = arr[i]
        }
    }
    /// if secondlarge number stay zero then it means there isnt second height number in the array thats why
    // we check this
    if (secondLarge === -Infinity) {
        console.log("No second Height Number found")
    } else {
        console.log(secondLarge)

    }
}

// secondLargest([5, 8, 2, 9, 1])
secondLargest([10, 5, 2, 7])
// secondLargest([7, 7, 7])


