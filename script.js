'use strict';

const playerOneScore = document.getElementById('score--0');
const playerTwoScore = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const buttonNewGame = document.querySelector('.btn--new');
const buttonRollDice = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

const scores = [0,0];

let currentScore = 0;

let player = 0;


const highLightPlayer = function(){
    const playerPlaying = document.querySelector(`player--${player}`);
    playerPlaying.classList.add('player--active');
    const deactivatedPlayer = document.querySelector(`player--${player === 0 ? 1 :  0}`);
    deactivatedPlayer.classList.remove('player--active');

}

const changePlayer = ()=> player === 0 ? player = 1 : player = 0;


const getScore = function (player) {
    return Number(document.getElementById(`current--${player}`).textContent);
}

const changeScore = (player, score) => {
    document.getElementById(`score--${player}`).textContent = score;
}

const changeTotalScore = (score)=>  document.getElementById(`current--${player}`).textContent = score;

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
    if (diceNumber === 1) {
        currentScore = 0;
        changePlayer();
        highLightPlayer();
    } else {
        currentScore = getScore(player);
        currentScore += diceNumber;
        if (player ===0) playerOneScore.textContent = currentScore;
        else playerTwoScore.textContent = currentScore;
    }
}

buttonRollDice.addEventListener('click', rollDice);
