//nested function = function inside other functions.
//                  outer function have access to inner function
//                  inner function are "hidden" from outside function
//                  used in closure (future vidoe topic)


let userName = "Hazzan"
let userInbox = 0


/*
//with this u have access to displayUserName(), displayInbox()
//without login
function login(){
    displayUserName()
    displayInbox()
}


function displayUserName(){
    console.log(`welcome ${userName}`)
}

function displayInbox(){
    console.log(`You have ${userInbox} new message`)
}
*/

//but with nested function
//if u try to access it without login u will get an error

login()

function login(){
    displayUserName()
    displayInbox()

    function displayUserName(){
        console.log(`welcome ${userName}`)
    }
    
    function displayInbox(){
        console.log(`You have ${userInbox} new message`)
    }
}
