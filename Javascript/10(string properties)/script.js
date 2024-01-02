//useful string properties & methods

let userName = "Aare Hazzan"
let phoneNumber = "123-456-7890"

//console.log(userName.length) //to get the length of a string

//console.log(userName.charAt(0)) //to get the letter in a string

//console.log(userName.indexOf("z")) //to get the index of a string

//console.log(userName.lastIndexOf("z")) //to get the last index of a string we have 2 z

//console.log(userName.toUpperCase()) //to convert to uppercase

//console.log(userName.toLowerCase()) //to convert to lowercase

//used to replace one character to another 
phoneNumber = phoneNumber.replaceAll("-", "$")
console.log(phoneNumber)