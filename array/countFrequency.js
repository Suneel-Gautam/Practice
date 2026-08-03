// [1, 2, 1, 3, 2, 1] so our goal is to count the frequency of the number 
// expected output
// 1 -> 3 
// 2 -> 2
// 3 -> 1 

function countFrequency(arr) {

    // we define these two newarr to check one new how much repeated and countArr to count the number and its repeated 
    let countArr = [];
    // first loop used till arr.length 
    for (let i = 0; i < arr.length; i++) {
        // we set the count to 1 because if that number comes means it apear atleast onces soo
        let count = 1;
        let numberFound = false

        /// we dont run the inside loop if that loop is reapeated again later in that array 
        // as we already count it 
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                numberFound = true
                break;
            }
        }

        if (numberFound) {
            continue
        }

        // we push arr[i] to the loop so later that number cant be run later 
        // now second loop to check how many times it is repeated
        for (let j = i + 1; j < arr.length; j++) {
            // here it checks that repated and count adding
            if (arr[i] === arr[j]) {
                count++
            }
        }
        // here we push the number and how many times its repeated
        console.log(`${arr[i]} -> ${count} `)
    }

}

countFrequency([1, 2, 1, 3, 2, 1])