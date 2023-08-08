// // program 1
// function additionA(){
//     console.log("A is executed")
// }

// function additionB(){
//     console.log("B is executed")
// }

// additionB()
// additionA()

// program 2
// function  addC(){
//     setTimeout(function(){
//         console.log("C is executed")
//     },3000)
// }

// function addD(){
//     console.log("D is executed")
// }

// addC()
// addD()

// program 3 

// create user ----- user got id ------ info by id

function infoUsers(){
    setTimeout(function(){
        console.log('user created')
    },3000)

    setTimeout(function(){
        console.log('get id')
    },2000)

    setTimeout(function(){
        console.log('get info')
    },1000)
}
//infoUsers()

// program 4

// async code ------> sync

function infoUsers(){
    setTimeout(function(){
        console.log('user created')
        setTimeout(function(){
            console.log('get id')
            setTimeout(function(){
                console.log('get info')
            },1000)
        },2000)

    },3000)
}
infoUsers()


















