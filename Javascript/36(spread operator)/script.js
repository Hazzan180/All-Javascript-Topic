//spread operator =  allows an iterable such as an 
// ...               arrays or string to be expanded
//                   in place where zero or more
//                   argument are expected
//                   it (unpacks the elements)

/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//let find the maximum value of this array
let maximum = Math.max(...numbers) //if we don't use spreed oprator we will get a null value


console.log(maximum)
*/

//another example
//in another word the spreed oprator allows us to add more 
//value to an array without replacing the initial value
let class1 = ["spongebob", "patrick", "sandy"]
let class2 = ["squidward", "mr.krabs", "plankton"]

class1.push(...class2)

console.log(class1)