
// function calling function

// function declaration 


function add(x, y) {
    return x + y
}
let q1 = add(12, 4)
console.log(q1)

// function expression 

let add2 = function (x, y) {
    return x + y
}

let q2 = add2(12, 3)
console.log(q2)


// arrow function

let add3 = (x, y) => {
    return x + y
}
let q3 = add3(13, 4)
console.log(q3)


let x = 10
console.log(x)

let sub = function (x, y) {
    return x - y
}
//console.log(sub)

function subtraction(fn, x, y) {

    // let fn = function (x, y) {
    //     return x - y
    // }

    // let x = 8
    // let y = 4

    let q5 = fn(x, y) // 4
    return q5
}
let q6 = subtraction(sub,8,4)
console.log(q6)

// closures 

function subC(){
    let x = 100
    let y = 50
    return function(){
        return x - y
    } 
}

let q7 = subC()
console.log(q7)


