// const person = {
// 	fullName: "Sayeed Mahdi",
// 	lastName: "Mousavi",
// 	getFullName: function () {
// 		console.log(`${this.fullName} ${this.lastName} welcome to your website`)
// 	},
// }

// const john = {
// 	fullName: "John",
// 	lastName: "dou",
// }

// john.__proto__ = person

// console.log(john.getFullName())

function Person(fullName, lastName) {
	this.fullName = fullName
	this.lastName = lastName
}

Person.prototype.getFullName = function () {
	return this.fullName + " " + this.lastName
}

const john = new Person("Mahdi", "John")
console.log(john.getFullName())
