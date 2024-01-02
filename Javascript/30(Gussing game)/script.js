const answer = Math.floor(Math.random() * 10) + 1
let guesses = 0

console.log(answer)

document.getElementById("submitBtn").onclick = function(){
   let guess =  document.getElementById("guessField").value 
    guesses +=1
    
    if(guess == answer){
        window.alert(`You gussed right. You guessed ${guesses} times`)
    }else if(guess < answer){
        window.alert(`Number too small`)
    }else{
        window.alert(`Number too big`)
    }
}