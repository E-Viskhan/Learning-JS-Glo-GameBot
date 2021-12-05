'use strict';

function gameBot() {

  let endFlag = null;
  let countAttempts = 10;

  let hiddenNumber;
  let userNumber;

  const getHiddenNumber = () => {
    let randomNumber = Math.ceil(Math.random() * 99);
    console.log('Загаданное число:', randomNumber);
    return randomNumber;
  };

  const playAgain = () => {
    countAttempts = 10;
    userNumber = undefined;
    hiddenNumber = getHiddenNumber();
    gameBotInner();
  };

  const isNumber = (number) => {
    return !isNaN(parseInt(number)) && isFinite(number);
  };

  const getNumberFromPrompt = () => {
    let userAnswer = prompt('Введи число от 1 до 100');
    if (userAnswer === endFlag) {
      alert('Игра окончена');
      return;
    } else if (isNumber(userAnswer)) {
      userAnswer = parseInt(userAnswer);
    } else {
      alert('Введи число!');
      getNumberFromPrompt();
    }
    return userAnswer;
  };

  const gameBotInner = () => {

    if (countAttempts === 0) {
      let playAgainFlag = confirm('Попытки закончились, хотите сыграть еще?');
      if (playAgainFlag) {
        playAgain();
        return;
      } else {
        alert('Это была прикольная игра!\n\nВозвращайся, пожалуйста, ещё!');
        return;
      }
    }

    userNumber = getNumberFromPrompt();

    if (userNumber < hiddenNumber) {
      alert(`Загаданное число больше.\n\nОсталось попыток ${--countAttempts}`);
      gameBotInner();
      return;
    } else if (userNumber > hiddenNumber) {
      alert(`Загаданное число меньше.\n\nОсталось попыток ${--countAttempts}`);
      gameBotInner();
      return;
    } else {
      let runAgainFlag = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще ?');
      if (runAgainFlag === true) {
        playAgain();
        return;
      } else if (runAgainFlag === false) {
        alert('Это была прикольная игра!\n\nВозвращайся, пожалуйста, ещё!');
        return;
      }
    }
    return;
  };

  hiddenNumber = getHiddenNumber();
  return gameBotInner;
}

const game = gameBot();
game();