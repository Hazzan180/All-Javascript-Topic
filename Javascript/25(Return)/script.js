//return = returns a value back to the place 
//         where you invoked a function
//         it helps return some information wen we call a function

let area;
let width;
let height

width = window.prompt("Enter width")
height = window.prompt("Enter height")

area = getArea(width, height)
console.log(area)

function getArea(width, height){
    let result = width * height
    return result //this is sending back the vaalue back
}