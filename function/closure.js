function closureExample() {
    let a = 10
    function anotherFunction() {
        let c = a + 20
        return c
    }
    return anotherFunction
}

console.log(closureExample()())
