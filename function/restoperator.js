// function get(...val) {
//     console.log(val)

// }

// get(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


function getScore(...scores){
    let total = 0;
    for(let i = 0; i < scores.length;i++){
        total = total + scores[i]
    }
    return total
}

let total = getScore(40,50)
console.log(total)