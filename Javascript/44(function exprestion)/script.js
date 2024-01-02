//function exprestion = function without aa name (anonymose function)
//                      avoid olluting the global scope with names
//                      write it, then forget about it

/*
const greeting = function(){
    console.log("Hello!")
}

greeting()
*/

/*
let count  = 0

function increaseCount(){
    count += 1
    document.getElementById("myLable").innerHTML = count 
}


function decreaseCount(){
    count -= 1
    document.getElementById("myLable").innerHTML = count 
}
*/

//using function expression
//we did'nt create any function name 
let count  = 0

document.getElementById("increaseBtn").onclick = function(){
    count += 1
    document.getElementById("myLable").innerHTML = count 
}

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1
    document.getElementById("myLable").innerHTML = count 
}