
//single inheritance 
class Student {
    constructor(fn,ln,age){
        this.firstName = fn
        this.lastName = ln 
        this.age  = age
    }
    displaName(){
        console.log(this.firstName + this.lastName)
    }

}

class Teacher  extends Student{
    constructor(fn,ln,age,sl){
        super(fn,ln,age)
        this.salary = sl
    }

    displaySalary(){
        console.log(this.salary)
    }
}
let amol = new Teacher("amol","sharma",23,100000000000)
console.log(amol.salary)
console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.age)
amol.displaySalary()
amol.displaName()


// // program 2
// class GrandFather {
//     constructor(fn, ln) {
//         this.firstName = fn
//         this.lastName = ln
//     }
//     displayGFname() {
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Father extends GrandFather {
//     constructor(fn, ln, ffn) {
//         super(fn, ln)
//         this.fatherFName = ffn
//     }
//     displayFatherName() {
//         console.log(this.fatherFName + this.lastName)
//     }
// }

// class Son extends Father {
//     constructor(fn, ln, ffn, ssn) {
//         super(fn, ln, ffn)
//         this.sname = ssn
//     }

//     displaySname() {
//         console.log(this.sname + this.lastName)
//     }
// }


// let chinmay = new Son("manohar", "deshpande", "shirsh", "chinmay")
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.fatherFName)
// console.log(chinmay.sname)

// chinmay.displayFatherName()
// chinmay.displayGFname()
// chinmay.displaySname()



// Hierarchical inheritance

class Father {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayFName(){
        console.log(this.firstName + this.lastName)
    }
}
class Son extends Father {
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname = sn
    }

    displaySame(){
        console.log(this.sname + this.lastName)
    }

}

class Daughter extends Father {
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dname = dn
    }

    displayDame(){
        console.log(this.dname + this.lastName)
    }
}

let chinmay = new Son("shirsh","deshpande","chinmay")
let gauri = new  Daughter("shirsh","deshpande","gauri")

chinmay.displaySame()
gauri.displayDame()
chinmay.displayFName()




