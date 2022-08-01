/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    const grid = new Array(m).fill(new Array(n).fill(1));
    let numOfPaths = 0;
    let memo = {};
    
    const explore = (x, y) => {
        if(grid[x] === undefined || grid[x][y] === undefined) return 0;
        
        if(x === m - 1 && y === n - 1) {
            return 1;
        }
        const position = x + ',' + y;
        
        if(memo[position] === undefined) {
            memo[position] = explore(x + 1, y) + explore(x, y + 1);
        }
        
        return memo[position]
    }
    return explore(0, 0);
};
