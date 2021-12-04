'use strict';

function gameBot() {

  let hiddenNumber = Math.ceil(Math.random() * 99);
  console.log('Загаданное число:', hiddenNumber);

  let endFlag = null;
  let userAnswer;

  function gameBotInner() {
    userAnswer = prompt('Введи число от 1 до 100');

    if (userAnswer === endFlag) {
      alert('Игра окончена');
      return;
    } else if (isNumber(userAnswer)) {
      userAnswer = parseInt(userAnswer);
    } else {
      alert('Введи число!');
      gameBotInner();
    }

    function isNumber(number) {
      return !isNaN(parseInt(number)) && isFinite(number);
    }

    if (userAnswer < hiddenNumber) {
      alert('Загаданное число больше!');
      gameBotInner();
    } else if (userAnswer > hiddenNumber) {
      alert('Загаднное число меньше!');
      gameBotInner();
    } else {
      alert('Вы угадали число!');
      return;
    }
  }
  return gameBotInner;
}

const game = gameBot();
game();