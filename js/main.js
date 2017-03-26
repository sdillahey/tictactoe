console.log('Tic Tac Toe script loaded');

// Variables

var x = [1, 'X'];

var o = [-1, 'O'];

var nextMove = [x, o, x, o, x, o, x, o, x, o];
var currentPlayer = nextMove[0];

var displayEl = document.getElementById('display');
var playSpace = document.querySelector('table');

//Event Listeners

playSpace.addEventListener('click', runTurn);

document.getElementById('reset').addEventListener('click', resetFunc);

// Functions

function runTurn(evt) {
  if (evt.target.id === 'display' || evt.target.id === 'reset') return;
  // add symbol of nextMove[0] to the evt.target.textContent
  if (currentPlayer === x){
    evt.target.textContent = "❌";
  } else evt.target.textContent = "⭕️";
  // add the value of nextMove[0] to the square (1/-1)
  evt.target.value = currentPlayer[0];
  // check to see if a winning move has occured - sum of one of 8 paths = 3 or -3
  winFunc();
  // make that cell unselectable now
  // update who's up on the display nextmove.shift();
  nextMove.shift();
  currentPlayer = nextMove[0];
  displayEl.textContent = "Player " + currentPlayer[1] + ": You're up!";
}

function winFunc() {

}

function resetFunc () {
  nextMove = [x, o, x, o, x, o, x, o, x, o];
  displayEl.textContent = "Select a square to make the first move";
  document.querySelectorAll('td').textContent = ""; //not working
}

// Initialize
console.log(resetFunc());
