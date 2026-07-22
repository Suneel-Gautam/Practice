// [1, 2, 3, 2, 4, 1] 
// we are going to get the array from the users.
// here we are going to check total duplicate which is repeated twice or more 
// we wont check if its recurring

function countDuplicates(arr) {

    // so first we will set the count to zero 
    let count = 0
    // we will also clear this repeated array to store the number that is repeated
    const repeated = []

    //we will use first loop to run the array until the second last item 
    // because we need to check until the last element only 
    for (let i = 0; i < arr.length - 1; i++) {
        // second loop will be run start from i + 1 because 
        // the checking should be  done after i which means we will skip the repeated part 
        // until this we had done in our last question where i explained well 
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {

                // here some something different 
                // here we check if the number is already pushed into array or not 
                // because our requirements to check only how many number are repeated not how many times 
                /// so onces it is check it count add the count again 
                if (!repeated.includes(arr[i])) {
                    // here if not on the array we wil push the number into the array 
                    repeated.push(arr[i])
                    // and increase the count 
                    count += 1
                }

            }
        }
    }
    console.log(count)

}

countDuplicates([1, 2, 3, 2, 4, 1])