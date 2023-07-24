// Program 1
// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(amol)
// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(chinmay)

// Program 2
// function Person(fn,ln){
//     this.firstName = fn
//     this.lastName = ln
//     this.display = function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol2 = new Person("amol","rao")
// let chinmay2 = new Person("chinmay","de")
// amol2.display() 

// console.log(amol2)
// console.log(chinmay2)

// amol2.display()
// chinmay2.display()

// program 3

function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
}

let amol2 = new Person("amol","rao")
let chinmay2 = new Person("chinmay","de")

// every object has one __proto__ == Parent.prototype

console.log(amol2.__proto__ === Person.prototype)
console.log(chinmay2.__proto__ === Person.prototype)

Person.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}

Person.prototype.country = "india" 

console.log(amol2)
console.log(chinmay2)

amol2.display()
chinmay2.display()

console.log(amol2.country)
console.log(chinmay2.country)

console.log(amol2 instanceof Person)
console.log(chinmay2 instanceof Person)

console.log(amol2.hasOwnProperty("firstName"))
console.log(amol2.hasOwnProperty('country'))

// Program 4

class PersonB {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }

    display(){
        console.log(this.firstName + this.lastName)
    }
}

let amol3 = new PersonB("amol2","rao3")
let chinmay3 = new PersonB("chinmay3","deshpande3")

console.log(amol3)
console.log(chinmay3)

amol3.display()
chinmay2.display()