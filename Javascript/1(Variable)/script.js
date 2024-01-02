//A variable is a container for storing data 
//A variable behaves as if it was the value that it contains

//Two steps: 
//1. Decleration (var, let, const)
//2. Assignment (= assignment operator)
//using let is the best practice 

let name = 'hazzan' //this is a string data type
console.log(name)

let age = 21 //this is a number data type
console.log(age)

let student = true //this is a boolean data type can be true or flase
console.log(student)


//how to display our output to the screen
document.getElementById("p1").innerHTML = "Hello " + name
document.getElementById("p2").innerHTML = "You are " + age + "years old"
document.getElementById("p3").innerHTML = "Enrolled: " + student

