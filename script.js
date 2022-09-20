'use strict';



// New game
document.querySelector('.btn--new').addEventListener('click', function() {
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player--active').style.backgroundColor = 'rgba(255, 255, 255, 0.4)'
})

// Roll the dice
let rollNumber = 0;
let kubNumber = 0;

document.querySelector('.btn--roll').addEventListener('click', function() {
        kubNumber = Math.trunc(Math.random() * 6) + 1;
        console.log(kubNumber);
        document.querySelector('.dice').style.display = 'block';
        if (kubNumber !== 1) {
        rollNumber += kubNumber;
        document.querySelector('#current--0').textContent = rollNumber;
        
        } else {
            document.querySelector('#current--0').textContent = '0';
            rollNumber = 0;
        }
})

// Hold score
let allScore = 0;
document.querySelector('.btn--hold').addEventListener('click', function() {
    allScore += rollNumber;
    document.querySelector('#score--0').textContent = allScore;
    document.querySelector('#current--0').textContent = 0;
    rollNumber = 0;
})
