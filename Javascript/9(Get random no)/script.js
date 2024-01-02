/*
//Returns a pseudorandom number between 0 and 1.
//let x = Math.random()

//to generate number from 1 to 6
//let x = Math.random() * 6 // this will give use a decimal number 

let x = Math.floor(Math.random() * 6) + 1 //we added +1 because number start from 0 so to have 5 number we added the +1
console.log(x)
*/

//practical

document.getElementById("myButton").onclick = function(){
    let x = Math.floor(Math.random() * 6) + 1
    let y = Math.floor(Math.random() * 6) + 1
    let z = Math.floor(Math.random() * 6) + 1

    document.getElementById("xLabel").innerHTML = x
    document.getElementById("yLabel").innerHTML = y
    document.getElementById("zLabel").innerHTML = z
}