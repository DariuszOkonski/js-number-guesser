class NumberGuesser {
  constructor() {
    this.minNumber = 5;
    this.maxNumber = 10;
    this.attemps = 3;
    this.secretNumber = 6;
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