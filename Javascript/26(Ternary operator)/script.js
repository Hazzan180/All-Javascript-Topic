//ternary operator = Shortcut for an 'if.else statement'
//                   take 3 operands

//                   1. a condition with ?
//                   2. expression if True :
//                   3. expression if Flase

//condtion ? IfTrue : IfFlase


/*
let adult = checkAge(21)
console.log(adult)

function checkAge(age){
    if(age >= 18){
        return true;
    }else{
        return false
    }
}
*/

//useing ternary operator
let adult = checkAge(10)

console.log(adult)

function checkAge(age) {
    return age >= 18 ? true : false 
}