// class Person {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let chinmay  = new Person()
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// chinmay.display()

// let amol = new Person()
// console.log(amol.firstName)
// console.log(amol.lastName)
// chinmay.display()


// program 2


class PersonB {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    display(){
        console.log(this.firstName + this.lastName)
    }
}

let q1 = new PersonB("amol1","rao1")
q1.display()
console.log(q1.firstName, q1.lastName)

let q2 = new PersonB("chinmay1","deshpanded1")
console.log(q2.firstName)
console.log(q2.lastName)
q2.display()



// program 3


class PersonC {
    setFirstNAme(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }

    display(){
        console.log(this.firstName + this.lastName)
    }
}


let amolq = new PersonC()
console.log(amolq)

amolq.setFirstNAme("a")
amolq.setLastName("b")
amolq.display()




class PersonD {

    set firstN(fn){
        this.firstName = fn
    }

    get firstN(){
        return this.firstName
    }
    set lastN(ln){
        this.lastName = ln
    }

    get lastN(){
        return this.lastName
    }

    display(){
        console.log(this.firstName +  this.lastName)
    }
}


let amolD = new PersonD()

amolD.firstN  = "amolD"
amolD.lastN = "raoD"
amolD.display()