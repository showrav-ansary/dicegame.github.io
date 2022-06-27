'use strict';

const playerOneScore = document.getElementById('score--0');
const playerTwoScore = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const buttonNewGame = document.querySelector('.btn--new');
const buttonRollDice = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

let currentScore = 0;

let player = 0;

const getScore = function (player) {
    return Number(document.getElementById(`score--${player}`).textContent);
}

const changeScore = (player, score) => {
    document.getElementById(`score--${player}`).textContent = score;
}

const resetGame = () => {
    changeScore(0, 0);
    changeScore(1, 0);
    dice.classList.add('hidden');
}

resetGame();

const rollDice = () => {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${diceNumber}.png`;
    dice.classList.remove('hidden');
}

buttonRollDice.addEventListener('click', rollDice);
