//rest parameters = it represents an indefinite number
//...               of parameters
//                  it (packs argument into an array) 

let a = 1
let b = 2
let c = 3
let d = 4
let e = 5

//let say we need to sum all the variable up
console.log(sum(a, b, c, d))

//this function allows us to pass multipul value to our consle.log
function sum(...numbers){
    let total = 0
    for(let number of numbers){
        total += number
    }
    return total
}


