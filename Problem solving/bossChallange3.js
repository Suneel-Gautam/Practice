// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// our goal is to print this pattern with one outter loop with 

function bossChallangeThree(n) {

    /// so we need to print it with one outterLoop so we will double our n 
    let loop = n + n - 1

    // using the outer loop to run it 10 th as per user provide 5 we need to run it double soo 
    for (let i = 0; i < loop; i++) {
        // we will try to do with empty innerText
        let innerText = ""
        // first pattern 
        /// here is the first pattern which we will until exact half to the outter loop exact 
        if (i < n) {
            for (let j = 0; j <= i; j++) {
                innerText = innerText + "*"
            }
        }
        // here we will make the innerText empty again and we will run it again now in reverse order 
        if (i >= n) {
            innerText = ""
            for (let k = loop; k > i; k--) {
                innerText = innerText + "*"
            }
        }
        console.log(innerText)
    }

}

bossChallangeThree(5)