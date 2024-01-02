//array.reduce() = reduces an array to a single value


let prices = [20, 40, 60, 80]
let total = prices.reduce(checkOut)
console.log(total)

function checkOut(total, element){
    return total + element
}