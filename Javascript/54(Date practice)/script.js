const myLable = document.getElementById("myLable")
setInterval(update, 1000)

update()

function update(){
    let date = new Date();
    myLable.innerHTML = formatDate(date)

    function formatDate(){
        let hours = date.getHours()
        let mintues = date.getMinutes()
        let seconds = date.getSeconds()
        let amOrPm = hours >= 12 ? "PM" : "AM"

        hours = (hours % 12) || 12

        //hours = formatZero(hours)
        mintues = formatZero(mintues)
        seconds = formatZero(seconds)

        return `${hours}:${mintues}:${seconds} ${amOrPm}`
    }

    function formatZero(time){
        time = time.toString()
        return time.length < 2 ? "0" + time : time
    }
}