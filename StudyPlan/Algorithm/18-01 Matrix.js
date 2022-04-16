/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  let queue = [];
  let directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j, 0]);
      } else {
        matrix[i][j] = Infinity;
      }
    }
  }

  while (queue.length) {
    let pos = queue.shift();
    // write value if we find it's lower than current (like those infinities)
    if (matrix[pos[0]][pos[1]] > pos[2]) {
      matrix[pos[0]][pos[1]] = pos[2];
    }

    for (const direction of directions) {
      let next = [pos[0] + direction[0], pos[1] + direction[1], pos[2] + 1];
      // valid next coordinates?
      if (
        next[0] > -1 &&
        next[0] < matrix.length &&
        next[1] > -1 &&
        next[1] < matrix[0].length
      ) {
        // not yet marked?
        if (matrix[next[0]][next[1]] === Infinity) {
          // add to q, but with increased index, which we stored at pos[2]
          queue.push(next);
        }
      }
    }
  }
  return matrix;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);

// General approach is: Loop over the full matrix to find all zeroes first.
// Add those to a queue and start a classic BFS, writing down a number +1
// of the position we find in the Q. That way, all the neigbors of the zeroes will become 1's
// all their neighbors 2's etc.
// As we're looking for the initial set of zeroes, mark the others, mark as infinity
// because we don't want to get confused with future 1s we want to write down.
