const min = 0;
const max = 10;
const minAttempts = 3;
const maxAggempts = 6;

class NumberGuesser {
  constructor() {
    this.minNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    this.maxNumber = (Math.floor(Math.random() * (max - min + 1)) + min) + this.minNumber;
    this.attemps = Math.floor(Math.random() * (maxAggempts - minAttempts + 1)) + minAttempts;
    this.secretNumber = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1)) + this.minNumber;
    this.gameOver = false;
  }

  checkSecretNumber(guessNumber) {
    this.attemps--;
    if (guessNumber === this.secretNumber)
      return true;
    else
      return false;
  }
}

export default NumberGuesser