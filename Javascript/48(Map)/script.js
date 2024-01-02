//Map = object that hols key-value paires of any data type

let store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50],
])

let shoppingCart = 0

//get method
shoppingCart += store.get("t-shirt")
shoppingCart += store.get("underwear")

//set method
store.set("hat", 40)

//delete method
store.delete("jeans")

//to check if there is an item
console.log(store.has("jeans"))

//the size method
console.log(store.size)

console.log(shoppingCart)

store.forEach((value, key) => console.log(`${key} $${value}`))