//callback = a function passed as an argument 
//           to another function
//     Ensures that a function is not going 
//     to run before a task is completed
//     helps us develop asynchronous code
//     (when one function as to wait for another function)
//     that helps us aviod errors and potential problems
//     Exaple is waiting for a file      

/*
let total = sum(2, 3)
displayConsole(total)
displayDom(total)

function sum(x, y){
    let result = x + y
    return result
}

function displayConsole(output){
    console.log(output)
}

function displayDom(output){
    document.getElementById("myLable").innerHTML = output
}
*/

//callback
sum(2, 3, displayConsole)

function sum(x, y, callback){
    let result = x + y
    callback(result)
}

function displayConsole(output){
    console.log(output)
}

function displayDom(output){
    document.getElementById("myLable").innerHTML = output
}