//Type convertion = chnage the datatype of a value to another 
// (string, number, booleans)

/*
let age = window.prompt("How old are you")

//to get the data type
//it is a string at first
console.log(typeof age)

age = Number(age)
//to get the data type
//it is now a number cus we have converted it
console.log(typeof age)
age += 1

console.log(`Happy birthday you are ${age} years old`)
*/


let x;
let y;
let z;

//converting string to number
x = Number("3.14")

//converting number to string
y = String(3.14)

//converting to bolean 
//if u have "" it will give u false 
//nut if u have other value like "hazzan" if will give u true
z = Boolean("hazzan")

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);