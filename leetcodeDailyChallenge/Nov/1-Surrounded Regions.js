var solve = function (board) {
  if (board.length == 0) {
    return;
  }
  var solveHelper = function (board, i, j) {
    if (board[i][j] == 'O') {
      board[i][j] = '#';
    } else {
      return;
    }
    if (i - 1 > 0 && i - 1 < board.length) solveHelper(board, i - 1, j);
    if (i + 1 > 0 && i + 1 < board.length) solveHelper(board, i + 1, j);
    if (j - 1 > 0 && j - 1 < board[0].length) solveHelper(board, i, j - 1);
    if (j + 1 > 0 && j + 1 < board[0].length) solveHelper(board, i, j + 1);
    return;
  };
  for (var j = 0; j < board[0].length; j++) {
    //var current = board[0][j];
    solveHelper(board, 0, j);
    solveHelper(board, board.length - 1, j);
  }
  for (var i = 0; i < board.length; i++) {
    solveHelper(board, i, 0);
    solveHelper(board, i, board[0].length - 1);
  }
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] == 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] == '#') {
        board[i][j] = 'O';
      }
    }
  }
};
