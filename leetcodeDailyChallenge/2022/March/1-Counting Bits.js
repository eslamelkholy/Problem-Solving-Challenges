/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(num) {
    let result = [0];
    for(let i = 1; i <= num; i++){
        result.push(i % 2 && result[i - 1] + 1 || result[ i / 2 ^ 0 ]);
    };
    return result;
};