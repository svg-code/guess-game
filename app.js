let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random() * (max - min + 1) + min),
    guessesLeft = 3;

    console.log(winningNum);

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

guessBtn.addEventListener('click', function(e) {
  let guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else if (guess === winningNum){
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
    guessBtn.style.color = 'white';
  } else {
    guessesLeft -= 1;
    if(guessesLeft === 0){
      guessInput.disabled = true;
      guessInput.style.borderColor = 'red';
      setMessage(`Oops!, Game over, ${winningNum} is the correct number`, 'red');
      guessBtn.value = 'Play again';
      guessBtn.className += 'play-again';
    } else {
      guessInput.value = '';
      setMessage(`${guess} is not correct, try again. (${guessesLeft} guesses left)`, 'white');
    }
  }
})


function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  message.style.fontSize = '22px';
}