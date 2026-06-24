
Object.prototype.truelength = function () {
    return `${this.trim().length}`
}

const user = 'Sunil gautam      '

console.log(user.truelength())