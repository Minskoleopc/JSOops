
// lexical scope 

// function addition() {
//     let a = 10
//     let b = 5
//     console.log(a + b)
//     function additionB() {
//         let x = 8
//         let y = 4
//         console.log(a + b + x + y)

//         function additionC() {
//             console.log(a + b + x + y)
//         }
//         additionC()
//     }
//     additionB()
// }
// addition()



// program2 

function addition() {
    let a = 10
    let b = 5
    console.log(a + b)
    function additionB() {
        let x = 8
        let y = 4
        console.log(a + b + x + y)
        //console.log(j)
        function additionC() {
            let j = 1
            let k= 4
            console.log(a + b + x + y + j + k)
        }
        additionC()
    }
    additionB()
}
addition()

// closures
function greetHello(word){
    console.log("hello "+ word)
    return "hello "+ word
    console.log("bye")
}
let q1  = greetHello("chinmay")
console.log(q1)



// functions

// function declaration
function addition(x,y){
    return x + y
}
let q11 = addition(12,4)
console.log(q11)

// function expression 
let additionB = function(x,y){
   return x + y
}
let q12  = additionB(12,4)
console.log(q12)

// arrow function 
// let additionC = (x,y)=>{
//     return x + y
//  }
//  let q13 = additionC(12,4)
//  console.log(q13)

let additionC = (x,y)=>x + y
 let q13 = additionC(12,4)
 console.log(q13)

