/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const dimensionsMap = {};
    return explore(startRow, startColumn, m, n, maxMove, dimensionsMap);
};

const explore = (x, y, m, n, nOfMoves, dimensionsMap) => {
    const positionWithNumOfMoves = x + ',' + y + ',' + nOfMoves;
    if(x < 0 || x === m || y < 0 || y === n) return 1;
    if(nOfMoves === 0) return 0;
    if(dimensionsMap[positionWithNumOfMoves] !== undefined) return dimensionsMap[positionWithNumOfMoves];

    let totalMoves = 0;
    totalMoves += explore(x + 1, y, m , n, nOfMoves - 1, dimensionsMap);
    totalMoves += explore(x - 1, y, m , n, nOfMoves - 1, dimensionsMap);
    totalMoves += explore(x, y + 1, m , n, nOfMoves - 1, dimensionsMap);
    totalMoves += explore(x, y - 1, m , n, nOfMoves - 1, dimensionsMap);
    totalMoves = totalMoves % (1e9 + 7)
    dimensionsMap[positionWithNumOfMoves] = totalMoves;
    
    return totalMoves;
}
