//setTimeout() = invokes a function after a number of millsecons
//               asynchronous function (doesn't pause execution)

//to pass argument
let item = "cryptocurrency"
let price = 420.69

//let run the function after a time
let timer1 = setTimeout(firstMessage, 3000, item, price)
let timer2 = setTimeout(secondMessage, 9000)
let timer3 = setTimeout(thirdMessage, 12000)


function firstMessage(item, price){
    alert(`Buy this ${item} for $${price}!`)
}

function secondMessage(){
    alert(`This is not a scam!`)
}

function thirdMessage(){
    alert(`Do IT!`)
}

//to clear out the setTimeout
document.getElementById("Clear").onclick = function(){
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
    alert(`Thanks for buying`)
}