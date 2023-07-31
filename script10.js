// package one;

// public class day3 {

// 	public static void main(String[] args) {
// 		// TODO Auto-generated method stub
// 		Addition(12,4);
// 		Addition(12,4,3);
// 		Addition(12,4,3,4);
		
// 	}
	
// 	public static void Addition(int x, int y) {
// 		System.out.println(x+y);
// 	}
// 	public static void Addition(int x, int y , int z) {
// 		System.out.println(x+y+z);
// 	}
	
// 	public static void Addition(int x, int y , int z , int a) {
// 		System.out.println(x+y+z+a);
// 	}
		
// 	// overloading
	
// 	// same class same method but different signature

// }

// program  1
// same class , same method different signature
class Calculator {
    addition(x,y){
        console.log(x+y)
    }

    addition(x,y,z){
        console.log(x+y+z)
    }

    addition(x,y,z,a){
        console.log(x+y+z+a)
    }
}

let a = new Calculator()
a.addition(12,3)
a.addition(12,3,4)
a.addition(12,3,4,5)

// program 2 
class CalculatorB {
    addition(x,y,z,a){
        if(x != undefined && y != undefined && z != undefined && a != undefined){
            console.log(x+y+z+a)
        }
        else if(x != undefined && y != undefined && z != undefined){
            console.log(x+y+z)
        }
        else if (x != undefined && y != undefined){
            console.log(x+y)
        }
        else {
            console.log("incorrect input values")
        }
    }
}

let aa = new CalculatorB()
aa.addition(22,4,5,6)
aa.addition(22,4,5)
aa.addition(22,5)
aa.addition(22)

// program 3
// overriding
//different class , same method name , same signatire


class Student {

    constructor(fn,ln){
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
        console.log("welcome "+ this.firstName + this.lastName)
    }
}

let teacherA = new Teacher("amol","rao")
console.log(teacherA.firstName)
console.log(teacherA.lastName)
console.log(teacherA.salary)
teacherA.display()


















