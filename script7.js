// class Student {

//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123

//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123
//     salary = 10000

//     display(){
//         console.log(this.firstName + this.lastName)
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }

// }


// let amol = new Teacher()
// amol.displaySalary()
// amol.display()
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.salary)


// let amol = new Student()
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.adharNo)
// amol.display()

// inheritance 
// program 2
// class StudentB {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123
//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class TeacherB extends StudentB{
//     salary = 10000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }
// let amol =  new TeacherB()
// console.log(amol.salary)
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.adharNo)
// amol.displaySalary()
// amol.display()

// // program 3

// class StudentC {
//     constructor(firstName , lastName , adharNo){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.adharNo = adharNo
//     }
//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class TeacherC extends StudentC {
//     salary = 1000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let amolc = new TeacherC("amolc","rao",123)
// console.log(amolc.firstName)
// console.log(amolc.lastName)
// console.log(amolc.salary)
// console.log(amolc.adharNo)
// amolc.display()
// amolc.displaySalary()

// program 4

class StudentD {

    constructor(fn,ln,adharNo){
        this.firstName = fn
        this.lastName = ln 
        this.adharNo  = adharNo
    }

    display(){
        console.log(this.firstName + this.lastName)
    }

}

class TeacherD extends StudentD {
    
    constructor(fn,ln,adharNo,salary){
        super(fn,ln,adharNo)
        this.salary = salary
    }

    displaySalary(){
        console.log(this.salary)
    }

}

let amolE = new TeacherD("amolE","raoE",13,44)
console.log(amolE.salary)
console.log(amolE.firstName)
console.log(amolE.lastName)
console.log(amolE.adharNo)
amolE.display()
amolE.displaySalary()



