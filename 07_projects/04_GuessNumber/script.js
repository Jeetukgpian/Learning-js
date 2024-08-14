//select all html elements
let randomNumber=parseInt(Math.random()*100 + 1)

const userInput=document.querySelector('#guess-number')
const submitBtn=document.querySelector('#submit')
const remaining=document.getElementById('remaining-guess')
const prevGuess=document.getElementById('prev-guess')

let prev=[]
let playGame=true
let guessCount=1

if (playGame) {
    submitBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const guess = parseInt(userInput.value);
    //   console.log(guess);
      validateGuess(guess);
    });
  }
//function to check/Validate Guessed no
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid Guess')
    }
    else if(guess<1){
        alert('Guess a number larger than 1')
    }else if(guess>100){
        alert('Guess a number smaller than 100')
    }else{
        prev.push(guess)
        if(guessCount==11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayGuess(guess){
    userInput=''
    prevGuess.innerHTML+=`${guess}`
    guessCount++
    remaining.innerHTML=`11-${guessCount}`
}

function displayMessage(message){
    
}
//function to play Game
function checkGuess(guess){
    if(guess==randomNumber){
        //You Guessed it right
    }else if(guess<randomNumber){
        //Guessed Number is too Low
    }else{
        //Guessed Number is too High
    }
}
//function to end Game
//function to restart Game/New Game