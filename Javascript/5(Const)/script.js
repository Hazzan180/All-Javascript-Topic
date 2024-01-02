// const = a variable that can't be changed 

/*
const PI = 3.14159
let radius;
let circumference

radius = window.prompt("Enter the radius of circle")
radius = Number(radius)
 
//let say someone changes the code 
//to aviode this we use const 
//ones we use const we can't reasign the variable 
//PI = 420.69


circumference = 2 * PI * radius

console.log("The cirCumference is:", circumference)
*/

//let try to accept user input
const PI = 3.14159
let circumference
let lable = document.getElementById("myLable")

document.getElementById("myButton").onclick = function(){
    let radius = document.getElementById("myInput").value
    radius = Number(radius)

    circumference = 2 * PI * radius
    lable.innerHTML = `The cirCumference is: ${circumference}`
    console.log(circumference)
}