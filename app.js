// Game Values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;


game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }

});

// listen for guess
guessBtn.addEventListener('click', function(e){
    
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter number between ${min} and ${max}`, 'red');
    } else {
        if(guess === winningNum){
            gameOver(true, `${winningNum} is correct, YOU WIN!`)
        } else{
            
            guessesLeft -= 1;
            
            if(guessesLeft === 0){
                gameOver(false, `Game Over, you lost! Correct number was ${winningNum}`);
                
            } 
            else 
            {
                // Change the border color
                guessInput.style.borderColor = 'red';
                // 
                guessInput.value = '';
                // set WIN message
                setMessage(`${guess} is not correct, ${guessesLeft} Guesses Left!`, 'red');
            }
        }
    }

    
 
    e.preventDefault();
});

// get Random Number
function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}
// game over 
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    // Disable the input
    guessInput.disabled = true;
    // Change the border color
    guessInput.style.borderColor = color;
    //  message color
    message.style.color = color;
    // set message
    setMessage(msg);


    guessBtn.value = "Play Again";
    guessBtn.className += 'play-again';
}
// set message 
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
