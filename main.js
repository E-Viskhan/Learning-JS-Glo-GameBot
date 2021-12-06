'use strict';

function gameBot() {

  let hiddenNumber = Math.ceil(Math.random() * 99);
  console.log('Загаданное число:', hiddenNumber);

  let userAnswer;

  function gameBotInner() {
    userAnswer = prompt('Введи число от 1 до 100');

    if (userAnswer === null) {
      alert('Игра окончена');
      return;
    } else if (isNumber(userAnswer)) {
      userAnswer = parseInt(userAnswer);
    } else {
      alert('Введи число!');
      gameBotInner();
      return;
    }

    function isNumber(number) {
      return !isNaN(parseInt(number)) && isFinite(number);
    }

    if (userAnswer < hiddenNumber) {
      alert('Загаданное число больше!');
      gameBotInner();
      return;
    } else if (userAnswer > hiddenNumber) {
      alert('Загаднное число меньше!');
      gameBotInner();
      return;
    } else {
      alert('Вы угадали число!');
      return;
    }
  }
  return gameBotInner;
}

const game = gameBot();
game();