// We will first run the outer loop to run the loop n times lets suppose 
// user give 5 so outter loop will be run 5 times 
// inner first loop is written for spaces we need so we will decrease the space like from 4 space to one less less 
// accordingly
// inner second loop is written for adding adding the * in each row 


function trainglePrint(n) {

    for (let i = 1; i <= n; i++) {
        let innerText = "*"
        for (let j = n; j > i; j--) {
            innerText = " " + innerText
        }
        for (let j = 1; j < i; j++) {
            innerText = innerText + "*"
        }
        console.log(innerText)
    }
}
trainglePrint(5)


/// 5 outer loop
// 4,3,2,1  = 10
// 1,2,3,4 = 10
// 25 times 
