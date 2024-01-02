let value = 0;
let lable = document.getElementById("myLabel")

document.getElementById("increment").onclick = function(){
    value += 1
    lable.innerHTML = value
}

document.getElementById("deincrement").onclick = function(){
    value -= 1
    lable.innerHTML = value
}

document.getElementById("reset").onclick = function(){
    value = 0
    lable.innerHTML = value
}
