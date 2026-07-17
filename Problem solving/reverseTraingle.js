//  *****  no space five star
//   ****   one space four star
//    ***   two space three star
//     **   three space two star
//      *   four space one star
// this is the pattern we gotta print 

function reverseTraingle(n) {

    // outterLoop to print the total row
    for (let i = 0; i < n; i++) {
        // we will keep this one default 
        let innerText = "*"
        // for space which will increase the space one space until it reach 4 space as per n 
        for (let j = 0; j < i; j++) {
            innerText = " " + innerText
        }
        // for stars we will add n start in our case right now it is 5 and decrease the star in each loop
        for (let k = n - 1; k > i; k--) {
            innerText = innerText + "*"
        }
        console.log(innerText)

        // print the pattern inside outerloop
    }

}

reverseTraingle(5)