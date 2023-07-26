//  program 1

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
info.display()


// function constructor 

function Person(fn,ln){
    this.firstName = fn
    this.lastName  = ln
    // display = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let amol = new Person("amol","rao")
Person.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "india"
amol.display()

console.log(amol.__proto__ === Person.prototype)

amol.display()
console.log(amol.country)


// Program 3

class  PersonB {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
        // display = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }
    display(){
        console.log(this.firstName + this.lastName)
    }
}

let amola = new Person("amol2","rao2")
amola.display() 

// program 4

let obj = {
    init:function(fn,ln){
        this.firstName = fn
        this.lastName = ln
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let amol2 = Object.create(obj)
console.log(amol2)
amol2.init("chinmay","deshpande")
amol2.display()






