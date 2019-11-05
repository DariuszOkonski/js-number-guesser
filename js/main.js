import NumberGuesser from './numberguesser.js';
import domElements from './domelements.js';

const numberGuesser = new NumberGuesser();

clearAll();

domElements.form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearAll();

  if (!validation())
    return;

  if (!numberGuesser.gameOver) {
    const guessNumber = parseInt(domElements.formInput.value);

    if (numberGuesser.attemps === 0) {
      displayMessage('red', 'You do not have more attemps')
      numberGuesser.gameOver = true;
      displayButtonFuncionality('Play again');
      return;
    }

    if (numberGuesser.checkSecretNumber(guessNumber)) {
      displayMessage('green', `You won, correct number is ${numberGuesser.secretNumber}`)
      numberGuesser.gameOver = true;
      displayButtonFuncionality('Play again');
    } else {
      displayMessage('blue', `Number ${guessNumber} is not secret number`)
    }
    upgradeNumberOfAttemps();
  } else {
    console.log('finish!!!!');
    location.reload();
  }


});

domElements.formInput.addEventListener('change', () => {
  clearMessage();
})

// additional functions ===================================================

function validation() {
  if (domElements.formInput.value === '') {
    displayMessage('red', 'Input can not be empty');
    return false;
  }

  if (domElements.formInput.value < numberGuesser.minNumber) {
    displayMessage('red', `Number can not be lower than ${numberGuesser.minNumber} `);
    return false;
  }

  if (domElements.formInput.value > numberGuesser.maxNumber) {
    displayMessage('red', `Number can not be higher than ${numberGuesser.maxNumber}`);
    return false;
  }
  return true;
}

function clearAll() {
  clearMessage();
  domElements.minNumber.textContent = numberGuesser.minNumber;
  domElements.maxNumber.textContent = numberGuesser.maxNumber;
  upgradeNumberOfAttemps();
}

function clearMessage() {
  domElements.message.style.visibility = 'hidden';
}

function displayButtonFuncionality(message) {
  domElements.buttonSubmit.value = message;
}

function upgradeNumberOfAttemps() {
  domElements.attemps.textContent = numberGuesser.attemps;
}

function displayMessage(color, message) {
  domElements.message.style.visibility = 'visible';
  domElements.message.style.borderColor = color;
  domElements.message.style.color = color;
  domElements.message.textContent = message;
}