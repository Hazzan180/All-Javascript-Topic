//how to sort array of numbers

let grades = [100, 50, 90, 60, 80]

grades = grades.sort(ascendingSort)

grades.forEach(print)

function descendingSort(x, y){
    return y - x
}

function ascendingSort(x, y){
    return x - y
}


function print(element){
    console.log(element)
}