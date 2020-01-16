import checkResult from '../checkResult.js';
import getRandomThrow from '../get-random-throw.js';

const button = document.getElementById('button');

const numberOfWins = document.getElementById('wins');
const numberOfLosses = document.getElementById('losses');
const numberOfDraws = document.getElementById ('draws');

const displayResults = document.getElementById('result');

let wins = 0;
let losses = 0;
let draws = 0;

button.addEventListener ('click', () => {

    const playerChecked = document.querySelector('input:checked');
    const playerThrow = playerChecked.value;
    const computerThrow = getRandomThrow();
    const results = checkResult(playerThrow, computerThrow); 
   
    console.log(playerThrow);
    console.log(computerThrow);
  
    if (results === 'draw') {
        draws ++;
        numberOfDraws.textContent = draws;
        displayResults.textContent = 'Draw!';
    }

    else if (results === 'win') {
        wins ++;
        numberOfWins.textContent = wins;
        displayResults.textContent = 'You Win!';
    }
    
    else if (results === 'lose') {
        losses ++;
        numberOfLosses.textContent = losses;
        displayResults.textContent = 'You Lose!';   
    }}); 
    



