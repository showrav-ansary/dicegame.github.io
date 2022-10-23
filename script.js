'use strict';

const dice = document.querySelector('.dice');
const buttonNewGame = document.querySelector('.btn--new');
const buttonRollDice = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');


let currentScore = 0;

let player = 0;

let winFlag = false;

const setScore = (player, score) => {
    document.getElementById(`current--${player}`).textContent = score;
}


const setGlobalScore = (player, score) => {
    document.getElementById(`score--${player}`).textContent = score;
}

const getGlobalScore = function () {
    return Number(document.getElementById(`score--${player}`).textContent);
}

const highLightPlayer = function () {
    for (var i = 0; i < 2; i++) document.querySelector(`.player--${i}`).classList.toggle('player--active');
}


const resetGame = function (full) {
    dice.classList.add('hidden');
    if (full) {
        document.querySelector(`.player--0`).classList.remove('player--winner');
        document.querySelector(`.player--1`).classList.remove('player--winner');
        document.querySelector(`.player--0`).classList.add('player--active');
        document.querySelector(`.player--1`).classList.remove('player--active');
        currentScore = 0;
        player = 0;
        winFlag = false;
        setGlobalScore(0, 0);
        setGlobalScore(1, 0);

    }
    setScore(0, 0);
    setScore(1, 0);
}


const changePlayer = () => player === 0 ? player = 1 : player = 0;

const displayWinMessage = () => {
    document.querySelector(`.player--${player}`).classList.remove('player--active');
    document.querySelector(`.player--${player}`).classList.add('player--winner');
}

const rollDice = () => {
    if (!winFlag) {
        const diceNumber = Math.trunc(Math.random() * 6) + 1;
        dice.src = `dice-${diceNumber}.png`;
        dice.classList.remove('hidden');
        if (diceNumber === 1) {
            currentScore = 0;
            setScore(player, currentScore);
            changePlayer();
            highLightPlayer();
        } else {
            currentScore += diceNumber;
            setScore(player, currentScore);
        }
    }
}


const updateScore = () => {
    if (!winFlag) {
        setGlobalScore(player, (currentScore + getGlobalScore(changePlayer)));
        if (getGlobalScore() >= 100) {
            displayWinMessage();
            winFlag = true;
        };
        currentScore = 0;
        resetGame(false);
        changePlayer();
        highLightPlayer();
    }

}

resetGame(true);

buttonRollDice.addEventListener('click', rollDice);
buttonHold.addEventListener('click', updateScore);
buttonNewGame.addEventListener('click', function () {
    resetGame(true);
});

