// [1, 2, 3, 4, 5] so our goal is to 
// [5,1,2,3,4]

function bossChallange(arr) {

    /// we will save temp as first number
    let temp = arr[0];
    // then we we will store last element in first 
    arr[0] = arr[arr.length - 1]
    // we will run the loop in the array from second nunber
    for (let i = 1; i < arr.length; i++) {
        // now we will store anotherTemp and store ith element which is second element in first 
        let anotherTemp = arr[i]
        // then we will replace ith element with temp whhich means the first 
        // number will be second number now
        arr[i] = temp
        // now temp will replace with anotherTemp which means we saved as second Number
        temp = anotherTemp
    }
    console.log(arr)
}

bossChallange([1, 2, 3, 4, 5])