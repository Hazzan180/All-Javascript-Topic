// error = object with a decription of somthing went wrong

//         can't open a file
//         Lose connection
//         user type incorrect input
//         type error

//finally will always execute even if there's error
//it is good for clean up

/*
try {
    console.Leg()
} catch (error) {
    console.log(error)
}
*/

try {
    let x = window.prompt("Enter a number")
    x = Number(x)

    if(isNaN(x)) throw 'That is not a number'
    if(x == '') throw 'That was empty'

    console.log(`${x} is a number`)
} catch (error) {
    console.log(error)
}
finally{
    console.log("This always executes")
}
