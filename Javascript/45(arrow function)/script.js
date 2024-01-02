//arrow function = componet alternative to a traditional function expression
// => 

/*
const greeting = function(usernamr){
    console.log(`Hello ${usernamr}`)
}

greeting("hazzan")

*/


/*
//using arrow function
const greeting = UserName => console.log(`Hellow ${UserName}`)
greeting("hazzan")
*/

/*
const percent = function(x, y){
    return x / y * 100
} 

console.log(`${percent(37, 50)}%`)
*/

//using arrow function
const percent = (x, y) => x / y * 100

console.log(`${percent(37, 50)}%`)

//another exanple
//we are using both function expression and arrow function 
let grades = [100, 80, 20, 60, 90, 70]

grades = grades.sort((x, y) => y - x)

grades.forEach(element => console.log(element))

