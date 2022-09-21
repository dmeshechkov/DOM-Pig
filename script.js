'use strict';

// Element selection
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

// Game initial conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const totalScore = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;

const switchActivePlayer = function () {
    currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            activePlayer = activePlayer === 0 ? 1 : 0;
            player0Element.classList.toggle('player--active');
            player1Element.classList.toggle('player--active');
};



// Roll the dice
btnRoll.addEventListener('click', function() {
    if (isPlaying) {
      // 1. Generate a random number
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);
        
    // 2. Display number on the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;
        
    // 3. If the number is 1, switch to the next player
    if (diceNumber !== 1) {
        currentScore += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;       
        } else {
            switchActivePlayer();         
        }  
    }
    
});

// Hold score
// 1. Add current score to active player total score
btnHold.addEventListener('click', function() {
    if (isPlaying) {
        totalScore[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];

// 2. If total score aktive player >100, aktive player win
    if (totalScore[activePlayer] >= 10) {
        isPlaying = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceElement.classList.add('hidden');
    } else {
        switchActivePlayer();
    }
}
})

// New game
btnNew.addEventListener('click', function() {
    currentScore = 0;
    totalScore[activePlayer] = 0;
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    diceElement.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    isPlaying = true;
})