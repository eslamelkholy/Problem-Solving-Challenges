/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    const result = [];
    let index = 0;
    
    if(n * m !== original.length) return [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(result[i] === undefined) result[i] = [];

            result[i][j] = original[index];
            index++;
        }
    }

    return result;
};