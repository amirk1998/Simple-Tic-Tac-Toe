// get all the cells
const cells = document.querySelectorAll('td');

// set the player turn, starting with X
let currentPlayer = 'X';

// keep track of the number of turns
let turnCount = 0;

// function to handle when a cell is clicked
const handleClick = (event) => {
  // get the cell that was clicked
  const cell = event.target;

  // check if the cell is already occupied
  if (cell.textContent !== '') {
    return;
  }

  // place the current player's symbol in the cell
  cell.textContent = currentPlayer;

  // check for a win
  checkWin();

  // switch the player
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }

  // increment the turn count
  turnCount++;

  // check for a draw
  if (turnCount === 9) {
    alert("It's a draw!");
    resetGame();
  }
};

// function to check for a win
const checkWin = () => {
  // check rows
  for (let i = 0; i < 9; i += 3) {
    if (cells[i].textContent === currentPlayer && cells[i + 1].textContent === currentPlayer && cells[i + 2].textContent === currentPlayer) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
    }
  }

  // check columns
  for (let i = 0; i < 3; i++) {
    if (cells[i].textContent === currentPlayer && cells[i + 3].textContent === currentPlayer && cells[i + 6].textContent === currentPlayer) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
    }
  }

  // check diagonals
  if (cells[0].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
    alert(`Player ${currentPlayer} wins!`);
    resetGame();
  }
  if (cells[2].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
    alert(`Player ${currentPlayer} wins!`);
    resetGame();
  }
};

// function to reset the game
const resetGame = () => {
  cells.forEach((cell) => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  turnCount = 0;
};

// add event listeners to all the cells
cells.forEach((cell) => {
  cell.addEventListener('click', handleClick);
});
