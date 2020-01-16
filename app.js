import checkResult from '../checkResult.js';
import getRandomThrow from '../get-random-throw.js';

const throwRock = document.getElementById('rock');
const throwPaper = document.getElementById('paper');
const throwScissors = document.getElementById('scissors');

const button = document.getElementById('button');

const numberOfWins = document.getElementById('wins');
const numberOfLosses = document.getElementById('losses');
const numberOfDraws = document.getElementById ('draws');
const results = document.getElementById('result');

let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfDraws = 0;

button.addEventListener ('click'), () => {


}
    




// You can alternatively use document.querySelector('input:checked') in your event handler to get the actively checked radio button each time the play button is clicked. (input.value)
