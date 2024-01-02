
document.getElementById("mybutton").onclick = function(){
    let subscribe = document.getElementById("myCheckbox")
    let visaBtn = document.getElementById("visaBtn")
    let masterCardBtn = document.getElementById("masterCardBtn")
    let paypalBtn = document.getElementById("paypalBtn")

    if(subscribe.checked){
        console.log("You are Subscribe")
    }else{
        console.log("You are not Subscribe")
    }

    if(visaBtn.checked){
        console.log("You Subscribe with Visa card")
    }else if(masterCardBtn.checked){
        console.log("You Subscribe with Master card")
    }else if(paypalBtn.checked){
        console.log("You Subscribe with Paypal card")
    }else{
        console.log("You must pick a payment type")
    }
}