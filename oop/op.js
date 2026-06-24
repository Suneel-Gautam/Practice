function createUser(username, address, age) {
    this.username = username,
        this.address = address,
        this.age = age,

        this.Welcfunc = function () {
            return `${this.username} is welcomed`
        }

}

const user = new createUser('Ram', 'kathamandu', 10)
console.log(user.Welcfunc())
