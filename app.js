// Game Values

let min = 1,
    max = 10,
    winningNum = 2,
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

// listen for guess
guessBtn.addEventListener('click', function(e){
    
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter number between ${min} and ${max}`, 'red');
    }


    if(guess === winningNum){
        // Disable the input
        guessInput.disabled = true;

        // Change the border color
        guessInput.style.borderColor = 'green';

        // set WIN message
        setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

    } else {
        
        guessesLeft -= 1;

        if(guessesLeft === 0){

            // Disable the input
            guessInput.disabled = true;
        
            // Change the border color
            guessInput.style.borderColor = 'red';
    
            // set WIN message
            setMessage(`Game Over, you lost! Correct number was ${winningNum}`, 'red');

        }else {


            // Change the border color
            guessInput.style.borderColor = 'red';
            
            // 
            guessInput.value = '';
            
            // set WIN message
            setMessage(`${guess} is not correct, ${guessesLeft} Guesses Left!`, 'red');


        }


    }

    e.preventDefault();
});

// set message 
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
