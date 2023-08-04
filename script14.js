// actual difference between arrow function  and function expression 
// window
// let x = 10
// console.log(window.x)
// var firstName = "ninad";
// var lastName = "dani";
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         // this ----> info
//         console.log(this.firstName + this.lastName)
//         let display2 = function(){
//             // this ----> window 
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }
// info.display()

// program 2

// var firstName = "ninad";
// var lastName = "dani";
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         // this ----> info
//         console.log(this.firstName + this.lastName)
//         let display2 = ()=>{
//             // this ----> info
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }
// info.display()

// program 3

var firstName = "ninad";
var lastName = "dani";

// info --- window
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    display:()=>{
        // this ====> window
        console.log(this.firstName + this.lastName)
        // this  ====> window
        let display2 = ()=>{
            console.log(this.firstName + this.lastName)
        }
        display2()
    }
}
info.display()
