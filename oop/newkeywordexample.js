function createUser(username, age, isEmployed) {
    this.username = username,
        this.age = age,
        this.isEmployed = isEmployed,

        this.checkEmployment = function () {

            if (this.isEmployed) {
                return `${this.username} have job.`
            } else {
                return `${this.username} doesnt have job. `
            }
        }

    return this

}


createUser.prototype.welcomeUser = function () {
    return `Heyy!!! ${this.username} welcome to our server`
}




const user1 = new createUser('Ram', 20, false)

console.log(user1.welcomeUser())
