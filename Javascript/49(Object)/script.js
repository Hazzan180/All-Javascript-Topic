//object = A gropu of properties and methods
//         properties = what an object has
//         method = what an object can do
//         use = to access properties/methods

const car = {
    model: "Mustang",
    color: "red",
    year:2023,

    drive : function(){
        console.log("You drive the car")
    },
    break : function(){
        console.log("You step on the breakes")
    }
}

console.log(car.model)
console.log(car.color)