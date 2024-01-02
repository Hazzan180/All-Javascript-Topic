//variable scope = where a variable is accessible

//let = variable are limited to block scope {}
//var = variable are limited to a function(){}

//global variable is declared outside any function
//if global, var will CHANGE brower's window properties

/*
//let
for(let i = 1; i <= 3; i +=1){
    console.log(i)
}

//we will get an error because anything decleared 
//with let is only acessible with the block scope
//console.log(i)
*/

//var
function doSomthing(){
    for(let i = 1; i <= 3; i +=1){
        console.log(i)
    }    
}

//console.log(i)
