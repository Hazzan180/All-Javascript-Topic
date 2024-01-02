let c;


document.getElementById("myButton").onclick = function(){
    let sideA = document.getElementById("sideA").value
    let sideB = document.getElementById("sideB").value

    sideA = Number(sideA)
    sideB = Number(sideB)

    c = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))

    document.getElementById("myLable").innerHTML = `side c: ${c}`
    
    console.log(c)
}