let amol = {
    firstName:"amol",
    lastName:"rao",
    age:12,
    rollNo:34,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let chinmay =  {

    firstName:"chinmay",
    lastName:"deshpande",
    age:14,
    rollNo:34,
    display:function(){
        console.log(this.firstName + this.lastName)
    }

}
amol.display()
chinmay.display()

// program 2
// function Person(fn,ln,age,rollNo){
//     this.firstName = fn
//     this.lastName = ln 
//     this.age = age
//     this.rollNo = rollNo
//     this.display = function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol2 = new Person("amol2","rao2",34,56)
// let amol3 = new Person("amol3","rao3",55,66)
// console.log(amol2)
// console.log(amol3)

// amol2.display()
// amol3.display()

// program 3

function Person(fn,ln,age,rollNo){
    this.firstName = fn
    this.lastName = ln 
    this.age = age
    this.rollNo = rollNo
}

let amol2 = new Person("amol2","rao2",34,56)
let amol3 = new Person("amol3","rao3",55,66)

// Every object has __proto__ === Person.Prototype
console.log(Person.prototype === amol2.__proto__)
console.log(Person.prototype === amol3.__proto__)

Person.prototype.display = function(){
   console.log(this.firstName + this.lastName)
}
Person.prototype.country = "India"

console.log(amol2)
console.log(amol3)

amol2.display()
amol3.display()

console.log(amol2.country)
console.log(amol3.country)

console.log(amol3 instanceof Person)
console.log(amol2 instanceof Person)

console.log(amol3.hasOwnProperty('country'))
console.log(amol3.hasOwnProperty('firstName'))

// class 

class PersonC {
    constructor(fn,ln,ag,rn){
        this.firstName = fn
        this.lastName = ln
        this.ag = ag
        this.rollNo = rn
        // this.display = function(){
        //     console.log(this.firstName+ this.lastName)
        // }
    }
    display(){
        console.log(this.firstName+ this.lastName)
    }
}
let snehal = new PersonC("snehal","bhor",34,6)
let snehal2 = new PersonC("snehal2","bhor2",34,6)
console.log(snehal)
console.log(snehal2)
snehal.display()
snehal2.display()







// sql 9:30 pm
// 9.00 am
// javascript propject










