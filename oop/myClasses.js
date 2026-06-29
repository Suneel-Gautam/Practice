class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Thank you for the Login ${this.username}`)
    }
    printName() {
        console.log(`your name is ${this.name}`)
    }
    static printID() {
        return `we are using this as static`
    }
}

class teacher extends User {
    constructor(username, password) {
        super(username)
        this.password = password
    }
    createCourse() {
        console.log(`${this.username} created the book`)
    }
}
const newTeacher = new teacher('Sunil', "1234")
console.log(newTeacher)
newTeacher.logMe()