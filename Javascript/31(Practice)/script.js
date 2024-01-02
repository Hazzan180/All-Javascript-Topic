


document.getElementById("myBtn").onclick = function(){
    let Celsius = document.getElementById("celsius")
    let Fahrenheit = document.getElementById("fahrenheit")

    let temp;

    if(Celsius.checked){
        temp = document.getElementById("myInput").value
        temp = Number(temp)
        temp = toCelsius(temp)
        document.getElementById("ans").innerHTML = temp
    }else if(Fahrenheit.checked){
        temp = document.getElementById("myInput").value
        temp = Number(temp)
        temp = toFahrenheit(temp)
        document.getElementById("ans").innerHTML = temp
    }else{
        alert("Select a unit")
    }
}

function toCelsius(temp){
    return (temp - 32) * (5/9)
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32
}