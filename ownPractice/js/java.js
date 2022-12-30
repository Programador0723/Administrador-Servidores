'use strict';

let dice = document.querySelector('.divDice');

let btnBackGroundId = document.getElementById('btnBackGroundId');
let spanCurrentOne = document.querySelector('.sCuOne');
let btnDice = document.querySelector('.btnDice');
let body = document.querySelector('.body');
let playerOneCard = document.querySelector('.player--0');
let playerTwoCard = document.querySelector('.player--1');
let btnHold = document.querySelector('.btnHold');
let btnNewGame = document.querySelector('.btnNewGame');
let btnRuleGameModel = document.getElementById('btnModel');
let modelWindow = document.querySelector('.model');
let btnDismiss = document.getElementById('btnDismiss');
let count = 0;
let activeplayer = 0;
let total = 0;
let score = [0, 0];

btnDismiss.addEventListener('click', function () {
  modelWindow.classList.add('hidden');
});
btnRuleGameModel.addEventListener('mouseover', function () {
  modelWindow.classList.remove('hidden');
});

const switchPlayer = function () {
  document.getElementById(`currenplayer--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  count = 0;
  document.getElementById(`currenplayer--${activeplayer}`).textContent = count;
  playerOneCard.classList.toggle('playerTwoo');
  playerTwoCard.classList.toggle('playerTwoo');
};

btnDice.addEventListener('click', function () {
  console.log('sss');
  let numberDice = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${numberDice}.png`;

  if (numberDice !== 1) {
    count += numberDice;

    document.getElementById(`currenplayer--${activeplayer}`).textContent =
      count;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  score[activeplayer] += count;

  document.getElementById(`player--${activeplayer}`).textContent =
    score[activeplayer];

  if (score[activeplayer] >= 100) {
    document.querySelector(`.player--${activeplayer}`).classList.add('win');
    playerOneCard.classList.remove('playerTwoo');
    document.getElementById(`currenplayer--${activeplayer}`).textContent = 0;
    document.querySelector(`.win--${activeplayer}`).classList.remove('hidden');
    document
      .querySelector(`.divCurren--${activeplayer}`)
      .classList.toggle('hidden');
    btnDice.classList.add('hidden');
    btnHold.classList.add('hidden');
    if (!activeplayer == 1) {
      activeplayer++;
      document.querySelector(`.player--${activeplayer}`).classList.add('lose');
      document
        .querySelector(`.lose--${activeplayer}`)
        .classList.remove('hidden');
      document
        .querySelector(`.divCurren--${activeplayer}`)
        .classList.toggle('hidden');
    } else {
      activeplayer--;
      document.querySelector(`.player--${activeplayer}`).classList.add('lose');
      document
        .querySelector(`.lose--${activeplayer}`)
        .classList.remove('hidden');
      document
        .querySelector(`.divCurren--${activeplayer}`)
        .classList.toggle('hidden');
    }
  } else {
    switchPlayer();
  }
});
btnNewGame.addEventListener('click', function () {
  document.getElementById(`currenplayer--${activeplayer}`).textContent = 0;
  document.getElementById(`player--1`).textContent = 0;
  document.getElementById(`player--0`).textContent = 0;
});
