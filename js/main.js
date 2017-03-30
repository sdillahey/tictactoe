// $(function(){
console.log('Tic Tac Toe script loaded');

// Variables
var nextMove, currentPlayer, state, winner, gameOverMsg;

var $displayEl = $('#display');
var $playSpace = $('table');

var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//Event Listeners

$playSpace.on('click', 'td', runTurn);

$('#reset').on('click', resetFunc);

// Functions


function runTurn(evt) {
  var id = this.id;
  if (state[id]) return;
  state[id] = currentPlayer === 'x' ? 1 : -1;
  // turn *= -1;
  winner = getWinner();
  if (winner) {
    gameOverMsg = 'Congrats player ' + (winner === 1 ? 'X' : 'O') + '!';
  } else if (!state.includes(0)) {
    gameOverMsg = "Rats, another cat's game";
  }
  nextMove.shift();
  currentPlayer = nextMove[0];

  render();
}

function resetFunc() {
  nextMove = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o'];
  currentPlayer = nextMove[0];
  state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  winner = 0;
  gameOverMsg = '';
  render();
}

function render() {
  // set cell with id's content to whatever the element is in the state array at the same index
  state.forEach(function(val,i) {
    var $sq = $(`#${i}`);
    if(val) {
      $sq.html(val === 1 ? 'X' : 'O');
    } else {
      $sq.html('');
    }
  });
  if (gameOverMsg) {
    $displayEl.html(gameOverMsg);
  } else {
    $displayEl.html('Player ' + currentPlayer + ': You\'re up!');
  }
}

//Win Logic
function sumThree(combo){
  return state[combo[0]] + state[combo[1]] + state[combo[2]];
}

// iterates the winning combos through the state array and sumss them, returns 1 or -1 for winner
function getWinner(){
  for (var i=0; i<winningCombos.length; i++) {
    var sum = sumThree(winningCombos[i]);
    if (sum === 3 || sum === -3) {
      return (sum / 3);
    }
  }
}



// Initialize
resetFunc();


// });
