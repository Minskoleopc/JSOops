
// program 1
function additionA() {
    console.log("additionA")
}
function additionB() {
    console.log("additionB")
}
additionB()
additionA()

//program 2

function additionC() {
    setTimeout(function () {
        console.log("addition C")
    }, 3000)
}

function additionD() {
    console.log("addition D")
}

//additionC()
//additionD()


// program 3 
function getInfo() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)

    setTimeout(function () {
        console.log("get id")
    }, 2000)

    setTimeout(function () {
        console.log("get info by id")
    }, 1000)

}
//getInfo()

// program -- async code ---- sync 
// call back hell
function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("get id")
            setTimeout(function () {
                console.log("get info by id")
            }, 1000)
        }, 2000)
    }, 3000)
}
//getInfo()
// async --- sync --- promises 
//  ------> pending , resolve , and reject 

// program 4
let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 1
    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

pro.then(function(r){
    console.log(r)
}, function(r){
    console.log(r)
})

// program 5


let pro2 = new Promise(function(resolve,reject){

    let firstName = "chimay"

    if(firstName.length >=7){
        resolve([11,222,333,4444])
    }
    else {
        reject([-11,-22,-33,-44,-55])
    }

})

// pro2.then(function(p){
//     console.log(p)
//     console.log(p[2])
// },function(n){
//     console.log(n)
//     console.log(n[4])
// })

// with catch block
// pro2
// .then(function(p){
//     console.log(p[2])
// })
// .catch(function(n){
//     console.log(n[2])
// })

// with finally

pro2
.then(function(p){
    console.log(p[2])
})
.catch(function(n){
    console.log(n[2])
})
.finally(function(){
    console.log("i will be running always")
})


























