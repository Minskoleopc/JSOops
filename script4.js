// program 1
// let amol4 = Object.create({})
// console.log(amol4)

// amol4.firstName = "amol"
// amol4.lastName = "rao"
// amol4.age = 32
// amol4.display = function(){
//     console.log(this.firstName + this.lastName)
// }
// console.log(amol4)
// amol4.display()

// program 2


let obj = {
    init:function(fn,ln,age){
        this.firstName = fn
        this.lastName = ln 
        this.age = age
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let amol5 = Object.create(obj)
console.log(amol5)
amol5.init("chinmay","deshpande",13)
amol5.display()
console.log(amol5)


// OOps ---- Es6 class
// program 1

// class Person {
//     firstName = "mahesh"
//     lastName = "Aher"
//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let maheshA = new Person()
// console.log(maheshA.firstName)
// console.log(maheshA.lastName)
// maheshA.display()


// let maheshB = new Person()
// console.log(maheshB.firstName)
// console.log(maheshB.lastName)
// maheshB.display()

// Program 2

// class PersonB {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }
//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let sarika = new PersonB("sarika","pansare")
// let mahesh = new PersonB("mahesh","aher")

// sarika.display()
// mahesh.display()


// program 3 
// // set method 
// class PersonC {
//     setFirstName(fn){
//         this.firstName = fn
//     }
//     setLastName(ln){
//         this.lastName = ln
//     }

//     display(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// let sarikB  = new PersonC()
// console.log(sarikB)
// sarikB.setFirstName("sarika")
// sarikB.setLastName("pansare")
// console.log(sarikB)

// Program 4

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// console.log(info.firstName)
// info.firstName = "tanmay"
// info['firstName'] = "samay"


class PersonD {
    set firstN(fn){
        this.firstName = fn
    }

    set lastN(ln){
        this.lastName = ln
    }

    get firstN(){
        return this.firstName
    } 
    get  lastN(){
        return this.lastName
    }
}
let sarikaC = new PersonD()

sarikaC.firstN = "sarikaC"
sarikaC.lastN = "pansareC"

console.log(sarikaC)

console.log(sarikaC.firstN)
console.log(sarikaC.lastN)















