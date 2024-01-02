/*
arithmetic expression is a combination of 
operands (values, variable, etc...)
operators (+ - * / % )
that can be evaluated to a value 
*/

let student = 20;

//student = student + 1
//student = student - 1
//student = student * 1
//student = student / 1
//student = student % 1 //use to check if a number is even or odd


//OR 
//we can use it wen we are reassigning the same variable 
//student += 1;
//student -= 1;
//student *= 1;
//student /= 1;
//student %= 1;
//console.log(student)

/*
operator precedence 
1. parenthesis ()
2. exponents 
3. multiplication & division
4. addition & subtraction
*/

//Example 0
let result = 1 + 2  * (3 + 4);

//start on the right and wake ur way to ()
//we start with ()
//let result = 1 + 2  * (7);

//then  multiplication before addition
//let result = 1 + 14;


//then addition
//let result = 15;

//Example 1 
let result1 = (1 + 2)  * (3 + 4)

//first 
//let result1 = 3  * (3 + 4)

//then
//let result1 = 3  * 7

//then
//let result1 = 21
console.log(result1) 