//Given us the ability to check more than 1 condition concurrently
// && (AND) both coditions must be true
// || (OR) either condition can be true

/*
//example of AND
let temp = 15
if (temp > 0 && temp < 30) {
    console.log("The weather is good")
} else {
    console.log("The weather is bad")
}
*/

/*
//example of OR
let temp = 15
if (temp <= 0 || temp >= 30) {
    console.log("The weather is bad")
} else {
    console.log("The weather is good")
}
*/

//we can have more than one condition
let temp = 15
let sunny =  true

if (temp > 0 && temp < 30 && sunny) {
    console.log("The weather is good")
} else {
    console.log("The weather is bad")
}