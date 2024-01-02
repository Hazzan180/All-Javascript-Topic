//2D array = an array of arrays

let fruits =     ["apple", "orange", "banana"]
let vegetables = ["carrots", "onions", "potatos"]
let protains =   ["eggs", "chicken", "fish"]

//this is 2D array
let groceryLists = [fruits, vegetables, protains]

//to reaplce an item in 2D array
//groceryLists[0][0] = "mangoes" //we replace apple
//groceryLists[2][0] = "steak"   //we replace egg

for(let list of groceryLists){
    for(let item of list){
        console.log(item)
    }
}