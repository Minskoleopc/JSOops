// program 1
// function as a parameter to another function

let add = function (x, y) {
    return x + y
}

function addition(fn, x, y) {
    // let fn = function(x,y){
    //     return x + y
    // }
    //let = 10
    //let y = 4
    let q1 = fn(x, y)
    return q1
}

let q2 = addition(add, 10, 4)
console.log(q2)

// program 2

function Cal(){
    let a = 10
    let b = 5
    return function(){
       console.log(a+b)
    }
}
let q3 = Cal()

// let q3 =  function(){
//     console.log(a+b)
//  }
q3()









