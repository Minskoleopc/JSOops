// program 1
// class Calculator {
//     // polymorphism 
//     // same class  , same methodName , different signature --- overloading

//     addition(a,b){
//         console.log(a+b)
//     }

//     addition(a,b,c){
//         console.log(a+b+c)
//     }

//     addition(a,b,c,d){
//         console.log(a+b+c+d)
//     }
// }

// let a = new Calculator()

// a.addition(3,4)

// program 2


// class Calculator {
//     additon(x,y,z,a){
//         if(x != undefined && y != undefined && z != undefined && a != undefined){
//             console.log(x+z+y+a)
//         }
//         else if(x != undefined && y != undefined && z != undefined){
//             console.log(x+y+z)
//         }
//         else if(x != undefined && y != undefined){
//             console.log(x+y)
//         }

//     }

// }

// let  cal  = new Calculator()
// cal.additon(12,44)
// cal.additon(12,44,23)
// cal.additon(12,44,23,33)


class Student {

// different class , same method , same signature
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }
    display(){
        console.log(this.firstName + this.lastName)
    }


}

class Teacher extends Student {
    salary = 1000
    display(){
        console.log("welcome "+this.firstName + this.lastName)
    }
}

let a = new Teacher("amol","rao")
console.log(a.firstName)
console.log(a.lastName)
console.log(a.salary)
a.display()




