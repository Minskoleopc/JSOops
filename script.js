// object literal 

let amol =  {
    firstName:"amol",
    lastName:"rao",
    age:32,
    rollNo:34,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let chinmay =  {
    firstName:"chinmay",
    lastName:"deshpande",
    age:32,
    rollNo:35,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

console.log(amol)
console.log(chinmay)


amol.display()
chinmay.display()

// program 2

// function Person(fn,ln,ag,rn){
//     this.firstName = fn
//     this.lastName = ln
//     this.age = ag
//     this.rollNo = rn
//     this.display = function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol2 = new Person("amol2","rao2",23,44)
// let amol3 = new Person("amol3","rao3",25,47)

// console.log(amol2)
// console.log(amol3)

// amol2.display()
// amol3.display()


// Program3
function Person(fn,ln,ag,rn){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn
}

let amol2 = new Person("amol2","rao2",23,44)
let amol3 = new Person("amol3","rao3",25,47)



// Every object has one __proto__ === Parent.prototype

console.log(amol2.__proto__ === Person.prototype)
console.log(amol3.__proto__ === Person.prototype)

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

console.log(amol3.hasOwnProperty('firstName'))
console.log(amol3.hasOwnProperty('country'))







