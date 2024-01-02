//how to loop though an array 


let prices = [11, 22, 33, 44, 55, 66, 77, 88, 99]
 
//for loop
/*
for(let i = 0; i < prices.length; i+=1){
    console.log(prices[i])
}
*/

/*
//to loop though it backword
for(let i =  prices.length - 1; i >= 0; i-=1){
    console.log(prices[i])
}
*/

//for of statment
for(let price of prices){
    console.log(price)
}
