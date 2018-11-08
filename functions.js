const checkWin = (board) => {
  console.log(board);
  if (checkHorizontal(board)) return true;
  if (checkVertical(board)) return true;
  if (checkUpDiag(board)) return true;
  if (checkDownDiag(board)) return true;
  return false;
};

function checkHorizontal(board) {
  let result = [];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      result.push(board[row][col]);
    }
    console.log(result);
    if (result.every((element, i, arr) => element === arr[0])) return true;
    result = [];
  }
}

function checkVertical(board) {
  let result = [];
  for (let col = 0; col < board.length; col++) {
    for (let row = 0; row < board.length; row++) {
      result.push(board[row][col]);
    }
    console.log(result);
    if (result.every((element, i, arr) => element === arr[0])) return true;
    result = [];
  }
}

function checkDownDiag(board) {
  let result = [];
  for (let i = 0; i < board.length; i++) {
    result.push(board[i][i]);
  }
  console.log(result);
  if (result.every((element, i, arr) => element === arr[0])) return true;
  result = [];
}

function checkUpDiag(board) {
  let result = [];
  for (let i = 0; i < board.length; i++) {
    result.push(board[board.length - 1 - i][i]);
  }
  console.log(result);
  if (result.every((element, i, arr) => element === arr[0])) return true;
  result = [];
}
