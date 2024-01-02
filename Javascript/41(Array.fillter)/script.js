//array.filter = creates a new array with all elements
//               taht pass test provided by a function

let ages = [11, 13, 22, 16, 90, 33]
let adults = ages.filter(checkAge)

adults.forEach(print)

function checkAge(element){
    return element >= 18
}

function print(element){
    return console.log(element)
}