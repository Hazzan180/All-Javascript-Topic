//Template literals = delimited with (`)
//                    instead of double or single quotes
//                    allows embedded variable and expression

let userName = "hazzan";
let items = 3;
let total = 75

let text = `Hellow ${userName} You have ${items} 
items in your cart You total is $${total}`

document.getElementById("myLable").innerHTML = text