/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const result = [];
  const queens = generatePossiblePaths(n);
  console.log(queens);

  permute(result, [], n, queens);

  return result.length;
};
/**
 *
 * @param {number[]} result
 * @param {number[]} currentList
 * @param {number} n
 * @param {string[]} queens
 */
const permute = (result, currentList, n, queens) => {
  if (currentList.length === n && !canAttack(currentList)) {
    return result.push([...currentList]);
  }

  for (const queen of queens) {
    if (currentList.includes(queen)) continue;

    currentList.push(queen);

    permute(result, currentList, n, queens);

    currentList.pop(queen);
  }
};

/**
 * @param {number} N
 */
const generatePossiblePaths = (N) => {
  const queens = new Array(N).fill(".".repeat(N));
  for (let i = 0; i < N; i++) {
    const queen = queens[i];
    let newQueenPlace = queen.substring(0, i) + "Q" + queen.substring(i + 1);

    queens[i] = newQueenPlace;
  }
  return queens;
};

/**
 * @param {number[][]} list
 */
const canAttack = (list) => {
  for (let row = 0; row < list.length; row++) {
    const rowVal = list[row];
    let queenIndex;
    for (let col = 0; col < rowVal.length; col++) {
      if (rowVal[col] === "Q") {
        queenIndex = col;
        break;
      }
    }
    // GO UP Left;
    let rowIndexUpLeft = row - 1;
    let queenIndexUpLeft = queenIndex - 1;
    while (list[rowIndexUpLeft] !== undefined && list[rowIndexUpLeft][queenIndexUpLeft] !== undefined) {
      if (list[rowIndexUpLeft][queenIndexUpLeft] === "Q") return true;
      rowIndexUpLeft--;
      queenIndexUpLeft--;
    }
    // GO Down Left
    let rowIndexDownLeft = row + 1;
    let queenIndexDownLeft = queenIndex - 1;
    while (list[rowIndexDownLeft] !== undefined && list[rowIndexDownLeft][queenIndexDownLeft] !== undefined) {
      if (list[rowIndexDownLeft][queenIndexDownLeft] === "Q") return true;
      rowIndexDownLeft++;
      queenIndexDownLeft--;
    }

    // GO UP Right
    let rowIndexUpRight = row - 1;
    let queenIndexUpRight = queenIndex + 1;
    while (list[rowIndexUpRight] !== undefined && list[rowIndexUpRight][queenIndexUpRight] !== undefined) {
      if (list[rowIndexUpRight][queenIndexUpRight] === "Q") return true;
      rowIndexUpRight--;
      queenIndexUpRight++;
    }

    // GO Down Right
    let rowIndexDownRight = row + 1;
    let queenIndexDownRight = queenIndex + 1;
    while (list[rowIndexDownRight] !== undefined && list[rowIndexDownRight][queenIndexDownRight] !== undefined) {
      if (list[rowIndexDownRight][queenIndexDownRight] === "Q") return true;
      rowIndexDownRight++;
      queenIndexDownRight++;
    }
  }
  return false;
};
