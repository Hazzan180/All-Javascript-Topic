// function =  Define code once, and use it many times 
//             to perform some code, call the function name 

//function as access to global variable
//a global variable is any variable define outside a function
//variable define with let is not valiable outside the function it was declareded

startProgram()

function startProgram(){
    let userName = 'Hazzan'
    let age = 21

    happyBirthday(userName, age)//this is called argument
}

function happyBirthday(userName, age){
    console.log("Happy birthday to you")
    console.log("Happy birthday to you")
    console.log("Happy birthday dear", userName)
    console.log("Happy birthday to you")
    console.log("You are", age, "years old")
}

