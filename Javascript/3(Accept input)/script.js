//How to Accept user input 

/*
//The easy way with a window prompt
let username = window.prompt("What is your name")

console.log(username)
*/

//The difficult way with textbox
document.getElementById("mybutton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username)
    document.getElementById("mylable").innerHTML = "Hello " + username
}
