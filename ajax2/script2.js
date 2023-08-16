// sync 
function additionA(){
    console.log("A")
}

function additionB(){
    console.log("B")
}
additionB()
additionA()

// async

function additionC(){
    setTimeout(function(){
        console.log("c is executed")
    },3000)
}

function additionD(){
    console.log("D")
}

additionC()
additionD()

function getInfo(){
    setTimeout(function(){
        console.log("user created")
    },3000)

    setTimeout(function(){
        console.log("get id")
    },2000)

    setTimeout(function(){
        console.log("get info")
    },1000)
}
//getInfo()

// call back hell

function getInfo(){
    setTimeout(function(){
        console.log("user created")
        setTimeout(function(){
            console.log("get id")
            setTimeout(function(){
                console.log("get info")
            },1000)
        },2000)
    },3000)
}
getInfo()


// promises

// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 30
//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// then()

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// then() catch()
// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// try catch finally
// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("bye")
// })
// pro
// .then(function(str){
//     console.log(str)
//     return "hi"
// })
// .then(function(str2){
//     console.log(str2)
// })
// .catch(function(str3){
//     console.log(str3)
// })
// .finally(function(){
//     console.log("finally")
// })



// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//         setTimeout(function(){
//             console.log("get id")
//             setTimeout(function(){
//                 console.log("get info")
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo()

function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
}


function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getID")
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getInfo")
        },1000)
    })
}

// createUser()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log("hello")
// })
// .finally(function(){
//     console.log("i will always execture")
// })

async function GetInfo(){
   let a =  await createUser()
   console.log(a)
   let b = await getId()
   console.log(b)
   let c = await getInfo()
   console.log(c)
}
GetInfo()
    

























