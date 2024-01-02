//The Date object is used to work with dates and time


/*
let date = new Date() //Pacific Standard Time

date = date.toLocaleString()
document.getElementById("myLable").innerHTML = date
*/

//we can pass in argument to te date 
//2023=year,  0=month, 1=day, 2=houre, 3=mintue, 4=second, 5=millsecon 
//let date = new Date(2023, 0, 1, 2, 3, 4, 5)

//we can pass in the date we want also
//let date = new Date("January 1, 2024 00:00:00")

/*
//we can also yet property of current Date
let date = new Date()
let year = date.getFullYear()
let dayOfMonth = date.getDate()
let dayOfDay = date.getDay()
let month = date.getMonth()
let hour = date.getHours()
let mintues = date.getMinutes()
let seconds = date.getSeconds()
let ms = data.getMilliseconds()

date = date.toLocaleString()
document.getElementById("myLable").innerHTML = hour
*/

/*
//we can set also
let date = new Date()
date.setFullYear(2024) etc
*/

let date = new Date()
document.getElementById("myLable").innerHTML = formatTime(date)

function formatDate(date){
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    return `${month}/${day}/${year}`
}

function formatTime(date){
    let hours = date.getHours()
    let mintues = date.getMinutes()
    let seconds = date.getSeconds()
    let amOrPm = hours >= 12 ? "PM" : "AM"
    
    //This line of code is performing a calculation to convert a time value given in hours to a 12-hour clock format. 
    //If hours is 15, (15 % 12) is 3, so it becomes 3.
    hours = (hours % 12) || 12

    return `${hours}:${mintues}:${seconds} ${amOrPm}`
}



