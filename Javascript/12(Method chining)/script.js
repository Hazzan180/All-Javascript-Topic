//method chaining = calling one method after another 
//                   in one continuou line of code

let username = "hazzan"

/*
//without method chainin
let letter = username.charAt(0)
letter = letter.toUpperCase()

console.log(letter)
*/

//with method chaining  it allow us call multipule method in one line of code 
let letter = username.charAt(0).toUpperCase().trim()

console.log(letter)