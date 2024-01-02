//nested loop =  a loop of another loop 

/*
for(let i = 1; i <= 3; i +=1){
    for(let j = 1; j <= 3; j +=1){
        console.log(j)
    }
}
*/

let symbol = window.prompt("Enter a symbol to use")
let rows = window.prompt("Enter No of rows")
let colums = window.prompt("Enter No of colums")


for(let i = 1; i <= rows; i +=1){
    for(let j = 1; j <= colums; j +=1){
        document.getElementById("myRectangle").innerHTML += symbol
    }
    document.getElementById("myRectangle").innerHTML += "<br>"
}