//array.forEach() = executes a provided callback function
//                  once for each array element

let student = ["spongebob", "patrick", "squideward"]

student.forEach(capitalize) // this is a callback
student.forEach(print) // this is a callback

//fuct to capitalize the first letter
function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1)
}

function print(element){
    console.log(element)
}